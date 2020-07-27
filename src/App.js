import React from "react";
import Layout from "./components/Layout";
import "./App.css";
import Top from "./components/Blocks/Top";
import Services from "./components/Blocks/Services";

function App() {
  return (
    <Layout>
      <Top />
      <Services />
    </Layout>
  );
}

export default App;
