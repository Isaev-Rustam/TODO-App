import { MouseEvent, FocusEvent } from 'react';

export type FormatDate = Date | number;

export interface Task {
  description: string;
  created: FormatDate;
  isCompleted: boolean;
  isEditing: boolean;
  id: number;
}

export type TaskList = Task[];

type FilterTodos = 'all' | 'active' | 'completed';

export interface FilterOption {
  filter: FilterTodos;
  label: string;
}
export type FilterOptions = FilterOption[];

export type HandleToggleTask = (isCompleted: boolean, id: number) => void;
export type HandleChangeTask = (label: string) => void;
export type HandleAddTask = (label: string) => void;
export type HandleChangesTasks = (id: number) => (label: string) => void;
export type HandleBlurTasks = (e: FocusEvent<HTMLInputElement>) => void;
export type HandleEditingTask = (
  id: number,
) => (e: MouseEvent<HTMLButtonElement>) => void;
export type HandleFinishEditingTask = (id: number) => () => void;
export type HandleRemoveTask = (id: number) => () => void;
