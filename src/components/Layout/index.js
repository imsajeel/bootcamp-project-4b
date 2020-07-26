import React from "react";
import Header from "./Header/Header";
import { Flex } from "@chakra-ui/core";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Flex as="main" flexDirection="column" maxW="100%">
        {children}
      </Flex>
      <Footer />
    </div>
  );
}
