import React from "react";
import Lottie from "react-lottie";
import umbrella from "../../animations/umbrella.json";
import scan from "../../animations/scan.json";
import fallingParcel from "../../animations/fallingParcel.json";

const Card = ({ children, icon, title }) => {
  return (
    <div style={{ margin: "auto", maxWidth: "300px" }}>
      <Lottie
        options={{
          animationData: icon,
        }}
        height={"100%"}
        width={"100%"}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "700px",
        }}
      />
      <h3 style={{ padding: "1px" }}>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default function Services() {
  return (
    <div
      id="services"
      style={{
        background: "rgb(240, 240, 240)",
        textAlign: "center",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "1rem",
      }}
    >
      <h1>Services</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          margin: "auto",
          marginTop: "2rem",
        }}
      >
        <Card title="Lorem ipsum" icon={scan}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          luctus erat. Praesent pulvinar, ante non fringilla hendrerit, augue mi
          mollis diam, vel finibus metus urna nec metus. Sed efficitur enim ut
          neque rutrum, tincidunt blandit purus hendrerit. Fusce in iaculis
          turpis.
        </Card>
        <Card title="Lorem ipsum" icon={fallingParcel}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          luctus erat. Praesent pulvinar, ante non fringilla hendrerit, augue mi
          mollis diam, vel finibus metus urna nec metus. Sed efficitur enim ut
          neque rutrum, tincidunt blandit purus hendrerit. Fusce in iaculis
          turpis.
        </Card>
        <Card title="Lorem ipsum" icon={umbrella}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          luctus erat. Praesent pulvinar, ante non fringilla hendrerit, augue mi
          mollis diam, vel finibus metus urna nec metus. Sed efficitur enim ut
          neque rutrum, tincidunt blandit purus hendrerit. Fusce in iaculis
          turpis.
        </Card>
      </div>
    </div>
  );
}
