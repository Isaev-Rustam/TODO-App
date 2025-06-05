import Button from '@atoms/button';
import { Footer } from '@atoms/containers';
import Span from '@atoms/span';
import TaskFilters from '@molecules/task-filters';
import { PureComponent } from 'react';
import SmileIcon from '@public/assets/svg/smile-circle.svg';

import {
  FiltersTask,
  HandleChangeFilter,
  HandleClearCompletedTask,
} from '@/types/todos';
import styles from './index.module.css';

interface FooterTodoProps {
  handleChangeFilter: HandleChangeFilter;
  activeFilter: FiltersTask;
  handleClearCompletedTask: HandleClearCompletedTask;
  unfinishedTasksCounter: number;
}

class FooterTodo extends PureComponent<FooterTodoProps> {
  render() {
    const {
      handleChangeFilter,
      activeFilter,
      handleClearCompletedTask,
      unfinishedTasksCounter,
    } = this.props;

    return (
      <Footer className={styles.todos__footer}>
        <Span className={styles['todos__footer-num-elem']}>
          {unfinishedTasksCounter === 0 ? (
            <SmileIcon className={styles['smile-icon']} />
          ) : (
            `${unfinishedTasksCounter} items left`
          )}
        </Span>
        <TaskFilters
          activeFilter={activeFilter}
          handleChangeFilter={handleChangeFilter}
        />
        <Button
          onClick={handleClearCompletedTask}
          className={styles['todos__footer-clear-btn']}
        >
          Clear completed
        </Button>
      </Footer>
    );
  }
}

export default FooterTodo;
