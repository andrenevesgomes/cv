import type { ResumeData } from "@/lib/types";

export const RESUME_DATA_PT: ResumeData = {
  name: "André Gomes",
  initials: "AG",
  location: "Lisboa, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisboa",
  about:
    "Technical Product Owner e Engenheiro de Software Sénior impulsionando a excelência organizacional através de liderança estratégica e desenvolvimento prático.",
  summary: (
    <>
      Technical Product Owner e Engenheiro de Software Sénior com mais de 6 anos
      a entregar soluções empresariais em funções multidisciplinares.
      Especialista no ecossistema Microsoft (C#/.NET, Azure DevOps, Power BI)
      com provas dadas na entrega consistente de projetos complexos, ao mesmo
      tempo que gere equipas multifuncionais, arquitetura técnica e estratégia
      de produto. Uma combinação única de excelência de engenharia prática e
      Ownership estratégico de produto que impulsiona o crescimento
      organizacional, a eficiência operacional e um impacto considerável nos
      negócios.
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
      degree: "Licenciatura em Engenharia Multimédia",
      start: "2019",
      end: "2021",
    },
  ],
  work: [
    {
      company: "main hub_",
      link: "https://www.mainhub.pt/",
      badges: [
        "Híbrido",
        "C#",
        "Blazor",
        "Tailwind CSS",
        "Azure DevOps",
        "Power BI",
        "Tech Lead",
      ],
      title: "Senior Software Engineer & Technical Product Owner",
      start: "2024",
      end: null,
      description: (
        <>
          Engenheiro full-stack e product owner técnico focado na promoção de
          colaboração multifuncional, otimização de processos e coordenação de
          equipas. Líder de iniciativas de transformação digital e modernização
          de stacks tecnológicas para clientes empresariais.
          <ul className="list-inside list-disc">
            <li>
              Liderou a transformação digital completa da Optimize Investment
              Partners, modernizando a stack tecnológica com Blazor, Tailwind
              CSS e ícones Lucide, enquanto geria uma equipa dedicada e
              coordenava estratégias de API multifuncionais.
            </li>
            <li>
              Desenhou de forma célere, prototipou e entregou com enorme sucesso
              Provas de Conceito (PoCs) para 5 plataformas operacionais
              distintas (Portais de Cliente, Parceiro, Consultor, Negócio e
              Interno) em menos de 4 semanas, garantindo aprovação executiva do
              CEO.
            </li>
            <li>
              Arquitetou automação de CI/CD no Azure DevOps com integrações
              personalizadas do Microsoft Teams para notificações de PRs e
              estado de deployment, melhorando significativamente a comunicação
              da equipa e os processos de revisão de código.
            </li>
            <li>
              Possibilitou a tomada de decisões baseada em dados (data-driven)
              através de análises Power BI baseadas em SQL, enquanto estabelecia
              padrões de desenvolvimento e consistência de infraestrutura usando
              tecnologias de contentorização.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Altyra Solutions",
      link: "https://altyra.com/",
      badges: [
        "Híbrido",
        "Gestão de Projetos",
        "C#",
        "Angular",
        "Quality Assurance",
        "IT Operations",
      ],
      title:
        "Gestor de Projetos, Full-Stack Developer & Especialista de IT Operations",
      start: "2019",
      end: "2024",
      description: (
        <>
          Líder técnico multidisciplinar, gerindo com sucesso cargos simultâneos
          como Gestor de Projetos, Developer Full-Stack e Especialista em
          Operações de TI (IT Operations) durante mais de 5 anos, demonstrando
          excecional versatilidade e impacto organizacional em diversas
          iniciativas tecnológicas.
          <ul className="list-inside list-disc">
            <li>
              Orquestrou simultaneamente várias equipas multifuncionais e
              relacionamentos com clientes de alta prioridade, mantendo
              responsabilidades de desenvolvimento prático e entregando 100% de
              taxa de sucesso em projetos com os setores governamental e
              empresarial.
            </li>
            <li>
              Construiu soluções full-stack muito completas utilizando C#/.NET,
              Angular e tecnologias web modernas, ao mesmo tempo que estabeleceu
              frameworks de garantia de qualidade ("Quality Assurance") e
              sistemas de apoio técnico para permitir a escalabilidade da
              organização e excelência operacional.
            </li>
            <li>
              Promoveu a partilha de conhecimentos e "knowledge transfer"
              através de programas extensivos de mentoria, impulsionando a
              próxima geração de developers da empresa enquanto mantinha
              especialização de ponta em novas tecnologias e melhores práticas
              da indústria.
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
        "Projeto Europeu",
        "Projeto Universitário",
      ],
      title: "WordPress Developer & Brand Designer",
      start: "2020",
      end: "2021",
      description: (
        <>
          Designer e developer principal de um projeto de Parceria Estratégica
          Erasmus+ focado na inclusão social e empregabilidade jovem através de
          gamification e metodologias de aprendizagem em forma de jogo.
          <ul className="list-inside list-disc">
            <li>
              Desenhou de forma independente a identidade de marca completa
              incluindo logótipo, guidelines de marca e manual de marca
              compreensivo para esta iniciativa de 18 meses da União Europeia.
            </li>
            <li>
              Construiu e lançou o website do projeto da União Europeia
              utilizando WordPress, mantendo o estado ativo desde a conclusão
              com zero modificações necessárias, demonstrando arquitetura
              robusta e excelência de design.
            </li>
            <li>
              Entregou uma solução de ponta-a-ponta premiada utilizando Adobe
              Creative Suite (XD, Illustrator, Photoshop) como projeto final
              universitário, alcançando reconhecimento académico excecional
              pelas capacidades de engenharia multimédia.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Brighten Consulting",
      link: "https://brightenconsulting.com/en/homepage/",
      badges: ["Presencial", "SAP ABAP", "Enterprise Systems", "Estágio"],
      title: "SAP ABAP Developer Intern",
      start: "2019",
      end: "2019",
      description: (
        <>
          Estágio de desenvolvimento de software focado em soluções empresariais
          SAP, demonstrando forte adesão aos standards corporativos e
          aprendizagem contínua em desenvolvimento de software empresarial.
          <ul className="list-inside list-disc">
            <li>
              Desenvolveu aplicações empresariais utilizando tecnologia SAP
              ABAP, adquirindo experiência hands-on com sistemas de negócio de
              missão crítica e práticas de desenvolvimento de nível enterprise.
            </li>
            <li>
              Manteve rigoroso cumprimento de todas as diretrizes da empresa e
              contrato, demonstrando profissionalismo e resiliência em ambiente
              corporativo.
            </li>
            <li>
              Adquiriu de forma contínua competências teóricas e práticas
              relevantes para desenvolvimento de software enterprise e melhores
              práticas da indústria, evidenciando forte agilidade de
              aprendizagem.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Technical Product Ownership",
    "Liderança Multidisciplinar",
    "Automação de CI/CD & Azure DevOps",
    "Desenvolvimento Enterprise em C#/.NET",
    "Orquestração de Equipas Multifuncionais",
    "Gestão de Stakeholders",
    "Otimização e Escalabilidade de Processos",
    "Power BI & Analytics",
    "Integrações Microsoft Teams",
    "Angular/TypeScript",
    "Frameworks de Quality Assurance",
    "Metodologias Ágeis e Scrum",
    "Desenho de Arquitetura Enterprise",
    "Excelência na Entrega de Projetos",
    "Mentoria e Aprendizagem Contínua",
  ],
  projects: [
    {
      title: "Encher Chouriços - PT Lorem Ipsum",
      techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS"],
      description:
        "Um gerador português de lorem ipsum satírico e altamente bem sucedido que substitui o tradicional Latim por expressões e referências culturais nacionais. Inclui um modo de 'intensidade' customizável, dark mode e componentes dinâmicos. Construído por diversão para interagir com a comunidade, alcançando mediatismo a nível nacional no LinkedIn.",
      link: {
        label: "Aplicação Live",
        href: "https://encher-chouricos.vercel.app/",
      },
    },
    {
      title: "Multi-File Creator - Extensão VS Code",
      techStack: [
        "TypeScript",
        "API do VS Code",
        "Node.js",
        "Desenvolvimento de Extensões",
      ],
      description:
        "Extensão para o VS Code publicada com o objetivo de agilizar os fluxos de trabalho de developers via criação rápida de múltiplos ficheiros utilizando input separado por vírgulas. Apresenta contexto inteligente a criar ficheiros, hotkeys costumizáveis e integração simples com dezenas de instalações ativas no VS Code Marketplace.",
      link: {
        label: "Marketplace do VS Code",
        href: "https://marketplace.visualstudio.com/items?itemName=TheAndreGomes.multi-file-creator",
      },
    },
    {
      title: "IBAN Fresquinho - Ferramenta Bancária Portuguesa",
      techStack: ["JavaScript", "HTML5", "CSS3", "APIs Financeiras", "PWA"],
      description:
        "Gerador português de IBANs em ambiente local de fácil uso para desenvolvimento e testes de fintech. Implementa validação completa de algoritmos IBAN com o cálculo de checksum mod-97, suportando as maiores entidades bancárias portuguesas. Permite rápida criação de simulacros para teste de software bancário.",
      link: {
        label: "Aplicação Live",
        href: "https://iban-fresquinho.vercel.app",
      },
    },
    {
      title: "Escape to Your Future - Projeto Europeu",
      techStack: [
        "Gestão de Projetos",
        "Documentação Técnica",
        "Investigação Académica",
        "Brand Design",
      ],
      description:
        "Projeto final de vertente universitária documentando a iniciativa Erasmus+ Strategic Partnership que durou 18 meses. Inclui especificações técnicas completas, manuais de marca de ponta a ponta e investigação académica garantindo uma classificação de 17 valores em 20. Demonstra clara excelência de conceção técnica e coordenação Europeia.",
      link: {
        label: "Repositório do Projeto",
        href: "https://github.com/andrenevesgomes/Projecto-Global",
      },
    },
    {
      title: "Discord User Pick Bot",
      techStack: [
        "Python",
        "Discord.py",
        "API Integration",
        "Desenvolvimento de Bots",
      ],
      description:
        "Simples e automatizado bot para Discord de gestão comunitária focado na escolha aleatória de pessoas em salas de conversação por voz. Exibe forte conhecimento de integração de API's, gestão em tempo real de comunicações em salas e manipulação inteligente de bots online.",
      link: {
        label: "Repositório GitHub",
        href: "https://github.com/andrenevesgomes/discord-user-pick",
      },
    },
    {
      title: "Catch The Button - Jogo Interativo",
      techStack: ["JavaScript", "Anime.js", "jQuery", "Design Interativo"],
      description:
        "Um cativante e interativo jogo browser baseado em destreza em animações complexas em conjugação com a experiência e usabilidade de utilizador. Oferece mecânicas de resiliência a ecrãs responsivos e de dimensões adaptadas combinadas com compatibilidade entre dispositivos e pequenas surpresas criativas na vertente visual.",
      link: {
        label: "Jogar em janela Browser",
        href: "https://andrenevesgomes.github.io/Catch-The-Button/",
      },
    },
  ],
} as const;
