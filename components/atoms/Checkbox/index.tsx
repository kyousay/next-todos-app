import React from 'react';

type Props = {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<Props> = (props) => {
  const { name, checked = false, onChange, children } = props;
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
};

export default Checkbox;
