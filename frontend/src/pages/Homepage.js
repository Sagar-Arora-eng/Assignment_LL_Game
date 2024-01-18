import { React, useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Center,
  Stack,
  Link,
} from "@chakra-ui/react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/main");
    }
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
        boxShadow="0 0 0 3px black"
      >
        <Text fontSize={{ base: "3xl", md: "4xl" }} fontFamily="Work sans">
          <Center>Quiz Hub</Center>
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="0 0 0 3px black"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        mt={{ base: "10px", md: "50px" }}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack
          color="black"
          fontFamily="Work sans"
          fontWeight="bold"
          direction={"row"}
          spacing={6}
        >
          <Link href={"/"} target="_blank">
            GitHub
          </Link>
          <Link href={"/"} target="_blank">
            LinkedIn
          </Link>
          <Link href={"/"} target="_blank">
            FaceBook
          </Link>
        </Stack>
        <Text
          color="black"
          fontFamily="Work sans"
          fontWeight="bold"
          fontSize="16px"
        >
          Made with ❤️ by Sagar Arora
        </Text>
      </Container>
    </Container>
  );
};

export default Homepage;
