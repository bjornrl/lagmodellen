'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ChecklistProps {
  items: string[];
  storageKey: string;
}

export default function Checklist({ items, storageKey }: ChecklistProps) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        setChecked(JSON.parse(stored));
      }
    } catch {
      // localStorage unavailable
    }
  }, [storageKey]);

  const toggle = useCallback(
    (index: number) => {
      setChecked((prev) => {
        const updated = { ...prev, [index]: !prev[index] };
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

  const completedCount = Object.values(checked).filter(Boolean).length;
  const progress = items.length > 0 ? (completedCount / items.length) * 100 : 0;

  return (
    <div className="rounded-2xl bg-white shadow-sm border border-accent/20 p-6 md:p-8">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-body text-sm text-text-dark/60">Fremgang</span>
          <span className="font-body text-sm font-medium text-primary-dark">
            {completedCount} / {items.length}
          </span>
        </div>
        <div className="h-2 rounded-full bg-accent/20 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-secondary-green"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Items */}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  checked={!!checked[index]}
                  onChange={() => toggle(index)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    checked[index]
                      ? 'bg-secondary-green border-secondary-green'
                      : 'border-accent group-hover:border-primary-dark'
                  }`}
                >
                  {checked[index] && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span
                className={`font-body text-sm md:text-base leading-relaxed transition-colors ${
                  checked[index]
                    ? 'text-text-dark/40 line-through'
                    : 'text-text-dark'
                }`}
              >
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
