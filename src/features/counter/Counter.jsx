import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
  incrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="">
        <button className="" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button className="" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>

      <div>
        <input
          type="text"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(Number(incrementAmount)));
          }}
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
