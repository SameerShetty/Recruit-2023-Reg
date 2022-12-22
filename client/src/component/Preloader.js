import React from "react";

function Preloader() {
  return (
    <div
      className="d-flex align-items-center justify-content-center position-fixed top-0 start-0"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        opacity: ".7",
        zIndex: "999",
      }}
    >
      {" "}
      <div class="spinner-border" role="status" style={{ color: "#1d242b" }}>
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Preloader;
