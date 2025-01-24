import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";
import { count } from "console";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const Counter = () => {
  const dispatch = useDispatch();

  const counterValue = useSelector((state: StateSchema) => state.counter.value);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1>Counter {counterValue}</h1>

      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};
