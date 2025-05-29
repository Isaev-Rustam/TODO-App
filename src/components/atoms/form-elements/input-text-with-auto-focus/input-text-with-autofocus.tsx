import { Component, createRef } from 'react';

interface InputProps {
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}

class InputTextWithAutoFocus extends Component<InputProps> {
  inputRef = createRef<HTMLInputElement>();

  componentDidMount(): void {
    this.inputRef.current.focus();
  }

  render() {
    return <input ref={this.inputRef} type='text' {...this.props} />;
  }
}

export default InputTextWithAutoFocus;
