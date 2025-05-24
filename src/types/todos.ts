export interface Task {
  description: string;
  created: string;
  isCompleted: boolean;
  isEditing: boolean;
  id: string;
}

export type TaskList = Task[];

export interface FilterOption {
  filter: 'all' | 'active' | 'completed';
  label: string;
}

export type FilterOptions = FilterOption[];
