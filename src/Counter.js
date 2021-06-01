import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
  selectCount,
  donate
} from "./counterSlice";
import "./Counter.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="main">
        <span className="val">{count}</span>
      </div>
      <div className="">
        <br />
        <button
          className="btn1"
          onClick={() => dispatch(incrementByAmount(10000))}
        >
          ADD 10,000
        </button>
        <button
          className="btn2"
          onClick={() => dispatch(decrementByAmount(10000))}
        >
          DEDUCT 10,000
        </button>
        <button className="btn3" onClick={() => dispatch(donate())}>
          DONATE
        </button>
      </div>
    </div>
  );
}
