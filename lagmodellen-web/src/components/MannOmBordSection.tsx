'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MannOmBordData {
  background: string;
  approach: string[];
  results: {
    category: string;
    items: string[];
  }[];
  patterns: string[];
}

interface MannOmBordSectionProps {
  data: MannOmBordData;
}

export default function MannOmBordSection({ data }: MannOmBordSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const resultColors = [
    'bg-secondary-green',
    'bg-secondary-purple',
    'bg-tertiary-mint',
  ];

  return (
    <div className="rounded-2xl bg-white shadow-sm border border-accent/20 overflow-hidden">
      {/* Header / toggle */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-primary-light/30 transition-colors"
      >
        <div>
          <span className="inline-block font-body text-xs font-medium uppercase tracking-wider text-secondary-purple mb-1">
            Praksis-case
          </span>
          <h3 className="font-heading text-xl md:text-2xl text-primary-dark">
            Mann om bord
          </h3>
        </div>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-primary-dark/50"
        >
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-8 border-t border-accent/20 pt-6">
              {/* Background */}
              <div>
                <h4 className="font-heading text-lg text-primary-dark mb-2">
                  Bakgrunn
                </h4>
                <p className="font-body text-sm md:text-base text-text-dark/80 leading-relaxed">
                  {data.background}
                </p>
              </div>

              {/* Approach */}
              <div>
                <h4 className="font-heading text-lg text-primary-dark mb-3">
                  Tilnerming
                </h4>
                <ul className="space-y-2">
                  {data.approach.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center text-xs font-bold text-primary-dark mt-0.5">
                        {i + 1}
                      </span>
                      <span className="font-body text-sm text-text-dark/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h4 className="font-heading text-lg text-primary-dark mb-3">
                  Resultater
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {data.results.map((result, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-accent/20"
                    >
                      <div
                        className={`${resultColors[i % resultColors.length]} px-4 py-2`}
                      >
                        <h5 className="font-heading text-sm text-white">
                          {result.category}
                        </h5>
                      </div>
                      <ul className="p-4 space-y-1.5">
                        {result.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                            <span className="font-body text-xs text-text-dark/80">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Patterns */}
              {data.patterns.length > 0 && (
                <div>
                  <h4 className="font-heading text-lg text-primary-dark mb-3">
                    Monstre
                  </h4>
                  <ul className="space-y-2">
                    {data.patterns.map((pattern, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary-purple mt-2" />
                        <span className="font-body text-sm text-text-dark/80 leading-relaxed">
                          {pattern}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
