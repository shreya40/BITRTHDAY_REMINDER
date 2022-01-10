import React, { useState } from "react";
import "./App.css";
import Img1 from "./assets/image1.jpeg";
import Img2 from "./assets/image2.jpeg";
import Img3 from "./assets/image3.jpeg";
import Img4 from "./assets/image4.jpeg";
import Img5 from "./assets/image5.jpeg";
import Card from "./Card";
function App() {
  const[abcc, fun] = useState(5);
  const[abc,funn]=useState("");
  function clear() {
    fun(0);
    funn("shr");
  }
  
  return (
    <div className="app">
      <div className="List">
        <div className="heading">
          <p className="text"> {abcc} BIRTHADAY DATES</p>
        </div>
        <div className={abc}>
        <Card picture={Img1} name="Bertie Yates" age="29 years" />
        <Card picture={Img2} name="Hester Hogan" age="32 years" />
        <Card picture={Img3} name="Larry Little" age="36 years" />
        <Card picture={Img4} name="Sean Walsh" age="34 years" />
        <Card picture={Img5} name="Lola Gardner" age="29 years" />

        </div>
        
        <div className="button">
          <button className="clear" onClick={clear}>
            {" "}
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
