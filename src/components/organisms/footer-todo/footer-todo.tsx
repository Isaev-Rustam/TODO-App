import Button from '@atoms/button';
import { Footer } from '@atoms/containers';
import Span from '@atoms/span';
import TaskFilters from '@molecules/task-filters';
import styles from './index.module.css';
import { PureComponent } from 'react';
import { FiltersTask, HandleChangeFilter } from '@/types/todos';

interface FooterTodoProps {
  handleChangeFilter: HandleChangeFilter;
  activeFilter: FiltersTask;
}

class FooterTodo extends PureComponent<FooterTodoProps> {
  render() {
    const { handleChangeFilter, activeFilter } = this.props;

    return (
      <Footer className={styles['todos__footer']}>
        <Span className={styles['todos__footer-num-elem']}>1 items left</Span>
        <TaskFilters
          activeFilter={activeFilter}
          handleChangeFilter={handleChangeFilter}
        />
        <Button
          onClick={() => null}
          className={styles['todos__footer-clear-btn']}
        >
          Clear completed
        </Button>
      </Footer>
    );
  }
}

export default FooterTodo;
