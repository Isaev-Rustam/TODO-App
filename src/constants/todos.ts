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
    created: 'created 2 minutes ago',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: '4d5e6f',
    description: 'Fix bug in login form',
    created: 'created 5 minutes ago',
    isCompleted: true,
    isEditing: false,
  },
  {
    id: '7g8h9i',
    description: 'Call the dentist',
    created: 'created 30 seconds ago',
    isCompleted: false,
    isEditing: true,
  },
];
