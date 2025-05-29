import './index.module.css';
import { Component, ReactElement } from 'react';
import styles from './index.module.css';
import { Section } from '@atoms/containers';
import HeaderTodo from '@molecules/header-todo';
import TasksTodo from '@organisms/tasks-todo';
import FooterTodo from '@organisms/footer-todo';
import { defaultTaskList } from '@/constants/todos';
import { HandleChangeTask, HandleRemoveTask, TaskList } from '@/types/todos';
import { formatDateFn } from '@/utils/formatDate';

interface TodoAppState {
  taskList: TaskList;
}

export class TodoApp extends Component<object, TodoAppState> {
  state = { taskList: structuredClone(defaultTaskList) };

  handleChangeTask: HandleChangeTask = (isCompleted, id) => {
    this.setState(({ taskList }) => ({
      taskList: taskList.map(task =>
        task.id === id ? { ...task, isCompleted } : task,
      ),
    }));
  };

  handleRemoveTask: HandleRemoveTask = id => () => {
    this.setState(({ taskList }) => ({
      taskList: taskList.filter(task => task.id !== id),
    }));
  };

  render(): ReactElement {
    const { taskList } = this.state;
    return (
      <Section className={styles.todos}>
        <HeaderTodo />
        <Section className={styles.todos__main}>
          <TasksTodo
            formatDateFn={formatDateFn}
            handleChangeTask={this.handleChangeTask}
            handleRemoveTask={this.handleRemoveTask}
            taskList={taskList}
          />
          <FooterTodo />
        </Section>
      </Section>
    );
  }
}
