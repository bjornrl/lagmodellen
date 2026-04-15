'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import PrincipleCard from '@/components/PrincipleCard';
import { principles } from '@/lib/content';

const teamVariants = [
  {
    title: 'Offentlig tjenestetyngde',
    description: 'Offentlige tjenester bærer mest kapasitet, ideell/frivillig styrker relasjon.',
    color: 'bg-secondary-red',
  },
  {
    title: 'Ideell/frivillig-tyngde',
    description: 'Frivillig leder relasjon og nærvær, offentlige avklarer rettigheter.',
    color: 'bg-secondary-purple',
  },
  {
    title: 'Partner-/samfunnstyngde',
    description:
      'Andre aktører er nøkkel (kriminalomsorg, idrett, næringsliv), offentlige støtter med fag.',
    color: 'bg-secondary-green',
  },
];

export default function HvaErLagmodellenPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary-purple text-white py-20 md:py-28 relative overflow-hidden">
        <img
          src="/assets/form-3.svg"
          alt=""
          className="absolute top-0 left-0 w-80 opacity-10 pointer-events-none"
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/70 font-medium mb-2">Kapittel 2</p>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Hva er Lagmodellen?
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Organisering, prinsipper, og eksempler fra praksis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organisering */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8">
              Organisering: Ett lag rundt innbygger
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <p className="text-lg text-text-dark/80 leading-relaxed mb-6">
                Kjernen i Lagmodellen er å organisere seg som ett lag rundt én innbygger eller
                familie. Alle aktører er likeverdige i mål, stemme og ansvar — men bidrar ulikt
                etter kompetanse.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-light rounded-xl p-5">
                  <h3 className="font-heading text-lg text-primary-dark mb-2">Kjernelag</h3>
                  <p className="text-text-dark/70">2–4 personer, faste ressurser over tid.</p>
                </div>
                <div className="bg-primary-light rounded-xl p-5">
                  <h3 className="font-heading text-lg text-primary-dark mb-2">Utvidet krets</h3>
                  <p className="text-text-dark/70">Spesialister som kobles på ved behov.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h3 className="font-heading text-2xl text-primary-dark mb-6">Rammer</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {['Én enkel inngang', 'Én felles plan', 'Beslutninger nær innbygger'].map(
                  (item, i) => (
                    <div key={i} className="bg-accent/20 rounded-xl p-4 text-center">
                      <p className="text-primary-dark font-medium">{item}</p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-heading text-2xl text-primary-dark mb-6">Likeverd i praksis</h3>
              <div className="space-y-4">
                {[
                  { title: 'Felles mål først', text: 'Innbyggerens mål samler laget.' },
                  { title: 'Ulik innsats, felles ansvar', text: 'Alle bidrar etter kompetanse.' },
                  { title: 'Én stemme mot innbygger', text: 'Laget opptrer samlet utad.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-primary-light rounded-xl p-4">
                    <span className="w-8 h-8 rounded-full bg-secondary-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-secondary-purple font-heading text-sm">{i + 1}</span>
                    </span>
                    <div>
                      <h4 className="font-medium text-primary-dark">{item.title}</h4>
                      <p className="text-text-dark/70 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tre varianter */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-10">
              Tre varianter av lagtyngde
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {teamVariants.map((variant, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm">
                  <div className={`${variant.color} p-4`}>
                    <h3 className="font-heading text-lg text-white">{variant.title}</h3>
                  </div>
                  <div className="bg-primary-light p-5">
                    <p className="text-text-dark/70 text-sm">{variant.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* De seks prinsippene */}
      <section className="bg-tertiary-lavender/20 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-4 text-center">
              De seks prinsippene
            </h2>
            <p className="text-text-dark/60 text-center mb-12 max-w-2xl mx-auto">
              Klikk på et prinsipp for å utforske beskrivelse, erfaringer fra praksis, og
              refleksjonsspørsmål.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, i) => (
              <ScrollReveal key={principle.id} delay={i * 0.1}>
                <PrincipleCard principle={principle} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
