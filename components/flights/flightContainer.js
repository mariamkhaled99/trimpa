import React from "react";
import { Flex, Box, Button,Image } from "@chakra-ui/react";
import SearchHome from "@/components/world/search";
import FlightFilter from "./flightFilter";
import FlightTable from "./flightTable";
import FlightHistory from "./flightHistory";
import FlightGrid from "./flightGrid";
import FlightRating from "./flightRating";
import '@/styles/flightscontainer.css';

const FlightContainer = () => {
  return (
    <Flex
      align="flex-start"
      justify="space-between"
      direction="row"
      p={4} // Padding around the entire container
      overflow="hidden" // Prevents overflow and scroll
      wrap="wrap" // Allows wrapping to prevent horizontal scrolling
    >
      {/* Left div with 2 times the width of the right div */}
      <Flex
        flex="2"
        direction="column"
        p={2} // Padding around components inside this div
        gap={4} // Space between components inside this div
        minWidth="0" // Ensures content fits within flex container
      >
        <SearchHome />
        <FlightFilter        />
        <Box className="box-container">
          <Flex
            direction="column"
            gap={4}
          >
            <FlightTable />
            <Flex
              justify="flex-end"
              pt={2} // Padding top to separate from the table
            >
              <Button
                borderColor="#605DEC"
                bg="white"
                color="#605DEC"
                _hover={{ bg: '#f8f9fa' }} // Light gray background on hover
                _active={{ bg: '#e2e6ea', borderColor: '#ccc' }} // Slightly darker gray for active state
                _focus={{ boxShadow: 'none', borderColor: '#ddd' }} // Remove focus shadow, keep border color
                size="md"
                px="16px" // Adjust padding to Bootstrap-like button size
                py="8px"
                borderRadius="0.25rem" // Rounded corners similar to Bootstrap buttons
                borderWidth="1px" // Ensure a 1px border width
              >
                Show All Flights
              </Button>
             
            </Flex>
            <Image
        src="/Map.svg"
        alt="person"
        className="input-icon"
        
      />
          </Flex>
        </Box>
      </Flex>
      {/* Right div */}
      <Flex
        flex="1"
        direction="column"
        p={2} // Padding around components inside this div
        gap={4} // Space between components inside this div
        minWidth="0" // Ensures content fits within flex container
      >
        <FlightGrid />
        <FlightHistory />
        <FlightRating />
      </Flex>
    </Flex>
  );
};

export default FlightContainer;
