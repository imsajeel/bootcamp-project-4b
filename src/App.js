import React from "react";
import Layout from "./components/Layout";
import "./App.css";
import Top from "./components/Blocks/Top";
import Services from "./components/Blocks/Services";
import About from "./components/Blocks/About";

function App() {
  return (
    <Layout>
      <Top />
      <About />
      <Services />
    </Layout>
  );
}

export default App;
