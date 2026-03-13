'use client';

import { useState, useCallback } from 'react';

interface Field {
  key: string;
  label: string;
  placeholder: string;
}

const fields: Field[] = [
  { key: 'tiltak', label: 'tiltak', placeholder: 'f.eks. ukentlige lagmiler' },
  { key: 'malgruppe', label: 'malgruppe', placeholder: 'f.eks. barnevernstjenesten' },
  { key: 'effekt', label: 'forventet effekt', placeholder: 'f.eks. bedre samarbeid' },
  { key: 'tidspunkt', label: 'tidspunkt', placeholder: 'f.eks. innen juni 2026' },
  { key: 'signal', label: 'suksesssignal', placeholder: 'f.eks. oppmerking fra innbyggere' },
];

export default function CommitmentFormula() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const handleChange = useCallback((key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  }, []);

  const buildText = useCallback(() => {
    const v = (key: string) => values[key]?.trim() || `[${fields.find((f) => f.key === key)?.label}]`;
    return `Vi vil prove ${v('tiltak')} for ${v('malgruppe')} for a ${v('effekt')}, innen ${v('tidspunkt')}, og vi vet at vi er pa rett vei nar ${v('signal')}.`;
  }, [values]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(buildText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  }, [buildText]);

  return (
    <div className="rounded-2xl bg-white shadow-sm border border-accent/30 p-6 md:p-8">
      <h3 className="font-heading text-xl md:text-2xl text-primary-dark mb-6">
        Forpliktelsesformelen
      </h3>

      <div className="font-body text-base md:text-lg text-text-dark leading-loose">
        <span>Vi vil prove </span>
        <InlineInput
          field={fields[0]}
          value={values[fields[0].key] ?? ''}
          onChange={handleChange}
        />
        <span> for </span>
        <InlineInput
          field={fields[1]}
          value={values[fields[1].key] ?? ''}
          onChange={handleChange}
        />
        <span> for a </span>
        <InlineInput
          field={fields[2]}
          value={values[fields[2].key] ?? ''}
          onChange={handleChange}
        />
        <span>, innen </span>
        <InlineInput
          field={fields[3]}
          value={values[fields[3].key] ?? ''}
          onChange={handleChange}
        />
        <span>, og vi vet at vi er pa rett vei nar </span>
        <InlineInput
          field={fields[4]}
          value={values[fields[4].key] ?? ''}
          onChange={handleChange}
        />
        <span>.</span>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-dark text-white font-body text-sm font-medium hover:bg-primary-dark/90 transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5"
              y="5"
              width="9"
              height="9"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M11 5V3.5C11 2.67 10.33 2 9.5 2H3.5C2.67 2 2 2.67 2 3.5V9.5C2 10.33 2.67 11 3.5 11H5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          {copied ? 'Kopiert!' : 'Kopier'}
        </button>
      </div>
    </div>
  );
}

function InlineInput({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: string;
  onChange: (key: string, value: string) => void;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(field.key, e.target.value)}
      placeholder={field.placeholder}
      className="inline-block w-auto min-w-[140px] max-w-[240px] border-b-2 border-accent bg-transparent px-1 py-0.5 font-body text-base md:text-lg text-primary-dark placeholder:text-text-dark/30 focus:outline-none focus:border-primary-dark transition-colors"
      aria-label={field.label}
    />
  );
}
