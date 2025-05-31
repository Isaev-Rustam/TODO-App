import { ChangeEvent, FC, KeyboardEvent, RefObject, FocusEvent } from 'react';

interface InputProps {
  placeholder?: string;
  className?: string;
  label: string;
  handleChange: (label: string) => void;
  handleKeyDown?: (label: string) => void;
  handleBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  inputRef?: RefObject<HTMLInputElement>;
}

const InputText: FC<InputProps> = ({
  handleChange,
  handleKeyDown,
  label,
  inputRef,
  className,
  placeholder,
  handleBlur,
}) => {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && handleKeyDown) {
      handleKeyDown(label);
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
