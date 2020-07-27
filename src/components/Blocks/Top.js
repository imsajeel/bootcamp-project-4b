import React from "react";
import Lottie from "react-lottie";
import Teamwork from "../../animations/teamwork.json";

export default function Top() {
  return (
    <div
      className="flexTopRes"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 2rem",
        // background: "red",
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
      <Lottie
        options={{
          animationData: Teamwork,
        }}
        height={"100%"}
        width={"100%"}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "700px",
        }}
      />
    </div>
  );
}
