import React from "react";
import Lottie from "react-lottie";
import AboutAni from "../../animations/about.json";

export default function About() {
  return (
    <div
      id="about"
      className="flexWrapRes"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem 2rem",
        flexDirection: "row",
        // background: "red",
      }}
    >
      <Lottie
        options={{
          animationData: AboutAni,
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={"100%"}
        width={"100%"}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "700px",
        }}
      />
      <div
        style={{
          margin: "auto",
          width: "100%",
          textAlign: "center",
          // maxWidth: "300px",
        }}
      >
        <h1>Lorem ipsum dolor sit amet</h1>
        <h3>Here is your website</h3>
        <p style={{ maxWidth: "700px", margin: "auto" }}>
          Hello World! Here is everything that you want. Praesent pulvinar, ante
          non fringilla hendrerit, augue mi mollis diam, vel finibus metus urna
          nec metus. Sed efficitur enim ut neque rutrum, tincidunt blandit purus
          hendrerit. Fusce in iaculis turpis.
        </p>
      </div>
    </div>
  );
}
