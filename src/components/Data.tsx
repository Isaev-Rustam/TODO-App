import { useState } from 'react';

export function Data() {
  const [count, setCount] = useState<number>(0);

  const countHandler = () => {
    setCount(i => ++i);
  };

  return <button onClick={countHandler}>{count}</button>;
}
