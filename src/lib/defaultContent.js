import saveLinkShot from "../pages/Home/components/assets/savelink.png";

// Fallback content, and the shape the dashboard writes to `/content`.
// Content is adapted from the CV.

export const defaultContent = {
  hero: {
    headline: [
      "I build web products",
      "and the connections",
      "between the systems",
      "businesses run on.",
    ],
    lede: "Full-stack developer with three years shipping React and Node applications, integrating ERP and CRM platforms, and automating the workflows in between. Working remotely with teams .",
  },

  profile: {
    name: "Donga Anelka",
    fullName: "Jaosoa Donga Anelka",
    role: "Full-stack developer & systems integrator",
    location: "Mahajanga, Madagascar",
    email: "jaosoadongaanelka@gmail.com",
    phone: "+261 32 48 556 19",
    linkedin: "https://www.linkedin.com/in/anelka-donga-289b8122a/",
    github: "https://github.com/Kanel0",
    availability: "Available for remote work",
  },

  work: [
    {
      kind: "Product · 2025",
      title: "Save-link",
      description:
        "A link manager built for speed: save a URL, tag it, find it again. Authentication, categories and real-time sync across devices.",
      stack: ["Next.js", "Firebase", "Tailwind CSS"],
      links: [
        { label: "Live site", href: "https://save-link-sigma.vercel.app" },
        { label: "Source", href: "https://github.com/Kanel0/save-link.git" },
      ],
      image: saveLinkShot,
    },
    {
      kind: "Integration · ELYONE",
      title: "HubSpot ↔ Sage 100",
      description:
        "A bidirectional bridge between a CRM and an accounting server: contacts and invoices move both ways, collisions are handled, every run is logged. A PHP admin screens the synchronisation history.",
      stack: ["React", "Node.js", "PHP", "MySQL", "Debian"],
      links: [],
    },
    {
      kind: "Platform · EduIQ",
      title: "Training-centre SaaS",
      description:
        "Frontend and backend features for a platform that centralises the pedagogical and administrative life of apprenticeship training centres in France.",
      stack: ["Next.js", "TypeScript", "Node.js", "Docker", "CI/CD"],
      links: [],
    },
  ],

  experience: [
    {
      period: "May 2026 — Present",
      role: "Full Stack Engineer",
      company: "EduIQ",
      place: "Freelance · France, remote",
      summary:
        "A unified SaaS platform for apprenticeship training centres (CFA), centralising pedagogical, administrative and organisational management.",
      points: [
        "Designed and built frontend and backend features with Next.js, TypeScript and Node.js.",
        "Set up CI/CD pipelines and Docker-based deployment.",
        "Administered Linux servers and configured Nginx.",
        "Managed versioning and team collaboration with Git.",
      ],
    },
    {
      period: "Dec 2025 — Mar 2026",
      role: "Freelance Web Developer",
      company: "ELYONE",
      place: "France, remote",
      summary:
        "A web application that synchronises and automates data between HubSpot CRM and a Sage 100 server.",
      points: [
        "Built the web interface with React.js and Node.js.",
        "Implemented communication between HubSpot CRM and Sage 100.",
        "Designed a PHP administration site to manage and monitor synchronisations.",
        "Managed MySQL databases and imported Excel data into SQL.",
        "Deployed on Debian with Nginx and interfaced with the Windows server hosting Sage 100.",
        "Automated tasks with Bash and SSH scripts; handled maintenance and performance tuning.",
      ],
    },
    {
      period: "Apr 2023 — Jul 2026",
      role: "Senior Full Stack Developer",
      company: "Bouana Service",
      place: "Fixed-term contract · Mahajanga",
      summary:
        "Responsive web applications and cross-platform desktop software for local businesses.",
      points: [
        "Built responsive, dynamic user interfaces with React JS and React TS.",
        "Developed modern web applications and cross-platform desktop applications with Electron JS.",
        "Developed server-side features with Node.js.",
        "Focused on code quality and meeting user needs.",
      ],
    },
    {
      period: "Nov 2024 — Jan 2025",
      role: "Frontend Developer",
      company: "Gasikara Digital",
      place: "Freelance · Mahajanga",
      summary:
        "React interfaces on top of Dolibarr ERP, with custom modules for specific business processes.",
      points: [
        "Designed intuitive, responsive interfaces with React JS.",
        "Integrated backend APIs to display dynamic data.",
        "Optimised performance and fixed bugs.",
        "Configured and adapted Dolibarr modules; developed custom features for business processes.",
      ],
    },
    {
      period: "Jan 2024 — Apr 2025",
      role: "Odoo Developer",
      company: "Majsoft",
      place: "Permanent contract · Mahajanga",
      summary:
        "Custom Odoo modules in Python, plus the support and backups that keep them running.",
      points: [
        "Built, customised and integrated Odoo solutions in Python for specific client needs.",
        "Configured and tested features; trained users and provided technical support.",
        "Managed Odoo backups: recovery strategies ensuring data security and integrity.",
        "Acted as the primary point of contact for support.",
      ],
    },
  ],

  capabilities: [
    {
      title: "Web products",
      description:
        "From interface to database: responsive React and Next.js apps, Node services, and Electron desktop tools.",
      items: ["React / Next.js", "Node.js", "Electron", "TypeScript"],
    },
    {
      title: "Systems integration",
      description:
        "Getting two systems that were never designed to meet to agree, in both directions, without losing a record.",
      items: ["HubSpot", "Sage 100", "Odoo", "Dolibarr"],
    },
    {
      title: "Automation & AI",
      description:
        "Workflows that remove the repetitive steps, and AI tools wired into real data through MCP.",
      items: ["n8n", "MCP", "Bash", "Docker"],
    },
  ],

  stack: [
    { label: "Languages", items: "JavaScript, TypeScript, Python, Dart, PHP, Bash, SQL" },
    { label: "Frameworks", items: "React.js, Next.js, Node.js, Electron.js, Flutter, Odoo, Dolibarr" },
    { label: "Automation & AI", items: "n8n, Model Context Protocol, OpenCode, Freebuff" },
    { label: "ERP / CRM", items: "Odoo, Dolibarr, Sage 100, HubSpot CRM" },
    { label: "Databases", items: "MySQL, PostgreSQL, MongoDB, Firebase" },
    { label: "DevOps", items: "Docker, CI/CD, Linux (Debian), Nginx, SSH, Git" },
    { label: "Design", items: "Figma, Canva, MVC" },
    { label: "Spoken", items: "French (fluent), English (professional)" },
  ],

  education: [
    { title: "Professional Bachelor's Degree", meta: "ISSTM, Mahajanga · 2019 — 2022" },
    { title: "Baccalaureate", meta: "Lycée privé Mahasoa, Mahajanga · 2018" },
  ],

  certifications: [
    { title: "Express in Code — React JS and Firebase", meta: "Mahajanga · July 2022" },
    { title: "Better Tomorrow — Flutter project", meta: "Antananarivo · August 2020" },
    { title: "Arduino Introduction", meta: "Mahajanga · December 2020" },
  ],

  community: [
    { title: "Organiser, Devfest 2022", meta: "Experience sharing with young people · Dec 2022" },
    { title: "Organiser, GDG Mahajanga", meta: "IT experience sharing · Nov 2020" },
    { title: "English Practice of Mahajanga", meta: "English communication · Apr 2021" },
  ],
};

export const contentKeys = Object.keys(defaultContent);

// Fill in any section missing from the database with the local default,
// so a partially saved document never blanks the site.
export function normalizeContent(value) {
  if (!value || typeof value !== "object") return defaultContent;
  const merged = { ...defaultContent };
  contentKeys.forEach((key) => {
    const next = value[key];
    if (Array.isArray(next) && next.length > 0) merged[key] = next;
    else if (!Array.isArray(next) && next && typeof next === "object") {
      merged[key] = { ...defaultContent[key], ...next };
    }
  });
  return merged;
}
