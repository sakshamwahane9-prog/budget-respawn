import { Link } from 'react-router-dom';
import { Home, Compass, AlertCircle } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';

export default function NotFoundPage() {
  const articles = Object.values(ARTICLES_DATA);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-slate-200">
      <div className="max-w-2xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          404: Setup Blueprint Not Found
        </h1>

        <p className="text-slate-400 text-base max-w-lg mx-auto">
          The page or route you were looking for doesn&apos;t exist or might have been relocated. Jump back to the homepage or explore one of our 7 verified budget gaming guides below.
        </p>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20"
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </Link>
        </div>

        {/* Quick Links Directory */}
        <div className="pt-8 border-t border-slate-800 text-left">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-emerald-400" />
            Verified Budget Respawn Articles (7):
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {articles.map((art) => (
              <Link
                key={art.slug}
                to={`/blogs/${art.slug}`}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-colors truncate"
              >
                {art.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
