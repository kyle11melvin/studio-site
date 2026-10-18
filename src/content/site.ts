// All copy for the site lives here. Change words here, not in components.
// Audience and voice (Kyle, 2026-10-17): individuals with an idea who can't build it, not
// businesses with a dev budget. Studio voice, "we". No owner name and no day job on the page.
// No prices, no fixed timelines, no mention of AI tools in how the work gets built.

export const site = {
  // Studio name (Kyle, 2026-10-17). Domain: sparkgapstudio.com (bought 2026-10-17).
  name: "Spark Gap",
  domain: "sparkgapstudio.com",
  // Public address: an alias on Kyle's Workspace account (kyle@), so his name stays off the page.
  email: "hello@sparkgapstudio.com",
  // Where the project form sends. A hosted form service (e.g. Formspree) that emails each
  // submission to Kyle. Empty = the form opens the visitor's mail app addressed to `email`.
  formEndpoint: "" as string,
  // Fill these in to show the "Book a call" and "Text me" links; empty hides them.
  bookingUrl: "" as string,
  phone: "" as string,
  location: "Orange County, California",
  year: 2026,
  title: "Spark Gap Studio | Apps and websites for people with an idea",
  description:
    "Have an idea for an app or website but no way to build it? Spark Gap Studio builds a working first version you can show people, and you own all of it.",
};

export const hero = {
  eyebrow: "Apps and websites for people with an idea and no developer",
  headline: "Have an idea? We'll build it.",
  // Sits just under the fingertips: ties the name to the picture.
  sparkLine: "Every idea starts as a spark. We close the gap.",
  cta: "Tell us your idea",
  ctaShort: "Share your idea",
  // Screen-reader name for the row of app names under the hero (no visible label: Kyle, 2026-10-17).
  shippedLabel: "Apps we've built",
};

export type FeaturedId = "switchboard" | "dioi" | "birddog" | "anvil" | "huddle" | "edge";

export type Featured = {
  id: FeaturedId;
  name: string;
  tagline: string;
  status: string;
  live: boolean;
  headline: string;
  /** The idea behind it, in one plain sentence. */
  idea: string;
  built: string;
  stack: string;
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
    idea:
      "Stop pasting the same question into three AIs and comparing the answers by hand.",
    built:
      "One box that sends your question to each AI, checks every reply against the instructions you saved for that project, and shows you the one that follows them.",
    stack: "Next.js and AI APIs, hosted on Vercel.",
  },
  {
    id: "dioi",
    name: "DefendItOwnIt",
    tagline: "Plain answers to VA loan questions",
    status: "Live",
    live: true,
    headline: "A VA home loan site that answers the questions buyers actually ask, base by base.",
    idea:
      "VA home buyers need straight answers about their base and their benefits, and the official documents don't give them.",
    built:
      "A live site with a guide for each military base, state benefit pages, allowance tools and plain-language answers, written so AI search tools can quote it.",
    stack: "Next.js and Tailwind, with automated checks on every build.",
    href: "https://defenditownit.com",
  },
  {
    id: "birddog",
    name: "Bird Dog",
    tagline: "Every promised call, on time",
    status: "Private demo",
    live: false,
    headline: "A CRM that opens to the people you need to call today.",
    idea:
      "Never lose a promised callback in a notebook or an inbox again.",
    built:
      "A CRM that opens to today's promises and calls, with one tap to call, text or log the conversation.",
    stack: "a web app and a private server, covered by 234 automated tests.",
  },
  {
    id: "anvil",
    name: "ANVIL",
    tagline: "Workouts that respect your limits",
    status: "Live",
    live: true,
    headline: "A training app that runs the session and skips what you've ruled out.",
    idea:
      "Stop editing every generic workout to take out the moves you can't do.",
    built: "A workout app with timers and logging that leaves out any movement you've ruled out.",
    stack: "an installable web app on Cloudflare.",
  },
  {
    id: "huddle",
    name: "The Huddle",
    tagline: "Game day in one screen",
    status: "Live",
    live: true,
    headline: "A fantasy football headquarters for one team in one league.",
    idea:
      "Every score, stat and projection for one fantasy team on one screen, live during the games.",
    built:
      "A private hub that syncs the league from ESPN and shows live projections during the games, so every lineup call is made on current numbers.",
    stack: "React and Vite, hosted on Vercel.",
  },
  {
    id: "edge",
    name: "Edge Desk",
    tagline: "See where prices disagree",
    status: "Private",
    live: false,
    headline: "A tracker that flags when the same thing is priced differently in different markets.",
    idea:
      "Price gaps between markets close fast, and watching them by hand means missing most of them.",
    built: "A dashboard that watches several markets at once and shows when their prices stop agreeing.",
    stack: "Python and Postgres, with a Next.js board.",
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
  intro: "Eight ideas that became real apps and websites, most of them in use every day. Tap an icon to jump to one, or keep scrolling for the story behind each.",
  swipeHint: "Swipe for all eight",
  moreHeadline: "More we've built",
  ideaLabel: "The idea",
  builtLabel: "What we built",
};

export const process = {
  headline: "From idea to something you can show people.",
  steps: [
    {
      title: "Tell us your idea",
      body: "Fill out the short form: the idea, examples you like, and your wishlist. Rough is fine.",
    },
    {
      title: "Get a plan and a quote",
      body: "Within one business day you hear what we'd build first, how long it takes, and what it costs.",
    },
    {
      title: "See it working",
      body: "You get a working first version on your phone to show people and test. Changes are a text away.",
    },
  ],
  // A lower-commitment path for anyone not ready to fill out the form (Kyle, 2026-10-17).
  consult: {
    line: "Not ready to write it all down?",
    sub: "Talk it through first. 15 minutes, free, no pressure to build anything.",
    button: "Book a free consultation",
  },
  faqEyebrow: "Before you ask",
  faqHeadline: "The questions everyone has.",
  faqAside: "Something else on your mind? Put it in the form with your idea and we'll answer it in the plan.",
  faqCta: "Tell us your idea",
  faq: [
    {
      q: "What does it cost?",
      a: "There's no price list, because a one-page website and a full app are different jobs. Send your idea and you get a plan and a quote within one business day.",
    },
    {
      q: "How long does it take?",
      a: "The plan gives you a timeline before any work starts, and you see a working version along the way.",
    },
    {
      q: "Do I need to be technical?",
      a: "No. If you can explain the idea to a friend, you can explain it to us. You test it on your phone like any other app.",
    },
    {
      q: "Will you steal my idea?",
      a: "No. Your idea and the code belong to you. Want an NDA first? We'll sign it before you share the details.",
    },
    {
      q: "Do you work for equity?",
      a: "No. Every project is paid, so you keep 100% of your idea.",
    },
    {
      q: "Can my app go in the App Store?",
      a: "Yes, we'll help you get it there. Apple and Google review every app before it goes live, so the plan builds in that step.",
    },
    {
      q: "What happens after it's built?",
      a: "You own all of it: the code, the domain and the accounts. There's no monthly fee to us, and any developer can pick it up from there.",
    },
  ],
};

export const contact = {
  headline: "Tell us your idea. We'll tell you how we'd build it.",
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
  emailHint: "you@email.com",
  business: "Name of your idea or business",
  phone: "Phone",
  kindLabel: "What do you want to build? Pick any that fit.",
  kinds: ["A website", "An app", "Both", "Not sure yet"],
  problem: "What's your idea?",
  problemHint: "A sentence or a page, rough is fine. Who is it for, and what should it do?",
  more: "Add more detail (optional): wishlist, examples, timeline",
  wishlist: "Your wishlist",
  wishlistHint: "Everything you'd want it to do, big or small.",
  examples: "Examples and visuals you like",
  examplesHint: "Links to sites or apps you like, or a shared folder of screenshots and sketches.",
  timeline: "When do you want it?",
  timelines: ["As soon as possible", "In the next 1 to 3 months", "Just exploring"],
  submit: "Get my plan and quote",
  after: "Only your name, email and your idea are required. We reply within one business day.",
  privacy: "Your idea goes to our inbox and nowhere else. We never share it, and we'll sign an NDA if you'd like.",
};
