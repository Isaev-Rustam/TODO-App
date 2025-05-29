import clsx from 'clsx';
import { FC } from 'react';
import styles from './index.module.css';

type HandleChange = (isCompleted: boolean, id: number) => void;

interface CheckboxProps {
  isCompleted: boolean;
  className?: string;
  id: number;
  handleChangeTask: HandleChange;
}

const Checkbox: FC<CheckboxProps> = ({
  handleChangeTask,
  className,
  isCompleted,
  id,
}) => {
  const handleChange = () => {
    handleChangeTask(!isCompleted, id);
  };

  return (
    <input
      id={String(id)}
      type='checkbox'
      checked={isCompleted}
      onChange={handleChange}
      className={clsx(styles.checkbox, className)}
    />
  );
};

export default Checkbox;
