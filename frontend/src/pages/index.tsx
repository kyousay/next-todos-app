import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { Component as TodoList } from '../components/organisms/TodoList';
import { Todo } from '../types/todo';
import { Component as TodoStatusPanel } from '../components/organisms/TodoStatusPanel';
import { Component as TodoStatusChanger } from '../components/organisms/TodoStatusChanger';
import { Sample } from '../components/atoms/Sample';

//TODO: Missing Return Type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Component({ todos }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <TodoStatusPanel />
      <TodoStatusChanger />
      <TodoList initialTodos={todos} />
      <Sample />
    </div>
  );
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
