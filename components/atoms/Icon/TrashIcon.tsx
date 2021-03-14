import React from 'react';
import Img from 'next/image';

const TrashIcon: React.FC = () => {
  return <Img src={'/icon/trash.svg'} width={20} height={20} alt="削除" />;
};

export default TrashIcon;
