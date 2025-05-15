import { useState } from "react";

export function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  const handleColorChange = (event) => setColor(event.target.value);

  return (
    <div className="color-picker-container">
      <h1 className="color-picker-title">
        <b>
          <span style={{ color: color }}>Color</span>
        </b>
        Picker
      </h1>

      <div className="color-display" style={{ backgroundColor: color }}>
        <p className="changed-color">Selected Color: {color}</p>
      </div>

      <label>Select a Color</label>
      <input
        className="selector"
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}
