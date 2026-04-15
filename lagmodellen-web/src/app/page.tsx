'use client';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center py-6 sm:py-10">
        {/* Decorative shapes */}
        <img
          src="/assets/form-1.svg"
          alt=""
          className="absolute top-0 right-0 w-48 sm:w-72 lg:w-96 opacity-50 pointer-events-none -z-10"
        />
        <img
          src="/assets/form-2.svg"
          alt=""
          className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-80 opacity-45 pointer-events-none -z-10"
        />
        <img
          src="/assets/form-2.svg"
          alt=""
          className="absolute bottom-0 right-0 w-[60vw] max-w-[720px] opacity-70 pointer-events-none -z-10"
        />
        <img
          src="/assets/form-3.svg"
          alt=""
          className="absolute bottom-0 right-0 w-[42vw] max-w-[460px] opacity-70 pointer-events-none -z-10"
        />

        <img
          src="/assets/form-3.svg"
          alt=""
          className="absolute top-1/3 left-1/4 w-36 sm:w-48 lg:w-64 opacity-50 pointer-events-none -z-10"
        />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row gap-4 lg:gap-6">
          <div className="w-full rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between gap-6 lg:gap-8">
            <div className="flex flex-col w-full justify-start gap-4 items-start">
              <img
                src="/assets/Lagmodellen-logo.png"
                alt="Lagmodellen logo"
                className="max-w-[220px] sm:max-w-[280px] w-full h-auto drop-shadow-xl"
              />
              <div className="flex flex-col items-start justify-center w-fit rounded-2xl">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl text-primary-dark/80 font-bold mb-3">
                  Lagmodellen
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary-dark/80 font-heading">
                  Tverrsektorielt samarbeid i praksis
                </h2>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary-dark/80 font-heading leading-snug">
              &ldquo;Æ har jobba i kommunen i 30 år, og alltid trudd æ jobba tverrfaglig. Men det
              her e første gangen æ oppleve reelt tverrfaglig samarbeid.&rdquo;
              <span className="text-sm text-text-dark/60 mt-2 block not-italic">
                — Ansatt i Trondheim kommune
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full items-stretch">
              <div className="flex flex-col items-center justify-between w-full rounded-2xl bg-white/45 p-4 sm:p-5">
                <p className="text-lg sm:text-xl text-primary-dark/80 text-center font-bold mb-4">
                  Last ned kort presentasjon om Lagmodellen
                </p>
                <a
                  href="/assets/Lagmodellen_kort.pdf"
                  download
                  className="w-full sm:w-auto bg-secondary-red text-white px-6 py-3 rounded-2xl text-base sm:text-lg font-medium hover:bg-primary-dark/90 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-center"
                >
                  Last ned presentasjon
                </a>
              </div>
              <div className="flex flex-col items-center justify-between w-full rounded-2xl bg-white/45 p-4 sm:p-5">
                <p className="text-lg sm:text-xl text-primary-dark/80 text-center font-bold mb-4">
                  Er du interessert i å høre med om Lagmodellen?
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe7T5n8jdlY21lfrEns8g-np9KL447JF8ND1jNNDpSKsVAkOA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-tertiary-mint text-primary-dark px-6 py-3 rounded-2xl text-base sm:text-lg font-medium hover:bg-primary-dark/90 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center text-center"
                >
                  Ta kontakt
                </a>
              </div>
            </div>
          </div>
          <div className="w-full bg-tertiary-pink p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-between gap-4 rounded-2xl">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-primary-dark/80 text-center font-heading">
              Meld deg på webinar
            </p>
            <p className="text-base sm:text-lg text-primary-dark/80 text-center">
              Seminaret gir deg en grundig introduksjon til Lagmodellen og hvordan den kan benyttes
              for å styrke tverrsektorielt samarbeid i offentlig sektor. Du vil få innsikt i
              sentrale prinsipper, rammeverkets oppbygging og praktiske erfaringer fra
              implementering i ulike organisasjoner.
            </p>
            <p className="text-base sm:text-lg text-primary-dark/80 text-center">
              Deltakere får anledning til å stille spørsmål og utveksle erfaringer med andre som er
              nysgjerrige på Lagmodellen. Seminaret passer både for ledere, fagfolk og andre som
              ønsker å lære mer om hvordan samhandling på tvers kan bidra til bedre tjenester og
              innovasjon.
            </p>

            {/* <img src="/webinar.jpg" alt="Webinar" className="object-cover rounded-2xl" /> */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdSVIfYZ53zoT1OYeAhVQjyHsIW3143DQnNrQ1f6JoTDwcTgw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary-dark text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl text-base sm:text-lg font-medium hover:bg-primary-dark/90 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center text-center"
            >
              Meld deg på webinar
            </a>

            <div className="w-full flex flex-row items-end justify-center gap-3 sm:gap-4">
              <img
                src="/assets/figur-frivillighet.svg"
                alt="Figur som illustrerer frivillighet"
                className="w-12 sm:w-16 h-auto drop-shadow-lg"
              />
              <img
                src="/assets/figur-innbygger.svg"
                alt="Figur som illustrerer innbygger"
                className="w-12 sm:w-16 h-auto drop-shadow-lg"
              />
              <img
                src="/assets/figur-oppfolging.svg"
                alt="Figur som illustrerer oppfølging"
                className="w-12 sm:w-16 h-auto drop-shadow-lg"
              />
              <img
                src="/assets/figur-relasjoner.svg"
                alt="Figur som illustrerer relasjoner"
                className="w-12 sm:w-16 h-auto drop-shadow-lg"
              />
              <img
                src="/assets/figur-samlokalisering.svg"
                alt="Figur som illustrerer samlokalisering"
                className="w-12 sm:w-16 h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
          <Motion.div
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
          </Motion.div>

          <Motion.blockquote
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
          </Motion.blockquote>
        </div> */}
      </section>

      {/* Chapter overview */}
      {/* <section id="kapitler" className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl text-primary-dark mb-12 text-center"
          >
            Utforsk innholdet
          </Motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter, index) => (
              <ChapterCard key={chapter.id} chapter={chapter} index={index} />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
