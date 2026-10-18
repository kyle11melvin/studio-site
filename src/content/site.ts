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
  // FormSubmit (no account, HTTPS): posts land in hello@. The first submission sends an
  // activation email to hello@ that has to be clicked once. Swap for a Formspree URL later.
  formEndpoint: "https://formsubmit.co/hello@sparkgapstudio.com" as string,
  // Where FormSubmit sends the visitor after a successful submit; #sent shows the thank-you.
  formThanksUrl: "https://sparkgapstudio.com/#sent",
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
  // Ownership up front (Kyle, 2026-10-17): it was buried in FAQ #7.
  trust: "No commitment to build. You own everything we build. NDA on request.",
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
    tagline: "Ask once. Get the best answer",
    status: "Live",
    live: true,
    headline: "Sends your question to every AI, checks each reply against your rules, and hands you the winner.",
    idea:
      "Stop pasting the same question into three AIs and comparing the answers by hand.",
    built:
      "One box that sends your question to each AI, checks every reply against the instructions you saved for that project, and shows you the one that follows them.",
    stack: "Next.js and AI APIs, hosted on Vercel.",
  },
  {
    id: "dioi",
    name: "DefendItOwnIt",
    tagline: "Your VA benefit, explained base by base",
    status: "Live",
    live: true,
    headline: "Straight answers on where to live, what your allowance covers, and whether buying beats renting.",
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
    tagline: "Never miss a call you promised",
    status: "Private demo",
    live: false,
    headline: "Opens to the people you need to call today. One tap to call, text or log it.",
    idea:
      "Never lose a promised callback in a notebook or an inbox again.",
    built:
      "A CRM that opens to today's promises and calls, with one tap to call, text or log the conversation.",
    stack: "a web app and a private server, covered by 234 automated tests.",
  },
  {
    id: "anvil",
    name: "ANVIL",
    tagline: "Your personal AI strength coach",
    status: "Live",
    live: true,
    headline: "Tell it what you can't do and what you're sick of, and it builds a session you'll actually finish.",
    idea:
      "Stop editing every generic workout to take out the moves you can't do.",
    built: "A workout app with timers and logging that leaves out any movement you've ruled out.",
    stack: "an installable web app on Cloudflare.",
  },
  {
    id: "huddle",
    name: "The Huddle",
    tagline: "Your fantasy league's smartest screen",
    status: "Live",
    live: true,
    headline: "Live projections, news and a roster that's always set for the best lineup.",
    idea:
      "Every score, stat and projection for one fantasy team on one screen, live during the games.",
    built:
      "A private hub that syncs the league from ESPN and shows live projections during the games, so every lineup call is made on current numbers.",
    stack: "React and Vite, hosted on Vercel.",
  },
  {
    id: "edge",
    name: "Edge Desk",
    tagline: "Catch the price before it moves",
    status: "Private",
    live: false,
    headline: "A desk that watches every market at once and flags the moment they disagree.",
    idea:
      "Price gaps between markets close fast, and watching them by hand means missing most of them.",
    built: "A dashboard that watches several markets at once and shows when their prices stop agreeing.",
    stack: "Python and Postgres, with a Next.js board.",
  },
];

export const more = [
  {
    id: "finance",
    name: "Ledger",
    tagline: "Manage your money smarter",
    body: "Finds your subscriptions, shows your balance across every account, plans for the bills coming up, and tells you what's left.",
  },
  {
    id: "markup",
    name: "Markup",
    tagline: "An AI investor that never bets the house",
    body: "An AI-run fund that trades with hard risk limits, so you can see how it thinks before real money ever moves.",
  },
];

// Switchboard replay (Kyle, 2026-10-17): visitors pick a sample idea and watch how
// Switchboard works: three answers side by side, a judging beat, then the pick. These are
// ILLUSTRATIVE examples written for the demo (Kyle's call: no live AI calls). So the copy says
// "example", and the answers are labeled Answer A/B/C, never attributed to a named AI.
export type ReplayRun = {
  /** Short label on the picker chip. */
  label: string;
  /** The example question. */
  idea: string;
  answers: { ai: string; text: string }[];
  /** Index into `answers` of the one Switchboard picks. */
  winner: number;
  /** The one-line reason for the pick. */
  why: string;
};

export const replay = {
  eyebrow: "See how it works",
  headline: "One question. Three answers. One pick.",
  intro: "An example of Switchboard at work. Pick an idea: three AIs answer, each answer is checked against the rules, and the best one wins.",
  judging: "Checking each answer against the rules",
  picked: "Switchboard's pick",
  runs: [
    {
      label: "Dog-walking app",
      idea: "I have an idea for an app where neighbors book each other to walk their dogs. What should the first version do?",
      answers: [
        { ai: "Answer A", text: "Three screens: post a walk you need, see neighbors nearby who can take it, confirm a time. Launch on one street and add payments once people actually use it." },
        { ai: "Answer B", text: "Build a full pet-care platform: payments, ratings, GPS tracking, chat, insurance and a rewards program, so you can compete with the big apps from day one." },
        { ai: "Answer C", text: "Skip the app at first. Run it as a group text and a sign-up sheet for a month, then build only what people keep asking for." },
      ],
      winner: 0,
      why: "Small enough to build fast and test with real neighbors, with a clear next step once it works.",
    },
    {
      label: "Meal-prep website",
      idea: "I want a simple website for my meal-prep side business. What does it need on day one?",
      answers: [
        { ai: "Answer A", text: "This week's menu, prices, an order button that texts or emails you, and pickup times. One page that's easy to update every Sunday." },
        { ai: "Answer B", text: "A blog, a recipe library, a newsletter, customer accounts and a loyalty program, so the site keeps people coming back." },
        { ai: "Answer C", text: "Just post on Instagram and take orders in DMs until you have enough customers to justify a site." },
      ],
      winner: 0,
      why: "It answers the only questions customers have, what's on the menu and how to order, and you can run it in five minutes a week.",
    },
    {
      label: "Stay-in-touch app",
      idea: "I have an idea for an app that reminds people to call friends they haven't talked to in a while. How would I test it before building it?",
      answers: [
        { ai: "Answer A", text: "Build the full app with contact syncing, smart reminders and call tracking, then see whether people like it." },
        { ai: "Answer B", text: "Ask ten friends to send you three names each. Text them a reminder every week for a month and count how many calls actually happen. If most of them call, build it." },
        { ai: "Answer C", text: "Run a survey asking people whether they'd use an app like this." },
      ],
      winner: 1,
      why: "It tests the real behavior, whether people actually make the call, for almost no cost before anything is built.",
    },
  ] as ReplayRun[],
};

export const work = {
  headline: "The work",
  intro: "Eight ideas that became real apps and websites, most of them in use every day. Tap an icon to jump to one, or keep scrolling for the story behind each.",
  swipeHint: "Swipe to see all eight",
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
      body: "You get a working first version on your phone to show people and test. Changes are a text away, and you own all of it.",
    },
  ],
  // Who you're trusting, without a name (Kyle, 2026-10-17: no owner name on the page).
  builder: "One builder, start to finish. You talk to the person writing the code, not an account manager.",
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
      q: "How does it go live, and who keeps it running?",
      a: "We set up the hosting and launch it for you, and help you through the App Store if it's an app. You get every login and a short guide to how it works. After launch, ongoing support is there if you want it, quoted with your plan.",
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
  otherWays: "Rather talk it through first?",
  talkFirst: "Book a free 15-minute call",
  sticky: "Tell us your idea",
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
  problemHint: 'Plain English is perfect. Like "an app where neighbors book each other to walk their dogs" or "a page where my clients upload documents without making an account."',
  // Shown above the form: what happens after you send it.
  next: ["A written plan and a quote", "No commitment to build", "You own everything we build"],
  more: "Add more detail (optional): wishlist, examples, timeline",
  wishlist: "Your wishlist",
  wishlistHint: "Everything you'd want it to do, big or small.",
  examples: "Examples and visuals you like",
  examplesHint: "Links to sites or apps you like, or a shared folder of screenshots and sketches.",
  timeline: "When do you want it?",
  timelines: ["As soon as possible", "In the next 1 to 3 months", "Just exploring"],
  submit: "Get my plan and quote",
  after: "Only your name, email and your idea are required. We reply within one business day.",
  thanksTitle: "Got it. Your idea is in.",
  thanksBody: "We read every one and reply within one business day with a plan and a quote.",
  privacy: "Your idea goes to our inbox and nowhere else. We never share it, and we'll sign an NDA if you'd like.",
};
