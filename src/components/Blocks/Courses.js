import React from "react";
import Lottie from "react-lottie";
import umbrella from "../../animations/umbrella.json";
import scan from "../../animations/scan.json";
import fallingParcel from "../../animations/fallingParcel.json";

import { FaStar } from "react-icons/fa";

const Card = ({ children, icon, title }) => {
  return (
    <div
      className="card"
      style={{
        margin: "auto",
        marginTop: "2rem",
        maxWidth: "300px",
      }}
    >
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
      <label className="title">{title}</label>
      <label className="special">NEW</label>
      <br />
      <label>
        Price: <b>${999}</b>
      </label>
      {Array(5).map((item) => console.log(item))}
      <div style={{ marginTop: "5px", color: "rgba(65, 161, 200, 1)" }}></div>
    </div>
  );
};

export default function Courses() {
  return (
    <div>
      <div
        style={{
          padding: "2rem",
          margin: "1rem",
          borderRadius: "1rem",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Courses</h1>
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
            luctus erat.
          </Card>
          <Card title="Lorem ipsum" icon={fallingParcel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            luctus erat.
          </Card>
          <Card title="Lorem ipsum" icon={umbrella}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            luctus erat.
          </Card>
          <Card title="Lorem ipsum" icon={umbrella}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            luctus erat.
          </Card>
        </div>
      </div>
    </div>
  );
}
