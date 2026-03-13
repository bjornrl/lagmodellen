'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ChapterCard from '@/components/ChapterCard';
import { chapters } from '@/lib/content';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Decorative shapes */}
        <img
          src="/assets/form-1.svg"
          alt=""
          className="absolute top-0 right-0 w-96 opacity-20 pointer-events-none"
        />
        <img
          src="/assets/form-2.svg"
          alt=""
          className="absolute bottom-0 left-0 w-80 opacity-15 pointer-events-none"
        />
        <img
          src="/assets/form-3.svg"
          alt=""
          className="absolute top-1/3 left-1/4 w-64 opacity-10 pointer-events-none"
        />

        <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl text-primary-dark mb-6">
              Lagmodellen
            </h1>
            <p className="text-2xl md:text-3xl text-primary-dark/80 font-heading mb-4">
              Tverrsektorielt samarbeid i praksis
            </p>
            <p className="text-lg text-text-dark/70 mb-8 max-w-xl">
              Et rammeverk for å prøve ut Lagmodellen i egen virkelighet
            </p>
            <Link
              href="#kapitler"
              className="inline-block bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-primary-dark/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Utforsk rammeverket
            </Link>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-16 max-w-lg border-l-4 border-accent pl-6 py-4"
          >
            <p className="font-heading text-xl italic text-primary-dark/80">
              &ldquo;Dette er første gangen jeg opplever reelt tverrfaglig samarbeid&rdquo;
            </p>
            <cite className="text-sm text-text-dark/60 mt-2 block not-italic">
              — Ansatt
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* Chapter overview */}
      <section id="kapitler" className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl text-primary-dark mb-12 text-center"
          >
            Utforsk innholdet
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter, index) => (
              <ChapterCard key={chapter.id} chapter={chapter} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
