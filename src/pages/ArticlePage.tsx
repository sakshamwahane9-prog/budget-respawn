import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Tag,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  DollarSign,
  Share2,
  CheckCircle2,
  Info,
  Layers
} from 'lucide-react';
import { getArticleBySlug, ARTICLES_DATA, ArticleContent } from '../data/articles';
import { getPageSEO } from '../config/seo';
import { getPageImage } from '../config/images';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import ImageWithPlaceholder from '../components/ImageWithPlaceholder';
import ArticleCard from '../components/ArticleCard';
import FAQAccordion from '../components/FAQAccordion';
import NotFoundPage from './NotFoundPage';

interface ArticlePageProps {
  onOpenAssignmentGuide: () => void;
}

export default function ArticlePage({ onOpenAssignmentGuide }: ArticlePageProps) {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <NotFoundPage />;
  }

  const article: ArticleContent | undefined = getArticleBySlug(slug);

  if (!article) {
    return <NotFoundPage />;
  }

  const seo = getPageSEO(slug);
  const imageConfig = getPageImage(article.imageKey);

  // Retrieve related articles
  const relatedArticles = article.relatedSlugs
    .map((s) => ARTICLES_DATA[s])
    .filter(Boolean);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article URL copied to clipboard!');
    }
  };

  return (
    <>
      <SEOHead seo={seo} />

      <article className="min-h-screen text-slate-100 pb-20">
        {/* Top Header & Breadcrumbs Container */}
        <div className="border-b border-slate-800/80 bg-slate-950/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
            <Breadcrumbs items={seo.breadcrumbs} />

            {/* Category & Keyword Meta Tag */}
            <div className="flex flex-wrap items-center gap-2 mt-4 mb-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Tag className="w-3 h-3" />
                {article.category}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                Primary Keyword: {article.mainKeyword}
              </span>
            </div>

            {/* Descriptive H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {article.h1}
            </h1>

            {/* Author, Date & Reading Time Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Published {article.publishDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {article.readTime}
                </span>
              </div>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Share Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Article Body Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
          {/* Unique Hero Image for this Article */}
          <div className="space-y-2">
            <ImageWithPlaceholder
              imageConfig={imageConfig}
              priority={true}
              showCaption={true}
              showBadge={true}
            />
          </div>

          {/* Pricing & Budget Distinction Disclaimer */}
          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 block font-semibold mb-1">
                Indian Market &amp; Budget Distinction Notice:
              </strong>
              {article.disclaimer}
            </div>
          </div>

          {/* Introduction Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {article.introduction.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Budget Breakdown Table (If Available) */}
          {article.budgetTable && article.budgetTable.length > 0 && (
            <section className="my-8 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="p-5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Itemized Budget &amp; Component Breakdown (INR)
                  </h3>
                </div>
                {article.totalEstimatedINR && (
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                    Total Estimated: {article.totalEstimatedINR}
                  </span>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Category</th>
                      <th className="p-3.5">Recommended Component / Model</th>
                      <th className="p-3.5">Estimated Price (INR)</th>
                      <th className="p-3.5 hidden md:table-cell">Practical Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 text-slate-300">
                    {article.budgetTable.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3.5 font-medium text-slate-400">{item.category}</td>
                        <td className="p-3.5 font-semibold text-white">
                          {item.recommendedModel}
                          <div className="text-[11px] text-slate-400 md:hidden mt-0.5">{item.notes}</div>
                        </td>
                        <td className="p-3.5 font-mono text-emerald-400 font-bold whitespace-nowrap">
                          {item.estimatedPriceINR}
                        </td>
                        <td className="p-3.5 text-xs text-slate-400 hidden md:table-cell">
                          {item.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Article Sections (H2, H3, AEO Questions, Callouts) */}
          <div className="space-y-12">
            {article.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                {/* Section Heading */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-slate-800/80 pb-3 flex items-center gap-2">
                  {sec.isQuestion && (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                  )}
                  {sec.heading}
                </h2>

                {/* Direct Answer Box for Question-Based Headings (AEO) */}
                {sec.isQuestion && sec.directAnswer && (
                  <div className="p-5 rounded-2xl bg-emerald-950/30 border-l-4 border-emerald-500 border-y border-r border-emerald-500/20 text-emerald-200 text-sm sm:text-base leading-relaxed">
                    <span className="block font-bold text-emerald-400 text-xs uppercase tracking-wider mb-1 font-mono">
                      DIRECT ANSWER:
                    </span>
                    {sec.directAnswer}
                  </div>
                )}

                {/* Section Paragraphs */}
                <div className="space-y-3.5 text-slate-300 text-base leading-relaxed">
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Callout Tip/Warning if present */}
                {sec.callout && (
                  <div
                    className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed border ${
                      sec.callout.type === 'tip'
                        ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                        : sec.callout.type === 'warning'
                        ? 'bg-amber-950/20 border-amber-500/40 text-amber-300'
                        : 'bg-purple-950/20 border-purple-500/40 text-purple-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold mb-1">
                      {sec.callout.type === 'tip' ? (
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                      ) : sec.callout.type === 'warning' ? (
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Info className="w-4 h-4 text-purple-400" />
                      )}
                      <span>{sec.callout.title}</span>
                    </div>
                    <p className="text-slate-300">{sec.callout.text}</p>
                  </div>
                )}

                {/* Subsections (H3) */}
                {sec.subsections && sec.subsections.length > 0 && (
                  <div className="space-y-6 pt-2">
                    {sec.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-2.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                        <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                          <span className="text-emerald-400 font-mono text-sm">#{sIdx + 1}</span>
                          {sub.heading}
                        </h3>
                        {sub.paragraphs.map((subP, subPIdx) => (
                          <p key={subPIdx} className="text-slate-300 text-sm leading-relaxed">
                            {subP}
                          </p>
                        ))}
                        {sub.listItems && (
                          <ul className="space-y-1.5 pt-1 text-sm text-slate-300 list-disc list-inside">
                            {sub.listItems.map((item, itemIdx) => (
                              <li key={itemIdx} className="font-mono text-xs sm:text-sm text-slate-300">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Descriptive Internal Links Callout */}
          <section className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              Related Setup Resources &amp; Internal Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {article.internalLinks.map((link, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>
                    {link.context}{' '}
                    <Link
                      to={link.href}
                      className="text-emerald-400 font-semibold underline underline-offset-4 hover:text-emerald-300 transition-colors"
                    >
                      {link.text}
                    </Link>
                    .
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQs Accordion for this article */}
          {article.faqs && article.faqs.length > 0 && (
            <FAQAccordion faqs={article.faqs} title={`${article.title} - FAQs`} />
          )}

          {/* Related Articles Cards */}
          {relatedArticles.length > 0 && (
            <section className="pt-8 border-t border-slate-800">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
                Continue Exploring: Related Guides
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <ArticleCard key={rel.slug} article={rel} />
                ))}
              </div>
            </section>
          )}

          {/* Bottom Assignment Helper Card */}
          <div className="p-5 rounded-xl bg-purple-950/20 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300">
            <div>
              <span className="font-semibold text-white block mb-0.5">
                Photo Slot: <code className="text-purple-300 bg-slate-950 px-1 py-0.5 rounded font-mono">{imageConfig.filename}</code>
              </span>
              <span>Ready for your personal photo upload in <code className="text-emerald-400 bg-slate-950 px-1 py-0.5 rounded font-mono">/public/images/</code>.</span>
            </div>
            <button
              onClick={onOpenAssignmentGuide}
              className="px-3.5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold shrink-0 transition-colors"
            >
              View Image &amp; SEO Guide
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
