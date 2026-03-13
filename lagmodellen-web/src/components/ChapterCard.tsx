'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export interface Chapter {
  id: number;
  title: string;
  slug: string;
  description: string;
}

interface ChapterCardProps {
  chapter: Chapter;
  index: number;
}

const accentColors = [
  'border-secondary-red',
  'border-secondary-purple',
  'border-secondary-green',
  'border-tertiary-pink',
  'border-tertiary-lavender',
  'border-tertiary-mint',
  'border-tertiary-sage',
  'border-accent',
  'border-primary-dark',
];

const accentBgColors = [
  'bg-secondary-red',
  'bg-secondary-purple',
  'bg-secondary-green',
  'bg-tertiary-pink',
  'bg-tertiary-lavender',
  'bg-tertiary-mint',
  'bg-tertiary-sage',
  'bg-accent',
  'bg-primary-dark',
];

export default function ChapterCard({ chapter, index }: ChapterCardProps) {
  const borderColor = accentColors[index % accentColors.length];
  const bgColor = accentBgColors[index % accentBgColors.length];

  return (
    <Link href={`/${chapter.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`rounded-2xl bg-white shadow-sm hover:shadow-md border-t-4 ${borderColor} p-6 h-full flex flex-col transition-shadow`}
      >
        {/* Chapter number */}
        <div
          className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center mb-4`}
        >
          <span className="font-heading text-sm font-bold text-white">
            {index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg md:text-xl text-primary-dark mb-2">
          {chapter.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-text-dark/70 leading-relaxed flex-1">
          {chapter.description}
        </p>

        {/* Read more indicator */}
        <div className="mt-4 flex items-center gap-1 text-primary-dark font-body text-sm font-medium">
          <span>Les mer</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}
