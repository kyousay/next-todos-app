import React from 'react';
import styles from './TodoList.module.scss';
import { Todo } from '../../../types/todo';
import { Icon } from '../../atoms/Icon';
import { TodoForm } from '../../molecules/TodoForm';
import { TodoStatusChanger } from '../TodoStatusChanger/TodoStatusChanger';
import { useCRUDTodo } from '../../../hooks/useCRUDTodo/useCRUDTodo';
import { useFilterTodo } from '../../../hooks/useFilterTodo/useFilterTodo';
import { useTodoState } from '../../../hooks/useTodo/useTodoState';
import { AsyncError } from '../../atoms/AsyncError';

type Props = {
  initialTodos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { initialTodos } = props;
  const {
    data: { todos },
    error,
    handleUpdateCheckbox,
    handleCreateTodo,
    handleDeleteTodo,
  } = useCRUDTodo(initialTodos);

  const { status } = useTodoState();

  const filterdTodos = useFilterTodo(todos, status);

  if (error) return <AsyncError>{error.message}</AsyncError>;

  return (
    <div className={styles.root}>
      <TodoStatusChanger />
      <ul className={styles.todo_list}>
        {filterdTodos.map((todo) => {
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
