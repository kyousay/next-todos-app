import { renderHook, act } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useCRUDTodo } from './useCRUDTodo';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { cache } from 'swr';
import { Todo } from '../types/todo';

const dummyData = {
  todos: [
    {
      id: 'test',
      text: 'test1',
      name: 'test1',
      checked: false,
    },
    {
      id: 'test',
      text: 'test2',
      name: 'test2',
      checked: true,
    },
  ],
};

type ResponseData = typeof responseData;

const responseData = {
  todos: [
    {
      id: 'rest0',
      text: 'rest1',
      name: 'rest1',
      checked: false,
    },
    {
      id: 'rest1',
      text: 'rest2',
      name: 'rest2',
      checked: true,
    },
  ],
};

const handlers = [
  rest.get<ResponseData>('/todos', (req, res, ctx) => {
    return res(ctx.json(responseData), ctx.status(200));
  }),
  rest.post<{ todoData: Todo }, ResponseData>(
    '/todos/create',
    (req, res, ctx) => {
      const { todoData } = req.body;
      const Response = {
        todos: responseData.todos.concat(todoData),
      };
      return res(ctx.json(Response), ctx.status(200));
    },
  ),
];

const server = setupServer(...handlers);

beforeEach(() => cache.clear());
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

describe('useCRUDTodoテスト', () => {
  it('Readテスト: useSWRによるデータfetchテスト　初期値あり', () => {
    const { result } = renderHook(() => useCRUDTodo(dummyData.todos));
    expect(result.current.data).toEqual(dummyData);
    // eslint-disable-next-line no-undefined
    expect(result.current.error).toEqual(undefined);
  });
  it('Readテスト: useSWRによるデータfetchテスト', async () => {
    const { result } = renderHook(() => useCRUDTodo());
    await waitFor(() => expect(result.current.data).toEqual(responseData));
    // eslint-disable-next-line no-undefined
    expect(result.current.error).toEqual(undefined);
  });
  it('Createテスト: handleCreateTodoテスト', async () => {
    const postData = {
      id: 'CreatedId',
      name: 'CreatedName',
      text: 'CreatedText',
      checked: false,
    };
    const { result } = renderHook(() => useCRUDTodo());
    await waitFor(() => expect(result.current.data).toEqual(responseData));
    act(() => {
      result.current.handleCreateTodo(
        postData.id,
        postData.name,
        postData.text,
      );
    });

    // テストする方法なくない？
    await waitFor(() =>
      expect(result.current.data).toEqual({
        todos: responseData.todos.concat([postData]),
      }),
    );
  });
});
