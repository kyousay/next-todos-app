import React from 'react';
import { storiesOf } from '@storybook/react';
import { TodoStatusChanger } from '../TodoStatusChanger';
import { action } from '@storybook/addon-actions';
import { TodoProviderContainer } from '../../../../hooks/useTodo/TodoProviderContainer';

storiesOf('organisms/TodoStatusChanger', module).add(
  'TodoStatusChanger',
  () => (
    <TodoProviderContainer>
      <TodoStatusChanger />
    </TodoProviderContainer>
  ),
);
