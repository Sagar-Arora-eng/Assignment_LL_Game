import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/others/navbar";

const Mainpage = () => {
  return (
    <>
      <Navbar />
      <Box
        minH="100vh"
        display="flex"
        justifyContent="center"
        textAlign="center"
        flexDirection="column"
        bgGradient="linear(to-b, white, white)"
        mx={{ base: "0", md: "auto" }}
        p={4}
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "5xl" }}
          color="black"
          mb={4}
        >
          Welcome to the Language Learning Game!
        </Heading>
        <Text fontSize={{ base: "xl", md: "2xl" }} color="black" mb={8}>
          Improve your language skills through fun quizzes.
        </Text>
      </Box>
    </>
  );
};

export default Mainpage;
