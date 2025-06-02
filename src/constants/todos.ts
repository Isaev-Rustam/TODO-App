import { FilterOptions, TaskList } from '@/types/todos';
import { addTodoTask } from '@/utils/add-todo-task';

export const filters: FilterOptions = [
  { filter: 'all', label: 'All' },
  { filter: 'active', label: 'Active' },
  { filter: 'completed', label: 'Completed' },
];

export const defaultTaskList: TaskList = [
  // addTodoTask({ description: 'Buy groceries' }),
  addTodoTask({ description: 'Fix bug in login form', isCompleted: true }),
  // addTodoTask({ description: 'Call the dentist' }),
];
