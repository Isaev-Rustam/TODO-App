import { FC, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => (
  <button onClick={onClick} className={className} type='button'>
    {children}
  </button>
);
export default Button;
