import { Header } from '@atoms/containers';
import styles from './index.module.css';
import Title from '@atoms/title';
import { createRef, PureComponent } from 'react';
import InputText from '@atoms/form-elements/input-text';
import { HandleAddTask, HandleChangeTask } from '@/types/todos';

interface HeaderTodoState {
  handleChangeTask: HandleChangeTask;
  handleAddTask: HandleAddTask;
  label: string;
}

class HeaderTodo extends PureComponent<HeaderTodoState> {
  inputRef = createRef<HTMLInputElement>();

  componentDidMount(): void {
    this.inputRef.current.focus();
  }

  render() {
    const { handleChangeTask, label, handleAddTask } = this.props;

    return (
      <Header>
        <Title h={1} className={styles.todos__title}>
          todos
        </Title>
        <InputText
          placeholder='What needs to be done?'
          className={styles.todos__input}
          handleChange={handleChangeTask}
          handleKeyDown={handleAddTask}
          inputRef={this.inputRef}
          label={label}
        />
      </Header>
    );
  }
}

export default HeaderTodo;
