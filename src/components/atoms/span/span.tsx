import { FC, ReactNode } from 'react';

interface SpanProps {
  children?: ReactNode;
  className?: string;
}

const Span: FC<SpanProps> = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

export default Span;
