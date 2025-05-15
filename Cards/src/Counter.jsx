import { useState } from "react";

export function Counter() {
  const [display, setDisplay] = useState(0);

  const incrementFun = () => setDisplay(display + 1);

  const resetFun = () => setDisplay(0);

  const decrementFun = () => setDisplay(display - 1);

  return (
    <>
      <div className="counter-container">
        <h1 className="counter-display">{display}</h1>
        <div className="button-row">
          <button className="decrement" onClick={decrementFun}>
            Decrement
          </button>
          <button className="reset" onClick={resetFun}>
            Reset
          </button>
          <button className="increment" onClick={incrementFun}>
            Increment
          </button>
        </div>
      </div>
    </>
  );
}
