import { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';
import { PageImageConfig } from '../config/images';

interface ImageWithPlaceholderProps {
  imageConfig: PageImageConfig;
  className?: string;
  priority?: boolean;
  showCaption?: boolean;
  showBadge?: boolean;
}

export default function ImageWithPlaceholder({
  imageConfig,
  className = '',
  priority = false,
  showCaption = true,
  showBadge = true,
}: ImageWithPlaceholderProps) {
  const [hasError, setHasError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <figure className={`relative group overflow-hidden rounded-xl bg-slate-900 border border-slate-800 ${className}`}>
      {/* Aspect Ratio Container (16:9 prevents CLS) */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {!hasError ? (
          <img
            src={imageConfig.src}
            alt={imageConfig.alt}
            width={imageConfig.width}
            height={imageConfig.height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />
        ) : (
          /* Graceful Fallback Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900/90 border border-dashed border-emerald-500/40">
            <ImageIcon className="w-12 h-12 text-emerald-400 mb-3 animate-pulse" />
            <h4 className="text-white font-semibold text-lg">{imageConfig.title}</h4>
            <p className="text-slate-400 text-sm mt-1 max-w-md">
              Drop your custom photo as <code className="text-emerald-400 bg-slate-950 px-1.5 py-0.5 rounded">{imageConfig.filename}</code> into <code className="text-purple-400 bg-slate-950 px-1.5 py-0.5 rounded">public/images/</code>
            </p>
          </div>
        )}

        {/* Subtle Replacement Indicator Badge */}
        {showBadge && (
          <div className="absolute top-3 right-3 z-10">
            <button
              type="button"
              onClick={() => setShowTooltip(!showTooltip)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-950/80 hover:bg-slate-900 text-emerald-400 border border-emerald-500/30 backdrop-blur-md transition-all shadow-lg"
              title="Click to view image replacement guide"
              aria-label="Image replacement slot info"
            >
              <Camera className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Photo Slot Ready</span>
            </button>

            {/* Quick helper tooltip */}
            {showTooltip && (
              <div className="absolute right-0 mt-2 w-72 p-3 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl text-left z-20 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Custom Photo Ready
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  Replace <span className="text-emerald-300 font-mono">{imageConfig.filename}</span> in <span className="text-purple-300 font-mono">public/images/</span> with your own photo anytime!
                </p>
                <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-1.5 font-mono">
                  Aspect: 16:9 • {imageConfig.width}x{imageConfig.height}px
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Caption & Alt Text Visibility */}
      {showCaption && imageConfig.caption && (
        <figcaption className="p-3 bg-slate-900/60 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
          <span>{imageConfig.caption}</span>
          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
            {imageConfig.filename.split('.').pop()?.toUpperCase() || 'JPEG'} 16:9
          </span>
        </figcaption>
      )}
    </figure>
  );
}
