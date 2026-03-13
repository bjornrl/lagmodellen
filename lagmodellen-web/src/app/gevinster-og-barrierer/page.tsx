'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import BarrierCard from '@/components/BarrierCard';
import ReflectionCard from '@/components/ReflectionCard';
import { gains, barriers } from '@/lib/content';

const gainColors = ['bg-secondary-green', 'bg-secondary-red', 'bg-secondary-purple'];
const gainIcons = [
  <svg key="citizens" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="10" r="6" stroke="white" strokeWidth="2"/><path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="white" strokeWidth="2"/></svg>,
  <svg key="employees" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4v24M8 12l8-8 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="orgs" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="14" width="10" height="14" rx="2" stroke="white" strokeWidth="2"/><rect x="18" y="8" width="10" height="20" rx="2" stroke="white" strokeWidth="2"/><path d="M14 20h4" stroke="white" strokeWidth="2"/></svg>,
];

export default function GevinsterOgBarriererPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary-green text-white py-20 md:py-28 relative overflow-hidden">
        <img src="/assets/form-1.svg" alt="" className="absolute bottom-0 left-0 w-80 opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/70 font-medium mb-2">Kapittel 3</p>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">Gevinster og barrierer</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Hva kan vi vinne, og hva må vi være forberedt på? Realistisk bilde: stor verdi, men krever aktive endringer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gevinster */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-10 text-center">Gevinster</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {gains.map((gain, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm bg-white">
                  <div className={`${gainColors[i]} p-6 flex items-center gap-3`}>
                    {gainIcons[i]}
                    <h3 className="font-heading text-xl text-white">{gain.category}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {gain.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0">
                            <path d="M2 8l4 4 8-8" stroke={gainColors[i].includes('green') ? '#0E8A6B' : gainColors[i].includes('red') ? '#F36C57' : '#8B7BC6'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-text-dark/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Barrierer */}
      <section className="bg-tertiary-pink/20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-10 text-center">Barrierer</h2>
            <div className="space-y-4">
              {barriers.map((barrier, i) => (
                <BarrierCard key={i} barrier={barrier} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Refleksjon */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <ReflectionCard
              questions={[
                'Hvilke gevinster er mest verdifulle hos dere?',
                'Hvilke barrierer kan oppstå raskest?',
                'Hva må være på plass for å realisere gevinstene?',
                'Hvordan teste i liten skala?',
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
