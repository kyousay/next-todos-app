import React from 'react';
import { storiesOf } from '@storybook/react';
import { AsyncError } from '..';

storiesOf('atoms/AsyncError', module).add('AsyncError', () => {
  return <AsyncError>An error has occurred!</AsyncError>;
});
