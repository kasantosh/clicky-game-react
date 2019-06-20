import React from "react";

export default function Menu(props) {
  return (
    <div className="menu p-3 text-light border-bottom fixed-top">
      <div className="row px-5 d-flex">
        <div className="col-4 d-flex align-items-center">
          <h1>Clicky Game</h1>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <h3>Click on an image to begin</h3>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <h3>
            Score: {props.Score} | Top Score: {props.topScore}
          </h3>
        </div>
      </div>
    </div>
  );
}
