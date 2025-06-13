import { ReactNode } from 'react';
import clsx from 'clsx';

interface ListItemProps {
  children: ReactNode;
  className?: string;
}

const ListItem = ({ children, className }: ListItemProps) => (
  <li className={clsx(className)}>{children}</li>
);

export default ListItem;
