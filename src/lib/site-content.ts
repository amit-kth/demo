import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Code2,
  GraduationCap,
  HeartPulse,
  LaptopMinimal,
  Megaphone,
  Network,
  PackageCheck,
  Plane,
  ShoppingBag,
  Smartphone,
  Sun,
  Truck,
  Workflow,
} from "lucide-react";

export type ServicePage = {
  slug: string;
  label: string;
  group: "Build" | "AI" | "Growth";
  icon: LucideIcon;
  short: string;
  title: string;
  intro: string;
  overview: string;
  capabilities: { title: string; description: string }[];
  approach: string[];
  questions: { question: string; answer: string }[];
  featured?: boolean;
};

export const services: ServicePage[] = [
  {
    slug: "website-development",
    label: "Website development",
    group: "Build",
    icon: LaptopMinimal,
    short: "Business websites, landing pages, stores and web applications.",
    title: "A website built around the way your business works.",
    intro:
      "From a clear first impression to the actions your customers need to take, shape a website around your goals and the people using it.",
    overview:
      "Start with the pages, content and workflows that matter. Then bring them together in a responsive experience that is straightforward to browse and maintain.",
    capabilities: [
      {
        title: "Business & corporate websites",
        description:
          "Present your offer, services and next steps in a clear, easy-to-navigate structure.",
      },
      {
        title: "Landing pages & campaigns",
        description:
          "Give a product, service or campaign a focused page with a useful call to action.",
      },
      {
        title: "Websites with a CMS",
        description:
          "Plan editable page structures for teams that need to keep content current.",
      },
      {
        title: "Custom web applications",
        description:
          "Turn a recurring process into a browser-based tool shaped around its users.",
      },
    ],
    approach: ["Understand the brief", "Map the pages", "Design and build", "Review and launch"],
    questions: [
      {
        question: "Can a project start with just a few pages?",
        answer:
          "Yes. The page structure can start with the essentials and grow when there is a clear reason to add more.",
      },
      {
        question: "Can an existing website be improved?",
        answer:
          "A project can focus on a refresh, a specific page or a wider rebuild. The right scope depends on the current site and what needs to change.",
      },
    ],
    featured: true,
  },
  {
    slug: "software-development",
    label: "Software development",
    group: "Build",
    icon: Code2,
    short: "Custom software and business tools shaped around your process.",
    title: "Software for the work that does not fit off the shelf.",
    intro:
      "When a process spans too many tools or manual steps, a purpose-built application can bring the work into one considered flow.",
    overview:
      "Begin with the people, decisions and information in the process. Define a useful first version, then leave room for future needs.",
    capabilities: [
      {
        title: "Business applications",
        description:
          "Bring day-to-day tasks, records and team workflows into a tailored interface.",
      },
      {
        title: "ERP & CRM workflows",
        description:
          "Explore connected ways to manage customers, operations and business information.",
      },
      {
        title: "Inventory & billing tools",
        description:
          "Plan software around product records, stock movement, invoices and reporting needs.",
      },
      {
        title: "SaaS products & portals",
        description:
          "Shape the product experience, user roles and core workflows for a web-based service.",
      },
    ],
    approach: ["Map the current work", "Set a practical first scope", "Build in reviewable steps", "Plan ongoing support"],
    questions: [
      {
        question: "Do we need every feature before starting?",
        answer:
          "No. A focused first release can help clarify what is most useful before expanding the product.",
      },
      {
        question: "Can software connect to tools we already use?",
        answer:
          "Potential integrations depend on the available APIs, access and project requirements. They can be reviewed during discovery.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    label: "Mobile app development",
    group: "Build",
    icon: Smartphone,
    short: "Mobile experiences for Android, iOS and cross-platform products.",
    title: "An app that earns its place on the home screen.",
    intro:
      "Plan an app for moments that need a dedicated mobile experience, not just a smaller website.",
    overview:
      "Explore the core journeys, screens and supporting services first. The implementation approach can then follow the project’s users, requirements and maintenance plan.",
    capabilities: [
      {
        title: "Android & iOS products",
        description:
          "Define a focused experience for the devices and audiences that matter to the project.",
      },
      {
        title: "Cross-platform applications",
        description:
          "Consider a shared app approach when it suits the product, team and delivery needs.",
      },
      {
        title: "Product UI & prototypes",
        description:
          "Work through navigation, screen hierarchy and key interactions before development.",
      },
      {
        title: "App-connected services",
        description:
          "Plan backend, API and third-party connections where the product needs them.",
      },
    ],
    approach: ["Choose the core journey", "Prototype key screens", "Build and test", "Prepare the release"],
    questions: [
      {
        question: "Should we build for Android, iOS or both?",
        answer:
          "That depends on your audience, required device features, budget and long-term support needs. These are useful early discovery questions.",
      },
      {
        question: "Can an app connect to an existing website or system?",
        answer:
          "It may be possible when the existing system provides suitable access. The connection should be reviewed before scope is agreed.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    label: "E-commerce development",
    group: "Build",
    icon: ShoppingBag,
    short: "Online stores with considered catalogues, checkout and order flows.",
    title: "Make the path from product discovery to checkout feel clear.",
    intro:
      "A useful online store needs more than product tiles. It needs a catalogue, buying journey and management flow that make sense together.",
    overview:
      "Plan the store around products, customers and operations, from discovery to order handling.",
    capabilities: [
      {
        title: "Storefront & catalogue",
        description:
          "Organize products, categories and product information for easy browsing.",
      },
      {
        title: "Cart & checkout",
        description:
          "Design a straightforward purchase flow and review suitable payment options.",
      },
      {
        title: "Orders & inventory",
        description:
          "Consider the store-side workflows needed to manage products and incoming orders.",
      },
      {
        title: "Promotions & reporting",
        description:
          "Plan offers and useful store data around the way the business operates.",
      },
    ],
    approach: ["Understand the catalogue", "Map the buying journey", "Build and review", "Prepare store operations"],
    questions: [
      {
        question: "Can a store use an existing catalogue or payment provider?",
        answer:
          "The options depend on the source data, provider and account access. We can review those requirements before proposing a build.",
      },
      {
        question: "Can an online store be expanded later?",
        answer:
          "A store can be planned in stages, with the first release focused on the products and workflows needed to begin.",
      },
    ],
  },
  {
    slug: "ai-solutions",
    label: "AI solutions",
    group: "AI",
    icon: Bot,
    short: "Customer-support chatbots and practical AI integrations.",
    title: "Useful AI, with people still in the loop.",
    intro:
      "Explore focused chatbot and AI integration ideas for support, enquiries and finding answers in approved business information.",
    overview:
      "Give a chatbot a focused task and clear boundaries. Keep decisions that need human judgment with a person.",
    capabilities: [
      {
        title: "Website support assistants",
        description:
          "Help visitors find answers to common questions and understand where to go next.",
      },
      {
        title: "Lead qualification flows",
        description:
          "Collect context from an enquiry and route it toward a human follow-up.",
      },
      {
        title: "Knowledge-based answers",
        description:
          "Explore a question-and-answer experience grounded in approved business material.",
      },
      {
        title: "AI integration",
        description:
          "Connect a selected AI capability to a website or application where the use case fits.",
      },
    ],
    approach: ["Pick a bounded use case", "Review source information", "Design handoff and limits", "Test before release"],
    questions: [
      {
        question: "Will a chatbot always answer correctly?",
        answer:
          "No. AI responses can be incomplete or incorrect. The experience should make its limits clear and provide an appropriate route to a person.",
      },
      {
        question: "Can a chatbot use internal company documents?",
        answer:
          "That depends on approved content, access controls, data handling and the chosen technical approach. The source material and privacy needs should be reviewed first.",
      },
    ],
    featured: true,
  },
  {
    slug: "ai-chatbot-development",
    label: "AI chatbot development",
    group: "AI",
    icon: Bot,
    short: "Website assistants for FAQs, support and enquiry triage.",
    title: "A chatbot for the questions your team answers every day.",
    intro:
      "Give visitors a guided way to find approved information, ask a common question or pass an enquiry to your team.",
    overview:
      "A useful chatbot has a defined job, carefully selected source information and a clear human handoff. It should not pretend to know what it cannot verify.",
    capabilities: [
      {
        title: "FAQ & knowledge assistants",
        description:
          "Organize approved answers into a conversational way to find information.",
      },
      {
        title: "Customer-support chat",
        description:
          "Offer a first response to common service questions with a clear next step.",
      },
      {
        title: "Enquiry triage",
        description:
          "Ask a small set of useful questions before passing the enquiry to a person.",
      },
      {
        title: "Human handoff",
        description:
          "Set expectations for uncertain answers and define when a person should take over.",
      },
    ],
    approach: ["Define the assistant’s job", "Approve its information", "Set guardrails and handoff", "Test likely questions"],
    questions: [
      {
        question: "Can a chatbot replace a support team?",
        answer:
          "A chatbot can help with a bounded set of common questions, but it should not replace human judgment for complex or sensitive requests.",
      },
      {
        question: "How do we keep the chatbot’s answers useful?",
        answer:
          "Use current, approved source material, test realistic questions and make it easy for people to reach a human when the answer is uncertain.",
      },
    ],
  },
  {
    slug: "ai-integration",
    label: "AI integration",
    group: "AI",
    icon: Network,
    short: "Connect a selected AI capability to a website or application.",
    title: "Bring a focused AI capability into the tools people use.",
    intro:
      "Explore how a chatbot or AI-powered search experience could fit into an existing website, application or business workflow.",
    overview:
      "Shape integrations around the task, information, access controls and human review.",
    capabilities: [
      {
        title: "Website & app connections",
        description:
          "Review where an AI interaction belongs in an existing customer or team experience.",
      },
      {
        title: "Approved information sources",
        description:
          "Plan how relevant business content is selected, maintained and made available.",
      },
      {
        title: "Access & usage boundaries",
        description:
          "Consider authentication, appropriate access and sensible usage limits for the use case.",
      },
      {
        title: "Review & monitoring plan",
        description:
          "Decide how responses, edge cases and changes in source material should be reviewed.",
      },
    ],
    approach: ["Review the product context", "Choose the information boundary", "Design a safe interaction", "Test and evaluate"],
    questions: [
      {
        question: "Can AI be added to an existing product?",
        answer:
          "Possibly. The product architecture, access controls and use case need to be reviewed before an integration approach is selected.",
      },
      {
        question: "What information should an AI feature access?",
        answer:
          "Only information approved for the use case should be considered, with access, retention and privacy needs reviewed before implementation.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    label: "Digital marketing",
    group: "Growth",
    icon: Megaphone,
    short: "A considered mix of search, content, social and paid campaigns.",
    title: "Make it easier for the right people to find you.",
    intro:
      "Bring your online presence and marketing activity into focus with work shaped around your audience, offer and next business priority.",
    overview:
      "Start with the channels that fit your goals. Set a clear message, make the destination useful and review what the available data can actually tell you.",
    capabilities: [
      {
        title: "Search & local visibility",
        description:
          "Improve the structure and relevance of pages people may find through search.",
      },
      {
        title: "Social media & content",
        description:
          "Plan useful posts and content around a consistent voice and audience need.",
      },
      {
        title: "Paid advertising",
        description:
          "Shape campaign pages and messages for the platforms and objectives selected.",
      },
      {
        title: "Measurement & reporting",
        description:
          "Review agreed indicators with context instead of treating a single number as the whole story.",
      },
    ],
    approach: ["Clarify the audience", "Choose channels", "Create and publish", "Review and refine"],
    questions: [
      {
        question: "Do we need every marketing channel?",
        answer:
          "No. A focused set of channels is often easier to manage. The right mix depends on your audience, goals and available content.",
      },
      {
        question: "Can digital marketing start with a small scope?",
        answer:
          "Yes. A first phase can focus on a specific need, such as improving key website pages or planning a campaign.",
      },
    ],
    featured: true,
  },
  {
    slug: "seo",
    label: "SEO services",
    group: "Growth",
    icon: ChartNoAxesCombined,
    short: "Clear site structure and helpful content for organic search.",
    title: "Build a stronger foundation for organic search.",
    intro:
      "Help search engines and people understand what your pages offer through clear structure, relevant content and technical care.",
    overview:
      "SEO is ongoing work, not a promise of rankings. Start with the site’s current structure and the questions your intended audience is trying to answer.",
    capabilities: [
      {
        title: "Technical foundations",
        description:
          "Review crawlable page structure, metadata, internal links and mobile experience.",
      },
      {
        title: "Content & on-page clarity",
        description:
          "Make page topics, headings and useful next steps easier to understand.",
      },
      {
        title: "Local search support",
        description:
          "Consider local intent and approved business information where local discovery matters.",
      },
      {
        title: "Measurement with context",
        description:
          "Use search data to guide improvements, without promising outcomes.",
      },
    ],
    approach: ["Review the current site", "Prioritize useful changes", "Improve and publish", "Measure over time"],
    questions: [
      {
        question: "Can SEO guarantee a first-page ranking?",
        answer:
          "No. Search rankings depend on many factors outside a service provider’s control. SEO work should focus on useful content and sound technical foundations.",
      },
      {
        question: "How soon should we expect results?",
        answer:
          "There is no reliable fixed timeline. The starting point, competition, site changes and search behavior all affect how progress develops.",
      },
    ],
  },
];

export const featuredServices = services.filter((service) => service.featured);

export const serviceGroups = [
  {
    title: "Build digital products",
    description: "Websites, software, apps and stores shaped around your customers and operations.",
    slugs: ["website-development", "software-development", "mobile-app-development", "ecommerce-development"],
  },
  {
    title: "Explore practical AI",
    description: "Focused chatbot and integration ideas, with clear boundaries and human review.",
    slugs: ["ai-solutions", "ai-chatbot-development", "ai-integration"],
  },
  {
    title: "Grow your digital presence",
    description: "Search, content, social and campaign support tied to real business priorities.",
    slugs: ["digital-marketing", "seo"],
  },
];

export const industries = [
  {
    name: "Education & e-learning",
    challenge: "Admissions, course information and learning resources can be spread across disconnected pages and tools.",
    possibilities: "Institution websites, learning portals, admission workflows and carefully bounded learning assistants.",
    icon: GraduationCap,
  },
  {
    name: "Healthcare",
    challenge: "People need clear service information and straightforward ways to find the right next step.",
    possibilities: "Clinic websites, appointment journeys, patient communication and administrative document workflows.",
    icon: HeartPulse,
  },
  {
    name: "Finance & fintech",
    challenge: "Digital services need clear customer journeys and thoughtful handling of sensitive information.",
    possibilities: "Business applications, dashboards and workflow integrations planned around appropriate access controls.",
    icon: Activity,
  },
  {
    name: "E-commerce & retail",
    challenge: "Product discovery, stock information and order handling need to work together.",
    possibilities: "Online stores, catalogue structures, inventory workflows and connected marketing experiences.",
    icon: ShoppingBag,
  },
  {
    name: "Real estate & construction",
    challenge: "Property details, enquiries and project information can be difficult to keep organized.",
    possibilities: "Property listings, enquiry journeys and tools for organizing project or customer information.",
    icon: Building2,
  },
  {
    name: "Manufacturing",
    challenge: "Operational information may sit across systems, spreadsheets and manual handoffs.",
    possibilities: "Inventory and reporting workflows, business software and integrations with existing tools.",
    icon: PackageCheck,
  },
  {
    name: "Travel & tourism",
    challenge: "Visitors need useful destination information and a clear route from research to enquiry.",
    possibilities: "Travel websites, itinerary or enquiry flows, booking-related interfaces and customer support.",
    icon: Plane,
  },
  {
    name: "Hospitality",
    challenge: "Guests look for practical details before, during and after a visit.",
    possibilities: "Hospitality websites, service information, enquiry flows and digital customer support.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Logistics & transportation",
    challenge: "Teams need a clearer view of movement, status and operational handoffs.",
    possibilities: "Shipment information, operations dashboards and process tools shaped around available data.",
    icon: Truck,
  },
  {
    name: "Solar & renewable energy",
    challenge: "Potential customers need to understand options and provide the information required for a quote.",
    possibilities: "Product websites, lead journeys, quotation workflows and business dashboards.",
    icon: Sun,
  },
  {
    name: "Professional services & startups",
    challenge: "A growing team needs a credible digital presence and tools that can adapt with the work.",
    possibilities: "Business websites, MVPs, SaaS products, customer portals and digital growth foundations.",
    icon: Workflow,
  },
];

export const techAreas = [
  {
    name: "Web & product interfaces",
    tools: ["Next.js", "React", "TypeScript", "React Native", "Flutter"],
  },
  {
    name: "AI model providers",
    tools: ["OpenAI", "Google Gemini", "Anthropic Claude", "Open-source models"],
  },
  {
    name: "AI application frameworks",
    tools: ["LangChain", "LlamaIndex", "Provider SDKs"],
  },
  {
    name: "Machine learning",
    tools: ["Python", "scikit-learn", "TensorFlow", "PyTorch"],
  },
  {
    name: "Vector search & data",
    tools: ["Pinecone", "Chroma", "FAISS", "PostgreSQL vector extensions"],
  },
  {
    name: "Automation & APIs",
    tools: ["n8n", "Make", "FastAPI", "Node.js"],
  },
  {
    name: "Cloud platforms",
    tools: ["AWS", "Microsoft Azure", "Google Cloud"],
  },
];

export const projectConcepts = [
  {
    slug: "northline-website-concept",
    name: "Northline",
    category: "Website · Digital services",
    type: "Website concept",
    conceptBrief: "How might a business explain a broad digital-services offer without crowding its first page?",
    designExplorations: ["Service information hierarchy", "Clear routes between capabilities", "A focused contact path"],
    title: "A clearer way to present digital services.",
    description:
      "A conceptual business website exploring how service information and a contact path could work together.",
    image: "/concept-morrow.jpg",
    alt: "Conceptual desktop website interface for a digital services company",
    service: "Website development",
    industry: "Professional services & startups",
    layout: "feature" as const,
  },
  {
    slug: "morrow-store-concept",
    name: "Morrow",
    category: "E-commerce · Retail",
    type: "Store concept",
    conceptBrief: "How might a small product catalogue make browsing and the next step feel clear?",
    designExplorations: ["Product category structure", "Retail product discovery", "A considered route toward checkout"],
    title: "A more considered online shop.",
    description:
      "An illustrative retail store exploring product discovery, category browsing and a considered route to checkout.",
    image: "/concept-juniper.jpg",
    alt: "Conceptual online retail store with product categories and a product grid",
    service: "E-commerce development",
    industry: "E-commerce & retail",
    layout: "side" as const,
  },
  {
    slug: "forma-app-concept",
    name: "Forma",
    category: "Mobile app · Productivity",
    type: "App concept",
    conceptBrief: "How might a daily planning app bring priorities and progress into one calm screen?",
    designExplorations: ["Mobile task planning", "Priority cues", "A compact progress overview"],
    title: "A calmer view of daily tasks.",
    description:
      "A conceptual productivity app exploring task planning, priorities and a simple progress overview.",
    image: "/concept-forma.jpg",
    alt: "Conceptual mobile productivity app showing task cards and a progress overview",
    service: "Mobile app development",
    industry: "Professional services & startups",
    layout: "wide" as const,
  },
];

export const commonQuestions = [
  {
    category: "Working together",
    question: "What can you build?",
    answer:
      "Business websites, online stores, custom software and mobile apps. We can also discuss focused AI chatbots, AI integrations and digital marketing support.",
  },
  {
    category: "Working together",
    question: "Can I start with one service?",
    answer:
      "Yes. Start with one need, such as a website, app, software tool, chatbot or marketing task. Plan the next phase later.",
  },
  {
    category: "Working together",
    question: "What happens after launch?",
    answer:
      "Support needs depend on the project. Ongoing updates, new features or marketing can be discussed as part of the project plan.",
  },
  {
    category: "Planning a project",
    question: "What should I include in a first enquiry?",
    answer:
      "A short description of the problem, who the project is for, any relevant links and your preferred next step are a useful place to start.",
  },
  {
    category: "Planning a project",
    question: "Do I need a full specification before we talk?",
    answer:
      "No. A rough goal or challenge is enough to begin a conversation. Scope and priorities can be clarified together.",
  },
  {
    category: "Planning a project",
    question: "How do you approach project estimates?",
    answer:
      "An estimate depends on the scope, integrations, content and delivery requirements. Those details need to be discussed before a meaningful estimate can be prepared.",
  },
  {
    category: "AI & privacy",
    question: "Will an AI chatbot always provide a correct answer?",
    answer:
      "No. AI can return incomplete or incorrect information. A responsible use case needs approved sources, clear limitations and a route to human support.",
  },
  {
    category: "AI & privacy",
    question: "Can AI work with private business information?",
    answer:
      "That depends on the data, permissions, provider and technical setup. Privacy, access and retention should be reviewed before any information is connected.",
  },
];
