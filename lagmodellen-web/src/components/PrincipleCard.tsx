'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface Principle {
  id: number;
  title: string;
  icon: string;
  color: string;
  short: string;
  description: string;
  why: string;
  mobExperience: string;
  reflection: string[];
}

interface PrincipleCardProps {
  principle: Principle;
}

const colorMap: Record<string, { bg: string; border: string }> = {
  accent: { bg: 'bg-accent', border: 'border-accent' },
  'secondary-red': { bg: 'bg-secondary-red', border: 'border-secondary-red' },
  'secondary-purple': { bg: 'bg-secondary-purple', border: 'border-secondary-purple' },
  'secondary-green': { bg: 'bg-secondary-green', border: 'border-secondary-green' },
  'tertiary-pink': { bg: 'bg-tertiary-pink', border: 'border-tertiary-pink' },
  'tertiary-lavender': { bg: 'bg-tertiary-lavender', border: 'border-tertiary-lavender' },
  'tertiary-mint': { bg: 'bg-tertiary-mint', border: 'border-tertiary-mint' },
  'tertiary-sage': { bg: 'bg-tertiary-sage', border: 'border-tertiary-sage' },
  'primary-dark': { bg: 'bg-primary-dark', border: 'border-primary-dark' },
};

export default function PrincipleCard({ principle }: PrincipleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = colorMap[principle.color] ?? colorMap.accent;

  return (
    <motion.div
      layout
      className={`rounded-2xl bg-white shadow-sm border-l-4 ${colors.border} overflow-hidden cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 ${colors.bg}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 relative">
            <Image
              src={`/assets/${principle.icon}`}
              alt={principle.title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-lg md:text-xl text-primary-dark">{principle.title}</h3>
            <p className="font-body text-sm md:text-base text-text-dark/70 mt-1">
              {principle.short}
            </p>
          </div>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 text-primary-dark/50 text-xl"
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
              <div className="mt-6 space-y-5 border-t border-accent/20 pt-5">
                {/* Description */}
                <div>
                  <h4 className="font-heading text-base text-primary-dark mb-1">Beskrivelse</h4>
                  <p className="font-body text-sm text-text-dark/80 leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                {/* Why */}
                <div>
                  <h4 className="font-heading text-base text-primary-dark mb-1">Hvorfor?</h4>
                  <p className="font-body text-sm text-text-dark/80 leading-relaxed">
                    {principle.why}
                  </p>
                </div>

                {/* Mob experience */}
                <div>
                  <h4 className="font-heading text-base text-primary-dark mb-1">Mob-erfaring</h4>
                  <p className="font-body text-sm text-text-dark/80 leading-relaxed">
                    {principle.mobExperience}
                  </p>
                </div>

                {/* Reflection questions */}
                {principle.reflection.length > 0 && (
                  <div>
                    <h4 className="font-heading text-base text-primary-dark mb-2">Refleksjon</h4>
                    <ul className="space-y-2">
                      {principle.reflection.map((q, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full border border-accent flex items-center justify-center text-xs text-accent mt-0.5">
                            ?
                          </span>
                          <span className="font-body text-sm text-text-dark/80">{q}</span>
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
  );
}
