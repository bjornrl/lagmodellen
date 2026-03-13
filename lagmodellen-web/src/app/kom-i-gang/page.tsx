'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import StepCard from '@/components/StepCard';
import Checklist from '@/components/Checklist';
import { steps, checklist, pitfallsToAvoid } from '@/lib/content';

export default function KomIGangPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-20 md:py-28 relative overflow-hidden">
        <img src="/assets/form-2.svg" alt="" className="absolute top-0 right-0 w-96 opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-medium mb-2">Kapittel 4</p>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">Hvordan komme i gang</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Praktisk vei inn. Start i liten skala, lær ofte, juster underveis. Ikke en ferdig kokebok.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 12 steg */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-4 text-center">12 steg for å komme i gang</h2>
            <p className="text-text-dark/60 text-center mb-12 max-w-xl mx-auto">
              Klikk på hvert steg for å se detaljer om mål, handlinger, fallgruver og hva innbyggeren merker.
            </p>
          </ScrollReveal>

          <div className="relative">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.05}>
                <StepCard step={step} isLast={i === steps.length - 1} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sjekkliste */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8 text-center">Sjekkliste før oppstart</h2>
            <Checklist items={checklist} storageKey="lagmodellen-checklist" />
          </ScrollReveal>
        </div>
      </section>

      {/* Fallgruver */}
      <section className="bg-tertiary-pink/20 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8 text-center">Fallgruver å unngå</h2>
            <div className="space-y-3">
              {pitfallsToAvoid.map((pitfall, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-secondary-red/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v8M7 11v2" stroke="#F36C57" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <p className="text-text-dark/80">{pitfall}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
