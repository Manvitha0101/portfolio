// ── Navigation ────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Education',    href: '#education' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
];

// ── Skills ────────────────────────────────────────────
export const SKILLS = [
  {
    category: 'Languages',
    icon: 'code',
    color: '#818cf8',
    items: ['Python', 'Java', 'C', 'SQL', 'Dart', 'HTML/CSS', 'JavaScript'],
  },
  {
    category: 'Frontend',
    icon: 'monitor',
    color: '#38bdf8',
    items: ['React', 'Flutter', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: 'server',
    color: '#34d399',
    items: ['FastAPI', 'Node.js', 'REST API Design', 'Pydantic', 'asyncio', 'uvicorn'],
  },
  {
    category: 'Databases',
    icon: 'database',
    color: '#f59e0b',
    items: ['Firebase (Firestore)', 'SQLite', 'PostgreSQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: 'tool',
    color: '#a78bfa',
    items: ['Git', 'GitHub', 'Firebase Auth', 'FCM', 'Render', 'VS Code'],
  },
  {
    category: 'Core CS',
    icon: 'cpu',
    color: '#fb7185',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Computer Architecture'],
  },
];

// ── Projects ──────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'mediassure',
    title: 'MediAssure',
    subtitle: 'Healthcare Mobile App',
    emoji: '💊',
    problem:
      'Patients managing complex medication regimens frequently miss critical doses, leading to treatment failures and preventable health complications.',
    solution:
      'A cross-platform Android/iOS medication management app built with Flutter and a Firestore-backed data model. Stores per-user medication schedules, dosages, and refill thresholds — live for 50+ active users.',
    architecture:
      'Flutter frontend communicates with Firebase Auth for identity, Firestore for per-user data isolation via security rules, and FCM for push notification scheduling triggered 15 minutes before each dose time.',
    features: [
      'Firebase Auth (email/password) with scoped Firestore security rules',
      'FCM push notifications triggered 15 min before each dose',
      'Real-time refill threshold tracking across 300+ tracked problems',
      'Cross-platform Android & iOS from a single codebase',
    ],
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'FCM'],
    impact: 'Reduced missed-dose events by approximately 40% for active users.',
    github: 'https://github.com/manvitha0101',
    demo: null,
    featured: true,
  },
  {
    id: 'coding-tracker',
    title: 'Coding Progress Tracker',
    subtitle: 'Developer Analytics API',
    emoji: '📊',
    problem:
      'Developers solving competitive programming problems lack a unified tool to log activity, visualize streaks, and analyze per-topic performance over time.',
    solution:
      'A fully async REST API built with FastAPI and Python, exposing endpoints for logging solved problems, querying streaming data, and aggregating per-topic statistics. Uses SQLite in dev and PostgreSQL in production.',
    architecture:
      'FastAPI with async route handlers (asyncio + uvicorn) for high concurrency. Normalized schema in SQLite/PostgreSQL with tables for users, problems, topics, and daily submissions. Indexed lookups ensure queries return under 50ms average response time.',
    features: [
      'Async FastAPI endpoints with uvicorn for low-latency responses (<50ms)',
      'Normalized PostgreSQL schema with indexed per-topic queries',
      'Streak computation and daily submission aggregation',
      'OpenAPI-compliant REST interface with Pydantic validation',
    ],
    stack: ['Python', 'FastAPI', 'asyncio', 'SQLite', 'PostgreSQL', 'Pydantic'],
    impact: 'Achieves sub-50ms average query response time via indexed database lookups.',
    github: 'https://github.com/manvitha0101',
    demo: null,
    featured: true,
  },
];

// ── Experience ────────────────────────────────────────
export const EXPERIENCE = [
  {
    id: 'capabl',
    role: 'Software Development Intern',
    company: 'Capabl',
    type: 'Remote',
    period: 'Jun 2024 – Aug 2024',
    duration: '3 months',
    logo: '🚀',
    color: '#818cf8',
    summary:
      'Architected and deployed AcadeBot, a production-grade conversational AI assistant for student event management, integrating a FastAPI backend with an LLM API. The system serves responses via 50+ REST endpoints and is live at smart-timetable-2-0qch.onrender.com.',
    responsibilities: [
      'Architected and deployed AcadeBot — a conversational AI assistant for student event management — using FastAPI integrated with an LLM API, serving structured responses via 50+ REST endpoints.',
      'Built a schedule-tracking module that parses and stores structured event records (title, date, time, location, type), supporting personalized reminders and timed notifications delivered via webhook callbacks.',
      'Designed the end-to-end system independently: defined API contracts, implemented request/response models using Pydantic, and configured continuous deployment on Render from a GitHub repository.',
    ],
    stack: ['Python', 'FastAPI', 'LLM API', 'Pydantic', 'Render', 'REST APIs', 'GitHub Actions'],
    achievements: [
      '50+ production REST endpoints serving live traffic',
      'Independent end-to-end system design from API contracts to deployment',
      'Continuous deployment pipeline on Render via GitHub integration',
    ],
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
    grade: 'CGPA: 9.39 / 10.0',
    status: 'current',
    icon: '🎓',
    color: '#818cf8',
    highlights: ['Core CS fundamentals', 'Data Structures & Algorithms', 'Full Stack projects'],
  },
  {
    id: 'intermediate',
    institution: 'Sri Guru Junior College',
    short: 'Sri Guru Junior College, Hyderabad',
    degree: 'Intermediate — MPC',
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
    grade: 'CGPA: 10.0 / 10.0',
    status: 'completed',
    icon: '🏫',
    color: '#34d399',
    highlights: ['Perfect CGPA', 'Academic excellence award'],
  },
];

// ── Achievements ──────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    id: 'indathon',
    title: 'Indathon Hackathon',
    badge: 'Winner 🏆',
    badgeColor: '#f59e0b',
    description:
      'Built and presented an agentic AI system that placed first among competing teams at an institute-level hackathon focused on Agentic AI. Demonstrated end-to-end system design from prompt engineering to deployment.',
    icon: 'trophy',
    highlight: true,
  },
  {
    id: 'ciphercop',
    title: 'CipherCop National Hackathon',
    badge: 'National Finalist',
    badgeColor: '#818cf8',
    description:
      'Advanced to the national finals out of 200+ competing teams. Developed a security-focused solution under timed constraints, demonstrating strong problem-solving and rapid prototyping skills.',
    icon: 'shield',
    highlight: false,
  },
  {
    id: 'cp',
    title: 'Competitive Programming',
    badge: '300+ Problems',
    badgeColor: '#38bdf8',
    description:
      'Solved 300+ problems on LeetCode and CodingBat covering arrays, trees, graphs, dynamic programming, and binary search. LeetCode handle: manvithaa_01.',
    icon: 'code2',
    highlight: false,
  },
];

// ── Certifications ────────────────────────────────────
export const CERTIFICATIONS = [
  {
    title: 'Agentic AI (5-Day Intensive)',
    issuer: 'Google Kaggle',
    detail: 'Hands-on training building AI agents with tool use, RAG, and advanced LLM orchestration techniques.',
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
    description: 'Source code, project repositories, and open source contributions.',
    href: 'https://github.com/manvitha0101',
    color: '#f1f5f9',
    darkColor: '#f1f5f9',
  },
  {
    id: 'leetcode',
    platform: 'LeetCode',
    handle: 'manvithaa_01',
    description: '300+ problems solved covering arrays, trees, graphs, DP, and binary search.',
    href: 'https://leetcode.com/u/manvithaa_01/',
    color: '#fbbf24',
    darkColor: '#f59e0b',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'manvithabudidha',
    description: 'Professional network, internship experience, and career updates.',
    href: 'https://linkedin.com/in/manvithabudidha',
    color: '#0077b5',
    darkColor: '#38bdf8',
  },
];

// ── Contact ───────────────────────────────────────────
export const CONTACT = {
  email: 'manvithabudidha@gmail.com',

  github: 'https://github.com/manvitha0101',
  linkedin: 'https://linkedin.com/in/manvithabudidha',
};
