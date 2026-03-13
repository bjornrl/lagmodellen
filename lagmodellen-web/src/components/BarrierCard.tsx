'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Barrier {
  title: string;
  description: string;
  solution: string;
}

interface BarrierCardProps {
  barrier: Barrier;
}

export default function BarrierCard({ barrier }: BarrierCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="rounded-2xl bg-white shadow-sm border border-accent/20 overflow-hidden cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          {/* Warning icon */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-red/10 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L15 14H1L8 1Z"
                stroke="var(--color-secondary-red)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 6V9"
                stroke="var(--color-secondary-red)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="8" cy="11.5" r="0.75" fill="var(--color-secondary-red)" />
            </svg>
          </div>

          <h3 className="font-heading text-lg text-primary-dark flex-1">
            {barrier.title}
          </h3>

          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 text-primary-dark/50"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              <div className="mt-5 space-y-4 border-t border-accent/20 pt-5">
                {/* Description (barrier) */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-red/10 flex items-center justify-center mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3L9 9M9 3L3 9"
                        stroke="var(--color-secondary-red)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm text-secondary-red mb-1">
                      Barriere
                    </h4>
                    <p className="font-body text-sm text-text-dark/80 leading-relaxed">
                      {barrier.description}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-green/10 flex items-center justify-center mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="var(--color-secondary-green)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm text-secondary-green mb-1">
                      Losning
                    </h4>
                    <p className="font-body text-sm text-text-dark/80 leading-relaxed">
                      {barrier.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
