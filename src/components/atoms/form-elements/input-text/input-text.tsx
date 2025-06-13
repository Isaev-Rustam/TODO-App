import { ChangeEvent, KeyboardEvent, RefObject, FocusEvent } from 'react';

interface InputProps {
  placeholder?: string;
  className?: string;
  label: string;
  handleChange: (label: string) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  inputRef?: RefObject<HTMLInputElement>;
}

const InputText = ({
  handleChange,
  handleKeyDown,
  label,
  inputRef,
  className,
  placeholder,
  handleBlur,
}: InputProps) => {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (handleKeyDown) {
      handleKeyDown(e);
    }
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (handleBlur) {
      handleBlur(e);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <input
      type='text'
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      className={className}
      placeholder={placeholder}
      value={label}
      ref={inputRef}
    />
  );
};

export default InputText;
