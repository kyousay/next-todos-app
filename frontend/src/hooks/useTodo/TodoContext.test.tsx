import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import { useTodoCore } from './useTodoCore';

describe('TodoContextTest', () => {
  it('初期State', () => {
    const { result } = renderHook(() => useTodoCore());
    expect(result.current.state).toEqual({
      status: 'ALL',
    });
  });
  it('初期State 値注入テスト', () => {
    const { result } = renderHook(() => useTodoCore({ status: 'DONE' }));
    expect(result.current.state).toEqual({ status: 'DONE' });
  });
  it('status変更テスト', () => {
    const { result } = renderHook(() => useTodoCore());
    expect(result.current.state).toEqual({ status: 'ALL' });
    act(() => result.current.handleChangeStatus('NOTYET'));
    expect(result.current.state).toEqual({ status: 'NOTYET' });
    act(() => result.current.handleChangeStatus('DONE'));
    expect(result.current.state).toEqual({ status: 'DONE' });
    act(() => result.current.handleChangeStatus('ALL'));
    expect(result.current.state).toEqual({ status: 'ALL' });
  });
});
