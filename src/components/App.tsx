import './index.module.css';
import { Component, ReactElement } from 'react';
import styles from './index.module.css';
import { Section } from '@atoms/containers';
import HeaderTodo from '@molecules/header-todo';
import TasksTodo from '@organisms/tasks-todo';
import FooterTodo from '@organisms/footer-todo';
import { addTodoTask, defaultTaskList } from '@/constants/todos';
import {
  HandleToggleTask,
  HandleRemoveTask,
  TaskList,
  HandleChangeTask,
  HandleAddTask,
  HandleChangesTasks,
  HandleEditingTask,
  HandleFinishEditingTask,
} from '@/types/todos';
import { formatDateFn } from '@/utils/formatDate';
import { updateTaskList } from '@/utils/update-task-list';

interface TodoAppState {
  taskList: TaskList;
  label: string;
}

export class TodoApp extends Component<object, TodoAppState> {
  state = { taskList: structuredClone(defaultTaskList), label: '' };

  handleToggleTask: HandleToggleTask = (isCompleted, id) => {
    this.setState(({ taskList }) => ({
      taskList: updateTaskList(taskList, { id, isCompleted }),
    }));
  };

  handleChangeTask: HandleChangeTask = label => {
    this.setState({ label });
  };

  handleAddTask: HandleAddTask = label => {
    this.setState(({ taskList }) => ({
      taskList: [addTodoTask({ description: label }), ...taskList],
      label: '',
    }));
  };

  handleChangesTasks: HandleChangesTasks = id => label => {
    this.setState(({ taskList }) => ({
      taskList: updateTaskList(taskList, { id, description: label }),
    }));
  };

  handleEditingTask: HandleEditingTask = id => () => {
    this.setState(({ taskList }) => ({
      taskList: updateTaskList(taskList, { id, isEditing: true }),
    }));
  };

  handleFinishEditingTask: HandleFinishEditingTask = id => () => {
    this.setState(({ taskList }) => ({
      taskList: updateTaskList(taskList, { id, isEditing: false }),
    }));
  };

  handleRemoveTask: HandleRemoveTask = id => () => {
    this.setState(({ taskList }) => ({
      taskList: taskList.filter(task => task.id !== id),
    }));
  };

  render(): ReactElement {
    const { taskList, label } = this.state;
    return (
      <Section className={styles.todos}>
        <HeaderTodo
          label={label}
          handleChangeTask={this.handleChangeTask}
          handleAddTask={this.handleAddTask}
        />
        <Section className={styles.todos__main}>
          <TasksTodo
            taskList={taskList}
            formatDateFn={formatDateFn}
            handleToggleTask={this.handleToggleTask}
            handleRemoveTask={this.handleRemoveTask}
            handleChangesTasks={this.handleChangesTasks}
            handleEditingTask={this.handleEditingTask}
            handleFinishEditingTask={this.handleFinishEditingTask}
          />
          <FooterTodo />
        </Section>
      </Section>
    );
  }
}
