import React from 'react';
import { Box, Text, Button, Link, Flex } from "@chakra-ui/react";

const FlightRating = () => {
  return (
    <Box  p={4} style={{ fontSize:"18px",color: " #6E7491",fontWeight:"400" }}>
      <Flex align="center" gap={20}>
        <p >Price rating</p>
        <Button  mb={9} variant="outline"px={10} py={8} backgroundColor="#5CD6C0" borderRadius="8px" color="white" border="none" _hover={{ bg: '#5CD6C9', color: '#5CD6C0' }}>
          <Link className="explore-link" href="#" textDecoration= "none" color="white">
            Buy soon
          </Link>
        </Button>
      </Flex>
      <Text mt={2}>
        We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks. 
      </Text>
      <Text mt={2} style={{ fontSize:"16px",color: " #A1B0CC" ,fontWeight:"400" }}>
      Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.      </Text>
    </Box>
  );
};

export default FlightRating;
