export const translations = {
  pt: {
    role: [
      "Desenvolvedor Fullstack...",
      "Engenheiro de Automação...",
      "Especialidade em Backend...",
      "Suporte de computação...",
    ],
    navAbout: "Sobre mim",
    navProjects: "Projetos",
    navContact: "Contato",
    navExperience: "Experiências",
    sectionAboutTitle: "Sobre mim",
    sectionProjectTitle: "Projetos",
    sectionExperiencesTitle: "Experiências",
    sectionContactTitle: "Vamos conversar",
    textAbout1: "Sou desenvolvedor focado em backend, automação e soluções fullstack. Tenho experiência criando sistemas escaláveis, APIs e automações que otimizam processos e aumentam produtividade.",
    textAbout2: "Atualmente trabalho com tecnologias modernas para construir aplicações robustas, focando em performance, arquitetura limpa e boas práticas de engenharia de software.",
    project1Title: "Doctools.io (Solução de OCR e Automação de Workflow)",
    project1Desc: "Plataforma para manipulação de dados com extração inteligente de PDFs e leitura automatizada de códigos de barras. O sistema gera scripts de automação de tarefas e integra fluxos de trabalho via API com foco em integridade e segurança.",
    project2Title: "Notion API (Serviço de Automação e Gerenciamento de Dados (Background Server & Webhooks))",
    project2Desc: "Serviço de background que integra múltiplas bases de dados para processamento de informações e geração automatizada de etiquetas. O sistema opera via varredura ou gatilhos em tempo real, contando com camadas de autenticação e validação de payloads para garantir a integridade e a segurança total no tráfego dos dados entre APIs.",
    project3Title: "Panone (Ecossistema ERP & Gestão de Vendas)",
    project3Desc: "Sistema full-stack para gestão integrada de produtos e estoque, com controle logístico e fluxos de checkout com descontos dinâmicos. Inclui calendários operacionais e painéis administrativos/do usuário distintos, garantindo uma experiência personalizada e controle total do inventário.",
    experience1title: "Desenvolvedor de Software Independente",
    experience1Time: "2023 - Presente",
    experience1Desc: "Atuo no desenvolvimento de sistemas personalizados e escaláveis, entregando soluções completas desde a arquitetura até a implementação. Foco em criar ferramentas que automatizam processos e resolvem problemas de negócio de forma independente e eficiente.",
    experience2title: "Analista de TI (PJ)",
    experience2Time: "2021 - Presente",
    experience2Desc: "Responsável pelo gerenciamento de redes Unifi e suporte remoto a unidades distribuídas. Especialista em manutenção de hardware e consultoria técnica para outsourcing de equipamentos, integrando o desenvolvimento de software sob medida para otimizar processos internos e a logística de produção.",
    experience3title: "Educador de TI & Voluntariado",
    experience3Time: "2018 — 2019",
    experience3Desc: "Responsável pelo desenvolvimento e aplicação de metodologias de ensino para informática fundamental. Focado em democratizar o acesso à tecnologia para públicos em situação de vulnerabilidade, transformando o conhecimento técnico em ferramenta de inclusão.",
    experience4title: "Consultoria Técnica & Hardware Independente",
    experience4Time: "2014 - Presente",
    experience4Desc: "Montagem, manutenção especializada e consultoria em hardware. Foco em workstations e máquinas de alto desempenho, aliando precisão técnica na montagem à análise crítica de compatibilidade e performance.",
    contactDesc: "Estou sempre aberto a discutir novos projetos, oportunidades de trabalho ou colaborações. Se você tem uma ideia ou precisa de ajuda com tecnologia, entre em contato.",
    toggleLang: "EN"
  },
  en: {
    role: [
      "Fullstack Developer...",
      "Automation Engineer...",
      "Backend Specialist...",
      "Support Computing..."
    ],
    navAbout: "About me",
    navProjects: "My Projects",
    navContact: "Contact",
    navExperience: "Experiences",
    sectionAboutTitle: "About me",
    sectionProjectsTitle: "My Projects",
    sectionExperiencesTitle: "Experiences",
    sectionContactTitle: "Let's talk",
    textAbout1: "I am a developer focused on backend, automation, and fullstack solutions. I have experience building scalable systems, APIs, and automations that optimize processes and increase productivity.",
    textAbout2: "I build robust applications using modern technologies, prioritizing performance, clean architecture, and high-quality software engineering standards.",
    project1Title: "Doctools.io (OCR & Workflow Automation Solution)",
    project1Desc: "A data processing platform featuring intelligent PDF extraction and automated barcode reading. The system generates task automation scripts and integrates workflows via API, with a core focus on data integrity and security.",
    project2Title: "Notion API (Automation Service & Data Management (Background Server & Webhooks))",
    project2Desc: "A background service that integrates multiple databases for data processing and automated label generation. The system operates via polling or real-time triggers, featuring authentication layers and payload validation to ensure full integrity and security during API data traffic.",
    project3Title: "Panone (ERP Ecosystem & Sales Management)",
    project3Desc: "A full-stack system for integrated product and inventory management, featuring logistics control and checkout flows with dynamic discounts. It includes operational calendars and distinct administrative/user dashboards, ensuring a personalized experience and total inventory control.",
    experience1title: "Independent Software Developer",
    experience1Time: "2023 - Present",
    experience1Desc: "Developing custom and scalable systems, delivering complete end-to-end solutions from architecture to implementation. I focus on building tools that automate processes and solve business problems independently and efficiently.",
    experience2title: "IT Systems Analyst",
    experience2Time: "2021 - Present",
    experience2Desc: "Managing UniFi network infrastructure and remote support across multiple sites. Expert in hardware maintenance and equipment outsourcing consultancy, leveraging custom-built software solutions to streamline internal workflows and logistics operations.",
    experience3title: "IT Educator & Volunteer",
    experience3Time: "2018 — 2019",
    experience3Desc: "Responsible for developing and implementing teaching methodologies for fundamental computing. Focused on democratizing access to technology for vulnerable communities, turning technical knowledge into a powerful tool for social inclusion.",
    experience4title: "Technical Consulting & Independent Hardware Specialist",
    experience4Time: "2014 - Present",
    experience4Desc: "Specialized assembly, maintenance, and hardware consultancy. Focused on high-performance workstations, combining technical precision in assembly with critical analysis of compatibility and performance.",
    contactDesc: "I'm always open to discussing new projects, job opportunities, or collaborations. If you have an idea or need help with technology, feel free to get in touch.",

    toggleLang: "PT"
  }
}

const langToggle = document.getElementById("switch-lang");
export let currentLang = localStorage.getItem("language") || "pt"

export function updateInterface() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerText = translations[currentLang][key]
    }
  })

  if (langToggle) langToggle.innerText = translations[currentLang].toggleLang;
  document.documentElement.lang = currentLang;

}
if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("language", currentLang);
    updateInterface();
  });
}
