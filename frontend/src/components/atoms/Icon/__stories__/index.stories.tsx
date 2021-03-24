import React from 'react';
import { storiesOf } from '@storybook/react';
import TrashIcon from '../../../../../public/icon/trash.svg';

storiesOf('atoms/Icon', module).add('TrashIcon', () => {
  return <img src={TrashIcon} alt="削除" width={20} height={20} />;
});
