import Button from '@/components/atoms/button';
import Label from '@/components/atoms/label';
import Checkbox from '@/components/atoms/form-elements/checkbox';
import { Div } from '@/components/atoms/containers';
import Span from '@/components/atoms/span';
import styles from './index.module.css';
import { FC } from 'react';
import clsx from 'clsx';
import { Task } from '@/types/todos';
import { FormatDateFn } from '@/utils/formatDate';

interface TaskTodoProps {
  task: Omit<Task, 'isEditing'>;
  formatDateFn: FormatDateFn;
}

const TaskTodo: FC<TaskTodoProps> = ({ task, formatDateFn }) => {
  const { isCompleted, created, description, id } = task;

  return (
    <Div>
      <Checkbox check={isCompleted} id={id} />
      <Label id={id} className={styles.todoapp__label}>
        <Span
          className={clsx(
            styles['todoapp__description'],
            isCompleted && styles['todoapp__description--completed'],
          )}
        >
          {description}
        </Span>
        <Span className={styles['todoapp__created']}>
          {formatDateFn(created)}
        </Span>
      </Label>
      <Button
        className={clsx(
          styles['todoapp__btn-icon'],
          styles['todoapp__btn-icon-edit'],
        )}
        onClick={() => null}
      >
        ✎
      </Button>
      <Button
        className={clsx(
          styles['todoapp__btn-icon'],
          styles['todoapp__btn-icon-destroy'],
        )}
        onClick={() => null}
      >
        ×
      </Button>
    </Div>
  );
};

export default TaskTodo;
