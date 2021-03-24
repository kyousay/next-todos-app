import React from 'react';
import styles from './TodoList.module.scss';
import { Todo } from '../../../types/todo';
import { Icon } from '../../atoms/Icon';
import { TodoForm } from '../../molecules/TodoForm';

type Props = {
  todos: Todo[];
  handleUpdateCheckbox: (string) => void;
  handleCreateTodo: (id: string, name: string, text: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const TodoList: React.FC<Props> = (props) => {
  const {
    todos,
    handleCreateTodo,
    handleUpdateCheckbox,
    handleDeleteTodo,
  } = props;
  return (
    <div className={styles.root}>
      <ul className={styles.todo_list}>
        {todos.map((todo) => {
          return (
            <li className={styles.todo_item} key={todo.id}>
              <input
                className={styles.todo_checkbox}
                type="checkbox"
                id={todo.id}
                name={todo.name}
                checked={todo.checked}
                onChange={() => handleUpdateCheckbox(todo.id)}
              />
              <label htmlFor={todo.id} className={styles.todo_label}>
                {todo.text}
              </label>
              <div
                className={styles.todo_icon_wrapper}
                onClick={() => handleDeleteTodo(todo.id)}>
                <Icon type={'delete'} />
              </div>
            </li>
          );
        })}
      </ul>
      <TodoForm onSubmit={handleCreateTodo} />
    </div>
  );
};
