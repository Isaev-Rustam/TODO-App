import './index.module.css';
import { Component } from 'react';
import styles from './index.module.css';
import { Section } from './atoms/containers';
import HeaderTodo from './molecules/header-todo';
import TasksTodo from './organisms/tasks-todo';
import FooterTodo from './organisms/footer-todo';
import { defaultTaskList } from '@/constants/todos';

export class TodoApp extends Component {
  render(): React.ReactElement {
    return (
      <Section className={styles.todoapp}>
        <HeaderTodo />
        <Section className={styles.todoapp__main}>
          <TasksTodo tasks={defaultTaskList} />
          <FooterTodo />
        </Section>
      </Section>
    );
  }
}
