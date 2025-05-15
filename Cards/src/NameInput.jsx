import { useState } from "react";

export function NameInput() {
  const [name, setName] = useState(""); // state to store input value

  const handleChange = (event) => {
    setName(event.target.value); // update state with user input
  };

  const handleClick = (event) => {
    console.log(event); // 👉 the full event object
    console.log(event.target); // 👉 the element that caused it
    console.log(event.target.value); // 👉 the value in that element (if it's an input)
  };

  return (
    <div>
      <input
        className="enter-text"
        type="text"
        style={{ width: "250px" }}
        onChange={handleChange}
        onClick={handleClick}
      />
      <p>
        Your name is: <span className="input-text"> {name} </span>
      </p>
      <textarea
        className="modern-textarea"
        placeholder="Write your thoughts..."
        rows="5"
      />
    </div>
  );
}
