export type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "write-a-website-brief-that-keeps-work-moving",
    category: "Web",
    title: "A useful website brief starts with the work, not the page count",
    excerpt:
      "A clear brief helps a team agree on who the site is for, what it needs to do and what can wait for a later phase.",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Start with the change you want to make",
        paragraphs: [
          "Before listing pages, describe the problem the website should help solve. Perhaps people need to understand a service more quickly, compare products or find a straightforward way to make an enquiry. A concrete user need gives the project a better starting point than a long feature list.",
          "Keep the goal specific enough to guide decisions, but open enough to let the team explore a suitable approach.",
        ],
      },
      {
        heading: "Name the audience and its next step",
        paragraphs: [
          "A website may serve several audiences, but it helps to identify the people who matter most at launch. Describe what they already know, what they are trying to do and what a useful next step looks like.",
        ],
        list: [
          "Who is the primary audience for the first release?",
          "What questions do they need answered?",
          "What should they be able to do next?",
        ],
      },
      {
        heading: "Separate essentials from later ideas",
        paragraphs: [
          "List the pages and capabilities needed for the first useful release, then keep future ideas in a separate section. This makes trade-offs easier to discuss without losing sight of the longer-term direction.",
          "For each requested feature, note who will use it and what it helps them accomplish. If that is still uncertain, mark it as a question to explore rather than a fixed requirement.",
        ],
      },
      {
        heading: "Bring the practical constraints forward",
        paragraphs: [
          "Share existing content, systems, brand assets, accessibility needs and approval steps. Flag dependencies, such as a catalogue or external service, even if the technical details are unclear.",
          "A good brief does not need to answer everything. It should make the knowns, unknowns and decisions still to make visible.",
        ],
      },
      {
        heading: "End with a shared definition of ready",
        paragraphs: [
          "Before work begins, agree on what the first release includes, who reviews it and how feedback will be gathered. A concise scope, clear owners and a list of open questions give everyone a useful reference as the project develops.",
        ],
      },
    ],
  },
  {
    slug: "questions-to-answer-before-building-an-online-store",
    category: "E-commerce",
    title: "Questions to answer before building an online store",
    excerpt:
      "A store is a working system as well as a storefront. These early questions help connect the shopping journey to the way orders are handled.",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Understand the catalogue",
        paragraphs: [
          "Start with the products, options and information customers need to compare. The size and shape of a catalogue can affect navigation, product pages, search and the way updates are managed.",
          "Consider how products differ, whether stock varies by option and who will maintain descriptions and images. These details help clarify what the store needs on its first day.",
        ],
      },
      {
        heading: "Map the buying journey",
        paragraphs: [
          "Follow the path from discovering a product to receiving an order confirmation. Note where people may need reassurance, what information is required and where a decision or handoff occurs.",
        ],
        list: [
          "How will shoppers browse and compare products?",
          "Which delivery, payment and order options need to be considered?",
          "What should happen when an item is unavailable or a payment needs attention?",
        ],
      },
      {
        heading: "Plan the work behind the storefront",
        paragraphs: [
          "Order handling, inventory updates, customer questions and returns are part of the experience too. A store design should account for the people who manage those tasks, not only the customer-facing pages.",
          "If the business already uses a catalogue, accounting tool or fulfilment service, identify it early. The available integration options depend on each provider and the access it supports.",
        ],
      },
      {
        heading: "Choose technology after the requirements",
        paragraphs: [
          "Compare platforms with your catalogue, workflows, team skills, maintenance needs and total cost. A polished storefront alone is not enough.",
          "The choice should also account for security, accessibility, performance and how the store can be kept current after launch.",
        ],
      },
      {
        heading: "Make the first release manageable",
        paragraphs: [
          "A focused product range and a clearly tested order flow can be a more useful starting point than a large feature set. Agree on which products, payment methods and operational steps must be ready, then record what can be added later.",
        ],
      },
    ],
  },
  {
    slug: "where-a-support-chatbot-helps-and-where-people-should-step-in",
    category: "AI & automation",
    title: "Where support chatbots help, and when a person should step in",
    excerpt:
      "A chatbot works best with a defined job, approved information and a clear way to hand a conversation to a human.",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Choose a narrow, repeatable job",
        paragraphs: [
          "A useful first chatbot use case is often a recurring question with an approved answer: where to find a service, what information is needed for an enquiry or how to reach the right team.",
          "If the task is ambiguous, sensitive or depends on individual judgment, a person should remain responsible for the response.",
        ],
      },
      {
        heading: "Decide what the assistant is allowed to use",
        paragraphs: [
          "List the pages, documents and answers that are approved as sources. Consider who owns them, how they are kept current and whether they contain information the chatbot should not expose.",
          "Data access, retention and the chosen service provider should be reviewed before private or personal information is connected.",
        ],
      },
      {
        heading: "Make the handoff part of the design",
        paragraphs: [
          "People should know when they are interacting with an automated assistant. Give the chatbot a clear way to say it is uncertain, stop when a request falls outside its role and point users toward a person or another appropriate channel.",
        ],
        list: [
          "Define the topics the assistant should not handle.",
          "Offer a human next step when an answer is missing or unclear.",
          "Avoid using the assistant for consequential decisions without appropriate human review.",
        ],
      },
      {
        heading: "Test real questions, not just ideal prompts",
        paragraphs: [
          "Try short questions, misspellings, follow-up questions and requests that are outside the intended scope. Check whether answers stay grounded in approved material and whether the handoff appears at the right time.",
          "Review the experience as the source information changes. A chatbot is not a set-and-forget feature; its boundaries and content need ongoing attention.",
        ],
      },
      {
        heading: "Measure usefulness carefully",
        paragraphs: [
          "Conversation volume alone does not show whether a chatbot helped. Agree on what useful support means for the use case, look at unresolved questions and feedback, and keep a human review path for cases that need more care.",
        ],
      },
    ],
  },
];
