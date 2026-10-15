/**
 * @file images.ts
 * @description Central Image Configuration for Budget Respawn.
 * 
 * ============================================================================
 * HOW TO REPLACE IMAGES WITH YOUR OWN PHOTOS:
 * ============================================================================
 * 1. Place your own JPEG photo inside the `/public/images/` folder.
 * 2. Ensure your photo filename matches the `src` path below:
 *    - home-gaming-setup.jpg
 *    - gaming-setup-under-30000.jpg
 *    - budget-gaming-accessories.jpg
 *    - budget-gaming-pc.jpg
 *    - small-room-gaming-setup.jpg
 *    - budget-gaming-monitors.jpg
 *    - diy-budget-gaming-setup.jpg
 *    - improve-gaming-setup-aesthetics.jpg
 *    - budget-cable-management.jpg
 *    - budget-gaming-chairs.jpg
 *    - save-electricity-gaming.jpg
 * 3. Update the `alt` description and `caption` if needed to reflect your actual gear.
 * 4. For best web performance and Zero Cumulative Layout Shift (CLS), keep images
 *    in a 16:9 aspect ratio (e.g., 1200x675 or 1920x1080).
 * ============================================================================
 */

export interface PageImageConfig {
  id: string;
  filename: string;
  src: string;
  alt: string;
  title: string;
  caption?: string;
  width: number;
  height: number;
  aspectRatio: string;
  isCustomUploaded: boolean;
  notes: string;
}

export const PAGE_IMAGES: Record<string, PageImageConfig> = {
  home: {
    id: 'home',
    filename: 'home-gaming-setup.jpg',
    src: '/images/home-gaming-setup.jpg',
    alt: 'Complete modern budget gaming setup featuring dual monitors, ambient green backlighting, and organized cable layout on a dark wooden desk in an Indian room.',
    title: 'Budget Respawn Battlestation Blueprint',
    caption: 'Flagship budget battlestation blueprint designed for Indian students and beginner gamers.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your home-gaming-setup.jpg showing your monitor, PC, and lighting.',
  },
  'gaming-setup-under-30000': {
    id: 'gaming-setup-under-30000',
    filename: 'gaming-setup-under-30000.jpg',
    src: '/images/gaming-setup-under-30000.jpg',
    alt: 'Comprehensive budget gaming setup under ₹30,000 showing AMD Ryzen APU PC cabinet, 22-inch display, RGB keyboard, mouse, and compact study table.',
    title: '₹30,000 Complete Gaming Setup Blueprint',
    caption: 'Full ₹30,000 gaming setup breakdown: APU PC build, 75Hz monitor, keyboard, mouse, and audio.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your gaming-setup-under-30000.jpg showing your sub-₹30K gaming rig.',
  },
  'best-budget-gaming-accessories': {
    id: 'best-budget-gaming-accessories',
    filename: 'budget-gaming-accessories.jpg',
    src: '/images/budget-gaming-accessories.jpg',
    alt: 'Essential budget gaming accessories including mechanical keyboard, lightweight optical mouse, XXL speed-type mousepad, and over-ear headset.',
    title: 'Essential Budget Gaming Accessories Arsenal',
    caption: 'Cost-effective gaming accessories tested for Indian students under ₹1,500 each.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your budget-gaming-accessories.jpg showing your mouse, keyboard, and headphones.',
  },
  'build-budget-gaming-pc': {
    id: 'build-budget-gaming-pc',
    filename: 'budget-gaming-pc.jpg',
    src: '/images/budget-gaming-pc.jpg',
    alt: 'Budget gaming PC assembly process showing motherboard, CPU cooler installation, dual-channel RAM sticks, and clean internal wiring in India.',
    title: 'Budget PC Hardware & Component Assembly',
    caption: 'Step-by-step PC build blueprint balancing price-to-performance components available in Indian stores.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your budget-gaming-pc.jpg showing your PC components or opened case.',
  },
  'small-room-gaming-setup': {
    id: 'small-room-gaming-setup',
    filename: 'small-room-gaming-setup.jpg',
    src: '/images/small-room-gaming-setup.jpg',
    alt: 'Compact small room gaming setup utilizing wall-mounted shelves, floating monitor arm, under-desk PC mount, and vertical pegboard in a college hostel room.',
    title: 'Small Room & Hostel Gaming Setup Optimization',
    caption: 'Clever spatial hacks maximizing gaming comfort inside tight bedrooms and student hostel rooms.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your small-room-gaming-setup.jpg showing your compact or hostel desk.',
  },
  'best-budget-gaming-monitors': {
    id: 'best-budget-gaming-monitors',
    filename: 'budget-gaming-monitors.jpg',
    src: '/images/budget-gaming-monitors.jpg',
    alt: 'Budget 24-inch IPS 100Hz gaming monitor displaying vibrant colors with thin bezels and adjustable tilt stand on a clean desk.',
    title: 'Best Budget Gaming Monitors in India',
    caption: 'Comparing high refresh rate IPS and VA gaming monitors available under ₹10,000.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your budget-gaming-monitors.jpg showing your gaming display.',
  },
  'diy-budget-gaming-setup': {
    id: 'diy-budget-gaming-setup',
    filename: 'diy-budget-gaming-setup.jpg',
    src: '/images/diy-budget-gaming-setup.jpg',
    alt: 'DIY gaming setup projects including custom finished plywood desk, pegboard tool hanging, zip-tied cable trays, and indirect LED diffuser channels.',
    title: 'Custom DIY Gaming Setup on a Shoestring Budget',
    caption: 'Homemade carpentry and local hardware store upgrades that look pro without the boutique price tag.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your diy-budget-gaming-setup.jpg showing your custom desk or cable management.',
  },
  'improve-gaming-setup-aesthetics': {
    id: 'improve-gaming-setup-aesthetics',
    filename: 'improve-gaming-setup-aesthetics.jpg',
    src: '/images/improve-gaming-setup-aesthetics.jpg',
    alt: 'Aesthetically upgraded gaming setup featuring hidden wires, cohesive dual-tone lighting, minimalist desk mat, and desktop succulent plant.',
    title: 'How to Make Your Gaming Setup Look Better',
    caption: 'Visual styling tips: cable concealment, bias illumination, and two-color synergy on a student budget.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your improve-gaming-setup-aesthetics.jpg showing your aesthetic desk lighting.',
  },
  'budget-gaming-cable-management': {
    id: 'budget-gaming-cable-management',
    filename: 'budget-cable-management.jpg',
    src: '/images/budget-cable-management.jpg',
    alt: 'Budget gaming desk cable management showing under-desk wire raceways, velcro straps, and grouped power cables on a clean battlestation.',
    title: 'Budget Gaming Desk Cable Management Guide',
    caption: 'Clean, safe under-desk cable routing hacks under ₹500 for student battlestations.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your budget-cable-management.jpg showing your managed cables.',
  },
  'best-budget-gaming-chairs-india': {
    id: 'best-budget-gaming-chairs-india',
    filename: 'budget-gaming-chairs.jpg',
    src: '/images/budget-gaming-chairs.jpg',
    alt: 'Ergonomic breathable mesh chair and budget gaming chair with adjustable lumbar support and armrests in an Indian room setup.',
    title: 'Best Budget Gaming Chairs in India',
    caption: 'Ergonomic comparison between breathable mesh office chairs and PU racing seats under ₹7,000.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your budget-gaming-chairs.jpg showing your gaming or office chair.',
  },
  'save-electricity-while-gaming': {
    id: 'save-electricity-while-gaming',
    filename: 'save-electricity-gaming.jpg',
    src: '/images/save-electricity-gaming.jpg',
    alt: 'Power consumption monitoring for budget gaming PC showing wattage meter, APU efficiency settings, and power saving tips.',
    title: 'How to Save Electricity While Gaming',
    caption: 'Smart energy-saving techniques, APU wattage capping, and power bill reductions in India.',
    width: 1200,
    height: 675,
    aspectRatio: '16/9',
    isCustomUploaded: false,
    notes: 'Replace with your save-electricity-gaming.jpg showing your power setup.',
  },
};

/**
 * Helper to retrieve image config with safe fallback
 */
export function getPageImage(key: string): PageImageConfig {
  return (
    PAGE_IMAGES[key] || {
      id: key,
      filename: 'home-gaming-setup.jpg',
      src: '/images/home-gaming-setup.jpg',
      alt: 'Budget Respawn Gaming Setup Guide',
      title: 'Budget Gaming Setup',
      caption: 'Budget gaming setup guide for Indian gamers.',
      width: 1200,
      height: 675,
      aspectRatio: '16/9',
      isCustomUploaded: false,
      notes: 'Custom image placeholder ready for user upload.',
    }
  );
}
