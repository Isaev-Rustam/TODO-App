import { FC, ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
  className?: string;
}

const Footer: FC<FooterProps> = ({ children, className }) => (
  <footer className={className}>{children}</footer>
);

export default Footer;
