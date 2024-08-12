import React, { useState } from "react";
import { Flex, Box, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import SearchHome from "@/components/world/search";
import FlightFilter from "./flightFilter";
import FlightTable from "./flightTable";
import FlightDetails from "./flightdetails";
import FlightGrid from "./flightGrid";
import FlightHistory from "./flightHistory";
import FlightRating from "./flightRating";
import '@/styles/flightscontainer.css';

const FlightContainer = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [clearSelection, setClearSelection] = useState(false);
  const [isSaved, setIsSaved] = useState(false); // State to track button replacement
  const [seatSelectionEnabled, setSeatSelectionEnabled] = useState(false); // Define state for button enable/disable


  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    setClearSelection(false); // Reset the flag when selecting a flight
  };

  const handleClearSelection = () => {
    setSelectedFlight(null);
    setClearSelection(true); // Set the flag to clear the selection
  };

  const handleSaveAndClose = () => {
    if (selectedFlight) {
      console.log("Saving flight data:", selectedFlight);
      localStorage.setItem('selectedFlight', JSON.stringify(selectedFlight)); // Save flight data
      setIsSaved(true);
    }
  };
  return (
    <Flex
      align="flex-start"
      justify="space-between"
      direction="row"
      p={4}
      overflow="hidden"
      wrap="wrap"
      margin={40}
    >
      {/* Left div */}
      <Flex
        flex="2"
        direction="column"
        p={2}
        gap={4}
        minWidth="0"
      >
        <SearchHome />
        <FlightFilter />
        <Box className="box-container">
          <Flex direction="column" gap={4}>
            <FlightTable
              onSelectFlight={handleSelectFlight}
              onClearSelection={clearSelection} // Pass the boolean flag
            />
            <Flex justify="flex-end" margin={30}>
              <Button
          borderColor="#605DEC"
          bg={seatSelectionEnabled ? "#605DEC" : "white"}
          color={seatSelectionEnabled ? "white" : "#605DEC"}
          _hover={{ bg: "#f8f9fa" }}
          _active={{ bg: "#e2e6ea", borderColor: "#ccc" }}
          _focus={{ boxShadow: "none", borderColor: "#ddd" }}
          size="md"
          px="24px"
          py="14px"
          borderRadius="0.25rem"
          borderWidth="1px"
          as="a"
          href={seatSelectionEnabled ? "/select-seat" : undefined} // Remove href if disabled
          isDisabled={!seatSelectionEnabled}
          textDecoration="none"
          cursor={seatSelectionEnabled ? "pointer" : "not-allowed"} // Change cursor based on state
        >
          Show all
        </Button>
            </Flex>
            <Image src="/Map.svg" alt="Map" className="input-icon" p={30} />
          </Flex>
        </Box>
      </Flex>
      {/* Right div */}
      <Flex
        flex="1"
        direction="column"
        p={1}
        gap={20}
        minWidth="0"
        mt={200}
      >
        {selectedFlight ? (
          <>
            <FlightDetails flight={selectedFlight} onClearSelection={handleClearSelection} />
            <Flex justify="flex-end" margin={10}>
              {isSaved ? (
                <Button
                borderColor="#605DEC"
                bg="#605DEC"
                color="white"
                _hover={{ bg: '#605DEC' }}
                _active={{ bg: '#605DEC', borderColor: '#605DEC' }}
                _focus={{ boxShadow: 'none', borderColor: '#605DEC' }}
                size="md"
                px="24px"
                py="14px"
                borderRadius="0.25rem"
                borderWidth="1px"
                  as={Link}
                  href="/passenger" // Link to the passenger page
                  textDecoration={"none"}
                >
                  Passenger Info
                </Button>
              ) : (
                <Button
                borderColor="#605DEC"
                bg="white"
                color="#605DEC"
                _hover={{ bg: '#f8f9fa' }}
                _active={{ bg: '#e2e6ea', borderColor: '#ccc' }}
                _focus={{ boxShadow: 'none', borderColor: '#ddd' }}
                size="md"
                px="24px"
                py="14px"
                borderRadius="0.25rem"
                borderWidth="1px"
                onClick={handleSaveAndClose}
              >
                Save and close
              </Button>
              )}
            </Flex>
          </>
        ) : (
          <>
            <FlightGrid />
            <FlightHistory />
            <FlightRating />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default FlightContainer;
