import { FC, ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
  className?: string;
}

const Footer: FC<FooterProps> = ({ children, className }) => {
  return <footer className={className}>{children}</footer>;
};

export default Footer;
