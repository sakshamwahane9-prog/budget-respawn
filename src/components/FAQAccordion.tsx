import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQAccordion({ faqs, title = 'Frequently Asked Questions (AEO Direct Answers)' }: FAQAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // Open first by default

  const toggle = (idx: number) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  return (
    <section className="my-10 p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-slate-200 text-sm sm:text-base pr-2">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-900/80 bg-slate-900/20 animate-in fade-in duration-200">
                  <p className="border-l-2 border-emerald-500/50 pl-3.5 my-1 text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
