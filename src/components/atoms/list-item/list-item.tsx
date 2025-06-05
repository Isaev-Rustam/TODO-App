import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ListItemProps {
  children: ReactNode;
  className?: string;
}

const ListItem: FC<ListItemProps> = ({ children, className }) => (
  <li className={clsx(className)}>{children}</li>
);

export default ListItem;
