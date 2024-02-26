import React, { useEffect } from "react";
import { Profile } from "../components/user/Profile";
import { Box, Text } from "@chakra-ui/react";
import { PageContainer } from "./PageContainer";
import { useNavigate } from "react-router-dom";

export const Home = ({ isVerified }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isVerified) {
      navigate("/");
    }
  }, []);

  return (
    <PageContainer
      children={
        <Box
          display={"flex"}
          width={"100%"}
          flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Profile />
          <Text
            fontSize={"27px"}
            alignSelf={"center"}
            textAlign={"center"}
            width={"100%"}
          >
            Other stuff goes here
          </Text>
        </Box>
      }
    />
  );
};
