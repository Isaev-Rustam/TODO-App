import Button from '@atoms/button';
import List from '@atoms/list';
import ListItem from '@atoms/list-item';
import { FilterOption } from '@/types/todos';
import { FC } from 'react';
import styles from './index.module.css';
import { filters } from '@/constants/todos';

interface TaskFiltersProps {
  callback: (filter: FilterOption['filter']) => void;
}

const TaskFilters: FC<TaskFiltersProps> = ({ callback }) => {
  const mapCallback = (filterOpt: FilterOption) => {
    const { filter, label } = filterOpt;
    return (
      <ListItem key={filter}>
        <Button
          className={styles['filters__button']}
          onClick={() => callback(filter)}
        >
          {label}
        </Button>
      </ListItem>
    );
  };
  return (
    <List className={styles['todos__filters']}>{filters.map(mapCallback)}</List>
  );
};

export default TaskFilters;
