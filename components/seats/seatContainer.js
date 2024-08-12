import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import SeatRightPage from './seatRightPage';
import SeatLeftPage from './seatLeftPage';

const SeatContainer = () => {
  const [selectedSeat, setSelectedSeat] = useState({});
  const [hasNextFlight, setShasNextFlight] = useState(false);


  const handleSeatSelect = (seat) => {
    if (seat.status !== "occupied") {
      setSelectedSeat(seat);
    }
  };

  return (
    <Flex
      direction="row"
      overflowX="hidden" // Hide overflow to remove scrollbar
      height="100vh" // Ensure full viewport height
      width="100vw" // Ensure full viewport width
    >
      <Box
        flex="1"
        overflowY="auto"
      >
        <SeatLeftPage 
          selectedSeat={selectedSeat} 
          onSeatSelect={handleSeatSelect} 
        />
      </Box>
      <Box
        flex="1"
        bg="rgba(255, 255, 255, 0.5)" // Semi-transparent white background for readability
        overflowY="auto" 
        overflowX="hidden" // Hide overflow to remove scrollbar
      >
        <SeatRightPage selectedSeat={selectedSeat} hasNextFlight={hasNextFlight} />
      </Box>
    </Flex>
  );
};

export default SeatContainer;
