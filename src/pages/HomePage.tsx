import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  TrendingDown,
  Cpu,
  Monitor,
  CheckCircle2,
  Sliders,
  DollarSign,
  HelpCircle,
  FileText
} from 'lucide-react';
import { ARTICLES_DATA, getAllArticles } from '../data/articles';
import { SEO_DATA } from '../config/seo';
import { PAGE_IMAGES } from '../config/images';
import SEOHead from '../components/SEOHead';
import ArticleCard from '../components/ArticleCard';
import ImageWithPlaceholder from '../components/ImageWithPlaceholder';
import FAQAccordion from '../components/FAQAccordion';

interface HomePageProps {
  onOpenAssignmentGuide: () => void;
}

export default function HomePage({ onOpenAssignmentGuide }: HomePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [calculatorBudget, setCalculatorBudget] = useState<number>(30000);

  const homeSEO = SEO_DATA['home'];
  const homeImage = PAGE_IMAGES['home'];
  const allArticles = getAllArticles();

  const categories = ['All', 'Setup Blueprints', 'PC Building', 'Peripherals', 'Displays', 'Room Optimization', 'DIY Crafts', 'Aesthetics'];

  const filteredArticles = selectedCategory === 'All'
    ? allArticles
    : allArticles.filter((art) => art.category === selectedCategory);

  // Budget Calculator Allocation Matrix
  const getBudgetBreakdown = (amount: number) => {
    if (amount <= 25000) {
      return {
        pc: '₹17,000 (Ryzen 3/4000 APU + 8GB RAM + 256GB SSD)',
        display: '₹5,500 (21.5" 75Hz Monitor)',
        peripherals: '₹1,500 (Cosmic Byte Keyboard/Mouse Combo)',
        desk: '₹1,000 (Existing study table / DIY legs)',
      };
    } else if (amount <= 35000) {
      return {
        pc: '₹20,500 (Ryzen 5 4600G + 16GB Dual RAM + 500GB NVMe)',
        display: '₹6,500 (22" IPS 100Hz Display)',
        peripherals: '₹2,000 (Optical mouse + KZ IEMs + XXL Pad)',
        desk: '₹1,000 (DIY 18mm Plywood desk)',
      };
    } else {
      return {
        pc: '₹27,500 (Ryzen 5 5600G + 16GB RAM + 500GB NVMe + 550W PSU)',
        display: '₹8,500 (24" Fast IPS 144Hz Gaming Monitor)',
        peripherals: '₹3,000 (Mechanical TKL + PixArt mouse + IEMs)',
        desk: '₹2,000 (Custom Plywood Table + Cable Tray)',
      };
    }
  };

  const budgetBreakdown = getBudgetBreakdown(calculatorBudget);

  return (
    <>
      <SEOHead seo={homeSEO} />

      <main className="min-h-screen text-slate-100">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Headlines & Call to Actions */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>BUDGET GAMING SETUP BLUEPRINTS • INDIA 2026</span>
                </div>

                {/* Main Descriptive H1 containing the main keyword naturally */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Level Up Your Setup, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
                    Not Your Spending.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Building a capable <strong className="text-white font-semibold">budget gaming setup</strong> in India does not require spending lakhs of rupees. Explore research-backed blueprints, INR hardware price breakdowns, and DIY ideas created specifically for Indian students and beginner gamers looking for a <span className="text-emerald-400">cheap gaming setup</span> that doesn&apos;t compromise on competitive 1080p performance.
                </p>

                {/* Quick Stats Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-lg sm:text-xl font-black text-emerald-400">₹30,000</div>
                    <div className="text-[11px] text-slate-400 font-medium">Complete Setup Target</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-lg sm:text-xl font-black text-purple-400">100+ FPS</div>
                    <div className="text-[11px] text-slate-400 font-medium">Esports Benchmarks</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-lg sm:text-xl font-black text-teal-400">100%</div>
                    <div className="text-[11px] text-slate-400 font-medium">Student Tested</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/blogs/gaming-setup-under-30000"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
                  >
                    View ₹30,000 Blueprint <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={onOpenAssignmentGuide}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition-colors"
                  >
                    <FileText className="w-4 h-4 text-purple-400" />
                    Assignment Deliverables &amp; Photos
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Image Container (Page 1 Central Image) */}
              <div className="lg:col-span-5">
                <div className="relative">
                  {/* Subtle Glow Backdrop */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-purple-600/30 blur-xl opacity-50" />
                  <ImageWithPlaceholder
                    imageConfig={homeImage}
                    priority={true}
                    className="relative shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AEO SECTION: TWO QUESTION-BASED H2 HEADINGS WITH DIRECT ANSWERS */}
        <section className="py-14 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">
                AEO ANSWER ENGINE OPTIMIZATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Direct Answers for Budget Gamers in India
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Clear, factual answers designed for search engines, AI queries, and first-time gamers building an affordable gaming setup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Question 1: How much does a budget gaming setup cost? */}
              <article className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  How much does a budget gaming setup cost?
                </h2>
                {/* DIRECT ANSWER IN THE FIRST PARAGRAPH (AEO Standard) */}
                <p className="text-sm sm:text-base text-emerald-300 font-medium bg-emerald-950/30 p-4 rounded-xl border-l-4 border-emerald-500 mb-4 leading-relaxed">
                  In India, a functional complete budget gaming setup costs between ₹30,000 and ₹42,000. This full budget covers four core pillars: a capable APU PC tower (₹20,000–₹24,000), a 75Hz–100Hz IPS monitor (₹6,500–₹8,000), competitive gaming peripherals (₹2,500–₹3,500), and basic desk furniture.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Many online buyers mistakenly assume that a gaming setup requires ₹70,000+. By strategically selecting an integrated Radeon APU like the AMD Ryzen 5 4600G, you eliminate the initial requirement for a discrete ₹15,000 graphics card while retaining the ability to install a dedicated GPU whenever your future finances allow.
                </p>
                <Link
                  to="/blogs/gaming-setup-under-30000"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  Explore the full ₹30,000 itemized breakdown <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </article>

              {/* Question 2: Can I build an affordable gaming setup on a student budget? */}
              <article className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Can I build an affordable gaming setup on a student budget?
                </h2>
                {/* DIRECT ANSWER IN THE FIRST PARAGRAPH (AEO Standard) */}
                <p className="text-sm sm:text-base text-purple-300 font-medium bg-purple-950/30 p-4 rounded-xl border-l-4 border-purple-500 mb-4 leading-relaxed">
                  Yes, students can comfortably assemble an affordable gaming setup in India by adopting a phased upgrade strategy and utilizing smart DIY hacks. You do not need to buy everything at once; start with a solid APU computer and display, source budget-friendly peripherals from value brands like Cosmic Byte and Redgear, and repurpose or construct a sturdy plywood desk for under ₹2,000.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Indian college students also save substantially by using In-Ear Monitors (IEMs) for ₹950 instead of sweaty ₹2,500 gaming headsets, and purchasing hardware from trusted offline markets like Nehru Place in Delhi or Lamington Road in Mumbai to negotiate package discounts.
                </p>
                <Link
                  to="/blogs/diy-budget-gaming-setup"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300"
                >
                  Read DIY student desk and setup hacks <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* INTERACTIVE STUDENT BUDGET ALLOCATION CALCULATOR */}
        <section className="py-12 bg-slate-900/50 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <Sliders className="w-4 h-4" />
                    INTERACTIVE INDIAN BUDGET PLANNER
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Calculate Your Setup Fund Allocation
                  </h3>
                  <p className="text-xs text-slate-400">
                    Distinguish between PC-only parts and full battlestation peripherals based on your exact budget.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {[25000, 30000, 40000].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setCalculatorBudget(tier)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        calculatorBudget === tier
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      ₹{tier.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Selected Total Budget:</span>
                  <span className="font-mono text-base font-bold text-emerald-400">
                    ₹{calculatorBudget.toLocaleString('en-IN')} INR
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="45000"
                  step="2500"
                  value={calculatorBudget}
                  onChange={(e) => setCalculatorBudget(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1">
                    <Cpu className="w-3.5 h-3.5" /> PC Tower (APU/Rig)
                  </div>
                  <div className="text-xs text-slate-300 leading-snug">{budgetBreakdown.pc}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 mb-1">
                    <Monitor className="w-3.5 h-3.5" /> Gaming Display
                  </div>
                  <div className="text-xs text-slate-300 leading-snug">{budgetBreakdown.display}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5" /> Accessories &amp; Audio
                  </div>
                  <div className="text-xs text-slate-300 leading-snug">{budgetBreakdown.peripherals}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Desk &amp; Ergonomics
                  </div>
                  <div className="text-xs text-slate-300 leading-snug">{budgetBreakdown.desk}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ALL 7 ARTICLES SHOWCASE SECTION */}
        <section id="guides" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
                LONG-FORM EDITORIAL GUIDES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Explore All 7 Setup Guides
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Deep dives covering hardware selection, ergonomics, DIY desk building, and monitor technology.
              </p>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* HOMEPAGE FAQ SECTION */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={homeSEO.faqs || []} />
        </div>
      </main>
    </>
  );
}
