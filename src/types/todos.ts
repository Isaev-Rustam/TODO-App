import { MouseEvent } from 'react';

export type FormatDate = Date | number;

export interface Task {
  description: string;
  created: FormatDate;
  isCompleted: boolean;
  isEditing: boolean;
  id: number;
}

export type TaskList = Task[];

export interface FilterOption {
  filter: 'all' | 'active' | 'completed';
  label: string;
}

export type FilterOptions = FilterOption[];

export type HandleChangeTask = (isCompleted: boolean, id: number) => void;

export type HandleRemoveTask = (
  id: number,
) => (e: MouseEvent<HTMLButtonElement>) => void;
