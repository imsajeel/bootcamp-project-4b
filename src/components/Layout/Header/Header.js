import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Drawer from "../../theme/Drawer";

const NavLink = ({ children, href, ...props }) => {
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        fontWeight: "600",
        margin: "10px",
        color: "white",
        paddingBottom: "5px",
        borderBottom: "2px solid white",
      }}
    >
      {children}
    </a>
  );
};

const NavMenu = ({ children, drawer, setDrawer }) => {
  return (
    <div>
      <div className="onlyDesktop">{children}</div>
      <div className="onlyMobile" style={{ fontSize: "1.3em" }}>
        <div
          className="customHover"
          style={{ cursor: "pointer", padding: "10px" }}
          onClick={() => {
            setDrawer(true);
          }}
        >
          <FaBars />
        </div>
      </div>
      <Drawer title="Main Menu" status={drawer} onClose={setDrawer}>
        {children}
      </Drawer>
    </div>
  );
};

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <header
      id="header"
      style={{
        background:
          "linear-gradient(90deg, rgba(65,161,255,1) 0%, rgba(54,123,241,1) 100%)",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1, fontSize: "1.5rem", fontWeight: 600 }}>
        Hello World!
      </div>

      <NavMenu drawer={drawer} setDrawer={setDrawer}>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#courses">Courses</NavLink>
        <a href="#contact">
          <button className="primary white">Contact</button>
        </a>
      </NavMenu>
    </header>
  );
};

export default Header;
