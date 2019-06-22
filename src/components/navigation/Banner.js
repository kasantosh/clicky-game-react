import React from "react";

function Banner() {
  return (
    <div className="banner mb-4">
      <div className="col h-25 d-flex align-items-end mb-4" />
      <div className="col text-center">
        <h1 className="text-light">Clicky Game</h1>
        <h3 className="text-light">
          Click on an image to earn points, but don't click on any more than
          once!
        </h3>
      </div>
    </div>
  );
}

export default Banner;
