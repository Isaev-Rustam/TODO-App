import { Component, createRef, ReactElement } from 'react';

import Input from '@atoms/form-elements/input-text';
import { HandleChangesTasks, HandleExitEditMode } from '@/types/todos';

import styles from './index.module.css';

interface EditTasksProps {
  handleChangesTasks: HandleChangesTasks;
  handleExitEditMode: HandleExitEditMode;
  label: string;
  id: number;
}

class EditTasks extends Component<EditTasksProps> {
  inputRef = createRef<HTMLInputElement>();

  componentDidMount(): void {
    this.inputRef.current.focus();
  }

  render(): ReactElement {
    const { handleChangesTasks, handleExitEditMode, label, id } = this.props;

    return (
      <Input
        className={styles['todos__input-edit']}
        label={label}
        inputRef={this.inputRef}
        handleChange={handleChangesTasks(id)}
        handleKeyDown={handleExitEditMode(id)}
        handleBlur={handleExitEditMode(id)}
      />
    );
  }
}

export default EditTasks;
