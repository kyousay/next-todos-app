import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TodoStatusPanel } from '../TodoStatusPanel';
import { StatusString } from '../../../../hooks/useTodo/useTodoCore';
import { action } from '@storybook/addon-actions';

storiesOf('organisms/TodoStatusPanel', module).add('TodoStatusPanel', () => {
  const [status, setStatus] = useState<StatusString>('ALL');
  const handleChangeStatus = (text: StatusString) => {
    setStatus(status);
    action('handleChangeStatus')(text);
  };
  return (
    <TodoStatusPanel status={status} handleChangeStatus={handleChangeStatus} />
  );
});
