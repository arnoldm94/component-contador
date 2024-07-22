import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.initialValue);
  const n = props.number;
  const increment = () => {
    setCounter(counter + n);

    return;
  };
  const decrease = () => {
    setCounter(counter - n);

    return;
  };
  return (
    <div>
      <button onClick={decrease}>Reducir</button>
      <button>{counter}</button>
      <button onClick={increment}>Incrementar </button>
    </div>
  );
};

export default Counter;
