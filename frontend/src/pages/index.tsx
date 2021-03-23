import React from 'react';
import { InferGetStaticPropsType } from 'next';
import TodoList from '../components/organisms/TodoList';
import { Todo } from '../types/todo';

//TODO: Missing Return Type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Component({ todos }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <TodoList initialTodos={todos} />;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps() {
  // TODO: absolute path
  const res = await fetch('http://localhost:3000/todos');
  const { todos }: { todos: Todo[] } = await res.json();
  return {
    props: {
      todos,
    },
  };
}

export default Component;
