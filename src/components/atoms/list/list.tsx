import { ReactNode } from 'react';

interface ListProps {
  children: ReactNode;
  className?: string;
}

const List = ({ children, className }: ListProps) => (
  <ul className={className}>{children}</ul>
);

export default List;
