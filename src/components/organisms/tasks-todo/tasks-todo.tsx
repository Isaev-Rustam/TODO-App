import ListItem from '@atoms/list-item';
import List from '@atoms/list';
import EditTasksTodo from '@molecules/edit-task';
import TaskTodo from '@molecules/task-todo';
import styles from './index.module.css';
import { PureComponent } from 'react';
import {
  TaskList,
  Task,
  HandleChangeTask,
  HandleRemoveTask,
} from '@/types/todos';
import clsx from 'clsx';
import { FormatDateFn } from '@/utils/formatDate';

interface TasksTodoProps {
  taskList: TaskList;
  formatDateFn: FormatDateFn;
  handleChangeTask: HandleChangeTask;
  handleRemoveTask: HandleRemoveTask;
}
class TasksTodo extends PureComponent<TasksTodoProps> {
  render() {
    const { formatDateFn, handleChangeTask, handleRemoveTask, taskList } =
      this.props;
    const callback = (task: Task) => {
      const { isEditing, id } = task;
      return (
        <ListItem
          key={id}
          className={clsx(
            styles['todos__list-item'],
            isEditing && styles['todos__list-item--editing'],
          )}
        >
          {isEditing ? (
            <EditTasksTodo />
          ) : (
            <TaskTodo
              handleChangeTask={handleChangeTask}
              handleRemoveTask={handleRemoveTask}
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
