'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Step {
  number: number;
  title: string;
  goal: string;
  actions: string | string[];
  clarifications: string | string[];
  pitfalls: string | string[];
  citizenNotices: string | string[];
}

interface StepCardProps {
  step: Step;
  isLast?: boolean;
}

const toArray = (v: string | string[]): string[] => (Array.isArray(v) ? v : [v]);

export default function StepCard({ step, isLast = false }: StepCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const actions = toArray(step.actions);
  const clarifications = toArray(step.clarifications);
  const pitfalls = toArray(step.pitfalls);
  const citizenNotices = toArray(step.citizenNotices);

  return (
    <div className="relative flex gap-4 md:gap-6">
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-dark text-white font-heading text-sm md:text-base font-bold flex items-center justify-center hover:bg-secondary-purple transition-colors"
        >
          {step.number}
        </button>
        {!isLast && <div className="w-0.5 flex-1 bg-accent/50 min-h-[24px]" />}
      </div>

      {/* Card content */}
      <div className="flex-1 pb-8">
        <motion.div
          layout
          className="rounded-2xl bg-white shadow-sm border border-accent/20 overflow-hidden cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="p-5 md:p-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-heading text-lg md:text-xl text-primary-dark">{step.title}</h3>
                <p className="font-body text-sm md:text-base text-text-dark/70 mt-1">{step.goal}</p>
              </div>
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 text-primary-dark/50"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 space-y-5 border-t border-accent/20 pt-5">
                    {/* Actions */}
                    {actions.length > 0 && (
                      <div>
                        <h4 className="font-heading text-base text-primary-dark mb-2">
                          Handlinger
                        </h4>
                        <ul className="space-y-1.5">
                          {actions.map((action, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary-green mt-2" />
                              <span className="font-body text-sm text-text-dark/80">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Clarifications */}
                    {clarifications.length > 0 && (
                      <div>
                        <h4 className="font-heading text-base text-primary-dark mb-2">
                          Avklaringer
                        </h4>
                        <ul className="space-y-1.5">
                          {clarifications.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary-purple mt-2" />
                              <span className="font-body text-sm text-text-dark/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Pitfalls */}
                    {pitfalls.length > 0 && (
                      <div>
                        <h4 className="font-heading text-base text-secondary-red mb-2">
                          Fallgruver
                        </h4>
                        <ul className="space-y-1.5">
                          {pitfalls.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary-red mt-2" />
                              <span className="font-body text-sm text-text-dark/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Citizen notices */}
                    {citizenNotices.length > 0 && (
                      <div>
                        <h4 className="font-heading text-base text-primary-dark mb-2">
                          Innbyggerhensyn
                        </h4>
                        <ul className="space-y-1.5">
                          {citizenNotices.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-tertiary-mint mt-2" />
                              <span className="font-body text-sm text-text-dark/80">{item}</span>
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
        </motion.div>
      </div>
    </div>
  );
}
