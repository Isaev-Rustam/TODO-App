import { ReactNode } from 'react';

interface TitleProps {
  h: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ h, children, className }) => {
  const Tag = `h${h}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
};

export default Title;
