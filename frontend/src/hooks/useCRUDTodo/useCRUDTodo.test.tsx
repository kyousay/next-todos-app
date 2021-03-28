import { renderHook, act } from '@testing-library/react-hooks';
import { useCRUDTodo } from './useCRUDTodo';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { cache } from 'swr';
import { Todo } from '../../types/todo';

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
      const response = {
        todos: responseData.todos.concat(todoData),
      };
      return res(ctx.json(response), ctx.status(200));
    },
  ),
  rest.put<null, ResponseData, { id: 'rest0' }>(
    '/todos/update/:id',
    (req, res, ctx) => {
      const { id } = req.params;
      const response = {
        todos: responseData.todos.map((data) =>
          data.id === id ? { ...data, checked: !data.checked } : data,
        ),
      };
      return res(ctx.json(response), ctx.status(200));
    },
  ),
  rest.delete<null, ResponseData, { id: 'rest0' }>(
    '/todos/delete/:id',
    (req, res, ctx) => {
      const { id } = req.params;
      const response = {
        todos: responseData.todos.filter((todo) => todo.id !== id),
      };
      return res(ctx.json(response), ctx.status(200));
    },
  ),
];

const server = setupServer(...handlers);

describe('useCRUDTodoテスト', () => {
  afterEach(async () => {
    cache.clear();
    await act(() => new Promise(requestAnimationFrame));
  });
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('Readテスト(成功): useSWRによるデータfetchテスト　初期値あり', () => {
    const initialData = {
      todos: [
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
      ],
    };
    const { result } = renderHook(() =>
      useCRUDTodo(initialData.todos, { dedupingInterval: 0 }),
    );
    expect(result.current.data).toEqual(initialData);
    // eslint-disable-next-line no-undefined
    expect(result.current.error).toEqual(undefined);
  });

  it('Readテスト(成功): useSWRによるデータfetchテスト', async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      useCRUDTodo(null, { dedupingInterval: 0 }),
    );
    await waitForValueToChange(() => result.current.data.todos);
    // eslint-disable-next-line no-undefined
    expect(result.current.error).toEqual(undefined);
  });

  it('Readテスト(失敗): useSWRによるデータfetchテスト失敗', async () => {
    server.use(
      rest.get('/todos', (req, res, ctx) => {
        return res.once(ctx.status(404));
      }),
    );
    const { result, waitForValueToChange } = renderHook(() =>
      useCRUDTodo(null, { dedupingInterval: 0 }),
    );

    await waitForValueToChange(() => result.current.error);
    // eslint-disable-next-line no-undefined
    expect(result.current.error.message).toEqual(result.current.error.message);
  });

  it('Createテスト: handleCreateTodoテスト', async () => {
    const postData = {
      id: 'CreatedId',
      name: 'CreatedName',
      text: 'CreatedText',
      checked: false,
    };
    const { result, waitForValueToChange } = renderHook(() =>
      useCRUDTodo(null, { dedupingInterval: 0 }),
    );
    await waitForValueToChange(() => result.current.data.todos);

    const expectedValue = {
      todos: responseData.todos.concat([postData]),
    };

    act(() => {
      result.current.handleCreateTodo(
        postData.id,
        postData.name,
        postData.text,
      );
    });

    await waitForValueToChange(() => result.current.data.todos);

    expect(result.current.data).toEqual(expectedValue);
  });

  it('Updateテスト: handleUpdateCheckboxテスト', async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      useCRUDTodo(null, { dedupingInterval: 0 }),
    );

    const expectedValue = {
      todos: responseData.todos.map((data) =>
        data.id === result.current.data.todos[0].id
          ? { ...data, checked: !data.checked }
          : data,
      ),
    };

    act(() => {
      result.current.handleUpdateCheckbox(result.current.data.todos[0].id);
    });

    await waitForValueToChange(() => result.current.data.todos);

    expect(result.current.data).toEqual(expectedValue);
  });

  it('Deleteテスト: handleDeleteTodoテスト', async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      useCRUDTodo(null, { dedupingInterval: 0 }),
    );

    const expectedValue = {
      todos: responseData.todos.filter(
        (todo) => todo.id !== result.current.data.todos[0].id,
      ),
    };

    act(() => {
      result.current.handleDeleteTodo(result.current.data.todos[0].id);
    });

    await waitForValueToChange(() => result.current.data.todos);

    expect(result.current.data).toEqual(expectedValue);
  });
});
