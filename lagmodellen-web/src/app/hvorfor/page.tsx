'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import ReflectionCard from '@/components/ReflectionCard';
import MannOmBordSection from '@/components/MannOmBordSection';
import { mannOmBordCase } from '@/lib/content';

const systemChallenges = [
  { title: 'Fragmentering og parallelle løp', description: 'Innbyggere møter mange aktører og må koordinere hjelpen selv.' },
  { title: 'Standardiserte tjenester', description: 'Løsninger laget for «gjennomsnittsbrukeren», treffer dårlig for de som faller utenfor.' },
  { title: 'Koordinering fremfor oppfølging', description: 'Ansatte bruker tid på å få systemet til å henge sammen.' },
  { title: 'Manglende brobygging', description: 'Ulike fagkulturer, styringsnivåer og regelverk skaper barrierer.' },
];

const humanConsequences = [
  'Mange faller mellom tjenester, ingen tar helhetlig ansvar.',
  'Brukere forholder seg til mange aktører uten koordinering.',
  'Relasjoner er personavhengige og sårbare.',
  'Ansatte bruker uforholdsmessig mye tid på samordning.',
  'I verste fall forsterker systemet utenforskap.',
];

const changeReactions = [
  { level: 'Mikro', scope: 'individ', description: 'Nysgjerrighet blandet med usikkerhet om egen rolle.' },
  { level: 'Meso', scope: 'virksomhet', description: 'Kulturforskjeller mellom avdelinger.' },
  { level: 'Makro', scope: 'samarbeid på tvers', description: 'Ulike tempo og styringslogikker.' },
];

export default function HvorforPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary-red text-white py-20 md:py-28 relative overflow-hidden">
        <img src="/assets/form-2.svg" alt="" className="absolute bottom-0 right-0 w-96 opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/70 font-medium mb-2">Kapittel 1</p>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">Hvorfor Lagmodellen?</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Før vi kan forstå modellen, må vi forstå problembildet den forsøker å svare på. Målet er å løfte frem mønstre som gjør det vanskelig å gi innbyggere helhetlig støtte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Systemutfordringer */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-10">Systemutfordringer i offentlig sektor</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {systemChallenges.map((challenge, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-secondary-red">
                  <h3 className="font-heading text-xl text-primary-dark mb-3">{challenge.title}</h3>
                  <p className="text-text-dark/70">{challenge.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Menneskelige konsekvenser */}
      <section className="bg-tertiary-pink/30 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-10">Menneskelige konsekvenser</h2>
            <div className="space-y-4">
              {humanConsequences.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-secondary-red/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-red" />
                  </span>
                  <p className="text-text-dark/80">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hvorfor det angår dere */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8">Hvorfor det angår dere</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Mange aktører på ulike nivåer uten felles inngang.',
                'Ukoordinerte parallelle prosesser.',
                'Lite fleksibilitet til å møte faktiske situasjoner.',
              ].map((item, i) => (
                <div key={i} className="bg-primary-light rounded-2xl p-6 text-center">
                  <p className="text-text-dark/80">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fra utfordring til mulighet */}
      <section className="bg-tertiary-sage/20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8">Fra utfordring til mulighet</h2>
            <div className="space-y-4">
              {[
                'Gjøre friksjon synlig.',
                'Se hvor små, riktige grep kan gjøre en forskjell.',
                'Redusere belastning på ansatte, gi innbyggere helhetlig tilbud.',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-secondary-green/10 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8l4 4 8-8" stroke="#0E8A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-text-dark/80">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Endringsreaksjoner */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-10">Endringsreaksjoner</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {changeReactions.map((reaction, i) => (
                <div key={i} className="bg-primary-light rounded-2xl p-6 border border-accent/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-primary-dark bg-accent/40 px-3 py-1 rounded-full">
                      {reaction.level}
                    </span>
                    <span className="text-xs text-text-dark/50">({reaction.scope})</span>
                  </div>
                  <p className="text-text-dark/70">{reaction.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Refleksjonsspørsmål */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <ReflectionCard
              questions={[
                'Hva i utfordringsbildet kjenner dere best igjen?',
                'Konkrete situasjoner der innbygger faller mellom tjenester?',
                'Hvor er størst overlapp mellom utfordringer?',
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Mann om bord */}
      <section className="bg-tertiary-lavender/20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <MannOmBordSection data={{
              background: mannOmBordCase.background,
              approach: [mannOmBordCase.approach],
              results: [
                { category: 'Innbyggere', items: [mannOmBordCase.results.innbyggere] },
                { category: 'Ansatte', items: [mannOmBordCase.results.ansatte] },
                { category: 'Organisasjoner', items: [mannOmBordCase.results.organisasjoner] },
              ],
              patterns: [mannOmBordCase.patterns],
            }} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
