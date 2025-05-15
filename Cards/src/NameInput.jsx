import { useState } from "react";

export function NameInput() {
  const [name, setName] = useState("");
  const [profile, setprofile] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleprofile = (event) => {
    setprofile(event.target.value);
  };
  return (
    <div>
      <input
        className="enter-text"
        type="text"
        style={{ width: "250px" }}
        onChange={handleChange}
        placeholder="What's your name?"
      />
      <p>
        Your name is: <span className="input-text"> {name} </span>
      </p>

      <textarea
        className="modern-textarea"
        placeholder="Write your thoughts..."
        rows="5"
        onChange={handleprofile}
      />
      <p>Profile🧑🏻: {profile}</p>
    </div>
  );
}
