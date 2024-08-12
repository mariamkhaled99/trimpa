import React, { useEffect, useState } from "react";
import { Flex, Box, Button, Image } from "@chakra-ui/react";
import FlightDetails from "../flights/flightdetails";
import PassengerForm from "./passengerForm";
import "@/styles/flightscontainer.css";

const PassengerInfo = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [seatSelectionEnabled, setSeatSelectionEnabled] = useState(false); // State for seat selection

  useEffect(() => {
    // Retrieve the flight data from localStorage
    const savedFlight = localStorage.getItem("selectedFlight");
    if (savedFlight) {
      setSelectedFlight(JSON.parse(savedFlight));
    }
  }, []);

  return (
    <Flex
      align="flex-start"
      justify="space-between"
      direction="row"
      p={4}
      overflow="hidden"
      wrap="wrap"
      margin={60}
    >
      {/* Left section */}
      <Flex flex="2" direction="column" p={2} gap={4} minWidth="0">
        <Box className="box-container">
          <Flex direction="column" gap={4}>
            {/* Pass state and handler as props */}
            <PassengerForm
              setSeatSelectionEnabled={setSeatSelectionEnabled}
              seatSelectionEnabled={seatSelectionEnabled}
            />
          </Flex>
        </Box>
      </Flex>

      {/* Right section */}
      <Flex flex="1" direction="column" p={1} gap={20} minWidth="0">
        {selectedFlight ? (
          <>
            <FlightDetails
              flight={selectedFlight}
              onClearSelection={() => setSelectedFlight(null)}
            />
          </>
        ) : (
          <p>No flight selected</p>
        )}

        <Flex
          justify="flex-end"
          margin={10}
          direction="column" // Change direction to column to stack items vertically
          align="flex-end" // Align items to the end
          gap={20} // Add some gap between items
        >
          <Button
        style={{ border:"1px solid #605DEC"} }

  bg={seatSelectionEnabled ? "#605DEC" : "white"}
  color={seatSelectionEnabled ? "white" : "#605DEC"}
  _hover={{ 
    bg: seatSelectionEnabled ? "#4a4ac4" : "#e2e6ea", 
    borderColor: seatSelectionEnabled ? "#4a4ac4" : "#605DEC",
    color: seatSelectionEnabled ? "white" : "#605DEC"
  }}
  _active={{ 
    bg: seatSelectionEnabled ? "#3737a1" : "#c2c2c2", 
    borderColor: seatSelectionEnabled ? "#3737a1" : "#605DEC",
    color: seatSelectionEnabled ? "white" : "#605DEC"
  }}
  _focus={{ 
    boxShadow: "0 0 0 2px rgba(96, 93, 236, 0.5)", 
    borderColor: seatSelectionEnabled ? "#3737a1" : "#605DEC"
  }}
  size="md"
  px="24px"
  py="14px"
  borderRadius="0.25rem"
  as="a"
  href={seatSelectionEnabled ? "/select-seat" : undefined}
  isDisabled={!seatSelectionEnabled}
  textDecoration="none"
  cursor={seatSelectionEnabled ? "pointer" : "not-allowed"}
>
  Select seats
</Button>

          <Image
            src="/Luggage.svg"
            alt="Map"
            className="input-icon"
            p={30}
            my={50}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PassengerInfo;
