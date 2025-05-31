import Input from '@atoms/form-elements/input-text';
import styles from './index.module.css';
import { HandleChangesTasks, HandleFinishEditingTask } from '@/types/todos';
import { Component, createRef, ReactElement } from 'react';

interface EditTasksProps {
  handleChangesTasks: HandleChangesTasks;
  handleFinishEditingTask: HandleFinishEditingTask;
  label: string;
  id: number;
}

class EditTasks extends Component<EditTasksProps> {
  inputRef = createRef<HTMLInputElement>();

  componentDidMount(): void {
    this.inputRef.current.focus();
  }

  render(): ReactElement {
    const { handleChangesTasks, handleFinishEditingTask, label, id } =
      this.props;

    return (
      <Input
        className={styles['todos__input-edit']}
        label={label}
        inputRef={this.inputRef}
        handleChange={handleChangesTasks(id)}
        handleKeyDown={handleFinishEditingTask(id)}
        handleBlur={handleFinishEditingTask(id)}
      />
    );
  }
}

export default EditTasks;
