import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from '..';

storiesOf('atoms/Checkbox', module).add('Checkbox', () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      name="test"
      checked={checked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        action('onChange')(e);
      }}>
      test text
    </Checkbox>
  );
});
