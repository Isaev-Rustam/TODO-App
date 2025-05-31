import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './index.module.css';
import Span from '@atoms/span';

interface CheckboxProps {
  isCompleted: boolean;
  inputClass?: string;
  spanClass?: string;
  children: ReactNode;
  id: number;
  handleToggleTask: (isCompleted: boolean, id: number) => void;
}

const Checkbox: FC<CheckboxProps> = props => {
  const { handleToggleTask, inputClass, isCompleted, children, spanClass, id } =
    props;
  const handleToggle = () => {
    handleToggleTask(!isCompleted, id);
  };

  return (
    <>
      <input
        id={String(id)}
        type='checkbox'
        checked={isCompleted}
        onChange={handleToggle}
        className={clsx(styles.checkbox, inputClass)}
      />
      <Span className={spanClass}>{children}</Span>
    </>
  );
};

export default Checkbox;
