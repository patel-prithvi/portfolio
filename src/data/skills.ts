export type SkillCategory = 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  slug: string; // simple-icons slug or icon key
  color: string; // Hex accent color
  description: string;
}

export const skillCategories: SkillCategory[] = [
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'Tools',
];

export const skills: Skill[] = [
  // Languages
  {
    name: 'Java',
    category: 'Languages',
    slug: 'openjdk',
    color: '#ED8B00',
    description: 'Object-Oriented Programming, Data Structures, JDBC & Multi-threading',
  },
  {
    name: 'Python',
    category: 'Languages',
    slug: 'python',
    color: '#3776AB',
    description: 'Full-stack web frameworks, AI/ML pipelines, scripting & automation',
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    slug: 'javascript',
    color: '#F7DF1E',
    description: 'ES6+, Asynchronous programming, DOM manipulation & client-side logic',
  },
  {
    name: 'SQL',
    category: 'Languages',
    slug: 'sqlite',
    color: '#003B57',
    description: 'Relational schema design, stored procedures, joins & query optimization',
  },

  // Frontend
  {
    name: 'HTML',
    category: 'Frontend',
    slug: 'html5',
    color: '#E34F26',
    description: 'Semantic markup, accessibility (a11y), SEO & document structuring',
  },
  {
    name: 'CSS',
    category: 'Frontend',
    slug: 'css3',
    color: '#1572B6',
    description: 'Custom styling, Flexbox, Grid, CSS animations & media queries',
  },
  {
    name: 'React.js',
    category: 'Frontend',
    slug: 'react',
    color: '#61DAFB',
    description: 'Component architecture, Hooks, State management & dynamic UI rendering',
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    slug: 'bootstrap',
    color: '#7952B3',
    description: 'Responsive layout systems, UI component kits & rapid prototyping',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    slug: 'tailwindcss',
    color: '#06B6D4',
    description: 'Utility-first styling, glassmorphism, responsive design tokens & custom themes',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    slug: 'nodedotjs',
    color: '#5FA04E',
    description: 'Non-blocking I/O event loop, runtime server architecture & API development',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    slug: 'express',
    color: '#ffffff',
    description: 'RESTful API routing, middleware integration & HTTP service handling',
  },
  {
    name: 'Django',
    category: 'Backend',
    slug: 'django',
    color: '#092E20',
    description: 'High-level Python web framework, ORM, authentication & admin panel',
  },
  {
    name: 'Flask',
    category: 'Backend',
    slug: 'flask',
    color: '#ffffff',
    description: 'Lightweight microservices, session management & REST API endpoints',
  },
  {
    name: 'Streamlit',
    category: 'Backend',
    slug: 'streamlit',
    color: '#FF4B4B',
    description: 'Data app prototyping, interactive AI dashboards & model deployment',
  },

  // Databases
  {
    name: 'MongoDB',
    category: 'Databases',
    slug: 'mongodb',
    color: '#47A248',
    description: 'NoSQL document database, aggregation pipelines & flexible schemas',
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    slug: 'postgresql',
    color: '#4169E1',
    description: 'Enterprise relational database, ACID compliance & complex relational queries',
  },
  {
    name: 'MySQL',
    category: 'Databases',
    slug: 'mysql',
    color: '#4479A1',
    description: 'Relational database management, stored procedures & index optimization',
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    slug: 'git',
    color: '#F05032',
    description: 'Distributed version control, branching strategies & commit history',
  },
  {
    name: 'GitHub',
    category: 'Tools',
    slug: 'github',
    color: '#ffffff',
    description: 'Repository hosting, collaborative code reviews & CI/CD workflows',
  },
  {
    name: 'VS Code',
    category: 'Tools',
    slug: 'visualstudiocode',
    color: '#007ACC',
    description: 'Primary IDE, debugging extensions, linting & snippet shortcuts',
  },
  {
    name: 'Postman',
    category: 'Tools',
    slug: 'postman',
    color: '#FF6C37',
    description: 'API testing, endpoint documentation & collection automation',
  },
  {
    name: 'Maven',
    category: 'Tools',
    slug: 'apachemaven',
    color: '#C71A36',
    description: 'Java build automation, dependency management & lifecycle phases',
  },
  {
    name: 'JDBC',
    category: 'Tools',
    slug: 'oracle',
    color: '#F80000',
    description: 'Java Database Connectivity API for relational SQL database access',
  },
  {
    name: 'npm',
    category: 'Tools',
    slug: 'npm',
    color: '#CB3837',
    description: 'Node Package Manager, script execution & module management',
  },
];
