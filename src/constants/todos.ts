import { FilterOptions, TaskList } from '@/types/todos';

export const filters: FilterOptions = [
  { filter: 'all', label: 'All' },
  { filter: 'active', label: 'Active' },
  { filter: 'completed', label: 'Completed' },
];

export const defaultTaskList: TaskList = [
  {
    id: '1a2b3c',
    description: 'Buy groceries',
    created: 1750626000000,
    isCompleted: false,
    isEditing: false,
  },
  {
    id: '4d5e6f',
    description: 'Fix bug in login form',
    created: new Date().getTime(),
    isCompleted: true,
    isEditing: false,
  },
  {
    id: '7g8h9i',
    description: 'Call the dentist',
    created: 1750795920000,
    isCompleted: false,
    isEditing: true,
  },
];
