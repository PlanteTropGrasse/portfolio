// All site content lives here. Edit these objects to update the portfolio —
// components render them with .map(), so no markup changes are needed.
import type {
  Education,
  Experience,
  NavSection,
  Project,
  ProjectCategory,
  Skill,
  SocialLink,
} from './types';

export const sections: NavSection[] = [
  { id: 'Home', label: 'Home' },
  { id: 'Projects', label: 'Projects' },
  { id: 'AboutMe', label: 'About me' },
];

export const profile = {
  firstName: 'Adrian',
  lastName: 'Proust',
  title: 'Game Designer',
  currentStudio: 'ICAN',
  yearsOfExperience: 2,
  shippedTitles: 6,
  location: 'Paris / France',
  availability: 'Open to opportunities',
};

export const contact = {
  email: '3092hproust@gmail.com',
  linkedin: { label: 'Adrian Proust', url: 'https://www.linkedin.com/in/adrian-proust' },
  artstation: { label: 'adrian_proust', url: 'https://adrian_proust.artstation.com/' },
  phone: '',
};

// Icon links shown in the top navigation bar.
export const socials: SocialLink[] = [
  { label: 'LinkedIn', url: contact.linkedin.url, icon: 'linkedin' },
  { label: 'ArtStation', url: contact.artstation.url, icon: 'artstation' },
];

export const about = {
  lead: 'Franco-espagnol diplômé d’un master en game design à l’ICAN.',
  paragraphs: [
    'Ce portfolio présente un aperçu de ma réflexion créative explorée ces dernières années à travers différents projets et domaines : jeux vidéo, expériences de team-building, projets techniques C++ & C#, et créations audiovisuelles.',
    'Passionné par la conception de systèmes interactifs engageants et équilibrés, je conçois des mécaniques lisibles, dynamiques et mémorables, de la formalisation sur papier jusqu’au prototypage sur moteur.',
  ],
};

export const skills: Skill[] = [
  { name: 'Game & Systems Design', detail: 'Boucles de gameplay, équilibrage, conception de règles et mécaniques interactives' },
  { name: 'Level Design & Rythme', detail: 'Pacing, lisibilité spatiale, guidage du joueur et agencement d’épreuves' },
  { name: 'Prototypage Moteur', detail: 'Itération rapide sous Unity (C#) et Unreal Engine (Blueprints)' },
  { name: 'Programmation Gameplay', detail: 'Développement de logique de jeu en C#, C++ et intégration d’outils' },
  { name: 'Game Feel & UX', detail: 'Feedbacks visuels/sonores, ergonomie des interfaces et onboarding intuitif' },
  { name: 'Conception d’Événements', detail: 'Design d’activités de team-building, escape games et formats immersifs' },
];

export const secondarySkills: string[] = [
  'Unity / C#',
  'Unreal Engine',
  'C / C++',
  'Team-Building Design',
  'Arts & VFX',
  'Courts-métrages / Vidéo',
  'Git / Versioning',
  'Game Design Docs (GDD)',
  'Français (natif)',
  'Espagnol (bilingue)',
  'Anglais (courant)',
];

// The three project categories, in the order they appear on the home page.
export const projectCategories: { id: ProjectCategory; blurb: string }[] = [
  { id: 'Student', blurb: 'Projets majeurs de cursus et diplôme à l’ICAN' },
  { id: 'Personal', blurb: 'Prototypes, game jams et expérimentations personnelles' },
  { id: 'Professional', blurb: 'Activités de team-building et conceptions immersives' },
];

// Ordered from most recent to oldest — the home page previews the first entries of each category.
export const projects: Project[] = [
  {
    title: 'Bastos',
    duration: 'Projet Jeu Vidéo',
    role: 'Game Designer',
    tags: ['Game Design', 'Action', 'Systèmes', 'Tir'],
    category: 'Student',
    description:
      'Chaque balle compte quand elles ont toutes un effet spécial. Un jeu nerveux explorant une économie tactique de munitions aux propriétés distinctes.',
    image: '/projects/tidebound.svg',
    imageAlt: 'Bastos cover art',
  },
  {
    title: 'SYZYGY',
    duration: 'Projet Multijoueur',
    role: 'Game Designer',
    tags: ['Duel', 'Multijoueur en ligne', 'Stratégie', 'Puzzle'],
    category: 'Student',
    description:
      'Un duel mystique en ligne où deux joueurs s’affrontent pour aligner des astres et manipuler le destin à travers des mécaniques d’alignement et de contrôle.',
    image: '/projects/atlas-of-echoes.svg',
    imageAlt: 'SYZYGY cover art',
  },
  {
    title: 'Excroalibur',
    duration: 'Projet Tour par Tour',
    role: 'Lead Designer',
    tags: ['Tour par tour', 'Tactique', 'Survie', 'Coopération'],
    category: 'Student',
    description:
      'Une revisite du jeu du taureau en jeu tour par tour, dans laquelle le joueur doit protéger une épée d’une horde incessante en la passant d’un personnage à un autre.',
    image: '/projects/hollow-signal.svg',
    imageAlt: 'Excroalibur cover art',
  },
  {
    title: 'Le POWER Quiz',
    duration: 'Expérience Interactive',
    role: 'Game & Systems Designer',
    tags: ['Team-Building', 'Quiz interactif', 'Party Game'],
    category: 'Professional',
    description:
      'Le grand quiz indémodable revisité avec des pouvoirs spéciaux pour saboter ses adversaires et renverser les scores en temps réel.',
    image: '/projects/pocket-siege.svg',
    imageAlt: 'Le POWER quiz cover art',
  },
  {
    title: 'Les LEGO des Pharaons',
    duration: 'Expérience Grand Format',
    role: 'Concepteur & Animateur',
    tags: ['Team-Building', 'Événementiel', 'Immersion', 'Coopération'],
    category: 'Professional',
    description:
      'Une version à taille humaine du célèbre jeu de briques dans une thématique Égypte Antique, favorisant communication et créativité collective.',
    image: '/projects/driftline.svg',
    imageAlt: 'Les LEGO des pharaons cover art',
  },
  {
    title: 'Le Cirque de l’IA',
    duration: 'Jeu Jam & Prototype',
    role: 'Game & Concept Designer',
    tags: ['Jeu Jam', 'IA Concept', 'Narrative Design'],
    category: 'Personal',
    description:
      'Faire un jeu autour de l’intelligence artificielle et de ses travers : une expérience satirique questionnant notre rapport aux modèles automatisés.',
    image: '/projects/ember-rites.svg',
    imageAlt: 'Le cirque de l’IA cover art',
  },
  {
    title: 'GoGolem',
    duration: 'Prototype Réflexion',
    role: 'Game & Level Designer',
    tags: ['Puzzle', 'Mécaniques', 'Prototypage'],
    category: 'Personal',
    description:
      'Jeu d’énigmes centré sur le guidage et la manipulation de golems aux capacités élémentaires complémentaires.',
    image: '/projects/atlas-of-echoes.svg',
    imageAlt: 'GoGolem cover art',
  },
  {
    title: 'Simulation d’une Fourmi & 2048 en C++',
    duration: 'Projet Technique',
    role: 'Développeur / Gameplay Programmer',
    tags: ['C++', 'Algorithmes', 'Simulation', 'Programmation'],
    category: 'Personal',
    description:
      'Développements de simulations comportementales (colonie et déplacements d’agents) et recréation optimisée d’un moteur de jeu 2048 en C++.',
    image: '/projects/hollow-signal.svg',
    imageAlt: 'Simulation C++ cover art',
  },
  {
    title: 'Courts-métrages & Créations VFX',
    duration: 'Projets Audiovisuels',
    role: 'Réalisateur & Artiste VFX',
    tags: ['Audiovisuel', 'VFX', 'Animation Lego', 'GeoGebra'],
    category: 'Personal',
    description:
      'Exploration cinématographique et d’effets visuels : réalisation de courts-métrages en stop-motion Lego et animations mathématiques avec GeoGebra.',
    image: '/projects/driftline.svg',
    imageAlt: 'Courts-métrages cover art',
  },
];

// Maximum number of projects previewed per category on the home page.
export const RECENT_PROJECTS_COUNT = 3;

export const experiences: Experience[] = [
  {
    title: 'Game & Systems Designer',
    company: 'Projets Indépendants & Collectifs',
    duration: '2023 - Présent',
    project: 'Bastos, SYZYGY, Excroalibur',
    bullets: [
      'Conception de systèmes complets de règles, d’équilibrage et de progression sur des projets solo et en équipe.',
      'Prototypage rapide sous moteurs de jeu et validation par des sessions de playtests régulières.',
      'Rédaction de Game Design Documents (GDD) et communication des intentions créatives auprès des artistes et développeurs.',
    ],
  },
  {
    title: 'Concepteur d’Expériences & Team-Building',
    company: 'Événementiel & Team-Building',
    duration: '2022 - 2024',
    project: 'Le POWER Quiz, Les LEGO des Pharaons',
    bullets: [
      'Création et animation de dispositifs ludiques grandeur nature favorisant la cohésion d’équipe et l’engagement.',
      'Équilibrage des mécaniques de scoring et des pouvoirs interactifs pour garantir convivialité et rejouabilité.',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Master en Game Design',
    school: 'ICAN (Institut de Création et Animation Numériques)',
    duration: 'Diplômé',
    detail: 'Spécialisation en Game Design, conception de systèmes de jeu, prototypage interactif et gestion de production de jeux vidéo.',
  },
  {
    degree: 'Formation Générale & Scientifique',
    school: 'Enseignement Supérieur',
    duration: 'Cursus initial',
    detail: 'Bases solides en mathématiques, algorithmique, logique de programmation C++ / C# et modélisation.',
  },
];
