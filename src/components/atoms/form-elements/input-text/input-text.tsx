import { FC, useEffect, useRef } from 'react';

interface InputProps {
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}

const InputText: FC<InputProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input ref={inputRef} type='text' {...props} className={props.className} />
  );
};

export default InputText;
