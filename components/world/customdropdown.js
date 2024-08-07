"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";

const DropdownWithCounters = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [minorCount, setMinorCount] = useState(0);

  const increment = (type) => {
    if (type === "adult") setAdultCount(adultCount + 1);
    if (type === "minor") setMinorCount(minorCount + 1);
  };

  const decrement = (type) => {
    if (type === "adult" && adultCount > 1) setAdultCount(adultCount - 1);
    if (type === "minor" && minorCount > 0) setMinorCount(minorCount - 1);
  };

  const placeholderText = `${adultCount} Adult${adultCount > 1 ? "s" : ""}`;

  return (
    <Menu>
      <Box>
        <MenuButton
          as={Box}
          width="150px" // Adjust width to fit image and text
          backgroundColor="white"
          _hover={{ bg: "white" }}
          _focus={{ boxShadow: "none", borderColor: "#605dec" }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          borderRadius="md"
          cursor="pointer"
        >
          <Flex alignItems="center">
            <Image
              src="/search-home/person.png"
              alt="person"
              width={30}
              height={30}
              style={{ marginRight: "8px" }} // Space between image and text
            />
            <Text style={{ color: "#7C8DB0", margin: 0 }}>{placeholderText}</Text>
          </Flex>
        </MenuButton>
        <Box position="absolute" top="100%" left={0} width="150px">
          <Divider borderColor="#e2e8f0" />
          <MenuList
            sx={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0", // Border color
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)", // Shadow effect
              zIndex: 1000, // High z-index value
              padding: 0, // Remove default padding
            }}
          >
            <MenuItem
              as={Box}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              px={3} // Add padding to MenuItem
            >
              <Text mx={2}>Adults:</Text>
              <Button
                onClick={() => decrement("adult")}
                size="sm"
                sx={{
                  color: "#605dec",
                  backgroundColor: "white",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                -
              </Button>
              <Text mx={2}>{adultCount}</Text>
              <Button
                onClick={() => increment("adult")}
                size="sm"
                sx={{
                  color: "#605dec",
                  backgroundColor: "white",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                +
              </Button>
            </MenuItem>
            <MenuItem
              as={Box}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              px={3} // Add padding to MenuItem
            >
              <Text mx={2}>Minors:</Text>
              <Button
                onClick={() => decrement("minor")}
                size="sm"
                sx={{
                  color: "#605dec",
                  backgroundColor: "white",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                -
              </Button>
              <Text mx={2}>{minorCount}</Text>
              <Button
                onClick={() => increment("minor")}
                size="sm"
                sx={{
                  color: "#605dec",
                  backgroundColor: "white",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                +
              </Button>
            </MenuItem>
          </MenuList>
        </Box>
      </Box>
    </Menu>
  );
};

export default DropdownWithCounters;
