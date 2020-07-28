import React from "react";

export default function Message() {
  return (
    <div
      style={{
        background: "rgb(240, 240, 240)",
        textAlign: "center",
        padding: "5rem 10px",
        fontFamily: "Open Sans",
        marginTop: "5rem",
        // borderRadius: "1rem",
      }}
    >
      <h1 style={{ margin: 0 }}>"Message of the day."</h1>
      <label>
        <i>~Auther</i>
      </label>
    </div>
  );
}
