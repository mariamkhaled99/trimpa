"use client";
import React, { useState } from "react";
import { Box, Button, Flex, Select, Image } from "@chakra-ui/react";
import "@/styles/search.css"; // Import the CSS file

const airports = [
  { code: "JFK" },
  { code: "LAX" },
  { code: "ORD" },
  { code: "ATL" },
  { code: "DFW" },
  { code: "DEN" },
  { code: "SFO" },
  { code: "SEA" },
  { code: "MIA" },
  { code: "LAS" },
];

const SearchHome = () => {
  const [selectedCodeDep, setSelectedCodeDep] = useState("");
  const [selectedCodeAri, setSelectedCodeAri] = useState("");

  const handleSelectChangeDep = (e) => {
    setSelectedCodeDep(e.target.value);
  };

  const handleSelectChangeAri = (e) => {
    setSelectedCodeAri(e.target.value);
  };

  return (
    <Box as="main" mt={60} mb={20} display="flex" justifyContent="center">
      <Flex as="form" alignItems="center" className="search-home">
        {/* Select field for 'From where?' */}
        <Box position="relative" width="fit-content">
          <Select
            placeholder={selectedCodeDep || "From where?"}
            value={selectedCodeDep}
            onChange={handleSelectChangeDep}
            className="select-field"
          >
            {airports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {airport.code}
              </option>
            ))}
          </Select>
          <Image
            src="/search-home/departure.png"
            alt="departure"
            className="input-icon"
          />
        </Box>

        <Box className="separator" />

        {/* Select field for 'Where to?' */}
        <Box position="relative" width="fit-content">
          <Select
            placeholder={selectedCodeAri || "Where to?"}
            value={selectedCodeAri}
            onChange={handleSelectChangeAri}
            className="select-field"
          >
            {airports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {airport.code}
              </option>
            ))}
          </Select>
          <Image
            src="/search-home/arrival.png"
            alt="arrival"
            className="input-icon"
          />
        </Box>

        <Box className="separator" />

        {/* Input field with an image for 'Depart - Return' */}
        <Box position="relative" width="fit-content">
          <Image
            src="/search-home/calendar.png"
            alt="calendar"
            className="input-icon"
          />
          <Select placeholder="Depart - Return" className="select-field">
            {/* Add options here if needed */}
          </Select>
        </Box>

        <Box className="separator" />

        {/* Input field with an image for '1 adult' */}
        <Box position="relative" width="fit-content">
          <Image
            src="/search-home/person.png"
            alt="person"
            className="input-icon"
          />
          <Select placeholder="1 adult" className="select-field">
            {/* Add options here if needed */}
          </Select>
        </Box>

        <Box className="separator" />

        {/* Search button */}
        <Button className="search-btn" type="submit">
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchHome;
