import Profile from "./assets/ProfilePhoto.jpg";
function Card() {
  return (
    <div className="Card">
      <img className="profile" src={Profile} alt="profile" />
      <h2 className="title">Harish Pasumarthi</h2>
      <p className="tag">Learning react⚛️ Right Now!?</p>
    </div>
  );
}

export default Card;
