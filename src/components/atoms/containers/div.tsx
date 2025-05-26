import { FC, ReactNode } from 'react';

interface DivProps {
  children: ReactNode;
  className?: string;
}

const Div: FC<DivProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Div;
