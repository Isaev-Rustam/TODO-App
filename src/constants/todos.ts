import { FilterOptions, Task, TaskList } from '@/types/todos';

export const filters: FilterOptions = [
  { filter: 'all', label: 'All' },
  { filter: 'active', label: 'Active' },
  { filter: 'completed', label: 'Completed' },
];

type initTask = { description: string } & Partial<
  Omit<Task, 'description' | 'id'>
>;

export const addTodoTask = ({
  description,
  isCompleted = false,
  isEditing = false,
}: initTask): Task => {
  const task: Task = {
    id: Math.random(),
    description,
    created: Date.now(),
    isCompleted,
    isEditing,
  };

  return task;
};

export const defaultTaskList: TaskList = [
  addTodoTask({ description: 'Buy groceries' }),
  addTodoTask({ description: 'Fix bug in login form', isCompleted: true }),
  addTodoTask({ description: 'Call the dentist' }),
];
