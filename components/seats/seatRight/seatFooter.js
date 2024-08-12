import React, { useState } from "react";
import {
  Flex,
  Box,
  Button,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

const SeatFooter = ({ selectedSeat, hasNextFlight }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [isSaved, setIsSaved] = useState(false);


  const handleSaveAndClose = () => {
    if (!selectedSeat.id) {
      toast({
        title: "No seat selected.",
        description: "Please select a seat before saving.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    console.log("Saved seat info:", selectedSeat);
    setIsSaved(true);
  };

  const handleNextFlightClick = () => {
    if (hasNextFlight) {
      // Navigate to the next flight page
      window.location.href = "/arrival";
    }
  };

  React.useEffect(() => {
    if (selectedSeat.class === "Economy" && isSaved == true) {
      onOpen();
    }
  }, [selectedSeat, onOpen]);

  return (
    <>
      {/* Popup for Economy Class */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "40px 60px", // Adjusted padding
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              width: "30%", // Adjusted width for better proportion
            }}
          >
            <p
              style={{
                color: "#6E7491",
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "10px", // Added margin for spacing
              }}
            >
              Upgrade seat
            </p>
            <p
              style={{
                color: "#7C8DB0",
                fontSize: "18px",
                fontWeight: 400,
                marginBottom: "20px", // Added margin for spacing
              }}
            >
              Upgrade your seat for only $199, and enjoy 45 percent more leg
              room, and seats that recline 40 percent more than economy.
            </p>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                bg="#FAFAFE"
                color="#605DEC"
                _hover={{ bg: "#e2e6ea" }}
                _active={{ bg: "#e2e6ea" }}
                border="1px solid #605DEC"
                borderRadius="4px"
                onClick={onClose}
                style={{ marginRight: "10px" }}
                px="20px"
                py="10px"
              >
                Cancel
              </Button>
              <Button
                px="20px"
                py="10px"
                border="none"
                borderRadius="4px"
                bg="#605DEC"
                color="white"
                _hover={{ bg: "#4a4ac4" }}
                _active={{ bg: "#3737a1" }}
                onClick={() => {
                  console.log("Upgrade suggested");
                  onClose();
                  // Implement upgrade logic here
                }}
              >
                Upgrade for $199
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        width="100%"
        p={4} // Padding around the entire footer
        bg="#FAFAFE"
      >
        <Box flex="1" textAlign="center" height="100px">
          <Text fontSize="14px" color="#7C8DB0" fontWeight={400}>
            Passenger 1
          </Text>
          <Text fontSize="18px" color="#6E7491" fontWeight={600}>
            Sofia Khslako
          </Text>
        </Box>
        <Box flex="1" textAlign="center" height="100px">
          <Text fontSize="14px" color="#7C8DB0" fontWeight={400}>
            Seat Number
          </Text>
          <Text fontSize="18px" color="#6E7491" fontWeight={600}>
            {selectedSeat.id || "- -"}
          </Text>
        </Box>
        <Box flex="1" textAlign="center" height="100px" pt={4}>
          <Button
            borderColor="#605DEC"
            bg="white"
            color="#605DEC"
            _hover={{ bg: "#f8f9fa" }}
            _active={{ bg: "#e2e6ea", borderColor: "#ccc" }}
            _focus={{ boxShadow: "none", borderColor: "#ddd" }}
            size="md"
            px="24px"
            py="14px"
            borderRadius="4px"
            borderWidth="1px"
            cursor="pointer"
            isDisabled={!selectedSeat.id} // Disable button if no seat is selected
            onClick={handleSaveAndClose}
          >
            Save and Close
          </Button>
        </Box>
        <Box flex="1" textAlign="center" height="100px" pt={4}>
          {hasNextFlight ? (
            <Button
              style={{ border: "1px solid #605DEC" }}
              bg={hasNextFlight ? "#605DEC" : "white"}
              color={hasNextFlight ? "white" : "#605DEC"}
              _hover={{
                bg: hasNextFlight ? "#4a4ac4" : "#e2e6ea",
                borderColor: hasNextFlight ? "#4a4ac4" : "#605DEC",
                color: hasNextFlight ? "white" : "#605DEC",
              }}
              _active={{
                bg: hasNextFlight ? "#3737a1" : "#c2c2c2",
                borderColor: hasNextFlight ? "#3737a1" : "#605DEC",
                color: hasNextFlight ? "white" : "#605DEC",
              }}
              _focus={{
                boxShadow: "0 0 0 2px rgba(96, 93, 236, 0.5)",
                borderColor: hasNextFlight ? "#3737a1" : "#605DEC",
              }}
              size="md"
              px="24px"
              py="14px"
              borderRadius="4px"
              as="a"
              href={hasNextFlight ? "/select-seat" : undefined}
              isDisabled={!hasNextFlight}
              textDecoration="none"
              cursor={hasNextFlight ? "pointer" : "not-allowed"}
              onClick={handleNextFlightClick}
            >
              Next Flight
            </Button>
          ) : (
            <Button
              style={{ border: "1px solid #605DEC" }}
              bg="#605DEC"
              color="white"
              _hover={{
                bg: "#4a4ac4",
                borderColor: "#4a4ac4",
                color: "white",
              }}
              _active={{
                bg: "#3737a1",
                borderColor: "#3737a1",
                color: "white",
              }}
              _focus={{
                boxShadow: "0 0 0 2px rgba(96, 93, 236, 0.5)",
                borderColor: "#3737a1",
              }}
              size="md"
              px="24px"
              py="14px"
              borderRadius="4px"
              as="a"
              href={"/payment"}
              textDecoration="none"
              cursor="pointer"
            >
              Payment Method
            </Button>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default SeatFooter;
