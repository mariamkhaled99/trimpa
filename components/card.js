"use client";

import React from "react";
import "@/styles/card.css";
import {
  Image,
  Heading,
  Text,
  Stack,
  Card,
  CardBody,
  Box,
  Flex,
} from "@chakra-ui/react";

const CustomCard = ({
  imageSrc,
  title,
  description,
  price,
  paddingTop,
  country,
  dataSource,
}) => {
  // Conditional rendering for price based on data source
  const shouldShowPrice = dataSource !== "places";

  const titleColor = "#6E7491"; // Default color for the title
  // Country color
  const countryColor = dataSource === "places" ? "#5CD6C0" : "#605dec";

  return (
    <Card
      maxW={{ base: "100%", sm: "sm", md: "md" }}
      borderWidth="3px"
      borderRadius="12px"
      overflow="hidden"
      sx={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardBody padding="0">
        <Box
          position="relative"
          width="100%"
          paddingTop={paddingTop}
          overflow="hidden"
          sx={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow for the image container
            "& img": {
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow for the image
            },
          }}
        >
          <Image
            src={imageSrc}
            alt={title}
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="lg"
          />
        </Box>
        <Stack mt="6" spacing="3" padding="4" px={20}>
          <Flex justify="space-between">
            <Heading className="title" size="md">
              <span style={{ color: titleColor }}>{title}</span>
              {dataSource !== "places" && (
                <>
                  {", "}
                  <span style={{ color: countryColor }}>{country}</span>
                </>
              )}
              {dataSource === "places" && (
                <span style={{ color: countryColor }}> {country}</span>
              )}
            </Heading>
            {shouldShowPrice && <Text className="price">${price}</Text>}
          </Flex>
          <Text className="desc">{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CustomCard;
