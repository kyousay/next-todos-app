import React from 'react';
import { storiesOf } from '@storybook/react';
import { TodoStatusChanger } from '../TodoStatusChanger';
import { action } from '@storybook/addon-actions';

storiesOf('organisms/TodoStatusChanger', module).add(
  'TodoStatusChanger',
  () => {
    const onClick = () => {
      action('void')('onClick');
    };
    return <TodoStatusChanger onClick={onClick} />;
  },
);
