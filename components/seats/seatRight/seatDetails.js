import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const EconomyList = [
  "Built-in entertainment system",
  "One free carry-on and personal item",
  "Complimentary snacks and drinks",
];

const BusinessList = [
  "Extended leg room",
  "First two checked bags free",
  "Priority boarding",
  "Personalized service",
  "Enhanced food and drink service",
  "Seats that recline 40% more than economy",
];

const SeatDetails = ({ selectedSeat }) => {
  const seatclass = selectedSeat.class;

  return (
    <Flex direction="row" width="100%" my={60} backgroundColor={"transparent"}>
      {/* Left Section (Economy) */}
      <Box flex={1} p={8}>
        <Image src="seats/Economy.svg" alt="Economy seats" />
        <h1
          style={{
            fontFamily: "Nunito Sans, San Serif",
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "24.55px",
            textAlign: "left",
            color: "#6E7491",
            margin: 0,
          }}
        >
          Economy
          {seatclass !== "Business" && (
            <Box
              style={{
                display: "inline-block",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "14px",
                padding: "4px 10px",
                borderRadius: "4px",
                color: "white",
                background: "linear-gradient(180deg, #605DEC 0%, #2A26D9 100%)",
                marginLeft: "8px",
              }}
            >
              Selected
            </Box>
          )}
        </h1>

        <p
          style={{
            fontFamily: "Nunito Sans, San Serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "19.1px",
            textAlign: "left",
            color: "#7C8DB0",
          }}
        >
          Rest and recharge during your flight with extended leg room,
          personalized service, and a multi-course meal service.
        </p>
        <Box bg="#605DEC" height="5px" width="10%" mt={4} opacity={"50%"} />

        <Box
          direction="column"
          style={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "14px",
            marginLeft: "10px",
          }}
        >
          <Flex direction="column" mt={4}>
            {EconomyList.map((item, index) => (
              <Flex align="center" mb={1} key={index}>
                <Box
                  bg="#605DEC"
                  width="10px"
                  height="10px"
                  borderRadius="50%"
                  mr={2}
                />
                <Text
                  style={{
                    fontFamily: "Nunito Sans, San Serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "19.1px",
                    color: "#7C8DB0",
                    marginLeft: "20px",
                  }}
                >
                  {item}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>

      {/* Right Section (Business) */}
      <Box flex={1} p={8}>
        <Image src="seats/Business.svg" alt="Business Seats" />
        <h1
          style={{
            fontFamily: "Nunito Sans, San Serif",
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "24.55px",
            textAlign: "left",
            color: "#6E7491",
            margin: 0,
          }}
        >
          Business
          {seatclass === "Business" && (
            <Box
              style={{
                display: "inline-block",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "14px",
                padding: "4px 10px",
                borderRadius: "4px",
                color: "white",
                background: "linear-gradient(180deg, #5CD6C0 0%, #5CD6C5 100%)",
                marginLeft: "8px",
              }}
            >
              Selected
            </Box>
          )}
        </h1>
        <p
          style={{
            fontFamily: "Nunito Sans, San Serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "19.1px",
            textAlign: "left",
            color: "#7C8DB0",
          }}
        >
          Rest and recharge during your flight with extended leg room,
          personalized service, and a multi-course meal service.
        </p>
        <Box bg="#5CD6C0" height="5px" width="10%" mt={4} opacity={"50%"} />
        <Flex direction="column" mt={4}>
          {BusinessList.map((item, index) => (
            <Flex align="center" mb={1} key={index}>
              <Box
                as={CheckIcon}
                color="#5CD6C0"
                boxSize={20}
                mr={2}
                style={{
                  filter: "drop-shadow(0px 0px 1px #5CD6C0)", // Gives a slight shadow effect to make it appear heavier
                }}
              />

              <Text
                style={{
                  fontFamily: "Nunito Sans, San Serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "19.1px",
                  color: "#7C8DB0",
                  marginLeft: "20px",
                }}
              >
                {item}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default SeatDetails;
