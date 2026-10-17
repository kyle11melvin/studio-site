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
  headline: "Apps and websites built around how you work.",
  intro:
    "I'm Kyle Melvin. I design and build custom software in Orange County. The apps below run my own business every day.",
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
    tagline: "Ask every AI at once",
    status: "Live",
    live: true,
    headline: "One question, sent to the right AIs, judged side by side.",
    problem:
      "Comparing ChatGPT, Claude and Grok meant three tabs, three slightly different questions, and no fair way to pick a winner.",
    built:
      "A hub that sharpens the question, routes it to the AIs that suit the job, and has one model judge every answer against your project's rules.",
    stack: "Next.js and the OpenAI and Anthropic APIs, hosted on Vercel.",
  },
  {
    id: "birddog",
    name: "Bird Dog",
    tagline: "A CRM that reads like a checklist",
    status: "Private demo",
    live: false,
    headline: "A CRM that opens to today's list instead of a database.",
    problem:
      "Off-the-shelf CRMs made a busy loan officer hunt through screens to decide who to call first.",
    built:
      "A home-screen app that opens to one day sheet: promises first, then the day's mission in order. One tap to call, one tap to log, a push reminder at 7 a.m.",
    stack:
      "a single-file web app and a private Node server, covered by 234 automated tests.",
  },
  {
    id: "anvil",
    name: "ANVIL",
    tagline: "A workout app with rules",
    status: "Live",
    live: true,
    headline: "A workout app that remembers yesterday and respects injuries.",
    problem:
      "Workout apps shuffle random sessions, repeat muscle groups and ignore the lifts you can't do.",
    built:
      "Paste or generate a session, run a timer per block with the workout still on screen, and log it. Exclusions and rep caps are enforced in code, not suggested.",
    stack: "an installable web app on Cloudflare, tested across every workout format.",
  },
  {
    id: "huddle",
    name: "The Huddle",
    tagline: "Fantasy football HQ",
    status: "Live",
    live: true,
    headline: "Game day for a fantasy league, in one screen.",
    problem:
      "League apps bury the decisions that matter on game day under ads, menus and stale projections.",
    built:
      "A team headquarters that syncs the league from ESPN, projects every matchup live during the games, and flags start-or-sit calls before kickoff.",
    stack: "React and Vite, with serverless functions on Vercel.",
  },
  {
    id: "edge",
    name: "Edge Desk",
    tagline: "A live market data engine",
    status: "Private",
    live: false,
    headline: "A data engine that measures where prices disagree, and for how long.",
    problem:
      "Prices on betting exchanges drift from sharp lines for minutes at a time, and nobody was recording how often or whether it paid.",
    built:
      "A collector that snapshots every venue every five minutes, computes value after fees, and tracks whether each gap closes before the game.",
    stack: "Python and Postgres, with a Next.js board on top.",
  },
];

export const more = [
  {
    name: "DefendItOwnIt",
    body: "A VA home loan answer site written for AI search, with 229 pages checked automatically on every build.",
  },
  {
    name: "Finance",
    body: "A budget app on live bank data that replaced a hand-typed spreadsheet and found the forgotten subscriptions.",
  },
  {
    name: "Markup",
    body: "An AI-run $100K paper trading fund with hard risk limits and a public scorecard.",
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
  headline: "Tell me what you wish existed.",
  button: "Email Kyle",
  note: "A plan and a price range within one business day.",
};
