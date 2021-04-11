/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// TODO: 戻り値の方を調べる

import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { TodoList } from '../components/organisms/TodoList/TodoList';
import { Todo } from '../types/todo';
import { TodoStatusPanel } from '../components/organisms/TodoStatusPanel/TodoStatusPanel';
import { TodoStatusChanger } from '../components/organisms/TodoStatusChanger/TodoStatusChanger';

const Component = ({
  todos,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <TodoStatusPanel />
      <TodoStatusChanger />
      <TodoList initialTodos={todos} />
    </div>
  );
};

export const getStaticProps = async () => {
  // TODO: absolute path
  const res = await fetch('http://localhost:3000/todos');
  const { todos }: { todos: Todo[] } = await res.json();
  return {
    props: {
      todos,
    },
  };
};

export default Component;
