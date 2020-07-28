import React, { useState } from "react";
import Lottie from "react-lottie";
import RegisterAni from "../../animations/registration.json";

export default function Contact() {
  const [inputData, setInputData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputData.email) {
      alert(`Hello! ${inputData.email}, \n Thanks for joining us.`);
    } else {
      alert("Please enter your email first.");
    }
  };

  const onChange = (e) => {
    setInputData({ [e.target.name]: e.target.value });
  };

  return (
    <div
      id="contact"
      className="flexWrapRes"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem 2rem",
        flexDirection: "row",
      }}
    >
      <Lottie
        options={{
          animationData: RegisterAni,
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
        }}
      >
        <h1>Join us</h1>
        <h3>Here is your website</h3>
        <form
          className="Input-Button"
          style={{ maxWidth: "700px", margin: "auto" }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter you email address"
            onChange={onChange}
          />
          <button className="primary" type="submit">
            Join
          </button>
        </form>
      </div>
    </div>
  );
}
