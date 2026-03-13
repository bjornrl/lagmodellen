import { type ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  bgColor?: string;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  bgColor = 'bg-primary-light',
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${bgColor} py-16 md:py-24 px-4 ${className ?? ''}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
