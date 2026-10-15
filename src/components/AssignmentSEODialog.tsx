import { useState } from 'react';
import { X, CheckCircle2, Copy, FileText, Image, Search, Globe, ExternalLink, HelpCircle } from 'lucide-react';
import { SEO_DATA, PageSEO } from '../config/seo';
import { PAGE_IMAGES } from '../config/images';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssignmentSEODialog({ isOpen, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<'routes' | 'keywords' | 'images' | 'vercel' | 'checklist'>('routes');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const pagesList: PageSEO[] = Object.values(SEO_DATA);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                COLLEGE ASSIGNMENT DELIVERABLES
              </span>
              <span className="text-xs text-purple-400 font-mono">Budget Respawn SEO Spec</span>
            </div>
            <h2 className="text-xl font-bold text-white mt-1">
              Project Routes, Keyword Map, Image Guide & Vercel Instructions
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 px-6 bg-slate-900/60 overflow-x-auto text-sm">
          <button
            onClick={() => setActiveTab('routes')}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors flex items-center gap-2 shrink-0 ${
              activeTab === 'routes'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-4 h-4" /> 1. 11 Routes & Metadata
          </button>
          <button
            onClick={() => setActiveTab('keywords')}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors flex items-center gap-2 shrink-0 ${
              activeTab === 'keywords'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Search className="w-4 h-4" /> 2. Keyword Map
          </button>
          <button
            onClick={() => setActiveTab('images')}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors flex items-center gap-2 shrink-0 ${
              activeTab === 'images'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Image className="w-4 h-4" /> 3. Image Config & Photos
          </button>
          <button
            onClick={() => setActiveTab('vercel')}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors flex items-center gap-2 shrink-0 ${
              activeTab === 'vercel'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" /> 4. GitHub & Vercel Deploy
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors flex items-center gap-2 shrink-0 ${
              activeTab === 'checklist'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" /> 5. Assignment Checklist
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          {/* TAB 1: 8 Routes & Metadata */}
          {activeTab === 'routes' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <p>
                  Every page has a <strong>unique directly-accessible route</strong>. Configured in React Router and backed by <code className="text-emerald-400">vercel.json</code> rewrites so refreshes never throw 404 errors.
                </p>
              </div>

              <div className="divide-y divide-slate-800 border border-slate-800 rounded-xl overflow-hidden bg-slate-950/50">
                {pagesList.map((p, idx) => (
                  <div key={p.path} className="p-4 hover:bg-slate-900/40 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-emerald-400 text-xs font-bold">
                        #{idx + 1} Route: {p.path}
                      </span>
                      <a
                        href={p.path}
                        className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
                      >
                        Visit Page <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="font-medium text-white text-sm mb-1">{p.title}</div>
                    <p className="text-slate-400 text-xs leading-relaxed mb-2">{p.metaDescription}</p>
                    <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        H1: {p.h1}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">
                        Image: {PAGE_IMAGES[p.imageKey]?.filename}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Keyword Map */}
          {activeTab === 'keywords' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-300">
                Each page is assigned a primary keyword and two secondary target keywords for on-page SEO:
              </p>
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-300 font-bold border-b border-slate-800">
                    <tr>
                      <th className="p-3">Page Route</th>
                      <th className="p-3">Main Keyword</th>
                      <th className="p-3">Related Keyword 1</th>
                      <th className="p-3">Related Keyword 2</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-900/40">
                    {pagesList.map((p) => (
                      <tr key={p.path} className="hover:bg-slate-800/40">
                        <td className="p-3 font-mono text-slate-300">{p.path}</td>
                        <td className="p-3 font-semibold text-emerald-400">{p.mainKeyword}</td>
                        <td className="p-3 text-purple-300">{p.relatedKeywords[0]}</td>
                        <td className="p-3 text-purple-300">{p.relatedKeywords[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: Image Config & Photos */}
          {activeTab === 'images' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-xs text-emerald-300 space-y-2">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-emerald-400" /> How to replace images with your own photos:
                </p>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li>Take or choose your photo (JPG, PNG, or WebP format).</li>
                  <li>Place your photo in the project folder: <code className="text-emerald-400 bg-slate-950 px-1 py-0.5 rounded">/public/images/</code>.</li>
                  <li>Either overwrite the matching file (e.g. <code className="text-purple-300 bg-slate-950 px-1 py-0.5 rounded">gaming-setup-under-30000.jpg</code>) OR open <code className="text-emerald-400 bg-slate-950 px-1 py-0.5 rounded">src/config/images.ts</code> and update the <code className="text-emerald-400">src</code> field to your photo name!</li>
                  <li>Update the <code className="text-purple-300">alt</code> description and <code className="text-purple-300">caption</code> in <code className="text-emerald-400">src/config/images.ts</code> to match your photo.</li>
                </ol>
              </div>

              <h4 className="font-bold text-white text-sm">Image Registry Structure (All 11 Pages):</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.values(PAGE_IMAGES).map((img) => (
                  <div key={img.id} className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-emerald-400 font-semibold">{img.filename}</span>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono">1200x675 (16:9)</span>
                    </div>
                    <p className="text-slate-400 line-clamp-2">{img.alt}</p>
                    <div className="text-[11px] text-purple-300 italic">
                      Tip: {img.notes}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: GitHub & Vercel Deploy */}
          {activeTab === 'vercel' && (
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm">Deploying to Vercel (No 404 Errors on Refresh)</h4>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3 text-xs text-slate-300">
                <p>
                  <strong>Why does Vercel need a rewrite?</strong> In Single Page Applications (SPAs) with React Router, visiting a route like <code className="text-emerald-400">/blogs/gaming-setup-under-30000</code> asks Vercel for that file. We already created <code className="text-purple-400">/vercel.json</code> with:
                </p>
                <pre className="p-3 rounded bg-slate-900 text-emerald-300 font-mono text-[11px] overflow-x-auto">
{`{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`}
                </pre>
                <p>This tells Vercel to serve index.html for all routes, allowing React Router to handle the page URL seamlessly.</p>
              </div>

              <h5 className="font-semibold text-white text-xs mt-3">Step-by-Step Deployment Commands:</h5>
              <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300">
                <li>Initialize git and push to your GitHub repository:
                  <div className="mt-1 p-2.5 rounded bg-slate-950 text-emerald-300 font-mono text-[11px]">
                    git init && git add . && git commit -m "Budget Respawn SEO Blog" && git push
                  </div>
                </li>
                <li>Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline">vercel.com</a>, click <strong>Add New Project</strong>, and select your GitHub repository.</li>
                <li>Leave Framework Preset as <strong>Vite</strong> and Build Command as <code className="text-emerald-400">npm run build</code>.</li>
                <li>Click <strong>Deploy</strong>. Once live, test direct URL pasting on all 11 routes!</li>
              </ol>
            </div>
          )}

          {/* TAB 5: Checklist for College Assignment */}
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm">College Assignment Verification & Screenshot Checklist</h4>
              <div className="space-y-2 text-xs text-slate-300">
                {[
                  { text: '11 distinct pages with unique accessible URLs (tested via browser address bar)', done: true },
                  { text: 'Single H1 per page + logical H2/H3 hierarchy', done: true },
                  { text: 'Unique meta title (50-60 chars) and meta description (140-160 chars) on all 11 pages', done: true },
                  { text: 'Main keyword and two related keywords mapped & naturally present in body copy', done: true },
                  { text: 'At least two question-based H2 headings followed by direct answers on each page (AEO)', done: true },
                  { text: '11 unique custom JPEG/WebP images with 16:9 aspect ratio and central config in src/config/images.ts', done: true },
                  { text: 'Sitemap.xml listing all 11 canonical URLs and robots.txt allowing indexation', done: true },
                  { text: 'JSON-LD Article, Breadcrumbs, and FAQPage structured data active on all pages', done: true },
                  { text: 'vercel.json rewrite rules configured to prevent 404 errors on refresh', done: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-purple-950/20 border border-purple-500/40 rounded-xl text-xs text-purple-300">
                <p className="font-semibold text-white mb-1">Recommended Assignment Screenshots:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Homepage hero section with brand tagline and category cards.</li>
                  <li>Article page showing H1, AEO direct answer H2 section, and budget table.</li>
                  <li>Browser Inspect Element showing <code className="text-emerald-400">&lt;head&gt;</code> with unique title, meta description, and JSON-LD script.</li>
                  <li><code className="text-emerald-400">/sitemap.xml</code> loaded in browser showing all 11 URLs.</li>
                  <li><code className="text-emerald-400">src/config/images.ts</code> file screenshot demonstrating central image mapping.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs">
          <span className="text-slate-400 font-mono">
            {copiedText ? `Copied ${copiedText} to clipboard!` : 'Budget Respawn • Ready for Submission & Photo Replacement'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}

function Camera(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
