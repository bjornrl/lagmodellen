'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import CommitmentFormula from '@/components/CommitmentFormula';
import Link from 'next/link';

const contacts = [
  { name: 'Kristin Nordaune', email: 'kristin.nordaune@trondheim.kommune.no' },
  { name: 'Erik Lånke Solbu', email: 'Erik.Lanke.Solbu@nav.no' },
  { name: 'Halvor Skrede', email: 'Halvor@comte.no' },
];

export default function AvslutningPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-accent text-primary-dark py-20 md:py-28 relative overflow-hidden">
        <img
          src="/assets/form-3.svg"
          alt=""
          className="absolute bottom-0 right-0 w-80 opacity-15 pointer-events-none"
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl text-primary-dark mb-6">Avslutning</h1>
            <p className="text-xl text-primary-dark/70 max-w-2xl">
              Oppsummering av reisen og veien videre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Oppsummering */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8">Oppsummering av reisen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  chapter: 'Kapittel 1',
                  title: 'Hvorfor Lagmodellen?',
                  text: 'Vi har sett på utfordringene i offentlig sektor som gjør det vanskelig å gi helhetlig støtte.',
                  link: '/hvorfor',
                },
                {
                  chapter: 'Kapittel 2',
                  title: 'Hva er Lagmodellen?',
                  text: 'Vi har blitt kjent med organisering, prinsipper og erfaringer fra praksis.',
                  link: '/hva-er-lagmodellen',
                },
                {
                  chapter: 'Kapittel 3',
                  title: 'Gevinster og barrierer',
                  text: 'Vi har vurdert hva vi kan vinne og hva vi må være forberedt på.',
                  link: '/gevinster-og-barrierer',
                },
                {
                  chapter: 'Kapittel 4',
                  title: 'Hvordan komme i gang',
                  text: 'Vi har fått 12 konkrete steg for å starte i liten skala.',
                  link: '/kom-i-gang',
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-accent/10 block"
                >
                  <p className="text-xs text-text-dark/50 mb-1">{item.chapter}</p>
                  <h3 className="font-heading text-xl text-primary-dark mb-2">{item.title}</h3>
                  <p className="text-text-dark/70 text-sm">{item.text}</p>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Forpliktelsesformel */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-4 text-center">
              Forpliktelsesformel
            </h2>
            <p className="text-text-dark/60 text-center mb-8">
              Fyll inn og ta med dere en konkret forpliktelse videre.
            </p>
            <CommitmentFormula />
          </ScrollReveal>
        </div>
      </section>

      {/* Kontakt */}
      <section className="bg-tertiary-sage/20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-primary-dark mb-8 text-center">
              Kontakt oss
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contacts.map((contact, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-dark/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-2xl text-primary-dark">
                      {contact.name[0]}
                    </span>
                  </div>
                  <h3 className="font-medium text-primary-dark mb-2">{contact.name}</h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-secondary-green hover:underline break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bakgrunn */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-text-dark/60 text-lg leading-relaxed">
              Lagmodellen ble utviklet i prosjektet Mann om bord med støtte fra Stimulab (Digdir +
              DOGA). Spredningsmateriell utviklet med Comte Bureau.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
