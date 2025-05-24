import ListItem from '@/components/atoms/list-item';
import List from '@/components/atoms/list';
import EditTasksTodo from '@/components/molecules/edit-task';
import TaskTodo from '@/components/molecules/task-todo';
import styles from './index.module.css';
import { FC } from 'react';
import { TaskList, Task } from '@/types/todos';
import clsx from 'clsx';
import { formatDateFn } from '@/utils/formatDate';

interface TasksTodoProps {
  tasks: TaskList;
}
const TasksTodo: FC<TasksTodoProps> = ({ tasks }) => {
  const callback = (task: Task) => {
    const { isEditing, id } = task;
    return (
      <ListItem
        key={id}
        className={clsx(
          styles['todoapp__list-item'],
          isEditing && styles['todoapp__list-item--editing'],
        )}
      >
        {isEditing ? (
          <EditTasksTodo />
        ) : (
          <TaskTodo task={task} formatDateFn={formatDateFn} />
        )}
      </ListItem>
    );
  };

  return <List className={styles.todoapp__list}>{tasks.map(callback)}</List>;
};

export default TasksTodo;
