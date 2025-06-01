import ListItem from '@atoms/list-item';
import List from '@atoms/list';
import TaskTodo from '@molecules/task-todo';
import styles from './index.module.css';
import { PureComponent } from 'react';
import {
  TaskList,
  Task,
  HandleRemoveTask,
  HandleToggleTask,
  HandleChangesTasks,
  HandleEditingTask,
  HandleFinishEditingTask,
} from '@/types/todos';
import clsx from 'clsx';
import { FormatDateFn } from '@/utils/formatDate';
import EditTasks from '@molecules/edit-task';

interface TasksTodoProps {
  taskList: TaskList;
  formatDateFn: FormatDateFn;
  handleToggleTask: HandleToggleTask;
  handleChangesTasks: HandleChangesTasks;
  handleRemoveTask: HandleRemoveTask;
  handleEditingTask: HandleEditingTask;
  handleFinishEditingTask: HandleFinishEditingTask;
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
      handleFinishEditingTask,
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
              handleFinishEditingTask={handleFinishEditingTask}
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
