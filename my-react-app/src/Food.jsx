function Food() {
  const food1 = "orange";
  const food2 = "Banana";

  return (
    <ul>
      <h3>Food Items 🍇</h3>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
