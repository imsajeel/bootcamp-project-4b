import React from "react";
import Lottie from "react-lottie";
import Teamwork from "../../animations/teamwork.json";

export default function Top() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 2rem",
      }}
    >
      <h1>Lorem ipsum dolor sit amet</h1>
      <Lottie
        options={{
          animationData: Teamwork,
        }}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
}
