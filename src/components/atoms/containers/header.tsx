import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Footer = ({ children, className }: HeaderProps) => (
  <header className={className}>{children}</header>
);

export default Footer;
