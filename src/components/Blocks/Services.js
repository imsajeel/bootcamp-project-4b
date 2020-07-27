import React from "react";
import { FaCompass, FaBaseballBall, FaHelicopter } from "react-icons/fa";

const Card = ({ children, icon, title }) => {
  return (
    <div style={{ margin: "auto", maxWidth: "300px" }}>
      {icon}
      <h3 style={{ padding: "1px" }}>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default function Services() {
  return (
    <div
      style={{
        background: "rgb(243, 243, 243)",
        textAlign: "center",
        padding: "2rem",
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
        <Card
          title="Lorem ipsum"
          icon={
            <FaCompass
              style={{ fontSize: "5rem", color: "rgba(65, 161, 255, 1)" }}
            />
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          luctus erat. Praesent pulvinar, ante non fringilla hendrerit, augue mi
          mollis diam, vel finibus metus urna nec metus. Sed efficitur enim ut
          neque rutrum, tincidunt blandit purus hendrerit. Fusce in iaculis
          turpis.
        </Card>
        <Card
          title="Lorem ipsum"
          icon={
            <FaBaseballBall
              style={{ fontSize: "5rem", color: "rgba(54, 123, 241, 1)" }}
            />
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          luctus erat. Praesent pulvinar, ante non fringilla hendrerit, augue mi
          mollis diam, vel finibus metus urna nec metus. Sed efficitur enim ut
          neque rutrum, tincidunt blandit purus hendrerit. Fusce in iaculis
          turpis.
        </Card>
        <Card
          title="Lorem ipsum"
          icon={
            <FaHelicopter
              style={{ fontSize: "5rem", color: "rgba(54, 123, 241, 1)" }}
            />
          }
        >
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
