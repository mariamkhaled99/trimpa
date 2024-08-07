import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Image from "next/image"; // Use next/image if you are using Next.js
import DropdownWithCounters from "./customdropdown";
import MultiDatePicker from "./selectcalnder";




const airports = [
  { code: "JFK", label: "JFK" },
  { code: "LAX", label: "LAX" },
  { code: "ORD", label: "ORD" },
  { code: "ATL", label: "ATL" },
  { code: "DFW", label: "DFW" },
  { code: "DEN", label: "DEN" },
  { code: "SFO", label: "SFO" },
  { code: "SEA", label: "SEA" },
  { code: "MIA", label: "MIA" },
  { code: "LAS", label: "LAS" },
];

const SearchHome = () => {
  const [selectedCodeDep, setSelectedCodeDep] = useState(null);
  const [selectedCodeAri, setSelectedCodeAri] = useState(null);
  const [dates, setDates] = useState([]);

  const handleSelectChangeDep = (code) => {
    setSelectedCodeDep(code);
  };

  const handleSelectChangeAri = (code) => {
    setSelectedCodeAri(code);
  };

  const handleDateChange = (values) => {
    setDates(values);
  };

  return (
    <Box
      as="main"
      mt={60}
      mb={40}
      display="flex"
      justifyContent="center"
      position="relative"
    >
      <Flex
        as="form"
        alignItems="center"
        bg="white"
        borderRadius="md"
        shadow="md"
        maxW="lg"
        sx={{
          padding: "4px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          backgroundColor: "white",
          position: "relative", // Ensure positioning context for children
        }}
        direction="row"
      >
        {/* Departure Dropdown */}
        <Menu>
          <MenuButton
            as={Button}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "14px",
              width: "150px",
              position: "relative", // Add relative positioning
              zIndex: 1000, // Ensure button has proper z-index
            }}
          >
            <Flex alignItems="center">
              <Image
                src="/search-home/departure.png"
                alt="departure"
                style={{
                  marginRight: "4px",
                  width: "30px", // Adjust size as needed
                  height: "30px",
                }}
                width={20}
                height={20}
              />
              <span>{selectedCodeDep ? selectedCodeDep : "From where?"}</span>
            </Flex>
          </MenuButton>
          <MenuList
            sx={{
              width: "150px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "none",
              backgroundColor: "white",
              zIndex: 2000, // Ensure dropdown menu is above other elements
              position: "absolute", // Ensure absolute positioning for dropdown
            }}
          >
            {airports.map((airport) => (
              <MenuItem
                key={airport.code}
                onClick={() => handleSelectChangeDep(airport.label)}
                sx={{
                  backgroundColor: "white",
                  border: "none",
                  boxShadow: "none",
                  padding: "8px",
                  fontSize: "14px",
                  position: "relative", // Add relative positioning
                  zIndex: 2000, // Ensure MenuItem appears above other elements
                  _hover: {
                    backgroundColor: "#605dec",
                    color: "white",
                  },
                }}
              >
                {airport.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <div
          style={{
            width: "1px",
            height: "100%",
            backgroundColor: "#ddd",
            margin: "0 4px",
          }}
        />

        {/* Arrival Dropdown */}
        <Menu>
          <MenuButton
            as={Button}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "14px",
              width: "150px",
              position: "relative", // Add relative positioning
              zIndex: 1000, // Ensure button has proper z-index
            }}
          >
            <Flex alignItems="center">
              <Image
                src="/search-home/arrival.png"
                alt="arrival"
                style={{
                  marginRight: "4px",
                  width: "30px", // Adjust size as needed
                  height: "30px",
                }}
                width={20}
                height={20}
              />
              <span>{selectedCodeAri ? selectedCodeAri : "Where To?"}</span>
            </Flex>
          </MenuButton>
          <MenuList
            sx={{
              width: "150px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "none",
              backgroundColor: "white",
              zIndex: 2000, // Ensure dropdown menu is above other elements
              position: "absolute", // Ensure absolute positioning for dropdown
            }}
          >
            {airports.map((airport) => (
              <MenuItem
                key={airport.code}
                onClick={() => handleSelectChangeAri(airport.label)}
                sx={{
                  backgroundColor: "white",
                  border: "none",
                  boxShadow: "none",
                  padding: "8px",
                  fontSize: "14px",
                  position: "relative", // Add relative positioning
                  zIndex: 2000, // Ensure MenuItem appears above other elements
                  _hover: {
                    backgroundColor: "#605dec",
                    color: "white",
                  },
                }}
              >
                {airport.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <div
          style={{
            width: "1px",
            height: "100%",
            backgroundColor: "#ddd",
            margin: "0 4px",
          }}
        />

        {/* Date Input */}
        <MultiDatePicker/>
   
        <div
          style={{
            width: "1px",
            height: "100%",
            backgroundColor: "#ddd",
            margin: "0 4px",
          }}
        />

        {/* Counters */}
        <DropdownWithCounters />

        <Button
          sx={{
            backgroundColor: "#605dec",
            color: "white",
            padding: "16px 28px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            borderRadius: "4px",
            marginLeft: "6px",
            _hover: {
              backgroundColor: "#4842cc",
            },
          }}
          type="submit"
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchHome;
