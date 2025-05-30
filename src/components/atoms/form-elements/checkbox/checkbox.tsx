import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './index.module.css';
import Span from '@atoms/span';

type HandleChange = (isCompleted: boolean, id: number) => void;

interface CheckboxProps {
  isCompleted: boolean;
  inputClass?: string;
  spanClass?: string;
  children: ReactNode;
  id: number;
  handleChangeTask: HandleChange;
}

const Checkbox: FC<CheckboxProps> = props => {
  const { handleChangeTask, inputClass, isCompleted, children, spanClass, id } =
    props;
  const handleChange = () => {
    handleChangeTask(!isCompleted, id);
  };

  return (
    <>
      <input
        id={String(id)}
        type='checkbox'
        checked={isCompleted}
        onChange={handleChange}
        className={clsx(styles.checkbox, inputClass)}
      />
      <Span className={spanClass}>{children}</Span>
    </>
  );
};

export default Checkbox;
