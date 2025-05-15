import Card from "./Card.jsx";
import { Button } from "./Button.jsx";
import { Counter } from "./Counter.jsx";
import { NameInput } from "./NameInput.jsx";
import { ColorPicker } from "./ColorPicker.jsx";

function App() {
  return (
    <>
      <NameInput />
      <Card />
      <Button />
      <Counter />
      <ColorPicker />
    </>
  );
}

export default App;
