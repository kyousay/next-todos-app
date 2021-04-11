import React from 'react';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';

export type FormData = {
  todo_text: string;
};

type Props = {
  onSubmit: (id: string, name: string, text: string) => void;
};

export const TodoForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, reset, errors } = useForm<FormData>();
  return (
    <div className={styles.root}>
      <div className={styles.error_text_wrapper}>
        {errors.todo_text && (
          <p className={styles.error_text}>{errors.todo_text.message}</p>
        )}
      </div>
      <form
        onSubmit={handleSubmit((data: FormData) => {
          const uniqueString = Date.now().toString();
          onSubmit(uniqueString, uniqueString, data.todo_text);
          reset();
        })}>
        <input
          type="text"
          name="todo_text"
          placeholder="please input text"
          ref={register({
            pattern: {
              value: /^[a-zA-Z1-9亜-熙ぁ-んァ-ヶ]+$/,
              message: '記号は使用できません',
            },
            required: { value: true, message: '入力は必須です' },
            minLength: { value: 5, message: '5文字以上入力してください' },
            maxLength: { value: 30, message: '30文字以内で入力してください' },
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
