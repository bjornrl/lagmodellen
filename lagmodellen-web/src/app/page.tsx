'use client';

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-primary-light lg:h-screen">
      <img
        src="/assets/form-2.svg"
        alt=""
        className="pointer-events-none absolute -right-12 -top-12 hidden w-[38rem] opacity-70 md:block -z-20"
      />
      <img
        src="/assets/form-3.svg"
        alt=""
        className="pointer-events-none absolute -right-16 bottom-14 hidden w-[32rem] opacity-80 md:block -z-20"
      />
      <img
        src="/assets/form-1.svg"
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 hidden w-[34rem] opacity-85 md:block -z-20"
      />

      <section className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col gap-6 px-5 py-5 md:px-8 md:py-6 lg:grid lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:items-start lg:gap-5 lg:py-3">
        <div className="lg:col-span-6 xl:col-span-5">
          <img
            src="/assets/Lagmodellen-logo.png"
            alt="Lagmodellen logo"
            className="mb-2 h-auto w-full max-w-[155px]"
          />
          <h1 className="text-[2rem] font-semibold leading-tight tracking-tight text-primary-dark md:text-[2.35rem] lg:text-[2.15rem]">
            Lagmodellen
          </h1>
          <p className="mt-1 max-w-[18rem] text-[1.65rem] leading-[1.03] text-tertiary-mint md:text-[1.8rem] lg:text-[1.45rem]">
            Tverrsektorielt samarbeid i praksis
          </p>

          <blockquote className="mt-5 max-w-[30rem] text-[2.05rem] font-semibold italic leading-[1.05] text-primary-dark md:text-[2.3rem] lg:text-[2rem]">
            &ldquo;Æ har jobba i kommunen i 30 år, og alltid trudd æ jobba tverrfaglig. Men det her
            e første gangen æ oppleve reelt tverrfaglig samarbeid.&rdquo;
          </blockquote>
          <p className="mt-2 text-[0.95rem] text-primary-dark/75 lg:text-[0.9rem]">
            Ansatt, Trondheim kommune
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-5">
            <div>
              <p className="mb-2 text-center text-[0.85rem] leading-tight text-primary-dark/85">
                Last ned kort presentasjon
                <br />
                om Lagmodellen
              </p>
              <a
                href="/assets/Lagmodellen_kort.pdf"
                download
                className="flex h-10 w-full items-center justify-center rounded-xl bg-secondary-red px-4 text-[0.95rem] font-medium text-white shadow-sm transition hover:brightness-95"
              >
                Last ned presentasjon
              </a>
            </div>
            <div>
              <p className="mb-2 text-center text-[0.85rem] leading-tight text-primary-dark/85">
                Er du interessert i å høre
                <br />
                med om Lagmodellen?
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe7T5n8jdlY21lfrEns8g-np9KL447JF8ND1jNNDpSKsVAkOA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-full items-center justify-center rounded-xl bg-tertiary-mint px-4 text-[0.95rem] font-medium text-primary-dark shadow-sm transition hover:brightness-95"
              >
                Ta kontakt
              </a>
            </div>
          </div>

          <div className="mt-4 lg:mt-6">
            <div className="flex flex-row h-full justify-center items-end gap-4 md:gap-6 lg:flex-nowrap lg:gap-5">
              <img
                src="/logos/Trondheim%20kommune%20logo.png"
                alt="Trondheim kommune"
                className="h-5 w-auto object-contain md:h-6 lg:h-5"
              />
              <img
                src="/logos/Stimulab_svart.png"
                alt="Stimulab"
                className="h-5 w-auto object-contain md:h-6 lg:h-5"
              />
              <img
                src="/logos/ComteLogo%20Svart.png"
                alt="Comte"
                className="h-5 w-auto object-contain md:h-6 lg:h-5"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:self-center xl:col-span-5 xl:col-start-7">
          <div className="rounded-3xl bg-tertiary-pink p-5 text-primary-dark shadow-[0_16px_36px_rgba(10,66,89,0.08)] md:p-6 lg:p-5">
            <h2 className="text-[2rem] font-semibold leading-tight md:text-[2.3rem] lg:text-[2.05rem]">
              Meld deg på webinar
            </h2>
            <p className="mt-3 text-[1.02rem] font-semibold lg:text-[0.95rem]">
              Onsdag 27. mai kl. 09:30-10:50
            </p>
            <p className="mt-3 text-[1rem] leading-snug lg:text-[0.92rem]">
              Webinaret er første steg for deg som vil lære mer om Lagmodellen og vurdere om det er
              relevant i din virksomhet.
            </p>
            <p className="mt-3 text-[1rem] leading-snug lg:text-[0.92rem]">
              Du får en introduksjon til modellen og hva den er i praksis, erfaringer fra de som har
              jobbet med den, og et realistisk bilde av hva det krever og hva det kan gi.
            </p>
            <p className="mt-3 text-[1rem] leading-snug lg:text-[0.92rem]">
              Påmelding innebærer ingen forpliktelse til videre deltakelse.
            </p>
            <p className="mt-3 text-[1rem] leading-snug lg:text-[0.92rem]">
              Du kan melde deg på alene eller sammen med kolleger.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdSVIfYZ53zoT1OYeAhVQjyHsIW3143DQnNrQ1f6JoTDwcTgw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-[#1d2c97] px-5 text-[0.92rem] font-medium text-white transition hover:brightness-95"
            >
              Meld deg på webinar
            </a>
          </div>

          <div className="mt-3 flex items-end justify-between gap-2 md:gap-3 lg:mt-4">
            <img
              src="/assets/figur-frivillighet.svg"
              alt="Figur som illustrerer frivillighet"
              className="h-auto w-[16%] max-w-14"
            />
            <img
              src="/assets/figur-innbygger.svg"
              alt="Figur som illustrerer innbygger"
              className="h-auto w-[16%] max-w-14"
            />
            <img
              src="/assets/figur-oppfolging.svg"
              alt="Figur som illustrerer oppfølging"
              className="h-auto w-[16%] max-w-14"
            />
            <img
              src="/assets/figur-relasjoner.svg"
              alt="Figur som illustrerer relasjoner"
              className="h-auto w-[16%] max-w-14"
            />
            <img
              src="/assets/figur-samlokalisering.svg"
              alt="Figur som illustrerer samlokalisering"
              className="h-auto w-[16%] max-w-14"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
