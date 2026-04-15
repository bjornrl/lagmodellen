import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img
              src="/assets/logo.svg"
              alt="Lagmodellen"
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Lagmodellen ble utviklet i prosjektet Mann om bord med støtte fra Stimulab (Digdir +
              DOGA). Spredningsmateriell utviklet med Comte Bureau.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4 text-white">Kapitler</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/introduksjon"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Introduksjon
              </Link>
              <Link
                href="/hvorfor"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Hvorfor Lagmodellen?
              </Link>
              <Link
                href="/hva-er-lagmodellen"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Hva er Lagmodellen?
              </Link>
              <Link
                href="/gevinster-og-barrierer"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Gevinster og barrierer
              </Link>
              <Link
                href="/kom-i-gang"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Hvordan komme i gang
              </Link>
              <Link
                href="/avslutning"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Avslutning
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4 text-white">Kontakt</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div>
                <p className="text-white font-medium">Kristin Nordaune</p>
                <a
                  href="mailto:kristin.nordaune@trondheim.kommune.no"
                  className="text-white/70 hover:text-white transition-colors break-all"
                >
                  kristin.nordaune@trondheim.kommune.no
                </a>
              </div>
              <div>
                <p className="text-white font-medium">Erik Lånke Solbu</p>
                <a
                  href="mailto:Erik.Lanke.Solbu@nav.no"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Erik.Lanke.Solbu@nav.no
                </a>
              </div>
              <div>
                <p className="text-white font-medium">Halvor Skrede</p>
                <a
                  href="mailto:Halvor@comte.no"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Halvor@comte.no
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-xs">
          Lagmodellen — Tverrsektorielt samarbeid i praksis
        </div>
      </div>
    </footer>
  );
}
