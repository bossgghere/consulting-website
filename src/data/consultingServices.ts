/**
 * Consulting services and process steps — single source of truth for list + detail pages.
 */

export type ServiceSlug =
  | 'application-development'
  | 'cloud-migration'
  | 'automation'
  | 'round-the-clock-support'
  | 'infrastructure'
  | 'it-security'
  | 'software-testing'
  | 'bi-development'
  | 'process-discovery'
  | 'process-strategy'
  | 'process-execution';

export interface ServiceItem {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  size: 'small' | 'large';
}

export const CONSULTING_SERVICES: ServiceItem[] = [
  {
    slug: 'application-development',
    title: 'Application Development',
    shortDescription:
      'Applications are rarely sufficient on their own. They are only a small part of something much larger. We always consider how an application will fit into the enterprise ecosystem when designing it.',
    longDescription:
      'We design and build applications that integrate seamlessly with your existing systems and workflows. Our approach considers the full enterprise ecosystem—from legacy systems to cloud services—so your new applications deliver real business value from day one. We use modern stacks and best practices to ensure maintainability, security, and scalability.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
    size: 'large',
  },
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration',
    shortDescription:
      'We review diagrams, code, and documentation, develop high-level architecture, and recommend one of three migration methods and timeframes.',
    longDescription:
      'Our cloud migration practice reviews your current diagrams, codebase, and documentation to design a high-level architecture tailored to your goals. We recommend one of three migration approaches—rehost, refactor, or rearchitect—with clear timeframes and risk mitigation. We help you move to the cloud with minimal disruption and maximum benefit.',
    imageUrl: 'https://picsum.photos/seed/cloud-migration/1200/800',
    size: 'small',
  },
  {
    slug: 'automation',
    title: 'Automation',
    shortDescription:
      'Are you having nightmares about recurring bugs in your application and QA costs? We can be reached by phone. We will assist you in automating your functional test regression suite!',
    longDescription:
      'Recurring bugs and rising QA costs can slow you down. We help you automate your functional test regression suite and critical workflows so you ship faster and with confidence. From test automation frameworks to CI/CD pipelines, we reduce manual effort and improve quality.',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80',
    size: 'small',
  },
  {
    slug: 'round-the-clock-support',
    title: 'Round the Clock Support',
    shortDescription:
      'Do you have concerns about the quality of your Production Support? We can be reached through email. Because of our offshore presence, we can provide support 24 hours a day, 7 days a week.',
    longDescription:
      'Production support quality matters. With our global presence, we deliver 24/7 support so your systems and users are covered around the clock. We handle incidents, monitoring, and maintenance with clear SLAs and escalation paths. Reach us by email or phone whenever you need us.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
    size: 'large',
  },
  {
    slug: 'infrastructure',
    title: 'Infrastructure',
    shortDescription:
      'We design, deploy, and manage robust infrastructure—from on-premise to hybrid and multi-cloud—so your applications run reliably and scale with demand.',
    longDescription:
      'From on-premise to hybrid and multi-cloud, we design, deploy, and manage infrastructure that is secure, scalable, and cost-effective. We help you choose the right mix of servers, networks, and cloud services so your applications run reliably and perform under load.',
    imageUrl: 'https://picsum.photos/seed/infrastructure-servers/1200/800',
    size: 'small',
  },
  {
    slug: 'it-security',
    title: 'IT Security',
    shortDescription:
      'We help you assess risks, harden systems, and implement security best practices so your data and applications stay protected.',
    longDescription:
      'We assess your security posture, identify risks, and implement controls aligned with industry standards. From vulnerability management and access control to compliance and incident response, we help you protect your data and applications. Need guidance? Drop us an email or leave a message—we are here to help.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    size: 'small',
  },
  {
    slug: 'software-testing',
    title: 'Software Testing',
    shortDescription:
      'Nexora assists businesses in developing, deploying, and maintaining comprehensive testing practices and quality assurance programs.',
    longDescription:
      'We help you build and run testing practices that catch defects early and keep quality high. From test strategy and manual QA to automated regression and performance testing, we support you through development, deployment, and maintenance so your software is reliable and user-ready.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
    size: 'small',
  },
  {
    slug: 'bi-development',
    title: 'BI Development',
    shortDescription:
      'Using a full stack of business intelligence technologies and tools, our engineers create scalable software and analytics solutions.',
    longDescription:
      'Our engineers use a full stack of business intelligence technologies and tools to build scalable analytics platforms. We create dashboards, data pipelines, and reporting solutions that turn your data into actionable insights and support data-driven decisions across your organization.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    size: 'small',
  },
];

export const PROCESS_STEPS: ServiceItem[] = [
  {
    slug: 'process-discovery',
    title: 'Discovery',
    shortDescription: 'We dive deep into your business ecosystem to identify hidden opportunities.',
    longDescription:
      'We dive deep into your business ecosystem—processes, systems, and goals—to identify hidden opportunities and risks. Through workshops, interviews, and technical review, we build a clear picture of where you are and where you want to be, so every recommendation is grounded in your reality.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    size: 'small',
  },
  {
    slug: 'process-strategy',
    title: 'Strategy',
    shortDescription: 'Crafting a bespoke roadmap that aligns technology with your core goals.',
    longDescription:
      'We craft a bespoke roadmap that aligns technology with your core goals. No generic playbooks—we define priorities, phases, and success metrics tailored to your organization so you can execute with confidence and track impact.',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
    size: 'small',
  },
  {
    slug: 'process-execution',
    title: 'Execution',
    shortDescription: 'Agile implementation with a focus on quality and zero-defect delivery.',
    longDescription:
      'We deliver through agile implementation with a focus on quality and zero-defect delivery. Our teams work in short cycles with continuous feedback, so you see progress quickly and can adjust as needed. We aim for production-ready outcomes, on time and on budget.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    size: 'small',
  },
];

export const ALL_SERVICE_SLUGS: ServiceSlug[] = [
  ...CONSULTING_SERVICES.map((s) => s.slug),
  ...PROCESS_STEPS.map((s) => s.slug),
];

export function getServiceBySlug(slug: ServiceSlug): ServiceItem | undefined {
  return [...CONSULTING_SERVICES, ...PROCESS_STEPS].find((s) => s.slug === slug);
}
