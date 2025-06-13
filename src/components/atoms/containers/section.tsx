import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => (
  <section className={className}>{children}</section>
);

export default Section;
