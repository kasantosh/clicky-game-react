import React, { Component } from "react";
import Imagecard from "./navigation/imagecard/Imagecard";

class Gamebox extends Component {
  state = {
    img: "./images/b-1.jpg"
  };

  render() {
    return (
      <div className="container w-50">
        {/* --------------------ROW 1---------------------------- */}
        <div className="row mb-4">
          <div className="gamebox col-3 ">
            <Imagecard />
          </div>
          <div className="gamebox col-3">
            <Imagecard />
          </div>
          <div className="gamebox col-3">
            <Imagecard />
          </div>
          <div className="gamebox col-3">
            <Imagecard />
          </div>
        </div>
        <div className="row mb-4">
          <div className="gamebox col-3">
            <Imagecard />
          </div>
          <div className="gamebox col-3">
            <Imagecard />
          </div>
          <div className="gamebox col-3">
            <Imagecard />
          </div>
          <div className="gamebox col-3">
            <Imagecard />
          </div>
        </div>
        <div className="row mb-4">
          <div className="gamebox col-3">
            <Imagecard />
          </div>
          <div className="gamebox col-3">
            <Imagecard />
          </div>
          <div className="gamebox col-3">
            <Imagecard />
          </div>
          <div className="gamebox col-3">
            <Imagecard />
          </div>
        </div>
      </div>
    );
  }
}

export default Gamebox;
