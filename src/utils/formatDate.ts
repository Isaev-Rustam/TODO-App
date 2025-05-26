import { FormatDate } from '@/types/todos';
import { formatDistanceToNow } from 'date-fns';

export type FormatDateFn = (date: FormatDate) => string;

export const formatDateFn: FormatDateFn = date =>
  formatDistanceToNow(date, { includeSeconds: true });
