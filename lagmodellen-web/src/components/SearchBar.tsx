'use client';

import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';

export interface SearchableItem {
  title: string;
  text: string;
  chapter: string;
  slug: string;
}

interface SearchBarProps {
  searchableContent: SearchableItem[];
}

export default function SearchBar({ searchableContent }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    return searchableContent
      .filter((item) => item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, searchableContent]);

  const highlightMatch = useCallback(
    (text: string, maxLen: number = 120) => {
      const q = query.trim().toLowerCase();
      if (!q) return text.slice(0, maxLen);

      const idx = text.toLowerCase().indexOf(q);
      if (idx === -1) return text.slice(0, maxLen);

      const start = Math.max(0, idx - 40);
      const end = Math.min(text.length, idx + q.length + 40);
      let snippet = text.slice(start, end);

      if (start > 0) snippet = '...' + snippet;
      if (end < text.length) snippet = snippet + '...';

      // Split around the match for highlighting
      const matchStart = snippet.toLowerCase().indexOf(q);
      if (matchStart === -1) return snippet;

      const before = snippet.slice(0, matchStart);
      const match = snippet.slice(matchStart, matchStart + q.length);
      const after = snippet.slice(matchStart + q.length);

      return (
        <>
          {before}
          <mark className="bg-accent/50 text-text-dark rounded px-0.5">{match}</mark>
          {after}
        </>
      );
    },
    [query],
  );

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const showResults = isFocused && query.trim().length >= 2;

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      {/* Search input */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dark/40"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M13.5 13.5L17 17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Sok i Lagmodellen..."
          className="w-full rounded-full md:rounded-full border border-accent/40 bg-white pl-12 pr-4 py-3 font-body text-base text-text-dark placeholder:text-text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow shadow-sm"
          aria-label="Sok i innhold"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-dark/40 hover:text-text-dark transition-colors"
            aria-label="Tum soket"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {showResults && (
        <div className="absolute z-50 top-full mt-2 w-full rounded-2xl bg-white shadow-lg border border-accent/20 overflow-hidden max-h-[400px] overflow-y-auto">
          {results.length === 0 ? (
            <div className="p-4 text-center font-body text-sm text-text-dark/50">
              Ingen resultater for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <ul>
              {results.map((item, index) => (
                <li key={`${item.slug}-${index}`}>
                  <Link
                    href={`/${item.slug}`}
                    onClick={() => {
                      setIsFocused(false);
                      setQuery('');
                    }}
                    className="block p-4 hover:bg-primary-light/50 transition-colors border-b border-accent/10 last:border-b-0"
                  >
                    <div className="font-body text-xs text-text-dark/50 mb-1">{item.chapter}</div>
                    <div className="font-heading text-sm text-primary-dark mb-1">{item.title}</div>
                    <div className="font-body text-xs text-text-dark/60 leading-relaxed">
                      {highlightMatch(item.text)}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
