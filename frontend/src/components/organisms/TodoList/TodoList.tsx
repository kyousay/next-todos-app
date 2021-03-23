import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './TodoList.module.scss';
import { Todo } from '../../../types/todo';
import Icon from '../../atoms/Icon';

type Props = {
  todos: Todo[];
  handleUpdateCheckbox: (string) => void;
  handleCreateTodo: (id: string, name: string, text: string) => void;
  handleDeleteTodo: (id: string) => void;
};

type FormData = {
  todo_text: string;
};

const TodoList: React.FC<Props> = (props) => {
  const {
    todos,
    handleCreateTodo,
    handleUpdateCheckbox,
    handleDeleteTodo,
  } = props;
  const { register, handleSubmit, reset, errors } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    const uniqueString = Date.now().toString();
    handleCreateTodo(uniqueString, uniqueString, data.todo_text);
    reset();
  };
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
      <div className={styles.error_text_wrapper}>
        {errors.todo_text && (
          <p className={styles.error_text}>{errors.todo_text.message}</p>
        )}
      </div>
      <form action="/todo/new" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="todo_text"
          placeholder="please input text"
          ref={register({
            required: { value: true, message: '入力は必須です' },
            minLength: { value: 5, message: '5文字以上入力してください' },
            maxLength: { value: 30, message: '30文字以内で入力してください' },
            // TODO: 記号が使用できませんがよく出るので修正したい
            pattern: {
              value: /^[a-zA-Z1-9亜-熙ぁ-んァ-ヶ]+$/g,
              message: '記号は使用できません',
            },
          })}
          className={styles.text_input}
        />
        <button type="submit" className={styles.submit_button}>
          送信
        </button>
      </form>
    </div>
  );
};

export default TodoList;
