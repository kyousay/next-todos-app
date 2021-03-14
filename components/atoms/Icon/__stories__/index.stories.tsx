import React from 'react';
import { storiesOf } from '@storybook/react';
import TrashIcon from '../../../../public/icon/trash.svg';
import EditIcon from '../../../../public/icon/edit.svg';

//TODO しっかりコンポーネントをimportしてstorybookに載せ直す
storiesOf('atoms/Icon', module)
  .add('TrashIcon', () => {
    return <img src={TrashIcon} alt="削除" width={20} height={20} />;
  })
  .add('EditIcon', () => {
    return <img src={EditIcon} alt="削除" width={20} height={20} />;
  });
