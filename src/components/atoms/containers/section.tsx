import { FC, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({ children, className }) => (
  <section className={className}>{children}</section>
);

export default Section;
