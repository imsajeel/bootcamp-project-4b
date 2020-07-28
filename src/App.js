import React from "react";
import Layout from "./components/Layout";
import "./App.css";
import Top from "./components/Blocks/Top";
import Services from "./components/Blocks/Services";
import About from "./components/Blocks/About";
import Contact from "./components/Blocks/Contact";
import Courses from "./components/Blocks/Courses";
import Message from "./components/Blocks/Message";

function App() {
  return (
    <Layout>
      <Top />
      <About />
      <Services />
      <Courses />
      <Message />
      <Contact />
    </Layout>
  );
}

export default App;
