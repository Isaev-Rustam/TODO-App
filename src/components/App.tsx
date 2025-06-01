import './index.module.css';
import { Component, ReactElement } from 'react';
import styles from './index.module.css';
import { Section } from '@atoms/containers';
import HeaderTodo from '@molecules/header-todo';
import TasksTodo from '@organisms/tasks-todo';
import FooterTodo from '@organisms/footer-todo';
import { addTodoTask, defaultTaskList } from '@/constants/todos';
import { formatDateFn } from '@/utils/formatDate';
import { updateTaskList } from '@/utils/update-task-list';
// import { filteredTask } from '@/utils/filtered-task';
import {
  HandleToggleTask,
  HandleRemoveTask,
  TaskList,
  HandleChangeTask,
  HandleAddTask,
  HandleChangesTasks,
  HandleEditingTask,
  HandleFinishEditingTask,
  FiltersTask,
  HandleChangeFilter,
} from '@/types/todos';
import { filteredTask } from '@/utils/filtered-task';

interface TodoAppState {
  taskList: TaskList;
  label: string;
  filter: FiltersTask;
}

export class TodoApp extends Component<object, TodoAppState> {
  state: TodoAppState = {
    taskList: structuredClone(defaultTaskList),
    filter: 'all',
    label: '',
  };

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

  handleChangeFilter: HandleChangeFilter = filter => () => {
    this.setState({ filter });
  };

  render(): ReactElement {
    const { taskList, filter, label } = this.state;
    const filteredTasks = filteredTask(taskList, filter);

    return (
      <Section className={styles.todos}>
        <HeaderTodo
          label={label}
          handleChangeTask={this.handleChangeTask}
          handleAddTask={this.handleAddTask}
        />
        <Section className={styles.todos__main}>
          <TasksTodo
            taskList={filteredTasks}
            formatDateFn={formatDateFn}
            handleToggleTask={this.handleToggleTask}
            handleRemoveTask={this.handleRemoveTask}
            handleChangesTasks={this.handleChangesTasks}
            handleEditingTask={this.handleEditingTask}
            handleFinishEditingTask={this.handleFinishEditingTask}
          />
          <FooterTodo
            activeFilter={filter}
            handleChangeFilter={this.handleChangeFilter}
          />
        </Section>
      </Section>
    );
  }
}
