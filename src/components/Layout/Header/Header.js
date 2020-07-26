import React, { useState } from "react";
import { Flex, Text, Link, Button, Box } from "@chakra-ui/core";

const NavLink = ({ children, ...props }) => (
  <Link
    height="100%"
    px={2}
    fontSize="lg"
    color="white"
    _hover={{ textDecor: "none" }}
    {...props}
  >
    {children}
  </Link>
);

const Header = () => {
  return (
    <Flex
      bgImage="linear-gradient(90deg, rgba(65,161,255,1) 0%, rgba(54,123,241,1) 100%)"
      justifyContent="center"
      maxW="100%"
      px={4}
      py={3}
    >
      <Flex justifyContent="center" alignItems="center">
        <Text pl={3} fontSize="xl" fontWeight="bold" color="white">
          Hello Cloud!
        </Text>
      </Flex>
      <Flex
        display={{ xs: "none", md: "flex" }}
        justify="center"
        align="center"
      >
        <NavLink href="/#" ml="0.5rem">
          Home
        </NavLink>
        <NavLink href="/#" ml="0.5rem">
          Home
        </NavLink>
        <NavLink href="/#" ml="0.5rem">
          Home
        </NavLink>
        <NavLink href="/#" ml="0.5rem">
          Home
        </NavLink>
        <NavLink href="/#" ml="0.5rem">
          Home
        </NavLink>
      </Flex>
      <Box display={{ xs: "flex", md: "none" }}>H</Box>
    </Flex>
  );
};

export default Header;
