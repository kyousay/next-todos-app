import React from 'react';
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

const Home: React.FC<Props> = (props) => {
  const {
    todos,
    inputValue,
    changeCheckboxHandler,
    createTodoHandler,
    changeInputHandler,
  } = props;
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
      <form
        action="/todo/new"
        method="POST"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // TODO 後で消す
          const uniqueString = Date.now().toString();
          createTodoHandler(uniqueString, uniqueString, inputValue);
        }}>
        <input
          type="text"
          name="todo_text"
          placeholder="please input text"
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
