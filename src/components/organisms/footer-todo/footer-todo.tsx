import Button from '@/components/atoms/button';
import { Footer } from '@/components/atoms/containers';
import Span from '@/components/atoms/span';
import TaskFilters from '@/components/molecules/filteries-tasks';
import styles from './index.module.css';
// import { FC } from 'react';

// interface FooterTodoProps {}
// : FC<FooterTodoProps>

const FooterTodo = () => {
  return (
    <Footer className={styles['todoapp__footer']}>
      <Span className={styles['todoapp__footer-num-elem']}>1 items left</Span>
      <TaskFilters callback={() => null} />
      <Button
        onClick={() => null}
        className={styles['todoapp__footer-clear-btn']}
      >
        Clear completed
      </Button>
    </Footer>
  );
};

export default FooterTodo;
