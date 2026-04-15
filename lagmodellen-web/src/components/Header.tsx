'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';
import { searchableContent } from '@/lib/content';

const chapters = [
  { title: 'Introduksjon', slug: 'introduksjon' },
  { title: 'Hvorfor?', slug: 'hvorfor' },
  { title: 'Hva er det?', slug: 'hva-er-lagmodellen' },
  { title: 'Gevinster', slug: 'gevinster-og-barrierer' },
  { title: 'Kom i gang', slug: 'kom-i-gang' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary-light/95 backdrop-blur-sm border-b border-accent/30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/assets/logo.svg" alt="Lagmodellen" className="h-10" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {chapters.map((ch) => (
              <Link
                key={ch.slug}
                href={`/${ch.slug}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === `/${ch.slug}`
                    ? 'bg-primary-dark text-white'
                    : 'text-primary-dark hover:bg-accent/30'
                }`}
              >
                {ch.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block w-64">
            <SearchBar
              searchableContent={searchableContent.map((s) => ({
                ...s,
                chapter: String(s.chapter),
              }))}
            />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent/30 transition-colors"
            aria-label="Meny"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary-dark"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-72 bg-primary-light shadow-xl p-6 pt-20 overflow-y-auto">
            <div className="mb-6 md:hidden">
              <SearchBar
                searchableContent={searchableContent.map((s) => ({
                  ...s,
                  chapter: String(s.chapter),
                }))}
              />
            </div>
            <nav className="flex flex-col gap-2">
              {chapters.map((ch) => (
                <Link
                  key={ch.slug}
                  href={`/${ch.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    pathname === `/${ch.slug}`
                      ? 'bg-primary-dark text-white'
                      : 'text-primary-dark hover:bg-accent/30'
                  }`}
                >
                  {ch.title}
                </Link>
              ))}
              <Link
                href="/avslutning"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  pathname === '/avslutning'
                    ? 'bg-primary-dark text-white'
                    : 'text-primary-dark hover:bg-accent/30'
                }`}
              >
                Avslutning
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
