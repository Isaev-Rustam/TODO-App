import { Component, ReactElement } from 'react';
import { Section } from '@atoms/containers';
import HeaderTodo from '@molecules/header-todo';
import TasksTodo from '@organisms/tasks-todo';
import FooterTodo from '@organisms/footer-todo';

import { defaultTaskList } from '@/constants/todos';
import { formatDateFn } from '@/utils/formatDate';
import { updateTaskList } from '@/utils/update-task-list';
import { filteredTask } from '@/utils/filtered-task';
import { addTodoTask } from '@/utils/add-todo-task';
import {
  HandleToggleTask,
  HandleRemoveTask,
  TaskList,
  HandleChangeTask,
  HandleAddTask,
  HandleChangesTasks,
  HandleEditingTask,
  HandleExitEditMode,
  FiltersTask,
  HandleChangeFilter,
  HandleClearCompletedTask,
} from '@/types/todos';
import styles from './index.module.css';

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

  handleAddTask: HandleAddTask = ({ code, currentTarget: { value } }) => {
    if (code === 'Enter') {
      this.setState(({ taskList }) => ({
        taskList: [addTodoTask({ description: value.trim() }), ...taskList],
        label: '',
      }));
    }
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

  handleExitEditMode: HandleExitEditMode = id => e => {
    if ('code' in e) {
      if (e.code !== 'Enter' && e.code !== 'Escape') {
        return;
      }
    }
    this.setState(({ taskList }) => ({
      taskList: updateTaskList(taskList, { id, isEditing: false }),
    }));
  };

  handleRemoveTask: HandleRemoveTask = id => () => {
    this.setState(({ taskList }) => ({
      taskList: taskList.filter(task => task.id !== id),
    }));
  };

  handleClearCompletedTask: HandleClearCompletedTask = () => {
    this.setState(({ taskList }) => ({
      taskList: taskList.filter(task => !task.isCompleted),
    }));
  };

  handleChangeFilter: HandleChangeFilter = filter => () => {
    const { filter: currentFilter } = this.state;

    if (currentFilter === filter) {
      return;
    }
    this.setState({ filter });
  };

  get unfinishedTasksCounter() {
    const { taskList: currentTaskList } = this.state;
    return currentTaskList.filter(task => !task.isCompleted).length;
  }

  render(): ReactElement {
    const { taskList, filter, label } = this.state;
    const filteredTasks = filteredTask(taskList, filter);
    const { unfinishedTasksCounter } = this;

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
            handleExitEditMode={this.handleExitEditMode}
          />
          <FooterTodo
            activeFilter={filter}
            unfinishedTasksCounter={unfinishedTasksCounter}
            handleChangeFilter={this.handleChangeFilter}
            handleClearCompletedTask={this.handleClearCompletedTask}
          />
        </Section>
      </Section>
    );
  }
}
