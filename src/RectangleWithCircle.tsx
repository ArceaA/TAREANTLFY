import React, { Component } from "react";
import "./RectangleWithCircle.css";
import imagen from "./imagenmia.jpeg";
class RectangleWithCircle extends Component {
  render() {
    return (
      <div className="container">
        <div className="rectangle">
          <div className="circle">
            <img src={imagen} alt="Imagen" />
          </div>
        </div>
      </div>
    );
  }
}

export default RectangleWithCircle;
