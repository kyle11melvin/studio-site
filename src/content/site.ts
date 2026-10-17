// All copy for the site lives here. Change words here, not in components.

export const site = {
  name: "Kyle Melvin",
  // TODO: replace before launch
  email: "hello@example.com",
  location: "Orange County, California",
  year: 2026,
  title: "Kyle Melvin | Custom apps and websites",
  description:
    "Custom web apps and websites built around how your business works. Designed and built in Orange County, California.",
};

export const hero = {
  headline: "I build the tool your business keeps wishing it had.",
  intro:
    "I'm Kyle Melvin. I design and build custom apps and websites in Orange County. Everything below is something I built and use every day.",
  shippedLabel: "Shipped and in daily use",
};

export type FeaturedId = "switchboard" | "birddog" | "anvil" | "huddle" | "edge";

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
  href?: string;
};

export const featured: Featured[] = [
  {
    id: "switchboard",
    name: "Switchboard",
    tagline: "One question, the best answer",
    status: "Live",
    live: true,
    headline: "Ask once and get the answer that fits your rules.",
    problem:
      "Different AI tools give different answers, and checking each one eats the time you meant to save.",
    built:
      "A tool that sends one question to several AIs, checks each reply against your project's rules, and returns the one that holds up.",
    stack: "Next.js and AI APIs, hosted on Vercel.",
  },
  {
    id: "birddog",
    name: "Bird Dog",
    tagline: "Every promised call, on time",
    status: "Private demo",
    live: false,
    headline: "A CRM that shows a loan officer who to call today, right on the phone.",
    problem:
      "Callbacks promised on the phone get lost in notes and inboxes, and a missed one can cost the relationship. Spreadsheets and sticky notes don't keep up with a busy phone.",
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
    problem:
      "Generic workout apps keep suggesting movements you can't or won't do, so you spend the session editing instead of training.",
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
    problem:
      "League apps scatter scores, news and projections across tabs and menus, so lineup calls get made on stale information.",
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
    problem: "Price gaps open and close fast, and watching several markets by hand means missing most of them.",
    built: "A dashboard that watches several markets at once and shows when their prices stop agreeing.",
    stack: "Python and Postgres, with a Next.js board.",
  },
];

export const more = [
  {
    name: "DefendItOwnIt",
    body: "Plain answers to VA loan questions: a live site with base guides, state benefit pages and allowance tools, written in plain language. defenditownit.com",
  },
  {
    name: "Finance",
    body: "A live budget app that finds your subscriptions and keeps each bill under the account that pays it.",
  },
  {
    name: "Markup",
    body: "An AI-run paper-trading fund held to set risk limits, so ideas get tested without real money on the line.",
  },
];

export const process = {
  headline: "From idea to a link on your phone in a week.",
  steps: [
    {
      title: "We write it down",
      body: "What the tool must do, who uses it, and what done looks like. One page, agreed before any code.",
    },
    {
      title: "You use it in week one",
      body: "A working link you can tap, not a slide deck. You react to real screens from the start.",
    },
    {
      title: "Changes by text",
      body: "Tell me what's off. Most fixes go live the same day, and every change is tested and tracked.",
    },
  ],
  ownership:
    "You own the code, the domain and the accounts. No monthly platform fee to me, and nothing locked behind my login.",
};

export const contact = {
  headline: "Tell me what's slowing you down, and I'll tell you whether I can build the fix.",
  button: "Email Kyle",
  note: "A plan and a price range within one business day.",
};
