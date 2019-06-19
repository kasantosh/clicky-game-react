import React from "react";

function Menu(props) {
  return (
    <div className=" bg-danger p-3 text-light fixed-top mb-4">
      <div className="row px-5 d-flex">
        <div className="col-4 d-flex align-items-center">
          <h1>Clicky Game</h1>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <h3>You Guessed ...</h3>
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

export default Menu;
