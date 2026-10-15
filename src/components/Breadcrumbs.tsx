import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="my-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={crumb.item + index} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />}
              {isLast ? (
                <span className="font-semibold text-emerald-400 truncate max-w-[240px] sm:max-w-none" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.item}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  {isFirst && <Home className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{crumb.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
