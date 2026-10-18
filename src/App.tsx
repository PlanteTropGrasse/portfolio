import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import { sections } from './data/portfolio';
import { useSectionRouting } from './hooks/useSectionRouting';
import { useReveal } from './hooks/useReveal';

const sectionIds = sections.map((s) => s.id);

export default function App() {
  const { active, navigate } = useSectionRouting(sectionIds);
  useReveal();

  return (
    <>
      <Nav sections={sections} active={active} onNavigate={navigate} />
      <main>
        <Hero onNavigate={navigate} />
        <Projects />
        <About />
      </main>
    </>
  );
}
