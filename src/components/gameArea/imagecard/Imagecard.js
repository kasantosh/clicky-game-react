import React from "react";

function Imagecard(props) {
  return (
    <div
      className="col-3"
      key={props.key}
      id={props.id}
      onClick={() => {
        props.handleClick(props.id);
      }}
    >
      <img className="w-100 mb-4 rounded gameimage" src={props.url} alt="" />
    </div>
  );
}

export default Imagecard;
