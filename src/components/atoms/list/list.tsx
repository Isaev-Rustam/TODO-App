import { FC, ReactNode } from 'react';

interface ListProps {
  children: ReactNode;
  className?: string;
}

const List: FC<ListProps> = ({ children, className }) => (
  <ul className={className}>{children}</ul>
);

export default List;
