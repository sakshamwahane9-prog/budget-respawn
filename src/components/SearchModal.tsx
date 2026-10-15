import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, X, ArrowRight, Tag } from 'lucide-react';
import { ARTICLES_DATA, ArticleContent } from '../data/articles';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const searchInputId = useId();

  if (!isOpen) return null;

  const articles = Object.values(ARTICLES_DATA);

  const filtered = query.trim()
    ? articles.filter((art) => {
        const q = query.toLowerCase();
        return (
          art.title.toLowerCase().includes(q) ||
          art.h1.toLowerCase().includes(q) ||
          art.excerpt.toLowerCase().includes(q) ||
          art.mainKeyword.toLowerCase().includes(q) ||
          art.relatedKeywords.some((rk) => rk.toLowerCase().includes(q)) ||
          art.category.toLowerCase().includes(q)
        );
      })
    : articles;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-200">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-950/60">
          <label htmlFor={searchInputId} className="sr-only">
            Search budget gaming guides
          </label>
          <SearchIcon className="w-5 h-5 text-emerald-400 shrink-0" />
          <input
            id={searchInputId}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, components, keywords (e.g. ₹30,000, APU, monitor)..."
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              No articles found matching &quot;{query}&quot;. Try searching for &quot;monitor&quot;, &quot;accessories&quot;, or &quot;₹30000&quot;.
            </div>
          ) : (
            filtered.map((art: ArticleContent) => (
              <Link
                key={art.slug}
                to={`/blogs/${art.slug}`}
                onClick={onClose}
                className="group flex items-start justify-between p-3 rounded-xl bg-slate-950/50 hover:bg-slate-800/60 border border-slate-800/80 hover:border-emerald-500/40 transition-colors"
              >
                <div className="pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      <Tag className="w-2.5 h-2.5" />
                      {art.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Keyword: {art.mainKeyword}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {art.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">{art.excerpt}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 shrink-0 mt-2 transition-transform group-hover:translate-x-1" />
              </Link>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Showing {filtered.length} of {articles.length} guides</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
