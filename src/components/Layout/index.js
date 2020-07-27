import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ flexDirection: "column", maxWidth: "100%" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
