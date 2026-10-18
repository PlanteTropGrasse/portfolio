import { useCallback, useEffect, useState } from 'react';
import type { SectionId } from '../data/types';

const PAGE_PARAM = 'Page';
const PROJECT_PARAM = 'Project';

function readParam(param: string): string | null {
  return new URLSearchParams(window.location.search).get(param);
}

function readPage(ids: readonly SectionId[]): SectionId | null {
  const page = readParam(PAGE_PARAM);
  return ids.find((id) => id === page) ?? null;
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

/**
 * Handles section navigation (?Page=Projects) and project detail (?Project=bastos).
 * Defaults to the first section (Home) on initial load and scrolls to top.
 */
export function useSectionRouting(ids: readonly SectionId[]) {
  const [active, setActive] = useState<SectionId>(() => readPage(ids) ?? ids[0]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(() => readParam(PROJECT_PARAM));

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    const initialProject = readParam(PROJECT_PARAM);
    const initialPage = readPage(ids);

    if (initialProject) {
      setActiveProjectId(initialProject);
      window.scrollTo(0, 0);
    } else if (initialPage && initialPage !== ids[0]) {
      // If an explicit deep-link section was requested (other than Home), scroll to it
      requestAnimationFrame(() => {
        document.getElementById(initialPage)?.scrollIntoView({ behavior: 'instant' });
      });
    } else {
      // Always land on Home at the top of the viewport when opening the site
      window.scrollTo(0, 0);
      setActive(ids[0]);
    }

    const onPopState = () => {
      const proj = readParam(PROJECT_PARAM);
      setActiveProjectId(proj);

      if (proj) {
        window.scrollTo(0, 0);
        return;
      }

      const page = readPage(ids) ?? ids[0];
      setActive(page);
      if (page === ids[0]) {
        window.scrollTo({ top: 0, behavior: scrollBehavior() });
      } else {
        document.getElementById(page)?.scrollIntoView({ behavior: scrollBehavior() });
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [ids]);

  useEffect(() => {
    if (activeProjectId) return; // Don't track section intersection if project detail is open

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids, activeProjectId]);

  const navigate = useCallback(
    (id: SectionId) => {
      const url = new URL(window.location.href);
      url.searchParams.delete(PROJECT_PARAM);
      url.searchParams.set(PAGE_PARAM, id);
      history.pushState({ page: id }, '', url);

      setActiveProjectId(null);
      setActive(id);

      if (id === ids[0]) {
        window.scrollTo({ top: 0, behavior: scrollBehavior() });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() });
      }
    },
    [ids],
  );

  const openProject = useCallback((projectId: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(PROJECT_PARAM, projectId);
    history.pushState({ project: projectId }, '', url);

    setActiveProjectId(projectId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const closeProject = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete(PROJECT_PARAM);
    const currentPage = readPage(ids) ?? ids[0];
    url.searchParams.set(PAGE_PARAM, currentPage);
    history.pushState({ page: currentPage }, '', url);

    setActiveProjectId(null);
  }, [ids]);

  return { active, navigate, activeProjectId, openProject, closeProject };
}
