import { Task, TaskList } from '@/types/todos';

type UpdateProp = Partial<Omit<Task, 'id'>> & Pick<Task, 'id'>;

export function updateTaskList(
  taskList: TaskList,
  updateProp: UpdateProp,
): TaskList {
  return taskList.map(task => {
    if (task.id === updateProp.id) {
      return { ...task, ...updateProp };
    }
    return task;
  });
}
