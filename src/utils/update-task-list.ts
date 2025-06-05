import { Task, TaskList } from '@/types/todos';

type UpdateProp = Partial<Omit<Task, 'id'>> & Pick<Task, 'id'>;

function updateTaskList(taskList: TaskList, updateProp: UpdateProp): TaskList {
  return taskList.map(task => {
    if (task.id === updateProp.id) {
      return { ...task, ...updateProp };
    }
    return task;
  });
}

export default updateTaskList;
