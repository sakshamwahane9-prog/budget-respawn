import { Link } from 'react-router-dom';
import { Gamepad2, ShieldAlert, FileText, Image, Heart } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';

interface FooterProps {
  onOpenAssignmentGuide: () => void;
}

export default function Footer({ onOpenAssignmentGuide }: FooterProps) {
  const articlesList = Object.values(ARTICLES_DATA);

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 text-slate-400">
      {/* Top Banner / Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                <Gamepad2 className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                BUDGET <span className="text-emerald-400">RESPAWN</span>
              </span>
            </Link>
            <p className="text-sm text-emerald-400 font-semibold">
              &ldquo;Level up your setup, not your spending.&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Budget Respawn is an independent, non-sponsored editorial blog dedicated to empowering students, teenagers, and beginner gamers across India to build high-performance gaming battlestations without unnecessary debt.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <button
                onClick={onOpenAssignmentGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-900/30 text-purple-300 border border-purple-500/30 hover:bg-purple-900/50 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                Assignment SEO &amp; Photo Guide
              </button>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:text-white transition-colors"
              >
                Sitemap.xml
              </a>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:text-white transition-colors"
              >
                Robots.txt
              </a>
            </div>
          </div>

          {/* Col 2: All 8 Routes Index */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-emerald-400">
              Direct Page Index (All 11 Routes)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  1. Homepage (/)
                </Link>
              </li>
              {articlesList.map((art, idx) => (
                <li key={art.slug}>
                  <Link
                    to={`/blogs/${art.slug}`}
                    className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center justify-between"
                  >
                    <span>{idx + 2}. {art.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hardware Clarification & Photo Replacement Note */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <ShieldAlert className="w-4 h-4" />
                Indian Market &amp; Price Disclaimer
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Computer hardware prices fluctuate frequently across Indian retail outlets like MDComputers, Vedant Computers, PrimeABGB, Amazon India, and local hubs like Nehru Place and Lamington Road. Always distinguish a <strong>Full Setup Budget</strong> (PC + Display + Peripherals + Desk) from a <strong>PC-Only Budget</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-1.5">
              <div className="flex items-center gap-1.5 text-purple-300 text-xs font-semibold">
                <Image className="w-3.5 h-3.5 text-purple-400" />
                Personal Photo Ready
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                All 11 images can be replaced in <code className="text-purple-300 bg-slate-950 px-1 py-0.5 rounded">/public/images/</code>. Configured centrally in <code className="text-emerald-300 bg-slate-950 px-1 py-0.5 rounded">src/config/images.ts</code>.
              </p>
            </div>
          </div>
        </div>

        {/* Keywords Cloud */}
        <div className="mt-10 pt-8 border-t border-slate-900">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
            On-Page SEO Keyword Index
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              'budget gaming setup',
              'cheap gaming setup',
              'affordable gaming setup',
              'gaming setup under ₹30000',
              'budget gaming PC',
              'affordable gaming desk setup',
              'best budget gaming accessories',
              'cheap gaming keyboard',
              'budget gaming mouse',
              'how to build a budget gaming PC',
              'budget PC build',
              'affordable gaming components',
              'small room gaming setup',
              'compact gaming desk',
              'small bedroom gaming setup',
              'best budget gaming monitor',
              'affordable gaming monitor',
              'budget gaming display',
              'DIY gaming setup',
              'cheap gaming desk setup',
              'budget gaming room ideas',
              'gaming setup ideas',
              'gaming desk decoration',
              'budget gaming setup aesthetics',
              'budget gaming cable management',
              'gaming desk cable management',
              'best budget gaming chairs in India',
              'affordable gaming chair India',
              'how to save electricity while gaming',
              'gaming PC power consumption',
            ].map((kw) => (
              <span
                key={kw}
                className="px-2.5 py-1 rounded-md bg-slate-900/60 text-slate-400 border border-slate-800 text-[11px] font-mono hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Budget Respawn. All rights reserved. Built for Indian student gamers.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" /> for accessible gaming.
          </p>
        </div>
      </div>
    </footer>
  );
}
