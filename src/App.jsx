import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// imports
import HeaderDesktop from "../src/assets/images/image-header-desktop.jpg";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="card__left">
          <h2 className="card__leftTitle">
            {" "}
            Get <span className="card__leftTitleSpan">insights</span> that help
            your business grow.
          </h2>
          <p className="card__leftParagraph">
            {" "}
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="card__statsWrapper">
            <div className="card__stat">
              <p className="card__statTitle">10k+</p>
              <p className="card__statSubtitle">Companies</p>
            </div>
            <div className="card__stat">
              <p className="card__statTitle">314</p>
              <p className="card__statSubtitle">Templates</p>
            </div>
            <div className="card__stat">
              <p className="card__statTitle">12M+</p>
              <p className="card__statSubtitle">Queries</p>
            </div>
          </div>
        </div>
        <div className="card__right">
          <div className="card__rightOverlay"></div>
          <img
            src={HeaderDesktop}
            alt="desktop image"
            className="card__rightImage"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
