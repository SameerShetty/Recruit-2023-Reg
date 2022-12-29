import React from "react";

function Loader(props) {
  return (
    <div>
      {" "}
      <div class="spinner-border" role="status" style={{ color: props.kolor }}>
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
