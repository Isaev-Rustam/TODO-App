import { FC, ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Footer: FC<HeaderProps> = ({ children, className }) => {
  return <header className={className}>{children}</header>;
};

export default Footer;
