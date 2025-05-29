import Button from '@atoms/button';
import Label from '@atoms/label';
import Checkbox from '@atoms/form-elements/checkbox';
import { Div } from '@atoms/containers';
import Span from '@atoms/span';
import styles from './index.module.css';
import { PureComponent } from 'react';
import clsx from 'clsx';
import { HandleChangeTask, HandleRemoveTask, Task } from '@/types/todos';
import { FormatDateFn } from '@/utils/formatDate';

interface TaskTodoProps {
  task: Omit<Task, 'isEditing'>;
  formatDateFn: FormatDateFn;
  handleChangeTask: HandleChangeTask;
  handleRemoveTask: HandleRemoveTask;
}

class TaskTodo extends PureComponent<TaskTodoProps> {
  render() {
    const { task, formatDateFn, handleChangeTask, handleRemoveTask } =
      this.props;
    const { isCompleted, created, description, id } = task;
    return (
      <Div>
        <Label className={styles.todos__label}>
          <Checkbox
            handleChangeTask={handleChangeTask}
            isCompleted={isCompleted}
            id={id}
          />
          <Span className={styles.todos__checkbox}></Span>
          <Span
            className={clsx(
              styles['todos__description'],
              isCompleted && styles['todos__description--completed'],
            )}
          >
            {description}
          </Span>
          <Span className={styles['todos__created']}>
            {formatDateFn(created)}
          </Span>
        </Label>
        <Button
          className={clsx(
            styles['todos__btn-icon'],
            styles['todos__btn-icon-edit'],
          )}
        >
          ✎
        </Button>
        <Button
          onClick={handleRemoveTask(id)}
          className={clsx(
            styles['todos__btn-icon'],
            styles['todos__btn-icon-destroy'],
          )}
        >
          ×
        </Button>
      </Div>
    );
  }
}

export default TaskTodo;
