import { ReactNode } from 'react';
import clsx from 'clsx';

interface LabelProps {
  id?: string;
  children?: ReactNode;
  className?: string;
}

const Label = ({ children, id, className }: LabelProps) => (
  <label htmlFor={id} className={clsx(className)}>
    {children}
  </label>
);

export default Label;
