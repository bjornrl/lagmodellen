'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import ReflectionCard from '@/components/ReflectionCard';

export default function IntroduksjonPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-20 md:py-28 relative overflow-hidden">
        <img
          src="/assets/form-1.svg"
          alt=""
          className="absolute top-0 right-0 w-80 opacity-10 pointer-events-none"
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-medium mb-2">Kapittel 0</p>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">Introduksjon</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Hva er dette dokumentet og hvordan bruke det
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hva er dette dokumentet */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8">
              Hva er dette dokumentet?
            </h2>
            <div className="prose max-w-none">
              <p className="text-lg text-text-dark/80 leading-relaxed mb-6">
                Et arbeidsdokument laget for å utforske om Lagmodellen kan være en god måte å
                organisere tjenester på.
              </p>
              <p className="text-text-dark/70 leading-relaxed">
                Gjennom fire kapitler vil dere: forstå utfordringer, bli kjent med modellen, vurdere
                gevinster og barrierer, og skissere egne steg.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hvordan bruke det */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8">Hvordan bruke det</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Refleksjon', text: 'Refleksjonsoppgaver underveis i dokumentet.' },
                { title: 'Arbeidsmøte', text: 'Sett av ca. 3 timer til et arbeidsmøte.' },
                {
                  title: 'Deling',
                  text: 'Individuell notering, deling i små grupper, felles betraktninger.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-primary-light rounded-2xl p-6 border border-accent/20">
                  <h3 className="font-heading text-xl text-primary-dark mb-3">{item.title}</h3>
                  <p className="text-text-dark/70">{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hvem bør delta */}
      <section className="bg-tertiary-sage/20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8">Hvem bør delta?</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary-green mt-2.5 shrink-0" />
                  <span className="text-text-dark/80">
                    Tjenester, samarbeidspartnere, fagpersoner og ledere som gir et realistisk
                    bilde.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary-green mt-2.5 shrink-0" />
                  <span className="text-text-dark/80">
                    De som kjenner målgrupper og virkeligheten best.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tre avklaringer */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8">
              Før dere begynner — tre avklaringer
            </h2>
            <div className="space-y-4">
              {[
                'Hvilken målgruppe snakker vi om?',
                'Hvilke tjenester og aktører er relevante?',
                'Hva ønsker dere å lære?',
              ].map((q, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-primary-light rounded-2xl p-6 border border-accent/20"
                >
                  <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-heading text-primary-dark text-lg shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-text-dark/80 text-lg">{q}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
