import { Header } from '@atoms/containers';
import styles from './index.module.css';
import Title from '@atoms/title';
import { PureComponent } from 'react';
import InputTextWithAutoFocus from '@atoms/form-elements/input-text-with-auto-focus';

class HeaderTodo extends PureComponent {
  render() {
    return (
      <Header>
        <Title h={1} className={styles.todos__title}>
          todos
        </Title>
        <InputTextWithAutoFocus
          placeholder='What needs to be done?'
          className={styles.todos__input}
        />
      </Header>
    );
  }
}

export default HeaderTodo;
