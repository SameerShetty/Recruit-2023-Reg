import React from "react";

function Loader() {
  return (
    <div>
      {" "}
      <div class="spinner-border" role="status" style={{ color: "#fafafa" }}>
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
