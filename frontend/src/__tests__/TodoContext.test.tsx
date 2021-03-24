import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import useTodoCore from '../hooks/useTodo/useTodoCore';

describe('TodoContextTest', () => {
  it('初期State', () => {
    const { result } = renderHook(() => useTodoCore());
    expect(result.current.state).toEqual({
      todos: [
        {
          id: '1',
          text: 'test1',
          name: 'test1',
          checked: false,
        },
        {
          id: '2',
          text: 'test2',
          name: 'test2',
          checked: true,
        },
      ],
    });
  });
  it('初期State 値注入テスト', () => {
    const dummyState = {
      todos: [
        {
          id: '3',
          text: 'test3',
          name: 'test3',
          checked: false,
        },
        {
          id: '4',
          text: 'test4',
          name: 'test4',
          checked: true,
        },
      ],
    };
    const { result } = renderHook(() => useTodoCore(dummyState));
    expect(result.current.state).toEqual(dummyState);
  });
  it('changeTodoアクション: todosの任意のcheckedを変更', () => {
    const { result } = renderHook(() => useTodoCore());
    result.current.handleChangeTodo(0, true);
    result.current.handleChangeTodo(1, false);
    expect(result.current.state).toEqual({
      todos: [
        {
          id: '1',
          text: 'test1',
          name: 'test1',
          checked: true,
        },
        {
          id: '2',
          text: 'test2',
          name: 'test2',
          checked: false,
        },
      ],
    });
  });
  it('createTodoアクション: todosに新規Todo追加', () => {
    const id = Date.now().toString();
    const name = 'hogehoge';
    const text = 'fugafuga';
    const { result } = renderHook(() => useTodoCore());
    result.current.handleCreateTodo(id, name, text);
    expect(result.current.state).toEqual({
      todos: [
        {
          id: '1',
          text: 'test1',
          name: 'test1',
          checked: false,
        },
        {
          id: '2',
          text: 'test2',
          name: 'test2',
          checked: true,
        },
        {
          id: id,
          text: text,
          name: name,
          checked: false,
        },
      ],
    });
  });
});
