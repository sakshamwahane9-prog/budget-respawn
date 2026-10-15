/**
 * @file seo.ts
 * @description Central SEO configuration, keyword mapping, and metadata for Budget Respawn.
 */

export interface PageSEO {
  path: string;
  slug: string;
  title: string;
  metaDescription: string;
  mainKeyword: string;
  relatedKeywords: [string, string];
  h1: string;
  type: 'website' | 'article';
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  imageKey: string;
  breadcrumbs: Array<{ name: string; item: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

/**
 * Centrally configured canonical production domain.
 */
export const PRODUCTION_DOMAIN = 'https://budget-respawn.vercel.app';

export const SEO_DATA: Record<string, PageSEO> = {
  home: {
    path: '/',
    slug: 'home',
    title: 'Budget Gaming Setup Guide for Indian Students & Gamers',
    metaDescription:
      'Build your dream budget gaming setup in India without overspending. Explore realistic APU blueprints, component prices, and student tips to start playing today.',
    mainKeyword: 'budget gaming setup',
    relatedKeywords: ['cheap gaming setup', 'affordable gaming setup'],
    h1: 'Level Up Your Setup, Not Your Spending: Budget Gaming Setup in India',
    type: 'website',
    imageKey: 'home',
    breadcrumbs: [{ name: 'Home', item: '/' }],
    faqs: [
      {
        question: 'How much does a budget gaming setup cost in India?',
        answer:
          'A functional complete budget gaming setup in India generally costs between ₹30,000 and ₹42,000. This full amount covers a capable entry-level PC tower with an AMD Ryzen APU (₹20,000–₹24,000), a 22-to-24 inch 75Hz–100Hz IPS monitor (₹6,500–₹8,000), and entry-level gaming peripherals including keyboard, mouse, and headset (₹2,500–₹4,000). If you already own a monitor or desk, a PC-only build can start as low as ₹22,000.',
      },
      {
        question: 'Can you build an affordable gaming setup on a student budget?',
        answer:
          'Yes, students can comfortably build an affordable gaming setup by adopting a phased upgrade strategy. Prioritize high-value multi-purpose hardware such as APU processors that eliminate the immediate need for a costly graphics card, source peripherals from trusted value brands like Cosmic Byte and Redgear, and construct a sturdy DIY plywood desk for under ₹2,000 instead of purchasing branded gaming furniture.',
      },
    ],
  },
  'gaming-setup-under-30000': {
    path: '/blogs/gaming-setup-under-30000',
    slug: 'gaming-setup-under-30000',
    title: 'Gaming Setup Under ₹30000 in India: Full 2026 Blueprint',
    metaDescription:
      'Build a complete gaming setup under ₹30000 in India. Includes an APU PC build, 100Hz IPS monitor, and student peripherals with actual retail prices. Read now.',
    mainKeyword: 'gaming setup under ₹30000',
    relatedKeywords: ['budget gaming PC', 'affordable gaming desk setup'],
    h1: 'Complete Gaming Setup Under ₹30,000 in India: 2026 Realistic Blueprint',
    type: 'article',
    publishDate: '2026-03-15',
    modifiedDate: '2026-10-12',
    author: 'Budget Respawn Editorial Team',
    imageKey: 'gaming-setup-under-30000',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Guides', item: '/#guides' },
      { name: 'Gaming Setup Under ₹30,000', item: '/blogs/gaming-setup-under-30000' },
    ],
    faqs: [
      {
        question: 'Can I build a complete gaming setup under ₹30,000 in India?',
        answer:
          'Yes, you can build a complete gaming setup under ₹30,000 by balancing your budget carefully between a Ryzen APU-based PC tower (approx. ₹20,500), a budget 21.5-inch 75Hz monitor (approx. ₹6,500), and a reliable value peripheral bundle (approx. ₹2,000). This setup smoothly handles competitive titles like Valorant, CS2, GTA V, and Rocket League at 1080p medium settings without requiring an expensive dedicated graphics card.',
      },
      {
        question: 'What is the difference between a full setup budget and a PC-only budget?',
        answer:
          'A PC-only budget allocates 100% of your funds strictly to computer internals (CPU, motherboard, RAM, storage, power supply, and cabinet). A full setup budget, however, must distribute your ₹30,000 across visual displays (monitors), peripherals (keyboard, mouse, headset, mousepad), and ergonomic furniture (desk and chair). Confusing the two often leaves first-time builders with a powerful computer tower but no screen or desk to play on.',
      },
    ],
  },
  'best-budget-gaming-accessories': {
    path: '/blogs/best-budget-gaming-accessories',
    slug: 'best-budget-gaming-accessories',
    title: 'Best Budget Gaming Accessories in India: Top Gear Picks',
    metaDescription:
      'Discover the best budget gaming accessories in India under ₹1,500. Compare durable mechanical keyboards, optical mice, and IEM earphones to level up your aim.',
    mainKeyword: 'best budget gaming accessories',
    relatedKeywords: ['cheap gaming keyboard', 'budget gaming mouse'],
    h1: 'Best Budget Gaming Accessories in India: High Performance Under ₹1,500',
    type: 'article',
    publishDate: '2026-03-22',
    modifiedDate: '2026-10-12',
    author: 'Budget Respawn Editorial Team',
    imageKey: 'best-budget-gaming-accessories',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Guides', item: '/#guides' },
      { name: 'Best Budget Gaming Accessories', item: '/blogs/best-budget-gaming-accessories' },
    ],
    faqs: [
      {
        question: 'Which gaming accessories should I buy first on a tight budget?',
        answer:
          'On a tight budget, prioritize an accurate optical gaming mouse and an extended desk pad first. In competitive gaming, precise tracking and smooth sensor motion provide an immediate gameplay upgrade for under ₹1,200 total, whereas an expensive mechanical keyboard or surround-sound headset yields comparatively smaller performance gains in early stages.',
      },
      {
        question: 'Are cheap gaming mechanical keyboards worth buying in India?',
        answer:
          'Yes, entry-level mechanical keyboards priced between ₹1,500 and ₹2,200 (such as Cosmic Byte Firefly, CB-GK-16, or Ant Esports MK1000 with Outemu switches) are significantly better than squishy membrane office keyboards. They offer distinct tactile feedback, true anti-ghosting, durable switch lifespan, and hot-swappable keycaps that make typing and fast-paced gaming noticeably more responsive.',
      },
    ],
  },
  'build-budget-gaming-pc': {
    path: '/blogs/build-budget-gaming-pc',
    slug: 'build-budget-gaming-pc',
    title: 'How to Build a Budget Gaming PC: Step-by-Step in India',
    metaDescription:
      'Learn how to build a budget gaming PC in India step-by-step. Avoid rookie mistakes, pick the best value APU, and optimize BIOS for max FPS. Read the guide.',
    mainKeyword: 'how to build a budget gaming PC',
    relatedKeywords: ['budget PC build', 'affordable gaming components'],
    h1: 'How to Build a Budget Gaming PC in India: Complete Beginner Blueprint',
    type: 'article',
    publishDate: '2026-04-02',
    modifiedDate: '2026-10-12',
    author: 'Budget Respawn Editorial Team',
    imageKey: 'build-budget-gaming-pc',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Guides', item: '/#guides' },
      { name: 'How to Build a Budget Gaming PC', item: '/blogs/build-budget-gaming-pc' },
    ],
    faqs: [
      {
        question: 'Is building a budget gaming PC cheaper than buying a prebuilt in India?',
        answer:
          'Building your own PC in India saves approximately ₹4,000 to ₹7,000 compared to branded prebuilt systems. More importantly, custom building ensures you avoid substandard, unbranded power supplies, single-channel slow memory, and closed-off cases with poor airflow that frequently plague cheap Indian prebuilt desktops.',
      },
      {
        question: 'Should beginner builders choose an APU or a dedicated graphics card?',
        answer:
          'If your total PC tower budget is below ₹25,000, choosing an AMD Ryzen APU (like the Ryzen 5 4600G or 5600G) with Radeon integrated graphics is the smartest financial path. It provides smooth 60+ FPS in esports titles out of the box while leaving your PCIe slot ready for a dedicated GPU upgrade (such as an RX 6600 or RTX 3050) whenever your savings allow.',
      },
    ],
  },
  'small-room-gaming-setup': {
    path: '/blogs/small-room-gaming-setup',
    slug: 'small-room-gaming-setup',
    title: 'Small Room Gaming Setup Ideas: Space-Saving Indian Desk',
    metaDescription:
      'Maximise your small room gaming setup with space-saving Indian bedroom ideas. Learn how monitor arms, pegboards, and cable concealment create room to game.',
    mainKeyword: 'small room gaming setup',
    relatedKeywords: ['compact gaming desk', 'small bedroom gaming setup'],
    h1: 'Small Room Gaming Setup Ideas: Ergonomic Battlestations in Tight Quarters',
    type: 'article',
    publishDate: '2026-04-18',
    modifiedDate: '2026-10-12',
    author: 'Budget Respawn Editorial Team',
    imageKey: 'small-room-gaming-setup',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Guides', item: '/#guides' },
      { name: 'Small Room Gaming Setup Ideas', item: '/blogs/small-room-gaming-setup' },
    ],
    faqs: [
      {
        question: 'How can I fit a gaming setup into a very small bedroom or hostel room?',
        answer:
          'You can optimize a small bedroom gaming setup by leveraging vertical storage and minimizing horizontal desk footprint. Use a compact 90cm x 50cm desk, mount your monitor on a clamp arm to reclaim 40% of tabletop surface, install wall pegboards or floating shelves for headphones and controllers, and store your PC tower on a breathable floor riser or under-desk cradle.',
      },
      {
        question: 'How do you prevent heat buildup in a compact gaming room in Indian summers?',
        answer:
          'Prevent heat buildup in small Indian rooms by keeping your PC at least 15cm away from walls, ensuring unrestricted intake and exhaust case fan pathways, positioning a table fan to cross-ventilate toward open doors or windows, and setting frame rate caps in games to keep your CPU and GPU power draw at minimum necessary levels.',
      },
    ],
  },
  'best-budget-gaming-monitors': {
    path: '/blogs/best-budget-gaming-monitors',
    slug: 'best-budget-gaming-monitors',
    title: 'Best Budget Gaming Monitor in India: Top 100Hz+ Displays',
    metaDescription:
      'Find the best budget gaming monitor in India under ₹10,000. Compare fast IPS panels, 100Hz refresh rates, and low latency before buying. See top picks now.',
    mainKeyword: 'best budget gaming monitor',
    relatedKeywords: ['affordable gaming monitor', 'budget gaming display'],
    h1: 'Best Budget Gaming Monitors in India: 100Hz+ Displays Under ₹10,000',
    type: 'article',
    publishDate: '2026-05-05',
    modifiedDate: '2026-10-12',
    author: 'Budget Respawn Editorial Team',
    imageKey: 'best-budget-gaming-monitors',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Guides', item: '/#guides' },
      { name: 'Best Budget Gaming Monitors', item: '/blogs/best-budget-gaming-monitors' },
    ],
    faqs: [
      {
        question: 'What should I look for in a budget gaming monitor under ₹10,000 in India?',
        answer:
          'When shopping for a budget gaming monitor under ₹10,000, prioritize an IPS panel for wide viewing angles and accurate color reproduction, a minimum refresh rate of 100Hz to 144Hz for fluid motion, AMD FreeSync / Adaptive Sync to prevent screen tearing, and at least one DisplayPort or HDMI 2.0 input with standard VESA 75x75 or 100x100 wall mount compatibility.',
      },
      {
        question: 'Is 100Hz fast enough for competitive FPS gaming?',
        answer:
          'Yes, jumping from traditional 60Hz to 100Hz delivers a massive 66% boost in frame refresh frequency, dramatically reducing motion blur and input latency in fast-paced shooters like Valorant and Apex Legends. While 240Hz exists for esports pros, a 100Hz–144Hz IPS panel represents the optimal price-to-performance sweet spot for budget gamers.',
      },
    ],
  },
  'diy-budget-gaming-setup': {
    path: '/blogs/diy-budget-gaming-setup',
    slug: 'diy-budget-gaming-setup',
    title: 'DIY Gaming Setup on a Budget: Build Custom Desk in India',
    metaDescription:
      'Craft an affordable DIY gaming setup in India. Build a heavy-duty plywood desk for under ₹2,000, hide messy wires, and add custom RGB ambient glow easily.',
    mainKeyword: 'DIY gaming setup',
    relatedKeywords: ['cheap gaming desk setup', 'budget gaming room ideas'],
    h1: 'DIY Gaming Setup on a Budget: Custom Indian Battlestation Hacks',
    type: 'article',
    publishDate: '2026-05-20',
    modifiedDate: '2026-10-12',
    author: 'Budget Respawn Editorial Team',
    imageKey: 'diy-budget-gaming-setup',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Guides', item: '/#guides' },
      { name: 'DIY Gaming Setup on a Budget', item: '/blogs/diy-budget-gaming-setup' },
    ],
    faqs: [
      {
        question: 'How do you build a sturdy DIY gaming desk for under ₹2,000 in India?',
        answer:
          'To build a durable gaming desk under ₹2,000, purchase a 4x2 foot piece of 18mm commercial calibrated plywood or pre-laminated MDF from a local timber timberyard for ₹900–₹1,100, sand the edges smooth, and attach four ready-made heavy-duty metal hairpin legs or 28mm hollow iron pipes sourced from local hardware dealers or Amazon India for ₹800–₹900.',
      },
      {
        question: 'What are the best low-cost DIY cable management hacks for gaming desks?',
        answer:
          'The most effective low-cost DIY cable hacks include using ₹80 plastic J-channel electrical casing or wire raceways stuck under the desk with double-sided foam tape, bundling loose cords with ₹50 reusable velcro cable ties, and mounting a ₹350 anchor power strip underneath your desk surface so only a single master power cable reaches the wall outlet.',
      },
    ],
  },
  'improve-gaming-setup-aesthetics': {
    path: '/blogs/improve-gaming-setup-aesthetics',
    slug: 'improve-gaming-setup-aesthetics',
    title: 'Gaming Setup Ideas for Budget Battlestations in India',
    metaDescription:
      'Get pro aesthetic gaming setup ideas on a budget. Master two-tone lighting, zero-wire cable routing, and clean desk mats to transform your battlestation today.',
    mainKeyword: 'gaming setup ideas',
    relatedKeywords: ['gaming desk decoration', 'budget gaming setup aesthetics'],
    h1: 'Gaming Setup Ideas: How to Make an Affordable Setup Look Pro',
    type: 'article',
    publishDate: '2026-06-08',
    modifiedDate: '2026-10-12',
    author: 'Budget Respawn Editorial Team',
    imageKey: 'improve-gaming-setup-aesthetics',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Guides', item: '/#guides' },
      { name: 'Gaming Setup Ideas', item: '/blogs/improve-gaming-setup-aesthetics' },
    ],
    faqs: [
      {
        question: 'How can I make my budget gaming setup look expensive without spending much?',
        answer:
          'To make a budget setup look premium without big spending, focus on visual discipline: conceal 100% of visible dangling cables using inexpensive raceways, enforce a strict two-tone color scheme (such as matte charcoal and emerald green), install diffused warm or cool-white LED bias strip behind your monitor, and replace cluttered tabletop trinkets with an oversized clean desk mat.',
      },
      {
        question: 'Why does monitor bias lighting improve gaming aesthetics and comfort?',
        answer:
          'Bias lighting behind your monitor casts a soft, indirect halo of light against the wall, reducing the stark contrast between a bright monitor screen and a dark room. This prevents eye strain during long evening gaming sessions while giving your battlestation a polished, studio-grade aesthetic glow for less than ₹400.',
      },
    ],
  },
  'budget-gaming-cable-management': {
    path: '/blogs/budget-gaming-cable-management',
    slug: 'budget-gaming-cable-management',
    title: 'Budget Gaming Desk Cable Management: Easy Tips for a Clean Setup',
    metaDescription:
      'Master budget gaming desk cable management with cheap velcro, J-channels, and under-desk trays. Clean up messy wires in India for under ₹500. Read our guide.',
    mainKeyword: 'budget gaming cable management',
    relatedKeywords: ['gaming desk cable management', 'cable management ideas for gamers'],
    h1: 'Budget Gaming Desk Cable Management: Easy Tips for a Clean Setup',
    type: 'article',
    publishDate: '2026-07-10',
    modifiedDate: '2026-10-15',
    author: 'Budget Respawn Editorial Team',
    imageKey: 'budget-gaming-cable-management',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Guides', item: '/#guides' },
      { name: 'Cable Management', item: '/blogs/budget-gaming-cable-management' },
    ],
    faqs: [
      {
        question: 'How do you manage cables on a budget gaming desk?',
        answer:
          'To manage cables on a budget gaming desk, mount an anchor power strip underneath your tabletop, gather dangling wires into split braided sleeves, and route them along desk legs using adhesive cable clips or reusable velcro ties. This complete cleanup costs less than ₹500 in India.',
      },
      {
        question: 'What is the cheapest way to hide messy gaming wires?',
        answer:
          'The cheapest way to hide gaming wires is using standard PVC electrical wire casing or J-channels from a local Indian hardware store (₹60–₹100) affixed beneath your desk with double-sided foam tape, paired with a ₹120 roll of velcro straps.',
      },
    ],
  },
  'best-budget-gaming-chairs-india': {
    path: '/blogs/best-budget-gaming-chairs-india',
    slug: 'best-budget-gaming-chairs-india',
    title: 'Best Budget Gaming Chairs in India: Comfort Without Overspending',
    metaDescription:
      'Discover the best budget gaming chairs in India under ₹7,000. Compare breathable ergonomic mesh chairs and racing seats with lumbar support for long sessions.',
    mainKeyword: 'best budget gaming chairs in India',
    relatedKeywords: ['affordable gaming chair India', 'budget gaming chair buying guide'],
    h1: 'Best Budget Gaming Chairs in India: Comfort Without Overspending',
    type: 'article',
    publishDate: '2026-07-18',
    modifiedDate: '2026-10-15',
    author: 'Budget Respawn Editorial Team',
    imageKey: 'best-budget-gaming-chairs-india',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Guides', item: '/#guides' },
      { name: 'Gaming Chairs', item: '/blogs/best-budget-gaming-chairs-india' },
    ],
    faqs: [
      {
        question: 'Is an ergonomic office chair better than a budget gaming chair in India?',
        answer:
          'Yes, high-back ergonomic mesh office chairs priced between ₹4,500 and ₹6,500 generally outperform cheap PU leather gaming chairs in Indian climates. Breathable mesh prevents excessive back sweating, supports the lumbar spine naturally, and features durable Class 4 gas lift cylinders without peeling over time.',
      },
      {
        question: 'What should you look for in an affordable gaming chair under ₹7,000?',
        answer:
          'Look for a breathable nylon mesh backrest, adjustable lumbar pad, high-density molded foam seat cushion, sturdy metal or reinforced nylon wheelbase, and tilt-lock recline mechanisms from reliable brands like Green Soul, Savya Home, or Featherlite.',
      },
    ],
  },
  'save-electricity-while-gaming': {
    path: '/blogs/save-electricity-while-gaming',
    slug: 'save-electricity-while-gaming',
    title: "How to Save Electricity While Gaming: A Budget Gamer's Guide",
    metaDescription:
      'Learn how to save electricity while gaming in India. Calculate gaming PC power consumption, optimize wattage, and cut your monthly electricity bill today.',
    mainKeyword: 'how to save electricity while gaming',
    relatedKeywords: ['gaming PC power consumption', 'reduce gaming electricity costs'],
    h1: "How to Save Electricity While Gaming: A Budget Gamer's Guide",
    type: 'article',
    publishDate: '2026-08-02',
    modifiedDate: '2026-10-15',
    author: 'Budget Respawn Editorial Team',
    imageKey: 'save-electricity-gaming',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Guides', item: '/#guides' },
      { name: 'Electricity Guide', item: '/blogs/save-electricity-while-gaming' },
    ],
    faqs: [
      {
        question: 'How much electricity does a budget gaming PC use in India?',
        answer:
          'A budget gaming PC powered by an AMD Ryzen APU draws only 65W to 95W under full gaming load, consuming roughly 0.08 units of electricity per hour (around ₹0.60 to ₹0.80/hour). In contrast, a mid-tier rig with a dedicated graphics card draws 250W to 350W, costing ₹2.00 to ₹3.50/hour depending on state electricity tariff slabs.',
      },
      {
        question: 'How can you reduce gaming PC power consumption without losing FPS?',
        answer:
          "You can reduce power consumption by capping your frame rate to match your monitor's refresh rate (e.g., 75Hz or 100Hz), undervolting your CPU or GPU using software like Ryzen Master or MSI Afterburner, enabling aggressive display sleep timers in Windows, and switching off phantom loads via master surge protectors.",
      },
    ],
  },
};

/**
 * Helper to fetch SEO data by route slug or key
 */
export function getPageSEO(key: string): PageSEO {
  return SEO_DATA[key] || SEO_DATA['home'];
}
