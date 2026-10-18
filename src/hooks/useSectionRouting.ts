import { useCallback, useEffect, useState } from 'react';
import type { SectionId } from '../data/types';

const PARAM = 'Page';

function readPage(ids: readonly SectionId[]): SectionId | null {
  const page = new URLSearchParams(window.location.search).get(PARAM);
  return ids.find((id) => id === page) ?? null;
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

/**
 * Query-param section routing (?Page=Projects):
 * deep-links on load, pushes history on navigation, follows back/forward,
 * and tracks the section in view with an IntersectionObserver.
 */
export function useSectionRouting(ids: readonly SectionId[]) {
  const [active, setActive] = useState<SectionId>(() => readPage(ids) ?? ids[0]);

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    const initial = readPage(ids);
    if (initial && initial !== ids[0]) {
      // Wait a frame so layout is settled before jumping to the deep-linked section.
      requestAnimationFrame(() => document.getElementById(initial)?.scrollIntoView({ behavior: 'instant' }));
    }

    const onPopState = () => {
      const page = readPage(ids) ?? ids[0];
      document.getElementById(page)?.scrollIntoView({ behavior: scrollBehavior() });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [ids]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      // A thin band around the middle of the viewport decides the active section.
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  const navigate = useCallback(
    (id: SectionId) => {
      if (readPage(ids) !== id) {
        const url = new URL(window.location.href);
        url.searchParams.set(PARAM, id);
        history.pushState({ page: id }, '', url);
      }
      document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() });
    },
    [ids],
  );

  return { active, navigate };
}
