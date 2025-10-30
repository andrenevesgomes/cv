import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "André Gomes",
  initials: "AG",
  location: "Lisbon, Portugal,",
  locationLink: "https://www.google.com/maps/place/Lisbon",
  about: "Technical Product Owner & Senior Engineer driving organizational excellence through strategic leadership and hands-on development.",
  summary: (
    <>
      Technical Product Owner and Senior Software Engineer with 6+ years shipping enterprise-grade solutions across multi-disciplinary roles. 
      Microsoft ecosystem expert (C#/.NET, Azure DevOps, Power BI) with proven track record of consistently delivering complex projects while 
      simultaneously managing cross-functional teams, technical architecture, and product strategy. Unique combination of hands-on engineering 
      excellence and strategic product ownership that drives organizational scaling, operational efficiency, and measurable business impact.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/48434290?v=4",
  personalWebsiteUrl: "https://andrenevesgomes.is-a.dev",
  contact: {
    email: "andreneves.gomes@proton.me",
    // OPTIONAL tel: "+351911130182",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/andrenevesgomes",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andreneves-gomes/",
        icon: "linkedin",
      },
      {
        name: "Behance",
        url: "https://www.behance.net/theandregomes",
        icon: "behance",
      },
      {
        name: "Medium",
        url: "https://medium.com/@andreneves.gomes",
        icon: "medium",
      },
    ],
  },
  education: [
    {
      school: "Instituto Superior de Tecnologias Avançadas (ISTEC)",
      degree: "Bachelor's Degree in Multimedia Engineering",
      start: "2019",
      end: "2021",
    },
  ],
  work: [
    {
      company: "main hub_",
      link: "https://www.mainhub.pt/",
      badges: ["Hybrid", "C#", "Azure DevOps", "Power BI", "Teams Integration"],
      title: "Senior Software Engineer & Technical Product Owner",
      start: "2024",
      end: null,
      description: (
        <>
          Full-stack engineer and technical product owner driving cross-functional collaboration, process optimization, and team coordination to accelerate product delivery and enhance development workflows.
          <ul className="list-inside list-disc">
            <li>
              Architected CI/CD automation in Azure DevOps with custom Microsoft Teams integration pipelines for PR notifications and deployment status, significantly improving team communication and code review processes
            </li>
            <li>
              Lead user story creation and task organization while building scalable C# backend services and translating product requirements from Figma into production-ready responsive interfaces
            </li>
            <li>
              Enabled data-driven decision making through SQL-powered Power BI analytics while establishing development workflow standards and infrastructure consistency using containerization technologies
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Altyra Solutions",
      link: "https://altyra.com/",
      badges: ["Hybrid", "Project Management", "C#", "Angular", "Quality Assurance", "IT Operations"],
      title: "Project Manager, Full-Stack Developer & IT Operations Specialist",
      start: "2019",
      end: "2024",
      description: (
        <>
          Multi-disciplinary technical leader successfully managing concurrent roles as Project Manager, Full-Stack Developer, and IT Operations specialist across 5+ years, demonstrating exceptional versatility and organizational impact across diverse technology initiatives.
          <ul className="list-inside list-disc">
            <li>
              Simultaneously orchestrated multiple cross-functional teams and high-stakes client relationships while maintaining hands-on development responsibilities, delivering 100% project success rate across government and enterprise sectors
            </li>
            <li>
              Built comprehensive full-stack solutions using C#/.NET, Angular, and modern web technologies, while establishing quality assurance frameworks and technical support systems that enabled organizational scaling and operational excellence
            </li>
            <li>
              Championed knowledge transfer through extensive mentoring programs and continuous conference participation, fostering next-generation developer talent while maintaining cutting-edge technical expertise in emerging technologies and industry best practices
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Escape to Your Future",
      link: "https://escapetoyourfuture.eu/",
      badges: [
        "Freelance",
        "WordPress",
        "Adobe XD",
        "Adobe Illustrator",
        "Brand Design",
        "EU Project",
        "University Project",
      ],
      title: "WordPress Developer & Brand Designer",
      start: "2020",
      end: "2021",
      description: (
        <>
          Lead designer and developer for Erasmus+ Strategic Partnership project focused on youth social inclusion and employability through gamification and game-based learning methodologies.
          <ul className="list-inside list-disc">
            <li>
              Single-handedly designed complete brand identity including logo, brand guidelines, and comprehensive brand manual for this 18-month European Union youth initiative
            </li>
            <li>
              Built and launched live European Union project website using WordPress, maintaining active status since completion with zero modifications required, demonstrating robust architecture and design excellence
            </li>
            <li>
              Delivered award-winning end-to-end solution using Adobe Creative Suite (XD, Illustrator, Photoshop) as university final project, achieving exceptional academic recognition for multimedia engineering capabilities
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Brighten Consulting",
      link: "https://brightenconsulting.com/en/homepage/",
      badges: ["On Site", "SAP ABAP", "Enterprise Systems", "Internship"],
      title: "SAP ABAP Developer Intern",
      start: "2019",
      end: "2019",
      description: (
        <>
          Software development internship focused on enterprise SAP solutions, demonstrating strong adherence to corporate standards and continuous learning in enterprise software development.
          <ul className="list-inside list-disc">
            <li>
              Developed enterprise applications using SAP ABAP technology, gaining hands-on experience with mission-critical business systems and enterprise-grade development practices
            </li>
            <li>
              Maintained strict compliance with all company rules and contract guidelines, demonstrating professionalism and reliability in corporate environment
            </li>
            <li>
              Continuously acquired theoretical and practical competencies relevant to enterprise software development and industry best practices, showing strong learning agility and technical growth
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Technical Product Ownership",
    "Multi-disciplinary Leadership",
    "Azure DevOps & CI/CD Automation",
    "C#/.NET Enterprise Development",
    "Cross-functional Team Orchestration",
    "Stakeholder Management",
    "Process Optimization & Scaling",
    "Power BI & Data-Driven Analytics",
    "Microsoft Teams Integration",
    "Angular/TypeScript",
    "Quality Assurance Frameworks",
    "Agile & Scrum Methodologies",
    "Enterprise Architecture Design",
    "Project Delivery Excellence",
    "Continuous Learning & Mentoring",
  ],
  projects: [
    {
      title: "Multi-File Creator - VS Code Extension",
      techStack: ["TypeScript", "VS Code API", "Node.js", "Extension Development"],
      description:
        "Published VS Code extension streamlining developer workflows by enabling rapid creation of multiple files through comma-separated input. Features context-aware targeting, customizable hotkeys, and seamless workspace integration with 32+ installs on VS Code Marketplace.",
      link: {
        label: "VS Code Marketplace",
        href: "https://marketplace.visualstudio.com/items?itemName=TheAndreGomes.multi-file-creator",
      },
    },
    {
      title: "IBAN Fresquinho - Portuguese Banking Tool",
      techStack: ["JavaScript", "HTML5", "CSS3", "Financial APIs", "PWA"],
      description:
        "Production-ready Portuguese IBAN generator for fintech development and testing. Implements complete IBAN validation algorithm with mod-97 checksum calculation, supporting all major Portuguese banks. Used by developers for financial software testing and demonstrations.",
      link: {
        label: "Live Application",
        href: "https://andrenevesgomes.github.io/iban-fresquinho/",
      },
    },
    {
      title: "Escape to Your Future - EU Project Documentation",
      techStack: ["Project Management", "Technical Documentation", "Academic Research", "Brand Design"],
      description:
        "Comprehensive university capstone project documenting 18-month Erasmus+ Strategic Partnership initiative. Includes complete technical specifications, brand manuals, and academic research achieving 17/20 classification. Demonstrates project documentation excellence and European collaboration.",
      link: {
        label: "Project Repository",
        href: "https://github.com/andrenevesgomes/Projecto-Global",
      },
    },
    {
      title: "Discord User Pick Bot",
      techStack: ["Python", "Discord.py", "API Integration", "Bot Development"],
      description:
        "Production Discord bot for automated community management with random user selection from voice channels. Demonstrates API integration, real-time communication handling, and automated moderation capabilities for online communities.",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/andrenevesgomes/discord-user-pick",
      },
    },
    {
      title: "Catch The Button - Interactive Game",
      techStack: ["JavaScript", "Anime.js", "jQuery", "Interactive Design"],
      description:
        "Engaging browser-based interactive game showcasing advanced animation programming and user experience design. Features responsive gameplay mechanics, smooth animations, and cross-device compatibility with creative Easter egg functionality.",
      link: {
        label: "Play Game",
        href: "https://andrenevesgomes.github.io/Catch-The-Button/",
      },
    },
  ],
} as const;
