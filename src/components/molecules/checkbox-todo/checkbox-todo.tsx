import styles from './index.module.css';
import Checkbox from '@atoms/form-elements/checkbox';
import { HandleToggleTask } from '@/types/todos';
import { FC } from 'react';
import CheckboxActive from '@public/assets/svg/checkbox-active.svg';
import CheckboxDisable from '@public/assets/svg/checkbox-disable.svg';

interface CheckboxTodoProps {
  handleToggleTask: HandleToggleTask;
  isCompleted: boolean;
  id: number;
}

const CheckboxTodo: FC<CheckboxTodoProps> = props => {
  const { handleToggleTask, id, isCompleted } = props;

  return (
    <Checkbox
      handleToggleTask={handleToggleTask}
      isCompleted={isCompleted}
      spanClass={styles['todos__checkbox']}
      id={id}
    >
      {isCompleted ? <CheckboxActive /> : <CheckboxDisable />}
    </Checkbox>
  );
};

export default CheckboxTodo;
