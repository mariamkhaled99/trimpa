import React, { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Stack,
  Flex,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "@/styles/testmonials.css";

const Cardtestimonial = ({
  name,
  imageSrc,
  rating,
  month,
  year,
  description,
  country,
  city,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to truncate the description to the first 40 words
  const getTruncatedDescription = (desc) => {
    const words = desc.split(" ");
    if (words.length <= 20) return desc;
    return `${words.slice(0, 30).join(" ")}`;
  };

  return (
    <Card
      maxW={{ base: "100%", sm: "sm", md: "md" }}
      borderWidth="3px"
      borderRadius="12px"
      overflow="hidden"
    >
      <CardBody padding="4">
        <Flex alignItems="center" mb="4">
          <Image
            src={imageSrc}
            alt={name}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginRight: "16px",
            }}
          />
          <Box>
            <Text className="name-testominals">{name}</Text>
            <Text className="info-testmonials">
              {city}, {country} | {month} {year}
            </Text>
          </Box>
        </Flex>
        <Stack spacing="3">
          <Flex>{renderStars(rating)}</Flex>
          <Text className="desc">
            {isExpanded ? description : getTruncatedDescription(description)}
            <Button onClick={handleToggleDescription} className="readmore-btn">
              {isExpanded ? "see less ..." : "read more ..."}
            </Button>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} color="#605DEC" />); // full star
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={i} color="#605DEC" />); // half star
    } else {
      stars.push(<FaRegStar key={i} color="#605DEC" />); // empty star
    }
  }
  return stars;
};

export default Cardtestimonial;
