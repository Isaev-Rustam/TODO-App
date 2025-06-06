import { MouseEvent, FocusEvent, KeyboardEvent } from 'react';

export type FormatDate = Date | number;

export interface Task {
  description: string;
  created: FormatDate;
  isCompleted: boolean;
  isEditing: boolean;
  id: number;
}

export type TaskList = Task[];

export type FiltersTask = 'all' | 'active' | 'completed';
export interface FilterOption {
  filter: FiltersTask;
  label: string;
}
export type FilterOptions = FilterOption[];

export type HandleToggleTask = (isCompleted: boolean, id: number) => void;
export type HandleChangeTask = (label: string) => void;
export type HandleAddTask = (e: KeyboardEvent<HTMLInputElement>) => void;
export type HandleChangesTasks = (id: number) => (label: string) => void;
export type HandleBlurTasks = (e: FocusEvent<HTMLInputElement>) => void;
export type HandleEditingTask = (
  id: number,
) => (e: MouseEvent<HTMLButtonElement>) => void;
export type HandleExitEditMode = (
  id: number,
) => (
  e: KeyboardEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>,
) => void;
export type HandleRemoveTask = (id: number) => () => void;
export type HandleClearCompletedTask = () => void;

export type HandleChangeFilter = (
  filter: FiltersTask,
) => (e: MouseEvent<HTMLButtonElement>) => void;
