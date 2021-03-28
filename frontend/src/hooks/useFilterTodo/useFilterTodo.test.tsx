import { renderHook } from '@testing-library/react-hooks';
import { useFilterTodo } from './useFilterTodo';
import { Todo } from '../../types/todo';

const todos: Todo[] = [
  {
    id: 'test1',
    text: 'test1',
    name: 'test1',
    checked: false,
  },
  {
    id: 'test2',
    text: 'test2',
    name: 'test2',
    checked: true,
  },
];

describe('useFilterTodoテスト', () => {
  it('ALLテスト: status省略', () => {
    const { result } = renderHook(() => useFilterTodo(todos));
    expect(result.current).toEqual(todos);
  });
  it('ALLテスト', () => {
    const { result } = renderHook(() => useFilterTodo(todos, 'ALL'));
    expect(result.current).toEqual(todos);
  });
  it('NOTYETテスト', () => {
    const { result } = renderHook(() => useFilterTodo(todos, 'NOTYET'));
    expect(result.current).toEqual([
      {
        id: 'test1',
        text: 'test1',
        name: 'test1',
        checked: false,
      },
    ]);
  });
  it('DONEテスト', () => {
    const { result } = renderHook(() => useFilterTodo(todos, 'DONE'));
    expect(result.current).toEqual([
      {
        id: 'test2',
        text: 'test2',
        name: 'test2',
        checked: true,
      },
    ]);
  });
});
