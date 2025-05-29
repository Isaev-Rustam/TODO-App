import { FC } from 'react';

interface InputProps {
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}

const InputText: FC<InputProps> = props => {
  return <input type='text' {...props} />;
};

export default InputText;
