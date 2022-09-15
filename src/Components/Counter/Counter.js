import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../../services/Actions/CounterAction";

const Counter = () => {
  //   const [count, setCount] = useState(0);

  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    dispatch(decrementAction());
  };
  const resetCounter = () => {
    dispatch(resetAction());
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Explore React Redux</h1>
          <h3>Counter App</h3>

          <h1>{count}</h1>
          <div className="btn-container">
            <button onClick={() => handleDecrement()}>Decrement</button>
            <button onClick={() => resetCounter()}>Reset</button>
            <button onClick={() => handleIncrement()}>Increment</button>
            {/* <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count)}>Reset</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : count)}> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
