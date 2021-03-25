import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoProviderContainer } from '../../../hooks/useTodo/TodoProviderContainer';
import { TodoStatusPanel } from './TodoStatusPanel';

const renderComponent = () => {
  <TodoProviderContainer>
    <TodoStatusPanel />
  </TodoProviderContainer>;
};

describe('organisms/TodoStatusPanel', () => {
  it('statusの値切り替え', () => {
    render(<TodoStatusPanel />);
  });
});
