import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Menu, X, Search, BookOpen, ChevronDown, Sparkles } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';

interface NavbarProps {
  onOpenAssignmentGuide: () => void;
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenAssignmentGuide, onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const articlesList = Object.values(ARTICLES_DATA);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Gamepad2 className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-1.5">
              BUDGET <span className="text-emerald-400">RESPAWN</span>
            </span>
            <p className="text-[11px] text-slate-400 tracking-normal hidden sm:block">
              Level up your setup, not your spending.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            to="/"
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              location.pathname === '/'
                ? 'text-emerald-400 bg-emerald-500/10'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            Home
          </Link>

          {/* Guides Dropdown */}
          <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                location.pathname.startsWith('/blogs/')
                  ? 'text-emerald-400 bg-emerald-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>Setup Guides (10)</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {dropdownOpen && (
              <div
                className="absolute left-0 mt-1 w-80 rounded-xl bg-slate-900 border border-slate-700 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 z-50"
                onMouseEnter={() => setDropdownOpen(true)}
              >
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 mb-1">
                  Budget Gaming Blueprints
                </div>
                <div className="space-y-0.5 max-h-96 overflow-y-auto">
                  {articlesList.map((art) => (
                    <Link
                      key={art.slug}
                      to={`/blogs/${art.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-xs transition-colors ${
                        location.pathname === `/blogs/${art.slug}`
                          ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="font-medium truncate">{art.title}</div>
                      <div className="text-[10px] text-purple-400 font-mono mt-0.5">
                        {art.category} • {art.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/blogs/gaming-setup-under-30000"
            className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
          >
            ₹30K Setup
          </Link>

          <Link
            to="/blogs/build-budget-gaming-pc"
            className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
          >
            PC Build
          </Link>

          <Link
            to="/blogs/best-budget-gaming-monitors"
            className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
          >
            Monitors
          </Link>
        </nav>

        {/* Right CTA / Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Search budget guides"
            aria-label="Search guides"
          >
            <Search className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Search Guides...</span>
          </button>

          {/* College Assignment SEO & Images Guide Button */}
          <button
            onClick={onOpenAssignmentGuide}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/40 transition-colors shadow-sm"
            title="Open College Assignment Deliverables, SEO Specs & Image Instructions"
          >
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="hidden md:inline">Assignment SEO &amp; Photos Guide</span>
            <span className="md:hidden">SEO Guide</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2">
            Main Pages
          </div>
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-900 font-medium"
          >
            Home (/)
          </Link>

          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 pt-2 border-t border-slate-900">
            All 10 Article Guides
          </div>
          <div className="space-y-1">
            {articlesList.map((art) => (
              <Link
                key={art.slug}
                to={`/blogs/${art.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  location.pathname === `/blogs/${art.slug}`
                    ? 'bg-emerald-500/20 text-emerald-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div>{art.title}</div>
                <div className="text-[10px] text-purple-400 font-mono">/blogs/{art.slug}</div>
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-900">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssignmentGuide();
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" /> View Assignment SEO &amp; Image Replacement Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
