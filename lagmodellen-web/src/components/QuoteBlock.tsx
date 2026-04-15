'use client';

import { motion } from 'framer-motion';

interface QuoteBlockProps {
  text: string;
  author: string;
}

export default function QuoteBlock({ text, author }: QuoteBlockProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-l-4 border-accent pl-6 py-4 my-8"
    >
      <p className="font-heading text-xl md:text-2xl lg:text-3xl italic text-primary-dark leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      <footer className="mt-4 font-body text-base text-primary-dark/70">&mdash; {author}</footer>
    </motion.blockquote>
  );
}
