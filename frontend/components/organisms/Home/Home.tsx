import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Home.module.scss';

type Props = {
  todos: {
    id: string;
    name: string;
    checked: boolean;
    text: string;
  }[];
  inputValue: string;
  changeInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeCheckboxHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
  createTodoHandler: (id: string, name: string, text: string) => void;
};

type FormData = {
  todo_text: string;
};

const Home: React.FC<Props> = (props) => {
  const {
    todos,
    inputValue,
    changeCheckboxHandler,
    createTodoHandler,
    changeInputHandler,
  } = props;
  const { register, handleSubmit, clearErrors, errors } = useForm<FormData>();
  const onSubmit = () => {
    const uniqueString = Date.now().toString();
    createTodoHandler(uniqueString, uniqueString, inputValue);
    clearErrors();
  };
  return (
    <div className={styles.root}>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => {
          return (
            <li className={styles.todoItem} key={todo.id}>
              <input
                type="checkbox"
                id={todo.id}
                name={todo.name}
                checked={todo.checked}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeCheckboxHandler(e, index)
                }
              />
              <label htmlFor={todo.id}>{todo.text}</label>
            </li>
          );
        })}
      </ul>
      {errors.todo_text && <div>{errors.todo_text.message}</div>}
      <form action="/todo/new" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="todo_text"
          placeholder="please input text"
          ref={register({
            pattern: {
              value: /^[a-zA-Z1-9亜-熙ぁ-んァ-ヶ]+$/g,
              message: '記号は使用できません',
            },
            required: { value: true, message: '入力は必須です' },
            minLength: { value: 5, message: '5文字以上入力してください' },
            maxLength: { value: 30, message: '30文字以内で入力してください' },
          })}
          className={styles.textInput}
          value={inputValue}
          onChange={changeInputHandler}
        />
        <button type="submit" className={styles.submitButton}>
          送信
        </button>
      </form>
    </div>
  );
};

export default Home;
