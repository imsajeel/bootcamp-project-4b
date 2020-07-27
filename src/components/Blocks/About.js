import React from "react";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <div
        className="flexTopRes"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "100%",
            maxWidth: "300px",
          }}
        >
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
      </div>
    </div>
  );
}
