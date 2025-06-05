import Checkbox from '@atoms/form-elements/checkbox';
import { FC } from 'react';
import CheckboxActive from '@public/assets/svg/checkbox-active.svg';
import CheckboxDisable from '@public/assets/svg/checkbox-disable.svg';

import { HandleToggleTask } from '@/types/todos';
import styles from './index.module.css';

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
      inputClass={styles.todos__checkbox}
      spanClass={styles['todos__checkbox--icon']}
      id={id}
    >
      {isCompleted ? <CheckboxActive /> : <CheckboxDisable />}
    </Checkbox>
  );
};

export default CheckboxTodo;
