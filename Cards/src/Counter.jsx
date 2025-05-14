export function Counter() {
  return (
    <>
      <div className="counter-container">
        <h1 className="counter-display">0</h1>
        <div className="button-row">
          <button className="decrement">Decrement</button>
          <button className="reset">Reset</button>
          <button className="increment">Increment</button>
        </div>
      </div>
    </>
  );
}
