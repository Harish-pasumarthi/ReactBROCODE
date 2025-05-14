export function Button() {
  const handleClick = (a) => {
    a.target.textContent = `Liked 🩷`;
    a.target.style.backgroundColor = `pink`;
    a.target.style.boxShadow = `none`;
  };

  return (
    <button className="click-button" onClick={(a) => handleClick(a)}>
      Like &#9825;
    </button>
  );
}
