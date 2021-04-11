import React from 'react';
import { TrashIcon } from './TrashIcon';

type Props = {
  type: 'delete';
};

export const Icon: React.FC<Props> = React.memo(({ type }) => {
  if (type === 'delete') return <TrashIcon />;

  return null;
});
