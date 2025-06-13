import { ReactNode } from 'react';

interface DivProps {
  children: ReactNode;
  className?: string;
}

const Div = ({ children, className }: DivProps) => (
  <div className={className}>{children}</div>
);

export default Div;
