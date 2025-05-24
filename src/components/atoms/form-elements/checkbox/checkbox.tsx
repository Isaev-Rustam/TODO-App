import clsx from 'clsx';
import { FC } from 'react';
import styles from './index.module.css';

interface CheckboxProps {
  check: boolean;
  className?: string;
  id: string;
}

const Checkbox: FC<CheckboxProps> = ({ className, check, id }) => {
  return (
    <input
      id={id}
      type='checkbox'
      checked={check}
      className={clsx(styles.checkbox, className)}
    />
  );
};

export default Checkbox;
