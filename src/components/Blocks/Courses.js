import React from "react";
import Lottie from "react-lottie";
import WebAni from "../../animations/courses/web.json";
import VideoAni from "../../animations/courses/video-editing.json";
import GraphicAni from "../../animations/courses/graphic-design.json";
import ProgrammingAni from "../../animations/courses/programming.json";

const Card = ({ children, icon, title, special, price }) => {
  return (
    <div
      id="courses"
      className="card"
      style={{
        margin: "auto",
        marginTop: "2rem",
        maxWidth: "300px",
      }}
    >
      <div style={{ height: "400px" }}>
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
      </div>
      <label className="title">{title}</label>
      {special ? (
        <label className="special">{special.toUpperCase()}</label>
      ) : (
        ""
      )}
      <br />
      <label>
        Price: <b>{price ? `$${price}` : "N/A"}</b>
      </label>
      <p>{children}</p>
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
          <Card
            title="Full-stack web developer"
            special="best"
            price={175}
            icon={WebAni}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            luctus erat.
          </Card>
          <Card title="Video Editing" price={99} special="new" icon={VideoAni}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            luctus erat.
          </Card>
          <Card
            title="Graphic Designing"
            special="coming soon"
            icon={GraphicAni}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            luctus erat.
          </Card>
          <Card
            title="Programming with C"
            special="featured"
            price={199}
            icon={ProgrammingAni}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            luctus erat.
          </Card>
        </div>
      </div>
    </div>
  );
}
