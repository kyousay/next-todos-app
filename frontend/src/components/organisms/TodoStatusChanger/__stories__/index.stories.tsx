import React from 'react';
import { storiesOf } from '@storybook/react';
import { TodoStatusChanger } from '../TodoStatusChanger';

storiesOf('organisms/TodoStatusChanger', module).add(
  'TodoStatusChanger',
  () => <TodoStatusChanger />,
);
