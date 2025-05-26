export type FormatDate = Date | number;

export interface Task {
  description: string;
  created: FormatDate;
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
