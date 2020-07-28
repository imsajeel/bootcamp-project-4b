import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import useWebAnimation from "@wellyshen/use-web-animations";

const Drawer = ({ children, status, onClose, title }) => {
  const { ref, getAnimation } = useWebAnimation({
    keyframes: [
      {
        transform: "translateX(100%)",
        backgroundColor: "rgba(255, 255, 255,0)",
      },
      { transform: "translateX(0%)", backgroundColor: "rgb(255, 255, 255)" },
    ],
    timing: {
      delay: 500,
      duration: 1000,
      iterations: 2,
      easing: "ease-in-out",
    },
  });

  useEffect(() => {
    getAnimation().play();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="drawer"
      style={{
        display: status ? "flex" : "none",
        flexDirection: "column",
      }}
      ref={ref}
    >
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          fontSize: "1.2rem",
          cursor: "pointer",
          padding: "10px",
          backgroundColor: "rgba(0,0,0,0.3)",
          color: "white",
          borderRadius: "5px",
        }}
        onClick={() => {
          setTimeout(function () {
            onClose(false);
          }, 900);
          getAnimation().reverse();
        }}
      >
        <FaTimes />
      </div>
      <div style={{ padding: "1rem" }}>
        <h2>{title}</h2>
        {children.map((item, index) => {
          return (
            <div
              key={index}
              style={{ marginTop: "1rem" }}
              onClick={() => {
                setTimeout(function () {
                  onClose(false);
                }, 900);
                getAnimation().reverse();
              }}
            >
              {item} <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Drawer;
