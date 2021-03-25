import React from 'react';
import { storiesOf } from '@storybook/react';
import { TodoStatusPanel } from '../TodoStatusPanel';
import { TodoProviderContainer } from '../../../../hooks/useTodo/TodoProviderContainer';

storiesOf('organisms/TodoStatusPanel', module).add('TodoStatusPanel', () => (
  <TodoProviderContainer>
    <TodoStatusPanel />
  </TodoProviderContainer>
));
