'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReflectionCardProps {
  questions: string[];
  title?: string;
}

export default function ReflectionCard({
  questions,
  title = 'Refleksjonssporsmal',
}: ReflectionCardProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [notes, setNotes] = useState<Record<number, string>>({});

  const storageKey = `reflection-${title}`;

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        setNotes(JSON.parse(stored));
      }
    } catch {
      // localStorage unavailable
    }
  }, [storageKey]);

  const handleNoteChange = useCallback(
    (index: number, value: string) => {
      setNotes((prev) => {
        const updated = { ...prev, [index]: value };
        try {
          localStorage.setItem(storageKey, JSON.stringify(updated));
        } catch {
          // localStorage unavailable
        }
        return updated;
      });
    },
    [storageKey],
  );

  return (
    <div className="rounded-2xl bg-white shadow-sm border-l-4 border-accent p-6 md:p-8">
      <h3 className="font-heading text-xl md:text-2xl text-primary-dark mb-6">{title}</h3>

      <ul className="space-y-4">
        {questions.map((question, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="flex items-start gap-3 w-full text-left group"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-sm font-bold text-accent mt-0.5 group-hover:bg-accent group-hover:text-white transition-colors">
                ?
              </span>
              <span className="font-body text-base md:text-lg text-text-dark leading-relaxed">
                {question}
              </span>
            </button>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="ml-11 mt-3">
                    <textarea
                      value={notes[index] ?? ''}
                      onChange={(e) => handleNoteChange(index, e.target.value)}
                      placeholder="Skriv dine tanker her..."
                      className="w-full min-h-[100px] rounded-lg border border-accent/40 bg-primary-light/50 p-3 font-body text-sm text-text-dark placeholder:text-text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent resize-y"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}
