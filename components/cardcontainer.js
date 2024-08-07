"use client";
import React, { useState } from "react";
import { SimpleGrid, Box, Button, Text, Spacer, Image } from "@chakra-ui/react";
import CustomCard from "@/components/card";
import Link from "next/link";
import "@/styles/flights.css";

const CardContainer = ({
  cardData,
  initialVisibleCards,
  title,
  link,
  link_class,
  dataSource,
}) => {
  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);

  const displayedCards = cardData.slice(0, visibleCards);

  return (
    <Box className="box-container">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text className="fligt-deals-h">
          {title}

          <Link href="#" className={link_class}>
            {link}
          </Link>
        </Text>
        <Spacer />

        <Link
          className="All-btn"
          style={{ marginTop: "20px", marginRight: "20px" }}
          href="#"
        >
          <p>
            All
            <Image className="All-btn-img" src="/arrow.svg" alt="right arrow" />
          </p>
        </Link>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SimpleGrid spacing={40} templateColumns="repeat(3, 1fr)" width="90%">
          {displayedCards.map((card, index) => (
            <Box key={index} gridColumn={index === 3 ? "span 3" : "span 1"}>
              <CustomCard
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                price={card.price}
                country={card.country}
                paddingTop={index === 3 ? "33.33%" : "100%"}
                dataSource={dataSource}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default CardContainer;
