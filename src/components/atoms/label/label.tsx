import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface LabelProps {
  id?: string;
  children?: ReactNode;
  className?: string;
}

const Label: FC<LabelProps> = ({ children, id, className }) => {
  return (
    <label htmlFor={id} className={clsx(className)}>
      {children}
    </label>
  );
};

export default Label;
