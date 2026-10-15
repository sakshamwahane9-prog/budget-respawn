import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imagesConfig = [
  {
    filename: 'home-gaming-setup.webp',
    title: 'BUDGET RESPAWN BATTLESTATION',
    subtitle: 'Affordable Gaming Setup in India • Level Up Your Setup, Not Your Spending',
    badge: 'FLAGSHIP BLUEPRINT',
    accentColor: '#22c55e',
    secondaryColor: '#a855f7',
    icon: 'controller',
  },
  {
    filename: 'gaming-setup-under-30000.webp',
    title: 'FULL GAMING SETUP UNDER Rs. 30,000',
    subtitle: 'Tower + Monitor + Keyboard + Mouse + Audio • Realistic 2026 Student Blueprint',
    badge: 'Rs. 30K BUDGET',
    accentColor: '#10b981',
    secondaryColor: '#6366f1',
    icon: 'pc',
  },
  {
    filename: 'budget-gaming-accessories.webp',
    title: 'ESSENTIAL BUDGET ACCESSORIES',
    subtitle: 'Mice, Mechanical Keyboards, Headsets & XXL Desk Mats Under Rs. 1,500',
    badge: 'PERIPHERALS GUIDE',
    accentColor: '#06b6d4',
    secondaryColor: '#ec4899',
    icon: 'keyboard',
  },
  {
    filename: 'budget-gaming-pc.webp',
    title: 'HOW TO BUILD A BUDGET GAMING PC',
    subtitle: 'Step-by-Step Hardware Assembly: Ryzen APU vs Discrete GPU Build in India',
    badge: 'RIG ASSEMBLY GUIDE',
    accentColor: '#eab308',
    secondaryColor: '#f97316',
    icon: 'cpu',
  },
  {
    filename: 'small-room-gaming-setup.webp',
    title: 'SMALL-ROOM GAMING SETUP IDEAS',
    subtitle: 'Space-Saving Desks, Pegboards, Vertical Mounts & Cable Organization for Hostels',
    badge: 'COMPACT SPACES',
    accentColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    icon: 'room',
  },
  {
    filename: 'budget-gaming-monitors.webp',
    title: 'BEST BUDGET GAMING MONITORS',
    subtitle: 'IPS Panels, 100Hz Refresh Rates, FreeSync & Under Rs. 10,000 Displays',
    badge: 'DISPLAY BUYING GUIDE',
    accentColor: '#14b8a6',
    secondaryColor: '#3b82f6',
    icon: 'monitor',
  },
  {
    filename: 'diy-budget-gaming-setup.webp',
    title: 'DIY GAMING SETUP ON A BUDGET',
    subtitle: 'Custom Plywood Desks, Hardware Store Hacks, Cable Trays & Rs. 500 RGB Diffusers',
    badge: 'DIY WORKBENCH',
    accentColor: '#f59e0b',
    secondaryColor: '#10b981',
    icon: 'tools',
  },
  {
    filename: 'improve-gaming-setup-aesthetics.webp',
    title: 'MAKE YOUR GAMING SETUP LOOK BETTER',
    subtitle: 'Aesthetic Transformations: Cable Routing, Ambient Bias Glow & Minimalist Vibes',
    badge: 'AESTHETICS & VIBES',
    accentColor: '#d946ef',
    secondaryColor: '#8b5cf6',
    icon: 'sparkles',
  },
  {
    filename: 'budget-cable-management.webp',
    jpgFilename: 'budget-cable-management.jpg',
    title: 'BUDGET GAMING CABLE MANAGEMENT',
    subtitle: 'Under-Desk Trays, Velcro Ties, J-Channels & Clean Setup Hacks in India',
    badge: 'DIY CRAFTS',
    accentColor: '#10b981',
    secondaryColor: '#f59e0b',
    icon: 'cable',
  },
  {
    filename: 'budget-gaming-chairs.webp',
    jpgFilename: 'budget-gaming-chairs.jpg',
    title: 'BEST BUDGET GAMING CHAIRS IN INDIA',
    subtitle: 'Ergonomic Office Chairs vs Racing Buckets: Lumbar Support Under Rs. 7,000',
    badge: 'PERIPHERALS',
    accentColor: '#06b6d4',
    secondaryColor: '#8b5cf6',
    icon: 'chair',
  },
  {
    filename: 'save-electricity-gaming.webp',
    jpgFilename: 'save-electricity-gaming.jpg',
    title: 'SAVE ELECTRICITY WHILE GAMING',
    subtitle: 'Wattage Optimization, Undervolting, Sleep States & Cutting Power Bills',
    badge: 'SETUP BLUEPRINTS',
    accentColor: '#eab308',
    secondaryColor: '#14b8a6',
    icon: 'power',
  },
];

function getIconSvg(type, accent, secondary) {
  switch (type) {
    case 'controller':
      return `
        <rect x="520" y="220" width="160" height="100" rx="30" fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-width="4"/>
        <circle cx="560" cy="270" r="16" fill="${accent}"/>
        <circle cx="640" cy="255" r="8" fill="${secondary}"/>
        <circle cx="655" cy="275" r="8" fill="${secondary}"/>
        <circle cx="625" cy="275" r="8" fill="${secondary}"/>
        <circle cx="640" cy="295" r="8" fill="${secondary}"/>
      `;
    case 'pc':
      return `
        <rect x="530" y="200" width="140" height="150" rx="12" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="4"/>
        <rect x="545" y="215" width="110" height="70" rx="6" fill="#000" stroke="${secondary}" stroke-width="2"/>
        <circle cx="580" cy="250" r="18" fill="none" stroke="${accent}" stroke-width="3" stroke-dasharray="6,4"/>
        <circle cx="620" cy="250" r="18" fill="none" stroke="${secondary}" stroke-width="3" stroke-dasharray="6,4"/>
        <line x1="545" y1="305" x2="655" y2="305" stroke="${accent}" stroke-width="3"/>
        <circle cx="600" cy="330" r="6" fill="${accent}"/>
      `;
    case 'keyboard':
      return `
        <rect x="500" y="230" width="200" height="90" rx="12" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="4"/>
        <rect x="515" y="245" width="25" height="20" rx="4" fill="${secondary}" fill-opacity="0.6"/>
        <rect x="545" y="245" width="25" height="20" rx="4" fill="${accent}" fill-opacity="0.6"/>
        <rect x="575" y="245" width="25" height="20" rx="4" fill="${secondary}" fill-opacity="0.6"/>
        <rect x="605" y="245" width="25" height="20" rx="4" fill="${accent}" fill-opacity="0.6"/>
        <rect x="635" y="245" width="50" height="20" rx="4" fill="${secondary}" fill-opacity="0.6"/>
        <rect x="540" y="280" width="120" height="24" rx="4" fill="${accent}" fill-opacity="0.7"/>
      `;
    case 'cpu':
      return `
        <rect x="535" y="210" width="130" height="130" rx="16" fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-width="4"/>
        <rect x="560" y="235" width="80" height="80" rx="8" fill="#13161f" stroke="${secondary}" stroke-width="3"/>
        <text x="600" y="282" text-anchor="middle" fill="${accent}" font-family="monospace" font-size="20" font-weight="bold">AMD / INTEL</text>
        <line x1="535" y1="240" x2="520" y2="240" stroke="${accent}" stroke-width="3"/>
        <line x1="535" y1="270" x2="520" y2="270" stroke="${accent}" stroke-width="3"/>
        <line x1="535" y1="300" x2="520" y2="300" stroke="${accent}" stroke-width="3"/>
        <line x1="665" y1="240" x2="680" y2="240" stroke="${secondary}" stroke-width="3"/>
        <line x1="665" y1="270" x2="680" y2="270" stroke="${secondary}" stroke-width="3"/>
        <line x1="665" y1="300" x2="680" y2="300" stroke="${secondary}" stroke-width="3"/>
      `;
    case 'room':
      return `
        <path d="M510 320 L600 220 L690 320 Z" fill="${accent}" fill-opacity="0.1" stroke="${accent}" stroke-width="4"/>
        <rect x="555" y="270" width="90" height="50" rx="6" fill="#13161f" stroke="${secondary}" stroke-width="3"/>
        <line x1="540" y1="320" x2="660" y2="320" stroke="${accent}" stroke-width="5"/>
        <circle cx="600" cy="250" r="10" fill="${secondary}"/>
      `;
    case 'monitor':
      return `
        <rect x="500" y="200" width="200" height="120" rx="8" fill="${accent}" fill-opacity="0.1" stroke="${accent}" stroke-width="4"/>
        <line x1="600" y1="320" x2="600" y2="350" stroke="${secondary}" stroke-width="6"/>
        <line x1="560" y1="350" x2="640" y2="350" stroke="${secondary}" stroke-width="6"/>
        <text x="600" y="270" text-anchor="middle" fill="${accent}" font-family="sans-serif" font-size="28" font-weight="900">100 Hz IPS</text>
      `;
    case 'tools':
      return `
        <rect x="525" y="225" width="150" height="110" rx="14" fill="${accent}" fill-opacity="0.1" stroke="${accent}" stroke-width="4"/>
        <line x1="550" y1="250" x2="650" y2="310" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
        <line x1="650" y1="250" x2="550" y2="310" stroke="${secondary}" stroke-width="6" stroke-linecap="round"/>
        <circle cx="600" cy="280" r="14" fill="#0e1015" stroke="${accent}" stroke-width="3"/>
      `;
    case 'cable':
      return `
        <rect x="520" y="235" width="160" height="90" rx="14" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="4"/>
        <path d="M 540 280 C 580 250, 620 310, 660 280" fill="none" stroke="${secondary}" stroke-width="6" stroke-linecap="round"/>
        <circle cx="540" cy="280" r="8" fill="${accent}"/>
        <circle cx="660" cy="280" r="8" fill="${accent}"/>
        <rect x="575" y="245" width="50" height="16" rx="4" fill="${accent}" fill-opacity="0.7"/>
        <line x1="570" y1="305" x2="630" y2="305" stroke="${secondary}" stroke-width="4" stroke-linecap="round"/>
      `;
    case 'chair':
      return `
        <path d="M 550 210 L 650 210 C 655 210, 660 215, 660 220 L 650 280 L 550 280 L 540 220 C 540 215, 545 210, 550 210 Z" fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-width="4"/>
        <rect x="535" y="280" width="130" height="25" rx="8" fill="${secondary}" fill-opacity="0.5" stroke="${secondary}" stroke-width="3"/>
        <line x1="600" y1="305" x2="600" y2="340" stroke="${accent}" stroke-width="6"/>
        <line x1="550" y1="340" x2="650" y2="340" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
        <circle cx="550" cy="348" r="6" fill="${secondary}"/>
        <circle cx="650" cy="348" r="6" fill="${secondary}"/>
        <circle cx="600" cy="245" r="12" fill="${accent}" fill-opacity="0.8"/>
      `;
    case 'power':
      return `
        <circle cx="600" cy="270" r="65" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-width="4"/>
        <polygon points="605,220 570,270 600,270 595,320 630,265 600,265" fill="${secondary}" stroke="${accent}" stroke-width="2"/>
        <circle cx="555" cy="240" r="6" fill="${accent}"/>
        <circle cx="645" cy="300" r="6" fill="${accent}"/>
      `;
    case 'sparkles':
    default:
      return `
        <circle cx="600" cy="270" r="60" fill="${accent}" fill-opacity="0.1" stroke="${accent}" stroke-width="3"/>
        <polygon points="600,225 612,260 645,270 612,280 600,315 588,280 555,270 588,260" fill="${secondary}"/>
        <circle cx="535" cy="240" r="8" fill="${accent}"/>
        <circle cx="665" cy="300" r="8" fill="${accent}"/>
      `;
  }
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function generateAll() {
  for (const item of imagesConfig) {
    const safeTitle = esc(item.title);
    const safeSubtitle = esc(item.subtitle);
    const safeBadge = esc(item.badge);

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0b0d12"/>
            <stop offset="50%" stop-color="#12151e"/>
            <stop offset="100%" stop-color="#090b0e"/>
          </linearGradient>
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="${item.accentColor}"/>
            <stop offset="100%" stop-color="${item.secondaryColor}"/>
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
          </pattern>
          <radialGradient id="glow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stop-color="${item.accentColor}" stop-opacity="0.22"/>
            <stop offset="50%" stop-color="${item.secondaryColor}" stop-opacity="0.08"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- Base Background -->
        <rect width="1200" height="675" fill="url(#bgGrad)"/>
        <rect width="1200" height="675" fill="url(#grid)"/>
        <circle cx="600" cy="270" r="320" fill="url(#glow)"/>

        <!-- Ambient Tech Frame Corners -->
        <path d="M 40 80 L 40 40 L 80 40" fill="none" stroke="${item.accentColor}" stroke-width="3" stroke-linecap="round"/>
        <path d="M 1160 80 L 1160 40 L 1120 40" fill="none" stroke="${item.secondaryColor}" stroke-width="3" stroke-linecap="round"/>
        <path d="M 40 595 L 40 635 L 80 635" fill="none" stroke="${item.secondaryColor}" stroke-width="3" stroke-linecap="round"/>
        <path d="M 1160 595 L 1160 635 L 1120 635" fill="none" stroke="${item.accentColor}" stroke-width="3" stroke-linecap="round"/>

        <!-- Header Brand Badge -->
        <g transform="translate(60, 55)">
          <rect width="210" height="32" rx="16" fill="#181c26" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
          <circle cx="18" cy="16" r="6" fill="${item.accentColor}"/>
          <text x="34" y="21" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">BUDGET RESPAWN</text>
        </g>

        <!-- Category Badge -->
        <g transform="translate(930, 55)">
          <rect width="210" height="32" rx="16" fill="${item.accentColor}" fill-opacity="0.12" stroke="${item.accentColor}" stroke-width="1.5"/>
          <text x="105" y="21" fill="${item.accentColor}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="1">${safeBadge}</text>
        </g>

        <!-- Central Graphics Element -->
        ${getIconSvg(item.icon, item.accentColor, item.secondaryColor)}

        <!-- Bottom Informational Bar -->
        <rect x="60" y="440" width="1080" height="180" rx="16" fill="#131722" fill-opacity="0.9" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <line x1="60" y1="440" x2="240" y2="440" stroke="${item.accentColor}" stroke-width="4"/>
        <line x1="240" y1="440" x2="420" y2="440" stroke="${item.secondaryColor}" stroke-width="4"/>

        <!-- Title Text -->
        <text x="90" y="500" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="900" letter-spacing="-0.5">
          ${safeTitle}
        </text>

        <!-- Subtitle Text -->
        <text x="90" y="545" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="19" font-weight="500">
          ${safeSubtitle}
        </text>

        <!-- Footer Tags -->
        <g transform="translate(90, 580)">
          <text x="0" y="16" fill="${item.accentColor}" font-family="monospace" font-size="13" font-weight="700">INDIA EDITION</text>
          <text x="140" y="16" fill="#64748b" font-family="monospace" font-size="13">•</text>
          <text x="160" y="16" fill="#94a3b8" font-family="monospace" font-size="13">100% STUDENT TESTED</text>
          <text x="350" y="16" fill="#64748b" font-family="monospace" font-size="13">•</text>
          <text x="370" y="16" fill="${item.secondaryColor}" font-family="monospace" font-size="13">CUSTOM PHOTO READY</text>
        </g>

        <!-- Placeholder indicator stamp -->
        <g transform="translate(930, 570)">
          <rect width="180" height="28" rx="6" fill="#1e2433" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="90" y="18" fill="#64748b" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="600">REPLACE IN /public/images/</text>
        </g>
      </svg>
    `;

    const svgBuffer = Buffer.from(svg);
    const webpPath = path.join(outputDir, item.filename);
    await sharp(svgBuffer).webp({ quality: 90 }).toFile(webpPath);
    console.log(`Generated ${item.filename}`);

    const jpgName = item.jpgFilename || item.filename.replace('.webp', '.jpg');
    const jpgPath = path.join(outputDir, jpgName);
    await sharp(svgBuffer).jpeg({ quality: 90 }).toFile(jpgPath);
    console.log(`Generated ${jpgName}`);
  }
}

generateAll()
  .then(() => console.log('All 8 images generated successfully.'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
