import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import ProjectDetail from './components/ProjectDetail';
import { sections, projects } from './data/portfolio';
import type { Project } from './data/types';
import { useSectionRouting } from './hooks/useSectionRouting';
import { useReveal } from './hooks/useReveal';

const sectionIds = sections.map((s) => s.id);

export default function App() {
  const { active, navigate, activeProjectId, openProject, closeProject } =
    useSectionRouting(sectionIds);
  useReveal([activeProjectId]);

  const selectedProject = activeProjectId
    ? projects.find((p) => p.id === activeProjectId) ?? null
    : null;

  const handleSelectProject = (project: Project) => {
    openProject(project.id);
  };

  return (
    <>
      <Nav sections={sections} active={active} onNavigate={navigate} />
      <main>
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={closeProject} />
        ) : (
          <>
            <Hero onNavigate={navigate} onSelectProject={handleSelectProject} />
            <Projects onSelectProject={handleSelectProject} />
            <About />
          </>
        )}
      </main>
    </>
  );
}
