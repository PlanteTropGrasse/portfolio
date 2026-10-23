// All site content lives here. Edit these objects to update the portfolio —
// components render them with .map(), so no markup changes are needed.
import type {
  Education,
  Experience,
  NavSection,
  Presentation,
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
  languages: [
    { name: 'English', flag: '/flags/english.svg' },
    { name: 'Spanish', flag: '/flags/spanish.svg' },
    { name: 'French', flag: '/flags/french.svg' },
  ],
  currentStudio: 'ICAN',
  yearsOfExperience: 2,
  shippedTitles: 6,
  location: 'Paris, France',
  availability: 'Open to opportunities',
};

export const contact = {
  email: 'adrianproust@gmail.com',
  linkedin: { label: 'Adrian Proust', url: 'https://www.linkedin.com/in/adrian-proust/?isSelfProfile=true' },
  artstation: { label: 'adrian_proust', url: 'https://adrian_proust.artstation.com/' },
  phone: '',
};

// Icon links shown in the top navigation bar.
export const socials: SocialLink[] = [
  { label: 'LinkedIn', url: contact.linkedin.url, icon: 'linkedin' },
  { label: 'ArtStation', url: contact.artstation.url, icon: 'artstation' },
];

export const about = {
  lead: 'Trilingual Game Design Enthusiast',
  paragraphs: [
    'This portfolio offers a glimpse into the creative thinking I have explored in recent years across different projects and fields.',
    'Whether in video games or live events, I cannot help but take a fresh, critical look at the games I create or play.',
    'These seemingly varied perspectives converge on a single goal: to offer new video game experiences shaped by a sense of freedom.',
  ],
};

export const skills: Skill[] = [
  { name: 'Game & Systems Design', detail: 'Core gameplay loops, balancing, interactive mechanics and rules design' },
  { name: 'Game Pacing', detail: 'Player flow, spatial readability, guidance and encounter sequencing' },
  { name: 'Engine Prototyping', detail: 'Rapid iteration on Unity or Unreal Engine, through AI pipelines' },
  { name: 'Gameplay Programming', detail: 'Gameplay logic implementation in C# and C++, custom tooling integration' },
  { name: 'Game Feel & UX', detail: 'Juiciness, visual/audio feedback, interface ergonomics and intuitive onboarding' },
  { name: 'Multiplayer Expertise', detail: 'Design of cooperative and competitive experiences across real-life games and video games, encouraging communication, teamwork and player interaction' },
];

export const secondarySkills: string[] = [
  'Unreal Engine',
  'C / C++',
  'IRL Event Design',
  'Arts & VFX',
  'Da Vinci Resolve',
  'Figma',
  'Game Design Docs (GDD)',
];

// Project categories, in filter order.
export const projectCategories: { id: ProjectCategory; blurb: string }[] = [
  { id: 'Professional', blurb: 'Large-scale team-building and immersive real-life activities' },
  { id: 'Student', blurb: 'Major school productions and graduation projects at ICAN' },
  { id: 'Personal', blurb: 'Prototypes, game jams and personal experiments' },
];

export const homeProjects = { title: 'Latest projects' };

const presentation = (title: string, id: string, delay: number, start = false): Presentation => {
  const base = `https://docs.google.com/presentation/d/e/${id}`;
  const params = `start=${start}&loop=false&delayms=${delay}`;
  return { title, embedUrl: `${base}/embed?${params}`, url: `${base}/pub?${params}` };
};

// Latest projects first — the home page previews the first three entries.
export const projects: Project[] = [
  {
    id: 'wonky-diver',
    trailer: {
      title: 'Wonky Diver — Trailer',
      featured: true,
      src: '/projects/wonky-diver-trailer.mp4',
      poster: '/projects/wonky-diver-cover.png',
    },
    title: 'Wonky Diver',
    duration: '2026',
    role: 'Details coming soon',
    tags: ['Unreal Engine', 'Exploration', 'Adventure', 'Underwater', 'Creature Interactions'],
    category: 'Professional',
    description: 'Explore a hostile alien ocean as a barely qualified diver. Study strange creatures, gather resources, and upgrade your gear to reach deeper biomes and uncover new paths.',
    image: '/projects/wonky-diver-cover.png',
    imageAlt: 'Wonky Diver cover art with a diver and underwater creatures',
    longDescription: ['Overview and concept details coming soon.'],
    presentations: [{
      title: 'Wonky Diver — Presentation',
      embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vQ7TDfKztYvEkjcPnLeEDDGmlMf1bMgQWr2W4C-slwFu43ivx7oJQvocVCxSSfqD2H0n9_cqtK69CpV/embed?start=true&loop=false&delayms=5000',
      url: 'https://docs.google.com/presentation/d/e/2PACX-1vQ7TDfKztYvEkjcPnLeEDDGmlMf1bMgQWr2W4C-slwFu43ivx7oJQvocVCxSSfqD2H0n9_cqtK69CpV/pub?start=true&loop=false&delayms=5000',
    }],
  },
  {
    id: 'wonky-race',
    trailer: {
      title: 'Wonky Race — Trailer',
      featured: true,
      src: '/projects/wonky-race-trailer.mp4',
      poster: '/projects/wonky-race-cover.png',
    },
    title: 'Wonky Race',
    duration: '2026',
    role: 'Details coming soon',
    tags: ['Unreal Engine', 'Party Game', 'Multiplayer', 'Racing', 'Physics-Based Combat', 'Arena Battles'],
    category: 'Professional',
    description: 'A chaotic multiplayer brawl-racer for up to six players. Race through dangerous courses, slap and grab your rivals, then battle in arenas where each round brings a new challenge.',
    image: '/projects/wonky-race-cover.png',
    imageAlt: 'Wonky Race cover art with colorful racers on a tropical track',
    longDescription: ['Overview and concept details coming soon.'],
    presentations: [{
      title: 'Wonky Race — Presentation',
      embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vR4fqyu8BtkOLmmyZ2TNvTWTWg4xIUxA8cUdZE-I7a_SbOcJNc9dVa6UrtDvzcoII9AP-4LZILhzfdr/embed?start=true&loop=false&delayms=5000',
      url: 'https://docs.google.com/presentation/d/e/2PACX-1vR4fqyu8BtkOLmmyZ2TNvTWTWg4xIUxA8cUdZE-I7a_SbOcJNc9dVa6UrtDvzcoII9AP-4LZILhzfdr/pub?start=true&loop=false&delayms=5000',
    }],
  },
  {
    id: 'my-lil-pot-utah',
    title: "My lil' pot Utah",
    duration: 'January 2026 · 1 week',
    role: 'Game Designer & Game Artist',
    tags: ['Unreal Engine 5', 'Game Jam', 'Arcade'],
    category: 'Personal',
    description: 'Help Utah, your virtual teapot assistant, fight rogue 3D assets with a bouncing ball. Control its rebounds, survive, and chase a high score.',
    image: '/projects/utah-screenshot-1.png',
    imageAlt: "My lil' pot Utah gameplay in a surreal 3D world",
    medium: 'Downloadable Windows game developed in Unreal Engine 5.7.1',
    context: 'Made in one week for Prince Gaëtan’s January 2026 game jam, where it won first place.',
    longDescription: [
      'January 1995: the assets in your modeling software have become corrupted and rebelled. Luckily, your trusted virtual assistant Utah is here to help. Eliminate as many geometric solids as possible and increase your score without getting killed.',
      'Your weapon is a powerful bouncing ball capable of instantly defeating enemies. Control how it rebounds off enemies and the environment to keep the fight going.',
      'The ball’s behavior and properties can change depending on which enemies it hits, so make the most of these interactions. Be careful not to lose it, or you will be left defenseless.',
    ],
    team: [
      { name: 'Tomas Proust', role: 'Developer' },
      { name: 'Adrian Proust', role: 'Game Designer & Game Artist', url: 'https://adrianproust.itch.io/' },
      { name: 'Zakari Deladeriere', role: 'Level Designer', url: 'https://www.youtube.com/@zakgamelab' },
    ],
    credits: 'Music by steviasphere.',
    media: [
      { type: 'image', src: '/projects/utah-character.gif', alt: 'Utah, the animated virtual teapot assistant' },
      { type: 'image', src: '/projects/utah-gameplay-1.gif', alt: "My lil' pot Utah animated gameplay demonstration 1" },
      { type: 'image', src: '/projects/utah-gameplay-2.gif', alt: "My lil' pot Utah animated gameplay demonstration 2" },
      { type: 'image', src: '/projects/utah-gameplay-3.gif', alt: "My lil' pot Utah animated gameplay demonstration 3" },
      { type: 'image', src: '/projects/utah-artwork.png', alt: "My lil' pot Utah controls guide" },
      { type: 'image', src: '/projects/utah-screenshot-1.png', alt: "My lil' pot Utah gameplay screenshot 1" },
      { type: 'image', src: '/projects/utah-screenshot-2.png', alt: "My lil' pot Utah gameplay screenshot 2" },
      { type: 'image', src: '/projects/utah-screenshot-3.png', alt: "My lil' pot Utah gameplay screenshot 3" },
    ],
    links: [
      { label: 'Check the Itch.io page to download the game', url: 'https://zak-gamelab.itch.io/my-lil-pot-utah' },
      { label: 'Watch the trailer', url: 'https://www.youtube.com/watch?v=EVIxLG9HnL8' },
      { label: 'Music by steviasphere', url: 'https://steviasphere.bandcamp.com/' },
    ],
  },
  {
    id: 'power-quiz',
    showResources: false,
    media: [
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_04197545c04245adbd3c3b152c0e0aa4~mv2.jpeg",
        "alt": "power-quiz — project image 1"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_97f4d30bdd7e42abafeda2ea38060fb4~mv2.jpeg",
        "alt": "power-quiz — project image 2"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_8bb65dc44f674af7afcb3d0077cc1e92~mv2.jpeg",
        "alt": "power-quiz — project image 3"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_a5802cf077b14814a60c4234ecc803d5~mv2.jpeg",
        "alt": "power-quiz — project image 4"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_6c5f3948f33d4343885f59a01a18c8be~mv2.jpeg",
        "alt": "power-quiz — project image 5"
      }
    ], title: 'The POWER Quiz', duration: '2024–2025',
    role: 'Game Designer', category: 'Professional',
    tags: ['Team-Building', 'Live Quiz', 'In Person & Online'],
    description: 'The timeless hosted quiz, with powers that let teams sabotage their opponents and turn the game around.',
    image: '/projects/power-quiz.jpg', imageAlt: 'The POWER Quiz live team-building event',
    medium: 'In-person or online team-building experience',
    context: 'A game format updated and improved during my contract at Les Coqs en Pâte.',
    longDescription: [
      'The timeless, ever-popular hosted quiz is reimagined with powers that add unexpected twists. A team might have to guess the host’s age to avoid a penalty, be forbidden from using their hands to operate the tablet, or redirect a power toward another team.',
      'The game is designed to showcase the host’s acting and improvisation skills while encouraging interaction. Over 90 minutes, these elements can create a warm, familiar atmosphere and sometimes even contagious excitement in a corporate setting that usually feels very different.',
    ],
    credits: '© Les Coqs en Pâte',
    links: [{ label: 'Watch the POWER Quiz trailer', url: 'https://www.youtube.com/watch?v=SgShqjr9Nfk', featuredVideo: true }],
  },
  {
    id: 'lego-pharaons',
    links: [{ label: 'Watch the Pharaohs’ LEGO trailer', url: 'https://www.youtube.com/watch?v=rC3deKuH9pI', featuredVideo: true }],
    media: [
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_98b57b61b17640c1b44ec3f8536cad8f~mv2.jpeg",
        "alt": "lego-pharaons — project image 1"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_c6c21832b1c146ecbf14d890f918a150~mv2.jpeg",
        "alt": "lego-pharaons — project image 2"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_d21888ff99204068b23837f411ddb80d~mv2.jpeg",
        "alt": "lego-pharaons — project image 3"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_3f44bef78cf54bb495401d93a54f3e4f~mv2.jpeg",
        "alt": "lego-pharaons — project image 4"
      }
    ], title: 'Pharaohs’ LEGO', duration: '2024–2025',
    role: 'Game Designer', category: 'Professional',
    tags: ['Team-Building', 'Giant LEGO', 'Quiz', 'Construction'],
    description: 'An Ancient Egypt-themed competition combining a quiz with giant-brick construction challenges to choose the Pharaoh’s future architects.',
    image: '/projects/lego-pharaons.jpg', imageAlt: 'Pharaohs’ LEGO team-building event',
    medium: 'In-person team-building with tablets and giant LEGO bricks',
    context: 'A redesign of an outdated game format for Les Coqs en Pâte.',
    longDescription: [
      'Pharaohs’ LEGO is the latest addition to Les Coqs en Pâte’s family of giant-brick games. The previous version was too complicated logistically, which led us to imagine a new version built around a quiz format with construction challenges.',
      'Set in Ancient Egypt, this new iteration offers a playful, offbeat experience. Players compete to become the Pharaoh’s future architects through challenges such as giant Jenga and speed building.',
    ],
    credits: '© Les Coqs en Pâte',
  },
  {
    id: 'cirque-ia',
    links: [{ label: 'Watch the AI Circus trailer', url: 'https://www.youtube.com/watch?v=d_Gjuun_8vw', featuredVideo: true }],
    media: [
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_14cd20b7cc9c4a48b831bc89894a4faa~mv2.jpeg",
        "alt": "cirque-ia — project image 1"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_5b4211282dc74bce9f4534e4e865f97a~mv2.jpeg",
        "alt": "cirque-ia — project image 2"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_5b46d6adc4094a12b1e4a961c501524a~mv2.jpg",
        "alt": "cirque-ia — project image 3"
      }
    ], title: 'The AI Circus', duration: '2024–2025',
    role: 'Game Designer', category: 'Professional',
    tags: ['Team-Building', 'Generative AI', 'ChatGPT', 'Midjourney'],
    description: 'A ringmaster invites teams to invent tomorrow’s circus acts using AI, through accessible creative challenges for up to 150 participants.',
    image: '/projects/cirque-ia.jpg', imageAlt: 'The AI Circus team-building experience',
    medium: 'In-person team-building with a host and tablets connected to Midjourney and ChatGPT',
    context: 'A new game format created for Les Coqs en Pâte.',
    longDescription: [
      'This team-building experience takes on the challenge of making AI generation playful for groups of up to 150 participants, regardless of their experience level. A host dressed as a ringmaster needs new acts for his circus and is looking for people who can imagine the performances of tomorrow using AI.',
      'The technology is reinterpreted through several game mechanics to move beyond a purely technical training session. Teams compete in a series of challenges.',
      'In the “AI or not AI?” blind test, players must decide whether a cover song was actually performed by an artist.',
      'In “GPT Slam,” teams have five minutes to write rhymes with ChatGPT on specific themes. They then take the microphone and rap their lyrics over a beat.',
      'Other challenges ask teams to generate images in Midjourney from very precise—and sometimes overly demanding—briefs. The often questionable results are compared and judged by the host, who enjoys poking fun at them to make the participants laugh.',
      'The game provides a gentle introduction to AI for people who are often far from being technology enthusiasts.',
    ],
    credits: '© Les Coqs en Pâte',
  },
  {
    id: 'bastos',
    media: [
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_14f2832191a8452dae3608016abf8f56~mv2.jpg",
        "alt": "bastos — project image 1"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_9b5870437ce747e4adbed92b09cea91a~mv2.jpg",
        "alt": "bastos — project image 2"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_78c1a8a73ca94574a46044dbdf6ac580~mv2.png",
        "alt": "bastos — project image 3"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_cf73e7217f864f6da4e6d47aa5db94cd~mv2.gif",
        "alt": "bastos — project image 4"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_d1ea2ff3cf804984b3c06c9b90d87648~mv2.jpg",
        "alt": "bastos — project image 5"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_93a58c1178cf45bb97a12ef4567315b0~mv2.png",
        "alt": "bastos — project image 6"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_520dfc1aeeff46de9a8b699636ff2b45~mv2.jpg",
        "alt": "bastos — project image 7"
      }
    ], title: 'Bastos', duration: '2025 · 6 months',
    role: 'Game Designer & VFX Artist', category: 'Student',
    tags: ['Unreal Engine', 'Online', 'Arena FPS', 'Custom Ammunition'],
    description: 'Every bullet counts when each has a special effect: customize the sequence of your magazine before entering the arena.',
    image: '/projects/bastos.jpg', imageAlt: 'Bastos arena FPS gameplay',
    medium: 'Online game developed in Unreal Engine',
    context: 'A master’s graduation project developed over six months at ICAN.',
    longDescription: [
      'An arena FPS in which players can customize the order of the bullets in their magazine and their effects before playing. Sticky bullets, explosive bullets, dash bullets: different ammunition types complement one another in different combat situations, encouraging players to experiment with new magazines and improve on their previous performances.',
    ],
    team: [
      { name: 'Adrian PROUST', role: 'Game Designer & VFX Artist' },
      { name: 'Vincent LUCAS', role: 'Game Designer & 3D Artist' },
      { name: 'Zakari DELADERIERE', role: 'Game Designer, Level Designer & 2D Artist' },
      { name: 'Quentin GAUTIER', role: 'Game Designer, Level Designer & 2D Artist' },
      { name: 'Stanislas FRITSCH', role: 'Beautiful Programmer' },
    ],
    links: [{ label: 'Read the Game Design Document (PDF)', url: 'https://319f71d5-0dc0-494d-b798-b7480961976b.filesusr.com/ugd/4ecbbb_db2ea4c43b194ee1a032c884af1279b2.pdf' }],
  },
  {
    id: 'syzygy',
    media: [
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_a8878d734ca9473ea9d580709b47816d~mv2.gif",
        "alt": "syzygy — project image 1"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_7e8b3f41af484e5683f30a2180d84527~mv2.png",
        "alt": "syzygy — project image 2"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_d19bc513c7fc4a76b804d3c5e808edeb~mv2.gif",
        "alt": "syzygy — project image 3"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_dc796c887ae24b3bb85f241f60657823~mv2.gif",
        "alt": "syzygy — project image 4"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_67205041e35943eb939d4ab37dfe0cf6~mv2.gif",
        "alt": "syzygy — project image 5"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_682dc77199f34cd79bfd04d5532fbabd~mv2.gif",
        "alt": "syzygy — project image 6"
      }
    ], title: 'SYZYGY', duration: '2024',
    role: 'Game & Card Designer', category: 'Student',
    tags: ['Unreal Engine', 'Online Multiplayer', 'Card Game', 'Duel'],
    description: 'A mystical online duel: align cards to form constellations and score points while sabotaging your opponent’s board.',
    image: '/projects/syzygy.webp', imageAlt: 'SYZYGY mystical card duel',
    medium: 'Online game developed in Unreal Engine',
    context: 'A project created at ICAN around the theme of the card game.',
    longDescription: [
      'A reinterpretation of Knucklebones, the solo minigame from Cult of the Lamb, SYZYGY is an online multiplayer card game in which two players face one another in a mystical duel.',
      'Methodically align your cards to create constellations and score points while sabotaging your opponent’s board. Compared with its inspiration, SYZYGY adds a range of simple, versatile mechanics for manipulating the board, developing strategies, and giving players greater control.',
    ],
    team: [
      { name: 'Adrian PROUST', role: 'Game Design & Card Design' },
      { name: 'Eden TAMENE', role: 'Game Art' },
      { name: 'Laurène BROQUET', role: 'Game Programming' },
      { name: 'Fanny ALLEN', role: 'Lead Game Design' },
      { name: 'Zakari DELADERIERE', role: 'Game Design' },
      { name: 'Louison GILLES', role: 'Game Design' },
    ],
    links: [
      { label: 'Play SYZYGY on itch.io', url: 'https://filoupompom.itch.io/syzygy' },
      { label: 'Read the Game Design Document (PDF)', url: 'https://319f71d5-0dc0-494d-b798-b7480961976b.filesusr.com/ugd/4ecbbb_5481d5a6b36349debd811883eaf81b29.pdf' },
    ],
  },
  {
    id: 'sang-pourcent',
    presentations: [
      presentation('Idea pitchdeck', '2PACX-1vSKHFSCpA0x_DqSgkR9J2vQrpTzF0c4Vm-UwEiXkWLqKo4AyzKfO114z9viLrJSywjPD9YuyweDT24H', 5000),
      presentation('Demo presentation', '2PACX-1vR39hCyogFZkdR8BPx-BH76KUlKJgaK7aB_Skkss4U2Cnzpw3PSI1scWTOt6QGGvMB4dUf80bEGSsGJ', 5000, true),
      presentation('Behaviour Design', '2PACX-1vSYI9yOml6COpsm91CqCMy1aSzEy1RTsmPEqCdVPov64fZBjMdJE7AFu1WImEiTMnVfE_X0iK3_SdTk', 5000, true),
    ],
    media: [
      {
        "type": "video",
        "src": "https://video.wixstatic.com/video/4ecbbb_67845c170b5641398ec7be45913f3be1/720p/mp4/file.mp4",
        "alt": "sang-pourcent gameplay video",
        "poster": "https://static.wixstatic.com/media/4ecbbb_67845c170b5641398ec7be45913f3be1f000.jpg"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_45077de147604d948c06dff7edab681c~mv2.gif",
        "alt": "Dynamic diagram simulating the resources in the gameplay loop. Created with Machinations.io.",
        "caption": "Dynamic diagram simulating the resources in the gameplay loop. Created with Machinations.io."
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_8977e17a487645c3ba394038c4bfda83~mv2.png",
        "alt": "sang-pourcent — project image 3"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_ee6319ef45954b7caa61b06c51d6a23a~mv2.png",
        "alt": "sang-pourcent — project image 4"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_0a808057b05e4790854923fbb4ea7699~mv2.png",
        "alt": "sang-pourcent — project image 5"
      }
    ], title: 'Sang%', duration: '2024',
    role: 'Lead Game Designer', category: 'Student',
    tags: ['Unreal Engine 5', 'Arena Shooter', 'Health as Ammunition'],
    description: 'An arena shooter where every shot costs health. Recover blood from defeated enemies and exceed 100% health to unleash a temporary frenzy.',
    image: '/projects/sang-pourcent.png', imageAlt: 'Sang% arena shooter',
    medium: 'Game developed in Unreal Engine 5',
    context: 'A fast-paced arena shooter created as an ICAN student project in 2024.',
    longDescription: [
      'Sang% is a tense shooter built around one essential loop: the character uses their own health as ammunition, and killing enemies allows them to recover it.',
      'Depending on the weapon, players sacrifice different amounts of health to try to eliminate their attackers. They must approach opponents with some caution: every wasted shot counts and brings them closer to death.',
      'Defeated enemies drop blood bags that the character can collect to recover health. Exceeding 100% of the health bar rewards the player with a temporary frenzy in which shooting no longer costs health. This state reverses the relationship between player and enemies, offering an opportunity to unleash a hail of bullets capable of destroying any opponent.',
      'The gameplay loop creates a roller-coaster experience, constantly moving between imminent defeat—when the player has just one health point and can no longer shoot—and the euphoria of an unstoppable rampage.',
    ],
    team: [
      { name: 'Adrian PROUST', role: 'Lead Game Designer' },
      { name: 'Mathis NEGNY', role: 'Game Designer' },
      { name: 'Vincent LUCAS', role: 'Game Designer' },
      { name: 'Thomas VO', role: 'Game Designer' },
      { name: 'Guillaume LEBRETON', role: 'Game Artist' },
      { name: 'Alexandre MEZANGES', role: 'Level Designer' },
      { name: 'Ewen CELIBERT', role: 'Game Programmer' },
      { name: 'Florian VISEUX', role: 'Game Programmer' },
    ],
    links: [{ label: 'Read the Game Design Document (PDF)', url: 'https://319f71d5-0dc0-494d-b798-b7480961976b.filesusr.com/ugd/4ecbbb_a01df21a81fa4316bed2f65d0c0d0c83.pdf' }],
  },
  {
    id: 'gogolem',
    presentations: [
      presentation('Demo presentation', '2PACX-1vRgUYeoa2CSXdCwZcFeyIERK6RMxROYObAYuBY9mjbS_S2YQSXWFfDiv-lzwM7vpIeFa3sevYdGtiQr', 5000),
    ],
    media: [
      {
        "type": "video",
        "src": "https://video.wixstatic.com/video/4ecbbb_2c876ca3893a448f8b8085bfd0abb24a/720p/mp4/file.mp4",
        "alt": "gogolem gameplay video",
        "poster": "https://static.wixstatic.com/media/4ecbbb_2c876ca3893a448f8b8085bfd0abb24af000.jpg",
        "caption": "Go Golem gameplay"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_3449aa200ce346cdb39534dd7ff933ee~mv2.png",
        "alt": "Gameplay screenshot",
        "caption": "Gameplay screenshot"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_0b7044c68cbc47e8a72cdd7c33a04877~mv2.jpg",
        "alt": "Go Golem cover art 1",
        "caption": "Go Golem cover art 1"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_c219229535aa4c5788848cf17600da1c~mv2.png",
        "alt": "Go Golem cover art 2",
        "caption": "Go Golem cover art 2"
      }
    ], title: 'Go Golem', duration: '2023',
    role: 'Game Designer', category: 'Student',
    tags: ['Unreal Engine 5', 'Territory Control', 'Tactics', 'Two Players'],
    description: 'A territory-control duel where players reshape their golems with blocks to paint more ground and defend their territory.',
    image: '/projects/gogolem.png', imageAlt: 'Go Golem tactical territory game',
    medium: 'Game developed in Unreal Engine 5',
    context: 'A tactical game created as an ICAN student project on the theme of “the tactical game.”',
    longDescription: [
      'Two players duel to conquer as much territory as possible within a time limit. They slide golems across the board, painting the paths they travel in their own color.',
      'The game revolves around a key mechanic: golems’ bodies can be enlarged with blocks. Depending on their shape, they are better or worse at claiming ground or protecting areas.',
      'Alongside this shared feature, each golem has special abilities—destroying other golems like a battering ram, moving twice, or placing obstacles—which interact with transformation in different ways.',
    ],
    team: [
      { name: 'Adrian PROUST', role: 'Game Design' },
      { name: 'Guillaume LESAGE', role: 'Game Programming' },
      { name: 'Baptiste GARNIER', role: 'Game Art' },
      { name: 'Soline MAILLARD', role: 'Game Design' },
    ],
    links: [
      { label: 'Play Go Golem on itch.io', url: 'https://solinemaillard.itch.io/gogolem' },
      { label: 'Download the Game Design Document (PowerPoint)', url: 'https://319f71d5-0dc0-494d-b798-b7480961976b.filesusr.com/ugd/4ecbbb_92ef37b5e5d04fd5adcb33dbc1bc5ab7.pptx?dn=GDD_GoGolem.pptx' },
    ],
  },
  {
    id: 'hansel-gretel',
    presentations: [
      presentation('Hansel & Gretel GO — Design Presentation', '2PACX-1vQPLO6qYRtwoIWRHQriDOguCyc5Yxajg-udWwpG53DiLiXoq16zpir3ZP0cUTOCQ5rdBcAtbe5WCYHb', 5000, true),
      presentation('One Page Designs', '2PACX-1vSuPyFL7i-Ivmc9-LLTZlzpri8c1eznJT9ETKuyn5pBLo2lHEUB5EG11r3VyGpVEyrc6KmUYHYwtBQk', 10000),
    ],
    media: [
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_6e0d8b2838224f9fbe7e2aa4a9add535~mv2.png",
        "alt": "hansel-gretel — project image 1"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_ee89311a0daa4a1a9938e470361c0db6~mv2.png",
        "alt": "hansel-gretel — project image 2"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_0d8bb2a674e0407e9c19f6fcf60c60f9~mv2.png",
        "alt": "hansel-gretel — project image 3"
      }
    ], title: 'Hansel & Gretel GO', duration: '2023–2024',
    role: 'Game & Sound Designer', category: 'Student',
    tags: ['Unreal Engine 5', 'Puzzle', 'Strategy', 'Fairy Tale'],
    description: 'An adaptation of Hansel and Gretel as a strategy game inspired by the puzzle game Hitman GO.',
    image: '/projects/hansel-gretel.png', imageAlt: 'Hansel & Gretel GO gameplay',
    medium: 'Game developed in Unreal Engine 5',
    context: 'An adaptation of the fairy tale into a strategy game based on the puzzle game Hitman GO, created as an ICAN student project in 2023–2024.',
    team: [
      { name: 'Adrian PROUST', role: 'Game & Sound Designer' },
      { name: 'Emma LAMOUCHE', role: 'Game Designer & Game Director' },
      { name: 'Fanny ALLEN', role: 'Game Designer & Game Programmer' },
      { name: 'Eden TAMENE', role: '2D & 3D Game Artist' },
    ],
  },
  {
    id: 'excroalibur',
    title: 'Excroaalibur',
    duration: 'Released April 21, 2026',
    role: 'Game Designer',
    category: 'Personal',
    tags: ['Unity', 'Turn-Based Tactics', 'Roguelike', 'Singleplayer', 'Free to Play'],
    description: 'Three unlikely frogs claim a legendary sword and become the kingdom’s targets. Pass the blade to build its power, upgrade your trio, and survive tactical battles along a branching roguelike journey.',
    image: '/projects/excroaalibur-cover.jpg',
    imageAlt: 'Excroaalibur Steam cover art',
    medium: 'Free-to-play single-player game on Steam, developed and published by Grezz Game',
    context: 'I joined the project midway through production, after a prototype had been created, to design a progression system and add a roguelike dimension with upgrades.',
    longDescription: [
      'The legendary sword was meant to bring peace to the realm. Instead, three eccentric frogs have taken it, and a hostile medieval world is determined to recover it.',
      'Pass Excroaalibur between the frogs to strengthen the blade before striking. Coordinating the trio is central to surviving each encounter.',
      'Between waves, upgrade each companion’s speed, resilience, or affinity with the sword to shape a team around your preferred tactics.',
      'Choose routes across a branching roguelike map, weighing battles, risks, and rewards. Face increasingly dangerous waves of knights and spellcasters before confronting powerful bosses whose patterns demand careful coordination.',
    ],
    media: [
      { type: 'image', src: '/projects/excroaalibur-steam-1.jpg', alt: 'Excroaalibur gameplay — Steam screenshot 1' },
      { type: 'image', src: '/projects/excroaalibur-steam-2.jpg', alt: 'Excroaalibur gameplay — Steam screenshot 2' },
      { type: 'image', src: '/projects/excroaalibur-steam-3.jpg', alt: 'Excroaalibur gameplay — Steam screenshot 3' },
      { type: 'image', src: '/projects/excroaalibur-steam-4.jpg', alt: 'Excroaalibur gameplay — Steam screenshot 4' },
      { type: 'image', src: '/projects/excroaalibur-steam-5.jpg', alt: 'Excroaalibur gameplay — Steam screenshot 5' },
    ],

    team: [
      { name: 'Adrian PROUST', role: 'Game Designer' },
      { name: 'Vincent LUCAS', role: 'Producer, Art Direction & Game Designer' },
      { name: 'Stanislas FRITSCH', role: 'Lead Game Programmer' },
      { name: 'Quentin GAUTIER', role: 'Game Designer & Level Designer' },
      { name: 'Tristan CHARDAT', role: 'Game Designer' },
      { name: 'André LAUZIER', role: 'Game Programmer' },
      { name: 'Titouan DREZET', role: 'Sound Designer, Composer & Game Programmer' },
      { name: 'Hugo LOTZ', role: 'Game Artist' },
      { name: 'Laurélyne DENAVAUT', role: 'Game Artist' },
      { name: 'Julien CARPENTIER', role: 'UX Designer, Game Designer & Social Media Manager' },
      { name: 'Nathan WYNANDS', role: 'Game Designer' },
    ],
    links: [{ label: 'Play Excroaalibur on Steam', url: 'https://store.steampowered.com/app/4392470/Excroaalibur/' }],
  },
  {
    id: 'neutriscore',
    media: [
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_4062c35576ca49a89a76099df3c88695~mv2.png",
        "alt": "Title screen",
        "caption": "Title screen"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_1565df45e0604399bcf97ea9f6005f4e~mv2.jpg",
        "alt": "Tutorial 1",
        "caption": "Tutorial 1"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_d68bf7872c7b4e3990d2d74ae2ddbc58~mv2.jpg",
        "alt": "Tutorial 2",
        "caption": "Tutorial 2"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_b38d231ee2514e34876b703302bf4646~mv2.jpg",
        "alt": "Tutorial 3",
        "caption": "Tutorial 3"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_2222071a9f2a439fa09949bd25c53f01~mv2.jpg",
        "alt": "Tutorial 4",
        "caption": "Tutorial 4"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/4ecbbb_8354c56d0f15441898ed8f59c1429cef~mv2.jpg",
        "alt": "End of a game",
        "caption": "End of a game"
      }
    ], title: 'Neutriscore', duration: '2023 · 48 hours',
    role: 'Game Designer', category: 'Personal',
    tags: ['Unity', 'Scientific Game Jam', 'Science Communication'],
    description: 'A game made in 48 hours to turn research into the diffuse supernova neutrino background into a playful experience.',
    image: '/projects/neutriscore.png', imageAlt: 'Neutriscore title screen',
    medium: 'Game developed in Unity',
    context: 'Created in 48 hours during the Spring 2023 Scientific Game Jam, with the goal of illustrating Antoine BEAUCHÊNE’s thesis, “The Diffuse Supernova Neutrino Background,” through play.',
    team: [
      { name: 'Antoine BEAUCHÊNE', role: 'Scientist' },
      { name: 'Alexandre GUIMBEAUD', role: 'Programmer' },
      { name: 'Romain CHAMBERT', role: 'Programmer' },
      { name: 'Marguerite LEANG', role: 'Game Artist' },
      { name: 'Solenne MARTY', role: 'Game Artist', url: 'https://www.linkedin.com/in/solenne-marty/' },
      { name: 'Benjamin QUELLEC', role: 'Sound Designer', url: 'https://www.benjaminquellec.com/' },
      { name: 'Adrian PROUST', role: 'Game Designer', url: 'https://www.linkedin.com/in/adrian-proust-417720159/' },
    ],
    links: [{ label: 'Play Neutriscore on itch.io', url: 'https://minerium.itch.io/neutriscore' }],
  },
  {
    id: 'simulation-cplusplus',
    media: [
      {
        "type": "video",
        "src": "https://video.wixstatic.com/video/4ecbbb_ab7940adcc514f8099f64403b5d35156/720p/mp4/file.mp4",
        "alt": "simulation-cplusplus original film or demonstration"
      }
    ], title: 'Ant Colony Algorithms', duration: '2016',
    role: 'Programmer', category: 'Personal',
    tags: ['C++', 'Artificial Intelligence', 'Simulation', 'Pair Project'],
    description: 'A virtual ant ecosystem: autonomous ants collect sugar, return it to their nest, and communicate through pheromones.',
    image: '/projects/simulation-fourmi.jpg', imageAlt: 'Ant colony simulation in C++',
    medium: 'C++ programming project',
    context: 'An end-of-year project completed in a pair. Our goal was to create the AI for an ant and an entire colony, in the spirit of John Horton Conway’s Game of Life.',
    longDescription: ['We wanted to build a virtual ecosystem in which ants could collect sugar, bring it back to the nest, and communicate with other ants using pheromones.'],
  },
  {
    id: '2048',
    media: [
      {
        "type": "video",
        "src": "https://video.wixstatic.com/video/4ecbbb_68bf317553b648b7a8aedd6c831e19a4/720p/mp4/file.mp4",
        "alt": "2048 original film or demonstration"
      }
    ], title: '2048 in C++', duration: '2015',
    role: 'Programmer', category: 'Personal',
    tags: ['C++', 'ASCII', 'Console', 'Code::Blocks'],
    description: 'A console implementation of 2048, with an ASCII board and tile movement and merging logic.',
    image: '/projects/2048.jpg', imageAlt: '2048 C++ console project',
    medium: 'C++ programming project',
    context: 'A weekly undergraduate assignment to code 2048 in Code::Blocks.',
    highlights: ['Programmed the board display directly in the console using ASCII.', 'Handled the movement of tile values and their increments when merging.'],
  },
  {
    id: 'short-films-vfx',
    media: [
      {
        "type": "video",
        "src": "https://video.wixstatic.com/video/4ecbbb_e74af3f4fcba401093e488e2b76937ef/720p/mp4/file.mp4",
        "alt": "short-films-vfx original film or demonstration"
      }
    ], title: 'A Game of Bricks in Stop Motion', duration: '2014',
    role: 'Filmmaker', category: 'Personal', tags: ['Short Film', 'Stop Motion', 'LEGO'],
    description: 'A LEGO stop-motion short film created for the final visual arts portfolio for the French baccalaureate.',
    image: '/projects/court-metrage-lego.jpg', imageAlt: 'LEGO stop-motion short film',
    medium: 'Stop-motion film',
    context: 'A short film made for the final portfolio of the visual arts option for the French baccalaureate.',
  },
  {
    id: 'geogebra-short-film',
    media: [
      {
        "type": "video",
        "src": "https://video.wixstatic.com/video/4ecbbb_2bf6264721144cc988f5ed3fe8c5bb18/720p/mp4/file.mp4",
        "alt": "geogebra-short-film original film or demonstration"
      }
    ], title: 'GeoGebra Short Film', duration: '2014',
    role: 'Filmmaker', category: 'Personal', tags: ['Short Film', 'GeoGebra', 'Visual Arts'],
    description: 'A short film created with GeoGebra for a final visual arts portfolio.',
    image: '/projects/court-metrage-geogebra.png', imageAlt: 'GeoGebra animated short film',
    medium: 'GeoGebra software',
    context: 'A short film made for the final portfolio of the visual arts option.',
  },
];


// Maximum number of latest projects previewed on the home page.
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
    degree: 'Bachelor’s Degree in Electronics, Sciences & Computer Foundations',
    school: 'Université Paris-Saclay',
    duration: 'Initial Curriculum',
    detail: 'Solid foundation in mathematics, algorithmics, C++ / C# programming logic, and computational modeling.',
  },
];
