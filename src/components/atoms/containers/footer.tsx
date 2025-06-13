import { ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
  className?: string;
}

const Footer = ({ children, className }: FooterProps) => (
  <footer className={className}>{children}</footer>
);

export default Footer;
