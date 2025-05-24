import { Header } from '@/components/atoms/containers';
import styles from './index.module.css';
import Title from '@/components/atoms/title';
import Input from '@/components/atoms/form-elements/input-text';

const HeaderTodo = () => {
  return (
    <Header>
      <Title h={1} className={styles.todoapp__title}>
        todos
      </Title>
      <Input
        placeholder='What needs to be done?'
        className={styles.todoapp__input}
      />
    </Header>
  );
};

export default HeaderTodo;
