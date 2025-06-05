import Button from '@atoms/button';
import List from '@atoms/list';
import ListItem from '@atoms/list-item';
import { FC } from 'react';
import clsx from 'clsx';

import { FilterOption, FiltersTask, HandleChangeFilter } from '@/types/todos';
import { filters } from '@/constants/todos';
import styles from './index.module.css';

interface TaskFiltersProps {
  handleChangeFilter: HandleChangeFilter;
  activeFilter: FiltersTask;
}

const TaskFilters: FC<TaskFiltersProps> = ({
  handleChangeFilter,
  activeFilter,
}) => {
  const mapCallback = (filterOpt: FilterOption) => {
    const { filter, label } = filterOpt;
    return (
      <ListItem key={filter}>
        <Button
          className={clsx(
            activeFilter === filter && styles['filters__button--active'],
            styles.filters__button,
          )}
          onClick={handleChangeFilter(filter)}
        >
          {label}
        </Button>
      </ListItem>
    );
  };
  return (
    <List className={styles.todos__filters}>{filters.map(mapCallback)}</List>
  );
};

export default TaskFilters;
