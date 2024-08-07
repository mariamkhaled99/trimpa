import React from "react";
import { Box, Button, Text, Spacer, Link, Image } from "@chakra-ui/react";
import "@/styles/testmonials.css";
import Cardtestimonial from "./cardtestimonial";

const Testmonials = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="60px"
      marginBottom="60px"
      width="90%"
      mx="auto"
    >
      <Text className="title-testmonials">
        What <span style={{ color: "#605dec" }}>Trimpa</span> users are saying
      </Text>
    </Box>
  );
};

export default Testmonials;
