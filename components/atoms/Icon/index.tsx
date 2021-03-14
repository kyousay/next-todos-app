import React from 'react';
import TrashIcon from './TrashIcon';
import EditIcon from './EditIcon';

type Props = {
  type: 'delete' | 'edit';
};

const Icon: React.FC<Props> = ({ type }) => {
  if (type === 'delete') return <TrashIcon />;
  if (type === 'edit') return <EditIcon />;

  return null;
};

export default Icon;
