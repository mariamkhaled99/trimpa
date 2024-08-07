import React from "react";
import { Box, Text } from "@chakra-ui/react";

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
      sx={{ zIndex: 1000 }} // Add z-index style inline using sx
    >
      <Text
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        What <span style={{ color: "#605dec" }}>Trimpa</span> users are saying
      </Text>
    </Box>
  );
};

export default Testmonials;
