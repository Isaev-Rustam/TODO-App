import { PureComponent } from 'react';
import clsx from 'clsx';

import Button from '@atoms/button';
import Label from '@atoms/label';
import { Div } from '@atoms/containers';
import Span from '@atoms/span';
import CheckboxTodo from '@molecules/checkbox-todo';
import {
  HandleToggleTask,
  HandleRemoveTask,
  Task,
  HandleEditingTask,
} from '@/types/todos';
import { FormatDateFn } from '@/utils/formatDate';

import styles from './index.module.css';

interface TaskTodoProps {
  task: Omit<Task, 'isEditing'>;
  formatDateFn: FormatDateFn;
  handleToggleTask: HandleToggleTask;
  handleRemoveTask: HandleRemoveTask;
  handleEditingTask: HandleEditingTask;
}

class TaskTodo extends PureComponent<TaskTodoProps> {
  render() {
    const {
      task,
      formatDateFn,
      handleToggleTask,
      handleRemoveTask,
      handleEditingTask,
    } = this.props;
    const { isCompleted, created, description, id } = task;
    return (
      <Div>
        <Label className={styles.todos__label}>
          <CheckboxTodo
            handleToggleTask={handleToggleTask}
            isCompleted={isCompleted}
            id={id}
          />
          <Span
            className={clsx(
              styles.todos__description,
              isCompleted && styles['todos__description--completed'],
            )}
          >
            {description}
          </Span>
          <Span className={styles.todos__created}>{formatDateFn(created)}</Span>
        </Label>
        <Button
          onClick={handleEditingTask(id)}
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
