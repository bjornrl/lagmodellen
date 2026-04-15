import { type ReactNode } from 'react';

interface GainColumnProps {
  title: string;
  items: string[];
  color: string;
  icon: ReactNode;
}

export default function GainColumn({ title, items, color, icon }: GainColumnProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-accent/20">
      {/* Header */}
      <div className={`${color} px-5 py-4 flex items-center gap-3`}>
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="font-heading text-base md:text-lg text-white">{title}</h3>
      </div>

      {/* Items list */}
      <ul className="p-5 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
            <span className="font-body text-sm text-text-dark/80 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
