import Input from '@/components/atoms/form-elements/input-text';
import styles from './index.module.css';

// interface EditTasksProps {
// }: FC<EditTasksTodoProps>

const EditTasks = () => {
  return (
    <Input
      defaultValue='Editing task'
      className={styles['todoapp__input-edit']}
    />
  );
};

export default EditTasks;
