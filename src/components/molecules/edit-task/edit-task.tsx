import Input from '@atoms/form-elements/input-text';
import styles from './index.module.css';

const EditTasks = () => {
  return (
    <Input
      defaultValue='Editing task'
      className={styles['todos__input-edit']}
    />
  );
};

export default EditTasks;
