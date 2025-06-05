import ListItem from '@atoms/list-item';
import List from '@atoms/list';
import TaskTodo from '@molecules/task-todo';
import { PureComponent } from 'react';
import clsx from 'clsx';
import EditTasks from '@molecules/edit-task';

import {
  TaskList,
  Task,
  HandleRemoveTask,
  HandleToggleTask,
  HandleChangesTasks,
  HandleEditingTask,
  HandleExitEditMode,
} from '@/types/todos';
import { FormatDateFn } from '@/utils/formatDate';
import styles from './index.module.css';

interface TasksTodoProps {
  taskList: TaskList;
  formatDateFn: FormatDateFn;
  handleToggleTask: HandleToggleTask;
  handleChangesTasks: HandleChangesTasks;
  handleRemoveTask: HandleRemoveTask;
  handleEditingTask: HandleEditingTask;
  handleExitEditMode: HandleExitEditMode;
}
class TasksTodo extends PureComponent<TasksTodoProps> {
  render() {
    const {
      taskList,
      formatDateFn,
      handleToggleTask,
      handleRemoveTask,
      handleChangesTasks,
      handleEditingTask,
      handleExitEditMode,
    } = this.props;

    const callback = (task: Task) => {
      const { isEditing, id, description } = task;
      return (
        <ListItem
          key={id}
          className={clsx(
            styles['todos__list-item'],
            isEditing && styles['todos__list-item--editing'],
          )}
        >
          {isEditing ? (
            <EditTasks
              handleChangesTasks={handleChangesTasks}
              handleExitEditMode={handleExitEditMode}
              label={description}
              id={id}
            />
          ) : (
            <TaskTodo
              handleToggleTask={handleToggleTask}
              handleRemoveTask={handleRemoveTask}
              handleEditingTask={handleEditingTask}
              task={task}
              formatDateFn={formatDateFn}
            />
          )}
        </ListItem>
      );
    };

    return <List className={styles.todos__list}>{taskList.map(callback)}</List>;
  }
}

export default TasksTodo;
