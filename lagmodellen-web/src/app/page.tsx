'use client';

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-primary-light lg:h-screen">
      {/* <img
        src="/assets/form-2.svg"
        alt=""
        className="pointer-events-none absolute -right-12 -top-12 hidden w-[38rem] opacity-70 md:block 2xl:w-[46rem] min-[1920px]:w-[54rem] -z-20"
      />
      <img
        src="/assets/form-3.svg"
        alt=""
        className="pointer-events-none absolute -right-16 bottom-14 hidden w-[32rem] opacity-80 md:block 2xl:w-[40rem] min-[1920px]:w-[46rem] -z-20"
      />
      <img
        src="/assets/form-1.svg"
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 hidden w-[34rem] opacity-85 md:block 2xl:w-[42rem] min-[1920px]:w-[50rem] -z-20"
      /> */}
      <img
        src="/assets/stor_figur.png"
        alt="Illustrasjon av Lagmodellen-figurene"
        className="pointer-events-none absolute -right-16 bottom-14 hidden w-[64rem] opacity-80 md:block 2xl:w-[40rem] min-[1920px]:right-auto min-[1920px]:left-1/2 min-[1920px]:-translate-x-1/2 min-[1920px]:bottom-20 min-[1920px]:w-[50rem] min-[2400px]:w-[62rem] -z-20"
      />

      <section className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col gap-6 px-5 py-5 md:px-8 md:py-6 lg:grid lg:grid-cols-13 lg:grid-rows-[1fr_auto] lg:items-start lg:gap-5 lg:py-3 2xl:max-w-[1520px] 2xl:items-center 2xl:gap-8 2xl:px-12 2xl:py-8 min-[1920px]:max-w-[1680px] min-[1920px]:gap-12 min-[1920px]:px-16 min-[1920px]:py-12 min-[2400px]:max-w-[1920px] min-[2400px]:gap-16 min-[2400px]:px-24 min-[2400px]:py-16">
        <div className="lg:col-span-6 lg:col-start-2 xl:col-span-5 xl:col-start-2 lg:self-center">
          <img
            src="/logos/Lagmodellen_logo.png"
            alt="Lagmodellen logo"
            className="mb-2 h-auto w-full max-w-[155px] 2xl:max-w-[220px] min-[1920px]:max-w-[280px] min-[2400px]:max-w-[340px]"
          />
          {/* <h1 className="text-[2rem] font-semibold leading-tight tracking-tight text-primary-dark md:text-[2.35rem] lg:text-[2.15rem] 2xl:text-[2.55rem] min-[1920px]:text-[2.85rem]">
            Lagmodellen
          </h1> */}
          <p className="mt-1 max-w-[18rem] text-[1.65rem] leading-[1.03] text-tertiary-mint md:text-[1.8rem] lg:text-[1.45rem] 2xl:max-w-[22rem] 2xl:text-[1.75rem] min-[1920px]:max-w-[26rem] min-[1920px]:text-[2rem] min-[2400px]:max-w-[30rem] min-[2400px]:text-[2.3rem]">
            Tverrsektorielt samarbeid i praksis
          </p>

          <blockquote className="mt-5 max-w-[30rem] text-[2.05rem] font-semibold italic leading-[1.05] text-primary-dark md:text-[2.3rem] lg:text-[2rem] 2xl:mt-7 2xl:max-w-[36rem] 2xl:text-[2.35rem] min-[1920px]:mt-9 min-[1920px]:max-w-[44rem] min-[1920px]:text-[2.7rem] min-[2400px]:mt-11 min-[2400px]:max-w-[52rem] min-[2400px]:text-[3.1rem]">
            &ldquo;Æ har jobba i kommunen i 30 år, og alltid trudd æ jobba tverrfaglig. Men det her
            e første gangen æ oppleve reelt tverrfaglig samarbeid.&rdquo;
          </blockquote>
          <p className="mt-2 text-[0.95rem] text-primary-dark/75 lg:text-[0.9rem] 2xl:text-[1.05rem] min-[1920px]:text-[1.15rem] min-[2400px]:text-[1.3rem]">
            Ansatt, Trondheim kommune
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-5 2xl:mt-7 2xl:gap-4 min-[1920px]:mt-9 min-[1920px]:gap-5 min-[2400px]:mt-12 min-[2400px]:gap-6">
            <div>
              <p className="mb-2 text-center text-[0.85rem] leading-tight text-primary-dark/85 2xl:text-[1rem] min-[1920px]:mb-3 min-[1920px]:text-[1.1rem] min-[2400px]:text-[1.25rem]">
                Last ned kort presentasjon
                <br />
                om Lagmodellen
              </p>
              <a
                href="/assets/Lagmodellen_kort.pdf"
                download
                className="flex h-10 w-full items-center justify-center rounded-xl bg-secondary-red px-4 text-[0.95rem] font-medium text-white shadow-sm transition hover:brightness-95 2xl:h-12 2xl:text-[1.05rem] min-[1920px]:h-14 min-[1920px]:rounded-2xl min-[1920px]:text-[1.15rem] min-[2400px]:h-16 min-[2400px]:text-[1.3rem]"
              >
                Last ned presentasjon
              </a>
            </div>
            <div>
              <p className="mb-2 text-center text-[0.85rem] leading-tight text-primary-dark/85 2xl:text-[1rem] min-[1920px]:mb-3 min-[1920px]:text-[1.1rem] min-[2400px]:text-[1.25rem]">
                Er du interessert i å høre
                <br />
                mer om Lagmodellen?
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe7T5n8jdlY21lfrEns8g-np9KL447JF8ND1jNNDpSKsVAkOA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-full items-center justify-center rounded-xl bg-tertiary-mint px-4 text-[0.95rem] font-medium text-primary-dark shadow-sm transition hover:brightness-95 2xl:h-12 2xl:text-[1.05rem] min-[1920px]:h-14 min-[1920px]:rounded-2xl min-[1920px]:text-[1.15rem] min-[2400px]:h-16 min-[2400px]:text-[1.3rem]"
              >
                Ta kontakt
              </a>
            </div>
          </div>

          <div className="mt-4 lg:mt-6 2xl:mt-8 min-[1920px]:mt-10 min-[2400px]:mt-14">
            <div className="flex flex-row h-full justify-center items-end gap-4 md:gap-6 lg:flex-nowrap lg:gap-5 2xl:gap-8 min-[1920px]:gap-10 min-[2400px]:gap-14">
              <img
                src="/logos/Trondheim%20kommune%20logo.png"
                alt="Trondheim kommune"
                className="h-5 w-auto object-contain md:h-6 lg:h-5 2xl:h-7 min-[1920px]:h-8 min-[2400px]:h-10"
              />
              <img
                src="/logos/Stimulab_svart.png"
                alt="Stimulab"
                className="h-5 w-auto object-contain md:h-6 lg:h-5 2xl:h-7 min-[1920px]:h-8 min-[2400px]:h-10"
              />
              <img
                src="/logos/ComteLogo%20Svart.png"
                alt="Comte"
                className="h-5 w-auto object-contain md:h-6 lg:h-5 2xl:h-7 min-[1920px]:h-8 min-[2400px]:h-10"
              />
            </div>
          </div>
        </div>

        <div className="display:hidden lg:col-span-6 lg:col-start-8 xl:col-span-5 xl:col-start-8 lg:self-center">
          <div className="rounded-3xl bg-tertiary-pink p-5 text-primary-dark shadow-[0_16px_36px_rgba(10,66,89,0.08)] md:p-6 lg:p-5 2xl:p-8 min-[1920px]:rounded-[2rem] min-[1920px]:p-10 min-[2400px]:rounded-[2.5rem] min-[2400px]:p-14">
            <h2 className="text-[2rem] font-semibold leading-tight md:text-[2.3rem] lg:text-[2.05rem] 2xl:text-[2.4rem] min-[1920px]:text-[2.8rem] min-[2400px]:text-[3.2rem]">
              Bli med å utforske Lagmodellen videre!
            </h2>
            <p className="mt-3 text-[1.02rem] font-reguler lg:text-[0.95rem] 2xl:mt-4 2xl:text-[1.1rem] min-[1920px]:mt-5 min-[1920px]:text-[1.25rem] min-[2400px]:text-[1.4rem]">
              Deltok du på webinaret 27. mai og ønsker å være med videre? Meld interesse her.
            </p>
            {/* <p className="mt-3 text-[1rem] leading-snug lg:text-[0.92rem] 2xl:mt-4 2xl:text-[1.05rem] min-[1920px]:mt-5 min-[1920px]:text-[1.18rem] min-[2400px]:text-[1.35rem]">
              Deltok du på webinaret 27. mai og ønsker å være med videre? Meld interesse her.
            </p> */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-5 2xl:mt-7 2xl:gap-4 min-[1920px]:mt-9 min-[1920px]:gap-5 min-[2400px]:mt-12 min-[2400px]:gap-6">
              <div>
                <p className="mb-2 text-center text-[0.85rem] leading-tight text-primary-dark/85 2xl:text-[1rem] min-[1920px]:mb-3 min-[1920px]:text-[1.1rem] min-[2400px]:text-[1.25rem]">
                  Trykk på lenken for å melde interesse for å bli med videre!
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfFFcIzAggK4_ds3WNZ3P6o6rhLee2v_gomyyY-CYpuBwpavw/viewform"
                  className="flex h-10 w-full items-center justify-center rounded-xl bg-[#B2D5BE] px-4 text-[0.95rem] font-medium text-primary-dark shadow-sm transition hover:brightness-95 2xl:h-12 2xl:text-[1.05rem] min-[1920px]:h-14 min-[1920px]:rounded-2xl min-[1920px]:text-[1.15rem] min-[2400px]:h-16 min-[2400px]:text-[1.3rem]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meld interesse
                </a>
              </div>
              <div>
                <p className="mb-2 text-center text-[0.85rem] leading-tight text-primary-dark/85 2xl:text-[1rem] min-[1920px]:mb-3 min-[1920px]:text-[1.1rem] min-[2400px]:text-[1.25rem]">
                  Ønsker å se presentasjonen fra webinaret?
                </p>
                <a
                  href="/assets/Webinar Lagmodellen 270526.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-full items-center justify-center rounded-xl bg-[#FFF1CE] px-4 text-[0.95rem] font-medium text-primary-dark shadow-sm transition hover:brightness-95 2xl:h-12 2xl:text-[1.05rem] min-[1920px]:h-14 min-[1920px]:rounded-2xl min-[1920px]:text-[1.15rem] min-[2400px]:h-16 min-[2400px]:text-[1.3rem]"
                >
                  Webinar-presentasjon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
