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
  title: 'Junior Game Designer',
  currentStudio: 'Brightwave Studio',
  yearsOfExperience: 2,
  shippedTitles: 2,
  location: 'Lyon, France',
  availability: 'Open to freelance & full-time roles',
};

export const contact = {
  email: 'adrian.proust@example.com',
  linkedin: { label: 'Adrian Proust', url: 'https://www.linkedin.com/in/adrian-proust' },
  artstation: { label: 'adrianproust', url: 'https://www.artstation.com/adrianproust' },
  phone: '+33 6 00 00 00 00',
};

// Icon links shown in the top navigation bar.
export const socials: SocialLink[] = [
  { label: 'LinkedIn', url: contact.linkedin.url, icon: 'linkedin' },
  { label: 'ArtStation', url: contact.artstation.url, icon: 'artstation' },
];

export const about = {
  lead: 'I design games that are easy to pick up and hard to put down.',
  paragraphs: [
    "I'm Adrian, a junior game designer who loves systems you can read at a glance and master over hundreds of hours. My focus genres are co-op multiplayer, roguelites and tactical action — games where every player decision leaves a visible mark on the run.",
    'Today I split my time between the final year of my Game Design degree and freelance work at Brightwave Studio, where I prototype features, write design documentation and run playtests every sprint. I think in spreadsheets, blockouts and paper prototypes long before anything touches an engine.',
  ],
};

export const skills: Skill[] = [
  { name: 'Systems Design', detail: 'Core loops, progression, economy and balancing spreadsheets' },
  { name: 'Level Design', detail: 'Blockouts, pacing, player guidance and readability' },
  { name: 'Gameplay Prototyping', detail: 'Fast iteration in Unity (C#) and Unreal (Blueprints)' },
  { name: 'Design Documentation', detail: 'GDDs, one-pagers, feature specs and flowcharts' },
  { name: 'Playtesting & Analysis', detail: 'Test protocols, surveys and turning feedback into tasks' },
  { name: 'Game Feel & UX', detail: 'Feedback, onboarding and moment-to-moment controls' },
];

export const secondarySkills: string[] = [
  'Unity / C#',
  'Unreal Engine 5',
  'Figma',
  'Miro',
  'Jira & Notion',
  'Blender (basics)',
  'Pixel art',
  'Scrum / Agile',
  'French (native)',
  'English (C1)',
];

// The three project categories, in the order they appear on the home page.
export const projectCategories: { id: ProjectCategory; blurb: string }[] = [
  { id: 'Professional', blurb: 'Studio work and shipped titles' },
  { id: 'Student', blurb: 'Game design school productions' },
  { id: 'Personal', blurb: 'Game jams and solo prototypes' },
];

// Ordered from most recent to oldest — the home page previews the first entries of each category.
// Replace the placeholder images in public/projects/ with real screenshots (any format works).
export const projects: Project[] = [
  {
    title: 'Tidebound',
    duration: '8 months (Oct 2024 - May 2025)',
    role: 'Intern / Freelance',
    tags: ['Game Design', 'Multiplayer', 'Co-op'],
    category: 'Professional',
    description:
      'A 4-player co-op sailing roguelite released on Steam. I designed the crew-role system and balanced the upgrade economy across 40+ playtest sessions.',
    image: '/projects/tidebound.svg',
    imageAlt: 'Junior Game Designer cover art',
  },
  {
    title: 'Driftline',
    duration: '6 weeks (Feb 2025 - Mar 2025)',
    role: 'Solo Designer',
    tags: ['Prototype', 'Racing', 'Physics'],
    category: 'Personal',
    description:
      'A drift-to-charge arcade racer prototype exploring how a single input can drive both steering and a boost resource.',
    image: '/projects/driftline.svg',
    imageAlt: 'Driftline cover art',
  },
  {
    title: 'Hollow Signal',
    duration: '4 months (Jan 2024 - Apr 2024)',
    role: 'Lead Game Designer',
    tags: ['Level Design', 'Narrative', 'Horror'],
    category: 'Student',
    description:
      'A first-person radio-horror game made by a team of 7. I owned the level layout and the sound-based navigation mechanic.',
    image: '/projects/hollow-signal.svg',
    imageAlt: 'Hollow Signal cover art',
  },
  {
    title: 'Pocket Siege',
    duration: '6 months (Jun 2023 - Nov 2023)',
    role: 'Systems Designer',
    tags: ['Mobile', 'Tower Defense', 'Economy'],
    category: 'Professional',
    description:
      'A free-to-play mobile tower defense game. I tuned wave difficulty curves and designed the daily challenge mode.',
    image: '/projects/pocket-siege.svg',
    imageAlt: 'Pocket Siege cover art',
  },
  {
    title: 'Ember Rites',
    duration: '48 hours (Jan 2024)',
    role: 'Game Designer',
    tags: ['Game Jam', 'Action', 'Local Multiplayer'],
    category: 'Personal',
    description:
      'A couch-versus game made during a game jam: players share a single torch, and whoever holds it can see — but is also seen.',
    image: '/projects/ember-rites.svg',
    imageAlt: 'Ember Rites cover art',
  },
  {
    title: 'Atlas of Echoes',
    duration: '3 months (Mar 2023 - May 2023)',
    role: 'Level & Puzzle Designer',
    tags: ['Puzzle', 'Exploration', '3D'],
    category: 'Student',
    description:
      'A contemplative puzzle-exploration game where sound waves reveal hidden geometry. I designed 12 puzzle rooms and their difficulty ramp.',
    image: '/projects/atlas-of-echoes.svg',
    imageAlt: 'Atlas of Echoes cover art',
  },
];

// Maximum number of projects previewed per category on the home page.
export const RECENT_PROJECTS_COUNT = 3;

export const experiences: Experience[] = [
  {
    title: 'Freelance Game Designer',
    company: 'Brightwave Studio',
    duration: 'Jun 2025 - Present',
    project: 'Unannounced co-op title',
    bullets: [
      'Prototype new combat and traversal features in Unreal Engine 5 Blueprints.',
      'Write and maintain feature specs shared with art, code and QA.',
      'Run bi-weekly internal playtests and turn results into prioritised backlog items.',
    ],
  },
  {
    title: 'Game Design Intern',
    company: 'Brightwave Studio',
    duration: 'Oct 2024 - May 2025',
    project: 'Tidebound',
    bullets: [
      'Designed the crew-role system that became the core of the co-op experience.',
      'Balanced the upgrade economy with spreadsheets and telemetry from 40+ sessions.',
      'Shipped the game on Steam with a "Very Positive" launch reception.',
    ],
  },
  {
    title: 'Junior Systems Designer (Contract)',
    company: 'Lumen Mobile Games',
    duration: 'Jun 2023 - Nov 2023',
    project: 'Pocket Siege',
    bullets: [
      'Tuned wave difficulty curves for 60 launch levels.',
      'Designed the daily challenge mode, raising day-7 retention in soft launch.',
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor's degree in Game Design",
    school: 'Game Design School, Lyon',
    duration: '2022 - 2026',
    detail: 'Systems design, level design, prototyping and production in multidisciplinary teams.',
  },
  {
    degree: 'Baccalauréat — Science major',
    school: 'Lycée, Lyon',
    duration: '2022',
    detail: 'Mathematics and computer science specialisation.',
  },
];
