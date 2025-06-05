import { formatDistanceToNow } from 'date-fns';

import { FormatDate } from '@/types/todos';

export type FormatDateFn = (date: FormatDate) => string;

export const formatDateFn: FormatDateFn = date =>
  formatDistanceToNow(date, { includeSeconds: true });
