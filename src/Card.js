import React, { useState } from "react";
import "./Card.css";
function Card({ picture, name, age }) {
  const [abc, clear] = useState("");
  function random() {
    clear("card");
  }
  return (
    <div className="card" id={abc}>
      <span className="image">
        <img className="profile" src={picture} />
      </span>
      <div className="name-age">
        <div className="name"> {name} </div>

        <div className="age"> {age} </div>
      </div>
      <div className="cancel">
        <button onClick={random}>X </button>
      </div>
    </div>
  );
}

export default Card;
