import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { GoTriangleUp } from "react-icons/go";

const SeatHeader = () => {
  const [progress, setProgress] = useState("");
  const [isDepartingSeatNotChosen, setIsDepartingSeatNotChosen] = useState(true);
  const [selectedFlight, setSelectedFlight] = useState({
    imgsrc: "/airport/delta.svg",
    price: 200,
    flightDuration: "16h 45m",
    airline: "Japan Airlines",
    arrival: "San Francisco",
    startDate: "7:00AM",
    endDate: "9:30AM",
    tripType: "round trip",
    stopNumber: 1,
    flightID: "FBGSYKW123",
    fromAirport: "SFO",
    fromCountry: "US",
    fromCity: "California",
    toAirport: "NRT",
    toCountry: "US",
    toCity: "Atlanta",
    stopDuration: "2h 45m",
  });

  useEffect(() => {
    const flightData = JSON.parse(localStorage.getItem("selectedFlight")) || {};
    // setSelectedFlight(flightData);

    const tripType = flightData.tripType;
    if (tripType === "one way" || tripType === "round trip") {
      setProgress("Departing");
    }
  }, []);

  const section3Background = isDepartingSeatNotChosen ? "#605DEC" : "#27273F";
  const section4Background = isDepartingSeatNotChosen ? "#27273F" : "#605DEC";
  const sectionHeight = "100px"; // Set your desired fixed height here

  return (
    <Box color="white" >
      <Flex  position="relative">
        {/* Section 1 */}
        <Flex flex={1}  direction="column" bg={"#27273F"} height={sectionHeight} pl={20}>
          <Text fontSize="25px" fontWeight={600} marginBottom={"0px"}>
            {selectedFlight.fromAirport}
          </Text>
          <Flex direction="row" marginTop={"0px"}fontSize="13px" color="#E9E8FC">
            <Text>{selectedFlight.fromCity}, </Text>
            <Text ml={2}>{selectedFlight.fromCountry}</Text>
          </Flex>
        </Flex>

        {/* Arrow and Line between Section 1 and Section 2 */}
        <Flex align="center" bg={"#27273F"} height={sectionHeight} justify="center"pl={25}>
          <Image src="/seats/arrowRight.svg" alt="arrow" boxSize="40px" />
        </Flex>

        {/* Section 2 */}
        <Flex flex={1}  direction="column" bg={"#27273F"} height={sectionHeight}px={25}>
          <Text fontSize="25px" fontWeight={600} marginBottom={"0px"}>
            {selectedFlight.toAirport}
          </Text>
          <Flex direction="row" marginTop={"0px"}fontSize="13px"color="#E9E8FC">
            <Text>{selectedFlight.toCity}, </Text>
            <Text >{selectedFlight.toCountry}</Text>
          </Flex>
        </Flex>


        {/* Section 3 */}
        <Flex flex={2} bg={section3Background} direction="column" position="relative" height={sectionHeight}px={25}>
        <Text fontSize="18px" fontWeight={300} marginBottom={"0px"}>
       Feb 25 | {selectedFlight.startDate}
          </Text>
          <Flex direction="row" marginTop={"0px"}fontSize="13px"color="#E9E8FC">
            
            <Text ml={2}>Departing</Text>
          </Flex>
          {isDepartingSeatNotChosen && (
            <Box
              position="absolute"
              bottom="-15%"
              left="50%"
              transform="translateX(-50%)"
              color="white"
            >
              <GoTriangleUp size={30} color="white" />
            </Box>
          )}
        </Flex>

        {/* Section 4 */}
        <Flex flex={2} bg={section4Background} direction="column" position="relative" height={sectionHeight}px={25}>
        <Text fontSize="18px" fontWeight={300} marginBottom={"0px"}>
       Mar 25 | {selectedFlight.endDate}
          </Text>
          <Flex direction="row" marginTop={"0px"}fontSize="13px"color="#E9E8FC">
            
            <Text ml={2}>Arriving</Text>
          </Flex>
          {!isDepartingSeatNotChosen && (
            <Box
              position="absolute"
              bottom="10%" // Adjusted from 50% to a more reasonable value
              left="50%"
              transform="translateX(-50%)"
              color="white"
            >
              <GoTriangleUp size={24} />
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default SeatHeader;
