import Button from '@atoms/button';
import { Footer } from '@atoms/containers';
import Span from '@atoms/span';
import TaskFilters from '@molecules/task-filters';
import styles from './index.module.css';
import { PureComponent } from 'react';

class FooterTodo extends PureComponent {
  render() {
    return (
      <Footer className={styles['todos__footer']}>
        <Span className={styles['todos__footer-num-elem']}>1 items left</Span>
        <TaskFilters callback={() => null} />
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
