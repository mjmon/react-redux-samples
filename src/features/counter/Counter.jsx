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
    <div className="flex flex-col items-center justify-center ">
      <div className="rrow">
        <button className="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <span className="text-[78px] px-[16px] mt-[2px]">{count}</span>
        <button className="button" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>

      <div className="rrow">
        <input
          className="textbox"
          type="text"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="button"
          onClick={() => {
            dispatch(incrementByAmount(Number(incrementAmount)));
          }}
        >
          Add Amount
        </button>
        <button
          className="button  ml-[8px]"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
