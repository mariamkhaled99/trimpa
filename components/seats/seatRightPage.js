import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import SeatHeader from "./seatRight/seatHeader";
import SeatDetails from "./seatRight/seatDetails";
import SeatFooter from "./seatRight/seatFooter";

const SeatRightPage = ({ selectedSeat, hasNextFlight }) => {
  return (
    <Flex direction="column">
      {/* Header Section */}
      <Box flex="1">
        <SeatHeader />
      </Box>

      {/* Main Content Section */}
      <Box flex="7">
        <SeatDetails selectedSeat={selectedSeat} />
      </Box>

      {/* Footer Section */}
      <Box flex="1">
        <SeatFooter selectedSeat={selectedSeat} hasNextFlight={hasNextFlight} />
      </Box>
    </Flex>
  );
};

export default SeatRightPage;
