import React from "react";
import Imagecard from "./imagecard/Imagecard";

function Gamebox({ images, handleClick }) {
  return (
    <div className="container w-50">
      <div className="row mb-4">
        {images.map(image => {
          return (
            <Imagecard
              url={image.link}
              id={image.id}
              key={image.id}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gamebox;
