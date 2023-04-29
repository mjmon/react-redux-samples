import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <button className="" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button className="" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
