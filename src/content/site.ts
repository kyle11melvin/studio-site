// All copy for the site lives here. Change words here, not in components.

export const site = {
  // Studio name (Kyle, 2026-10-17). Domain: sparkgapstudio.com (bought 2026-10-17).
  name: "Spark Gap",
  domain: "sparkgapstudio.com",
  // TODO: replace before launch
  email: "hello@example.com",
  // Where the project form sends. A hosted form service (e.g. Formspree) that emails each
  // submission to Kyle. Empty = the form opens the visitor's mail app addressed to `email`.
  formEndpoint: "" as string,
  // Fill these in to show the "Book a call" and "Text me" links; empty hides them.
  bookingUrl: "" as string,
  phone: "" as string,
  location: "Orange County, California",
  year: 2026,
  title: "Spark Gap | Custom apps and websites by Kyle Melvin",
  description:
    "Custom apps and websites for small businesses, built by Kyle Melvin. A working link in your first week, and you own the code.",
};

export const hero = {
  headline: "I build the tool your business keeps wishing it had.",
  intro:
    "I'm Kyle Melvin. I built my own CRM while working as a loan officer, and now I build apps and websites for small businesses.",
  cta: "Tell me what you need",
  ctaShort: "Start a project",
  shippedLabel: "Shipped and in daily use",
};

export type FeaturedId = "switchboard" | "dioi" | "birddog" | "anvil" | "huddle" | "edge";

export type Featured = {
  id: FeaturedId;
  name: string;
  tagline: string;
  status: string;
  live: boolean;
  headline: string;
  problem: string;
  built: string;
  stack: string;
  /** One line that helps a visitor picture the same build in their own business. */
  forYou: string;
  /** Public address, shown as a "Visit the live site" link. */
  href?: string;
};

export const featured: Featured[] = [
  {
    id: "switchboard",
    name: "Switchboard",
    tagline: "One question, the best answer",
    status: "Live",
    live: true,
    headline: "Ask one question and get the best answer from several AIs.",
    problem:
      "ChatGPT, Claude and Grok often give different answers, and checking each one by hand eats the time you meant to save.",
    built:
      "One box that sends your question to each AI, checks every reply against the instructions you saved for that project, and shows you the one that follows them.",
    stack: "Next.js and AI APIs, hosted on Vercel.",
    forYou:
      "The same idea works for any team that writes with AI: proposals, listings or emails checked against your own rules before anyone sees them.",
  },
  {
    id: "dioi",
    name: "DefendItOwnIt",
    tagline: "Plain answers to VA loan questions",
    status: "Live",
    live: true,
    headline: "A VA home loan site that answers the questions buyers actually ask, base by base.",
    problem:
      "VA loan rules are spread across long official documents, and borrowers struggle to find a straight answer to their own question.",
    built:
      "A live site with a guide for each military base, state benefit pages, allowance tools and plain-language answers, written so AI search tools can quote it.",
    stack: "Next.js and Tailwind, with automated checks on every build.",
    forYou:
      "The same build works for any business whose customers keep asking the same questions, like a clinic, a contractor or a law office.",
    href: "https://defenditownit.com",
  },
  {
    id: "birddog",
    name: "Bird Dog",
    tagline: "Every promised call, on time",
    status: "Private demo",
    live: false,
    headline: "A CRM that opens to the people a loan officer needs to call today.",
    problem:
      "Callbacks promised on the phone get lost in notes and inboxes, and a missed one can cost the relationship. Spreadsheets and sticky notes don't keep up with a busy phone.",
    built:
      "A CRM that opens to today's promises and calls, with one tap to call, text or log the conversation.",
    stack: "a web app and a private server, covered by 234 automated tests.",
    forYou:
      "The same app works for anyone who lives on callbacks: a contractor, an insurance agent, a salon owner.",
  },
  {
    id: "anvil",
    name: "ANVIL",
    tagline: "Workouts that respect your limits",
    status: "Live",
    live: true,
    headline: "A training app that runs the session and skips what you've ruled out.",
    problem:
      "Generic workout apps keep suggesting movements you can't or won't do, so you spend the session editing instead of training.",
    built: "A workout app with timers and logging that leaves out any movement you've ruled out.",
    stack: "an installable web app on Cloudflare.",
    forYou: "The same build works for any business that runs on sessions, like a gym, a coach or a physical therapist.",
  },
  {
    id: "huddle",
    name: "The Huddle",
    tagline: "Game day in one screen",
    status: "Live",
    live: true,
    headline: "A fantasy football headquarters for one team in one league.",
    problem:
      "League apps scatter scores, news and projections across tabs and menus, so lineup calls get made on stale information.",
    built:
      "A private hub that syncs the league from ESPN and shows live projections during the games, so every lineup call is made on current numbers.",
    stack: "React and Vite, hosted on Vercel.",
    forYou: "The same build works for any screen that pulls numbers from another service and shows them live.",
  },
  {
    id: "edge",
    name: "Edge Desk",
    tagline: "See where prices disagree",
    status: "Private",
    live: false,
    headline: "A tracker that flags when the same thing is priced differently in different markets.",
    problem: "Price gaps open and close fast, and watching several markets by hand means missing most of them.",
    built: "A dashboard that watches several markets at once and shows when their prices stop agreeing.",
    stack: "Python and Postgres, with a Next.js board.",
    forYou: "The same build works for watching prices across suppliers or competitors.",
  },
];

export const more = [
  {
    id: "finance",
    name: "Finance",
    tagline: "Know where your money goes",
    body: "A live budget app that finds your subscriptions and keeps each bill under the account that pays it.",
  },
  {
    id: "markup",
    name: "Markup",
    tagline: "A practice fund with guardrails",
    body: "An AI-run paper-trading fund held to set risk limits, so ideas get tested without real money on the line.",
  },
];

export const work = {
  headline: "The work",
  intro: "Eight apps and websites I built for myself, most of them in use every day. Tap an icon to jump to it, or keep scrolling for the story behind each.",
  swipeHint: "Swipe for all eight",
  moreHeadline: "More I've built",
};

export const process = {
  headline: "You'll be using it by the end of the first week.",
  steps: [
    {
      title: "Tell me what you need",
      body: "Fill out the short project form: your ideas, examples you like, and your wishlist. I reply within one business day with a plan and a quote.",
    },
    {
      title: "Use it in week one",
      body: "Open it on your phone, try it on a real workday, and tell me what's off.",
    },
    {
      title: "Fixes by text",
      body: "Send a text when something needs changing. Most fixes go live the same day.",
    },
  ],
  faqHeadline: "Questions owners ask",
  faq: [
    {
      q: "What does it cost?",
      a: "It depends on what you need. A one-page website and a full CRM are different jobs, so there's no price list. Send the project form and you get a plan and a quote for your project within one business day.",
    },
    {
      q: "How long does it take?",
      a: "You'll have a working link on your phone in the first week. The full timeline depends on the size of the project, and the plan spells it out before I write any code.",
    },
    {
      q: "Do I need to be technical?",
      a: "No. You tell me how your business runs today, and you test the app on your phone like any other app. Changes are a text away.",
    },
    {
      q: "What if you get busy, or we stop working together?",
      a: "You own the code, the domain and the accounts, so the app keeps running in your name, and another developer can pick it up from there.",
    },
  ],
  ownership:
    "You own the code, the domain and the accounts, and there's no monthly platform fee to me. If we stop working together, everything keeps running in your name.",
};

export const contact = {
  headline: "Tell me what's slowing you down, and I'll tell you whether I can build the fix.",
  button: "Email",
  bookButton: "Book a 15-minute call",
  textButton: "Text",
  otherWays: "Rather talk first?",
};

// The project form in the contact section: the site's main call to action.
export const projectForm = {
  subject: "New project request from sparkgapstudio.com",
  name: "Your name",
  email: "Email",
  emailHint: "you@yourbusiness.com",
  business: "Business name",
  phone: "Phone",
  kindLabel: "What are you looking for? Pick any that fit.",
  kinds: ["A website", "An app for my team", "An app for my customers", "A CRM or follow-up system", "Not sure yet"],
  problem: "What's slowing you down today?",
  problemHint: "The spreadsheet, the group text, the thing you do by hand every week...",
  more: "Add more detail (optional): wishlist, examples, timeline",
  wishlist: "Your wishlist",
  wishlistHint: "Everything you'd want it to do, big or small.",
  examples: "Examples and visuals you like",
  examplesHint: "Links to sites or apps you like, or a shared folder of screenshots and sketches.",
  timeline: "When do you need it?",
  timelines: ["As soon as possible", "In the next 1 to 3 months", "Just exploring"],
  submit: "Get my plan and quote",
  after: "Only your name, email and what's slowing you down are required. I read every one myself and reply within one business day.",
  privacy: "Your details go to my inbox and nowhere else. I never share or sell them.",
};

// The person behind the work, shown in the contact section. Add `photo` (a path under
// public/) once Kyle sends one; the card lays out without it.
export const about = {
  name: "Kyle Melvin",
  photo: "" as string,
  lines: [
    "I've spent more than ten years as a loan officer in Orange County, where a missed follow-up costs real money. I started building my own tools to fix that.",
    "Now I build them for small businesses anywhere. You work with me directly, from the first call to the last fix.",
  ],
};
