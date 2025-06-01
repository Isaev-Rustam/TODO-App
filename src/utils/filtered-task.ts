import { FiltersTask, Task } from '@/types/todos';

export function filteredTask(taskList: Task[], filter: FiltersTask): Task[] {
  if (filter === 'all') {
    return [...taskList];
  }
  const filters: Record<string, (task: Task) => boolean> = {
    active: task => !task.isCompleted,
    completed: task => task.isCompleted,
  };
  return taskList.filter(task => filters[filter](task) ?? true);
}
