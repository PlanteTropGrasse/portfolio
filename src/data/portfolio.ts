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
  location: 'Paris, France',
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
  lead: 'French-Spanish Game Design Master’s graduate from ICAN.',
  paragraphs: [
    'This portfolio showcases my creative process and design thinking explored across video games, team-building activities, technical C++ & C# projects, and audiovisual productions.',
    'Passionate about designing engaging and well-balanced interactive systems, I create clear, dynamic, and memorable mechanics, from paper prototyping and documentation to engine implementation.',
  ],
};

export const skills: Skill[] = [
  { name: 'Game & Systems Design', detail: 'Core gameplay loops, balancing, interactive mechanics and rules design' },
  { name: 'Level Design & Pacing', detail: 'Player flow, spatial readability, guidance and encounter sequencing' },
  { name: 'Engine Prototyping', detail: 'Rapid iteration in Unity (C#) and Unreal Engine (Blueprints)' },
  { name: 'Gameplay Programming', detail: 'Gameplay logic implementation in C# and C++, custom tooling integration' },
  { name: 'Game Feel & UX', detail: 'Visual/audio feedback, interface ergonomics and intuitive onboarding' },
  { name: 'Event & Experience Design', detail: 'Design of real-life team-building games, escape formats and immersive challenges' },
];

export const secondarySkills: string[] = [
  'Unity / C#',
  'Unreal Engine',
  'C / C++',
  'Team-Building Design',
  'Arts & VFX',
  'Short Films & Video',
  'Git / Version Control',
  'Game Design Docs (GDD)',
  'French (Native)',
  'Spanish (Bilingual)',
  'English (Fluent)',
];

// The three project categories, in the order they appear on the home page.
export const projectCategories: { id: ProjectCategory; blurb: string }[] = [
  { id: 'Professional', blurb: 'Large-scale team-building and immersive real-life activities' },
  { id: 'Student', blurb: 'Major school productions and graduation projects at ICAN' },
  { id: 'Personal', blurb: 'Prototypes, game jams and personal experiments' },
];

// Ordered from most recent to oldest — the home page previews the first entries of each category.
export const projects: Project[] = [
  {
    id: 'power-quiz',
    title: 'The POWER Quiz',
    duration: 'Interactive Experience',
    role: 'Game & Systems Designer',
    tags: ['Team-Building', 'Interactive Quiz', 'Party Game'],
    category: 'Professional',
    description:
      'The timeless live quiz enhanced with special sabotage powers to disrupt opponents and overturn rankings in real time.',
    image: '/projects/power-quiz.jpg',
    imageAlt: 'The POWER Quiz - Interactive live event',
    longDescription: [
      'The POWER Quiz reinvents the traditional live quiz into an interactive, high-stakes tournament format designed for corporate team-building events and large groups.',
      'Beyond testing knowledge, players can collect, manage and trigger tactical powers (bonus multipliers, time freezes, question swaps and direct opponent sabotages), creating unexpected turnarounds and engaging social dynamics.',
    ],
    highlights: [
      'Engineered the core power card balance to prevent runaway leaders while keeping gameplay fair and dynamic.',
      'Designed real-time scoreboard interfaces and live game-host facilitation tools.',
      'Deployed during multiple corporate events with over 100 concurrent participants.',
    ],
  },
  {
    id: 'lego-pharaons',
    title: 'Pharaohs’ LEGO',
    duration: 'Large-Scale Experience',
    role: 'Designer & Facilitator',
    tags: ['Team-Building', 'Live Event', 'Immersion', 'Cooperation'],
    category: 'Professional',
    description:
      'A life-sized version of the famous brick-building game in an Ancient Egypt setting, promoting communication and collaborative problem-solving.',
    image: '/projects/lego-pharaons.jpg',
    imageAlt: 'Pharaohs’ LEGO - Large-scale team building',
    longDescription: [
      'An immersive grand-scale cooperative team-building experience where teams collaborate to construct monumental architectural structures using giant bricks.',
      'Set within an Ancient Egyptian narrative, teams solve spatial puzzles, manage architectural constraints and exchange rare materials under time pressure.',
    ],
    highlights: [
      'Designed physical puzzle blueprints and spatial challenges calibrated for teams of 5 to 10 players.',
      'Created progressive difficulty scaling and architectural scoring criteria.',
      'Facilitated workshops and live event sessions ensuring high engagement and clear communication flow.',
    ],
  },
  {
    id: 'cirque-ia',
    title: 'The AI Circus',
    duration: 'Game Jam & Prototype',
    role: 'Game & Concept Designer',
    tags: ['Game Jam', 'AI Concept', 'Narrative Design'],
    category: 'Professional',
    description:
      'Can you build a game around artificial intelligence? A satirical interactive experience questioning our reliance on automated models.',
    image: '/projects/cirque-ia.jpg',
    imageAlt: 'The AI Circus - Jam prototype',
    longDescription: [
      'Created as an interactive prototype exploring how artificial intelligence is presented and perceived in contemporary culture.',
      'Players navigate a whimsical circus carnival where automated agents attempt to imitate human artistry, acrobacy and comedy, often with hilarious and thought-provoking outcomes.',
    ],
    highlights: [
      'Explored satirical narrative framing and prompt-driven gameplay mechanics.',
      'Designed reactive game loops highlighting the quirks, failures and surprises of generative automation.',
    ],
  },
  {
    id: 'bastos',
    title: 'Bastos',
    duration: 'Video Game Project',
    role: 'Game Designer',
    tags: ['Game Design', 'Action', 'Systems', 'Shooter'],
    category: 'Student',
    description:
      'Every bullet counts when each one has a special effect. A fast-paced shooter built around tactical resource management with distinctive ammunition behaviors.',
    image: '/projects/bastos.jpg',
    imageAlt: 'Bastos - Every bullet counts',
    longDescription: [
      'Bastos is an intense arcade-shooter built around a core philosophy: ammunition is not just damage, it is utility. Every bullet fired triggers unique behavioral physics and environmental reactions.',
      'Players are constantly pushed into fast-paced tactical decision-making, choosing between bullet conservation, elemental combos, and momentum management.',
    ],
    highlights: [
      'Designed 10+ distinct bullet behaviors (bouncing, magnetizing, piercing, explosive chains).',
      'Balanced weapon economies and enemy resistance tables across rigorous playtesting cycles.',
      'Implemented fluid game feel feedback (screen shake, sound design cues, hit-stops).',
    ],
  },
  {
    id: 'syzygy',
    title: 'SYZYGY',
    duration: 'Multiplayer Project',
    role: 'Game Designer',
    tags: ['Duel', 'Online Multiplayer', 'Strategy', 'Puzzle'],
    category: 'Student',
    description:
      'A mystical online duel where two players battle to align celestial bodies and manipulate destiny using alignment mechanics and spatial control.',
    image: '/projects/syzygy.webp',
    imageAlt: 'SYZYGY - Mystical online duel',
    longDescription: [
      'SYZYGY is a 1v1 online strategy duel inspired by astronomical phenomena. Players control astrological houses and celestial orbits to create alignments across a shared board.',
      'Every action shifts orbital gravitational centers, demanding foresight, spatial prediction and calculated risk-taking.',
    ],
    highlights: [
      'Designed the complete card & celestial alignment system (lunar phases, solar eclipses, gravitational tides).',
      'Created synchronous multiplayer rules balanced for competitive readability and zero hidden randomness.',
      'Produced extensive design documentation (GDD, flowcharts and card effect matrices).',
    ],
  },
  {
    id: 'sang-pourcent',
    title: 'Sang%',
    duration: 'Arena Shooter Project',
    role: 'Game Designer',
    tags: ['Arena', 'Shooter', 'Sacrifice', 'Systems'],
    category: 'Student',
    description:
      'What if in an arena shooter, every shot cost a portion of your own health? An extreme risk-reward loop pushed to its limits.',
    image: '/projects/sang-pourcent.png',
    imageAlt: 'Sang% - Arena shooter game',
    longDescription: [
      'Sang% (Blood%) is a hardcore top-down arena shooter built around a radical mechanic: your health bar is your ammunition pool.',
      'Firing high-powered weapons directly depletes the player’s vitality, while defeating enemies and executing close-range maneuvers refills blood reserves, rewarding bold and aggressive play.',
    ],
    highlights: [
      'Engineered an adrenaline-fueled risk-reward feedback loop balanced on razor-thin margins.',
      'Designed dynamic enemy waves designed to force movement and prevent passive corner camping.',
    ],
  },
  {
    id: 'gogolem',
    title: 'Go Golem',
    duration: 'Territory War Prototype',
    role: 'Game & Level Designer',
    tags: ['Territory Control', 'Strategy', 'Multiplayer'],
    category: 'Student',
    description:
      'A territory-control strategy game where two players dynamically morph and reshape battlefield proportions to outmaneuver each other.',
    image: '/projects/gogolem.png',
    imageAlt: 'Go Golem - Territory war',
    longDescription: [
      'Go Golem is a tactical board-control game pitting elemental golems against each other in an evolving landscape.',
      'Rather than simply moving units, players terraform the battlefield: raising walls, sinking waterways, and shifting tile lines to disrupt enemy pathfinding.',
    ],
    highlights: [
      'Pioneered dynamic grid-morphing mechanics that continuously redefine player positioning.',
      'Designed elemental interactions (Earth, Water, Stone) and asymmetric faction abilities.',
    ],
  },
  {
    id: 'hansel-gretel',
    title: 'Hansel & Gretel GO',
    duration: 'Tactical Puzzle Game',
    role: 'Game & Level Designer',
    tags: ['Puzzle Game', 'Grimm Tales', 'Turn-Based'],
    category: 'Student',
    description:
      'A Hitman-GO style tactical puzzle game reimagined within the dark fantasy world of the Brothers Grimm fairy tales.',
    image: '/projects/hansel-gretel.png',
    imageAlt: 'Hansel & Gretel GO cover art',
    longDescription: [
      'Inspired by the tactical puzzle clarity of games like Hitman GO and Lara Croft GO, Hansel & Gretel GO turns the classic fairy tale into a suspenseful turn-based stealth puzzle.',
      'Players coordinate both siblings across interconnected node grids, using breadcrumbs, lures and distractions to evade gingerbread traps and dark forest creatures.',
    ],
    highlights: [
      'Authored 15+ handcrafted puzzle levels with smooth difficulty curves and mechanical discovery.',
      'Designed dual-character cooperative turn pacing and enemy patrol deterministic logic.',
    ],
  },
  {
    id: 'excroalibur',
    title: 'Excroalibur',
    duration: 'Turn-Based Project',
    role: 'Lead Designer',
    tags: ['Turn-Based', 'Tactics', 'Survival', 'Co-op'],
    category: 'Personal',
    description:
      'A turn-based twist on the bull game: players must protect a legendary sword from an overwhelming horde by passing it between characters at the right moment.',
    image: '/projects/excroalibur.png',
    imageAlt: 'Excroalibur - Protect the sword',
    longDescription: [
      'Excroalibur reimagines the classic schoolyard keep-away / bull game as a turn-based tactical survival experience.',
      'A party of eccentric warriors must defend Excroalibur — a heavy, cursed sword that grants immense power to its wielder but steadily draws every monster on the map toward them.',
    ],
    highlights: [
      'Developed the "Sword Hot-Potato" mechanic where throwing or passing the weapon resets enemy aggro and repositions danger zones.',
      'Balanced asymmetric character archetypes optimized for passing, absorbing blows, or clearing swarms.',
    ],
  },
  {
    id: 'simulation-cplusplus',
    title: 'Ant Colony Simulation & 2048 in C++',
    duration: 'C++ & Algorithm Projects',
    role: 'Developer / Gameplay Programmer',
    tags: ['C++', 'Algorithms', 'Simulation', 'Programming'],
    category: 'Personal',
    description:
      'Autonomous agent behavioral simulation (ant colony dynamics) and an optimized game engine recreation of 2048 in modern C++.',
    image: '/projects/simulation-fourmi.jpg',
    imageAlt: 'Behavioral simulation in C++',
    longDescription: [
      'A collection of technical projects focused on algorithmic efficiency, systems architecture and agent simulation.',
      'Includes an autonomous ant foraging simulation using pheromone diffusion and scent trail algorithms, alongside a complete console & graphical recreation of the 2048 puzzle engine in C++.',
    ],
    highlights: [
      'Implemented grid-based pheromone decay and reinforcement algorithms in pure C++.',
      'Wrote performant data structures minimizing allocations and memory footprint.',
    ],
  },
  {
    id: 'short-films-vfx',
    title: 'Lego & GeoGebra Short Films',
    duration: 'Audiovisual & VFX Projects',
    role: 'Director & VFX Artist',
    tags: ['Audiovisual', 'VFX', 'Lego Animation', 'GeoGebra'],
    category: 'Personal',
    description:
      'Stop-motion brick animation short films and mathematical GeoGebra animations featuring custom visual effects and video editing.',
    image: '/projects/court-metrage-lego.jpg',
    imageAlt: 'Short films and animations',
    longDescription: [
      'Creative exploration in stop-motion brick animation and mathematical motion graphics.',
      'Combines practical frame-by-frame puppet work with digital post-production (lighting, compositing, visual effects and audio synchronization).',
    ],
    highlights: [
      'Complete production cycle: storyboarding, physical set construction, shooting, sound editing and color grading.',
      'Experimental mathematical curve animation with GeoGebra used as procedural visual assets.',
    ],
  },
];

// Maximum number of projects previewed per category on the home page.
export const RECENT_PROJECTS_COUNT = 3;

export const experiences: Experience[] = [
  {
    title: 'Game & Systems Designer',
    company: 'Independent & Collaborative Projects',
    duration: '2023 - Present',
    project: 'Bastos, SYZYGY, Excroalibur',
    bullets: [
      'Designed complete game mechanics, rules, and progression systems across solo and multidisciplinary team productions.',
      'Prototyped features quickly in game engines and iterated based on structured playtest feedback.',
      'Authored Game Design Documents (GDD) and communicated design intent clearly to programmers and artists.',
    ],
  },
  {
    title: 'Interactive Experience & Team-Building Designer',
    company: 'Live Events & Corporate Entertainment',
    duration: '2022 - 2024',
    project: 'The POWER Quiz, Pharaohs’ LEGO',
    bullets: [
      'Created and hosted large-scale interactive entertainment experiences fostering team cohesion and player engagement.',
      'Balanced scoring mechanics, real-time power cards, and cooperative challenges to maximize replayability and fun.',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Master’s Degree in Game Design',
    school: 'ICAN (Institut de Création et Animation Numériques)',
    duration: 'Graduated',
    detail: 'Specialization in game design, gameplay systems balancing, interactive prototyping, and game production management.',
  },
  {
    degree: 'Higher Education in Sciences & Computer Foundations',
    school: 'Higher Education',
    duration: 'Initial Curriculum',
    detail: 'Solid foundation in mathematics, algorithmics, C++ / C# programming logic, and computational modeling.',
  },
];
