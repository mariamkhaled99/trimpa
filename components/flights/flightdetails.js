import React from "react";
import { Flex, Box, Image, Text, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const FlightDetails = ({ flight, onClearSelection }) => {
  if (!flight) return null;

  const total = parseInt(flight.price, 10);
  const taxes = (total * 14) / 100;
  const subtotal = parseInt(flight.price, 10) - taxes;
  
  return (
    <>
      <Box mt="100px" position="relative">
        {/* "X" Button */}
        <IconButton
          aria-label="Close"
          icon={<CloseIcon />}
          position="absolute"
          top="10px"
          right="10px"
          fontSize={"10px"}
          onClick={onClearSelection} // Clear selection on click
          backgroundColor={"transparent"}
          border={"none"}
        />

        <Flex
          direction="row"
          border="1px solid #E9E8FC"
          borderRadius="8px"
          py="24px"
          pl="30px"
          bg="#fff"
          gap="30px"
        >
          {/* Left Column */}
          <Box flex="1" display="flex" gap="20px">
            <Image src={flight.imgsrc} alt={flight.airline} boxSize="60px" />
            <Box flex="1" display="flex" flexDirection="column">
              <Text>{flight.airline}</Text>
              <Text color="#7C8DB0">FIG31279</Text>
            </Box>
          </Box>

          {/* Right Column */}
          <Box flex="1" display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column" gap="10px">
              <Text>{flight.flightDuration}</Text>
              <Text>
                {flight.startDate} - {flight.endDate}
              </Text>
              <Text color="#7C8DB0">
                {flight.stopNumber >= 1
                  ? flight.stopDuration + " in HVL"
                  : "Nonstop"}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box my="40px" ml="100px" position="relative">
        {/* Subtotal Row */}
        <Box
          flex="1"
          display="flex"
          flexDirection="row-reverse"
          justifyContent="space-between"
        >
          <Text textAlign="right" width="35%">
            {subtotal} $
          </Text>
          <Text textAlign="right" flex="1">
            Subtotal
          </Text>
        </Box>

        {/* Taxes and Fees Row */}
        <Box
          flex="1"
          display="flex"
          flexDirection="row-reverse"
          justifyContent="space-between"
        >
          <Text textAlign="right" width="35%">
            {taxes} $
          </Text>
          <Text textAlign="right" flex="1">
            Taxes and Fees
          </Text>
        </Box>

        {/* Total Row */}
        <Box
          flex="1"
          display="flex"
          flexDirection="row-reverse"
          justifyContent="space-between"
        >
          <Text textAlign="right" width="35%">
            {flight.price} $
          </Text>
          <Text textAlign="right" flex="1">
            Total
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default FlightDetails;
