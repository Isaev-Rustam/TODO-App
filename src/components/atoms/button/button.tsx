import { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => (
  <button onClick={onClick} className={className} type='button'>
    {children}
  </button>
);
export default Button;
