// ── Navigation ────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Education',    href: '#education' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
];

// ── Skills ────────────────────────────────────────────
export const SKILLS = [
  {
    category: 'Languages',
    icon: 'code',
    color: '#818cf8',
    items: ['Python', 'Java', 'C', 'SQL', 'JavaScript', 'HTML/CSS', 'Dart'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: 'monitor',
    color: '#38bdf8',
    items: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'Flutter'],
  },
  {
    category: 'Databases & Tools',
    icon: 'database',
    color: '#f59e0b',
    items: ['PostgreSQL', 'Redis', 'Firebase (Firestore)', 'Prisma', 'Git', 'GitHub', 'REST APIs'],
  },
  {
    category: 'AI & Platforms',
    icon: 'server',
    color: '#34d399',
    items: ['Gemini API', 'Google ADK', 'Tool Calling', 'MCP', 'Multi-Agent Systems', 'Firebase Auth', 'FCM'],
  },
  {
    category: 'Core CS',
    icon: 'cpu',
    color: '#fb7185',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS'],
  },
];

// ── Projects ──────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'smartroute',
    title: 'SmartRoute',
    subtitle: 'Delivery Route Optimization',
    emoji: '🚚',
    problem:
      'Logistics fleets face high operational costs and delayed order dispatches due to sub-optimal route planning, vehicle capacity bottlenecks, and inaccurate travel-time estimations across complex urban delivery zones.',
    solution:
      'A full-stack delivery route optimization platform built with React, Node.js, Express.js, and PostgreSQL using Prisma. Implements a capacity-aware greedy nearest-neighbor algorithm using the Haversine formula to assign delivery orders to vehicles, complete with route-distance and estimated-duration calculations.',
    architecture:
      'React frontend communicates with a modular Node.js and Express.js REST API layer backed by PostgreSQL via Prisma ORM. Implements a capacity-aware greedy nearest-neighbor algorithm using the Haversine formula for spherical distance and route-duration calculations, benchmarking the greedy solution against a randomized baseline to identify unassigned orders based on vehicle capacity constraints.',
    features: [
      'Built REST APIs for warehouse, vehicle, driver, and delivery management',
      'Implemented capacity-aware greedy nearest-neighbor algorithm using Haversine formula',
      'Calculates accurate route-distances and estimated trip durations',
      'Optimizes route assignment by benchmarking against a randomized baseline',
      'Identifies unassigned orders dynamically when vehicle capacity limits are reached',
      'Structured PostgreSQL database schemas managed with Prisma ORM',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'REST APIs'],
    impact: 'Optimizes order dispatching and vehicle capacity utilization while reducing total route distances.',
    github: 'https://github.com/manvitha0101',
    demo: null,
    featured: true,
  },
  {
    id: 'mediassure',
    title: 'MediAssure',
    subtitle: 'Healthcare Mobile App',
    emoji: '💊',
    problem:
      'Patients managing complex medication regimens frequently miss critical doses and struggle to track refill thresholds, leading to treatment failures and preventable health complications.',
    solution:
      'A cross-platform (Android/iOS) medication management app built with Flutter and a Firestore-backed schema storing per-user schedules, dosages, and refill thresholds; enforced data isolation via Firebase Auth UID-scoped security rules.',
    architecture:
      'Cross-platform Flutter frontend communicates directly with Firebase Auth for secure user identification, Cloud Firestore for fine-grained per-user schedule storage and isolation, and Firebase Cloud Messaging (FCM) to deliver push notifications 15 minutes before each dose.',
    features: [
      'Cross-platform mobile application (Android/iOS) from a single Flutter codebase',
      'Firestore-backed schema storing per-user schedules, dosages, and refill thresholds',
      'Enforced data isolation via Firebase Auth UID-scoped security rules',
      'Integrated Firebase Cloud Messaging (FCM) to deliver push notifications 15 minutes before each dose',
      'Proactive refill threshold tracking to ensure uninterrupted prescriptions',
    ],
    stack: ['Flutter', 'Firebase Auth', 'Firestore', 'FCM', 'Dart'],
    impact: 'Dispatches automated push reminders 15 minutes prior to doses, improving medication adherence.',
    github: 'https://github.com/manvitha0101',
    demo: null,
    featured: true,
  },
  {
    id: 'stylespeak',
    title: 'StyleSpeak',
    subtitle: 'AI Outfit Recommendation System',
    emoji: '👗',
    problem:
      'Shoppers struggle to find outfits that properly satisfy multiple subjective and situational constraints simultaneously, such as event dress codes, personal budgets, and prevailing weather conditions.',
    solution:
      'A full-stack outfit recommendation app with a React.js frontend and FastAPI backend, integrating Gemini API to generate constraint-aware style suggestions based on user inputs (occasion, budget, weather).',
    architecture:
      'React.js frontend transmits structured constraint criteria to a high-speed Python FastAPI backend. The API designs and routes structured prompts to the Google Gemini API, parsing recommendations with transparent reasoning traces returned directly to the UI.',
    features: [
      'Full-stack architecture featuring a React.js frontend and Python FastAPI backend',
      'Gemini API integration generating constraint-aware style recommendations',
      'Dynamic multi-constraint handling based on occasion, budget, and local weather',
      'Designed REST endpoints routing structured prompts and returning parsed suggestions with reasoning traces',
      'Developed and submitted as a featured project for the FlowZint Hackathon',
    ],
    stack: ['Python', 'FastAPI', 'React.js', 'Gemini API', 'REST APIs', 'Vercel'],
    impact: 'Generates explainable, context-aware outfit recommendations tailored to user-specified constraints.',
    github: 'https://github.com/manvitha0101',
    demo: 'https://style-speak-frontend.vercel.app/',
    featured: true,
  },
];

// ── Education ─────────────────────────────────────────
export const EDUCATION = [
  {
    id: 'gnits',
    institution: 'G. Narayanamma Institute of Technology and Science',
    short: 'GNITS, Hyderabad',
    degree: 'B.Tech in Information Technology',
    period: '2024 – 2028',
    grade: 'Current CGPA: 9.38 / 10',
    status: 'current',
    icon: '🎓',
    color: '#818cf8',
    highlights: ['Core CS fundamentals', 'Data Structures & Algorithms', 'Full Stack & Backend Projects'],
  },
  {
    id: 'intermediate',
    institution: 'Sri Guru Junior College',
    short: 'Sri Guru Junior College, Hyderabad',
    degree: 'Intermediate (MPC)',
    period: '2022 – 2024',
    grade: '98.2%',
    status: 'completed',
    icon: '📚',
    color: '#38bdf8',
    highlights: ['Mathematics, Physics, Chemistry', 'State Board distinction'],
  },
  {
    id: 'ssc',
    institution: 'New Vision High School',
    short: 'New Vision High School, Suryapet',
    degree: 'Secondary School Certificate (SSC)',
    period: '2022',
    grade: 'CGPA: 10 / 10',
    status: 'completed',
    icon: '🏫',
    color: '#34d399',
    highlights: ['Perfect 10/10 CGPA', 'Academic excellence award'],
  },
];

// ── Achievements ──────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    id: 'scholarship',
    title: 'Laxmi Charities Academic Excellence Scholarship',
    badge: '4-Year Scholarship 🏅',
    badgeColor: '#f59e0b',
    description:
      'Awarded a prestigious four-year scholarship of INR 50,000 annually in recognition of sustained academic excellence.',
    icon: 'award',
    highlight: true,
  },
  {
    id: 'adobe',
    title: 'Adobe Hackathon',
    badge: 'Round 2 Shortlist 🚀',
    badgeColor: '#ef4444',
    description:
      'Advanced to Round 2; shortlisted from 2,00,000+ participants nationwide in a highly competitive national contest.',
    icon: 'trophy',
    highlight: false,
  },
  {
    id: 'ciphercop',
    title: 'CipherCop National Hackathon',
    badge: '3rd Runner-Up 🥉',
    badgeColor: '#818cf8',
    description:
      'Secured 3rd Runner-Up, shortlisted among 500+ participants in a national-level cybersecurity hackathon.',
    icon: 'shield',
    highlight: false,
  },
  {
    id: 'flowzint',
    title: 'FlowZint Hackathon',
    badge: 'StyleSpeak Creator 💡',
    badgeColor: '#10b981',
    description:
      'Developed and submitted StyleSpeak, an AI-powered outfit recommendation system integrating Google Gemini API with reasoning traces.',
    icon: 'code2',
    highlight: false,
  },
  {
    id: 'cp',
    title: 'Competitive Programming',
    badge: '300+ Problems ⚡',
    badgeColor: '#38bdf8',
    description:
      'Solved 300+ problems across LeetCode and CodeChef covering arrays, trees, graphs, dynamic programming, and binary search.',
    icon: 'code2',
    highlight: false,
  },
];

// ── Technical Programs & Certifications ───────────────
export const CERTIFICATIONS = [
  {
    title: 'Google × Kaggle – 5-Day AI Agents Intensive Program',
    issuer: 'Google × Kaggle',
    detail: 'Hands-on program covering AI agent development, Google ADK, Gemini, tool calling, Model Context Protocol (MCP), multi-agent systems, and agent evaluation.',
    color: '#4285F4',
    year: '2024',
  },
  {
    title: 'AI Cybersecurity Fundamentals',
    issuer: 'IBM',
    detail: 'Core principles of AI-driven cybersecurity, threat modeling, zero-trust architecture, and digital defense strategies.',
    color: '#006699',
    year: '2024',
  },
  {
    title: 'AI Essentials',
    issuer: 'Google',
    detail: 'Foundational AI/ML concepts, Gemini API usage, prompt engineering, and real-world application development.',
    color: '#EA4335',
    year: '2024',
  },
];

// ── Coding Profiles ───────────────────────────────────
export const CODING_PROFILES = [
  {
    id: 'github',
    platform: 'GitHub',
    handle: '@manvitha0101',
    description: 'Source code, open-source repositories, and full-stack software implementations.',
    href: 'https://github.com/manvitha0101',
    color: '#f1f5f9',
    darkColor: '#f1f5f9',
  },
  {
    id: 'leetcode',
    platform: 'LeetCode',
    handle: 'manvithaa_01',
    description: '300+ problems solved across arrays, trees, graphs, DP, and binary search.',
    href: 'https://leetcode.com/u/manvithaa_01/',
    color: '#fbbf24',
    darkColor: '#f59e0b',
  },
  {
    id: 'codechef',
    platform: 'CodeChef',
    handle: 'manvithaa_01',
    description: 'Competitive programming contest participation and algorithmic problem solving.',
    href: 'https://www.codechef.com/users/manvithaa_01',
    color: '#d97706',
    darkColor: '#b45309',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'manvithabudidha',
    description: 'Professional network, academic milestones, and engineering project updates.',
    href: 'https://linkedin.com/in/manvithabudidha',
    color: '#0077b5',
    darkColor: '#38bdf8',
  },
];

// ── Contact ───────────────────────────────────────────
export const CONTACT = {
  phone: '+91 8639414175',
  email: 'manvithabudidha@gmail.com',
  github: 'https://github.com/manvitha0101',
  linkedin: 'https://linkedin.com/in/manvithabudidha',
  leetcode: 'https://leetcode.com/u/manvithaa_01/',
  codechef: 'https://www.codechef.com/users/manvithaa_01',
};
