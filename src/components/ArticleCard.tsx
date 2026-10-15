import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Calendar, Tag } from 'lucide-react';
import { ArticleContent } from '../data/articles';
import { getPageImage } from '../config/images';

interface ArticleCardProps {
  article: ArticleContent;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const imageConfig = getPageImage(article.imageKey);

  return (
    <article
      className={`group relative flex flex-col rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 overflow-hidden ${
        featured ? 'md:grid md:grid-cols-12 md:gap-6' : ''
      }`}
    >
      {/* Thumbnail */}
      <div className={`relative overflow-hidden bg-slate-950 ${featured ? 'md:col-span-7' : 'w-full'}`}>
        <Link to={`/blogs/${article.slug}`} className="block relative aspect-video overflow-hidden">
          <img
            src={imageConfig.src}
            alt={imageConfig.alt}
            width={imageConfig.width}
            height={imageConfig.height}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
            <Tag className="w-3 h-3" />
            {article.category}
          </span>
        </Link>
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-between p-5 sm:p-6 ${featured ? 'md:col-span-5 md:py-6' : 'flex-1'}`}>
        <div>
          {/* Metadata Bar */}
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {article.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2.5 leading-snug">
            <Link to={`/blogs/${article.slug}`}>{article.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
            {article.excerpt}
          </p>
        </div>

        {/* Footer Link & Keywords Tag */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <span className="text-xs font-medium text-purple-400/90 font-mono">
            #{article.mainKeyword}
          </span>
          <Link
            to={`/blogs/${article.slug}`}
            aria-label={`Read complete guide: ${article.title}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Read Guide <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
