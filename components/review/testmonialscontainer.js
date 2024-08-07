"use client";
import React, { useState } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Cardtestimonial from "./cardtestimonial";
import Testmonials from "./testmonials";

const Testmonialscontainer = ({ ReviewData }) => {
  const [visibleCards, setVisibleCards] = useState(3);

  //   const handleShowAll = () => {
  //     setShowAll(true);
  //     setVisibleCards(cardData.length);
  //   };

  const displayedCards = ReviewData.slice(0, visibleCards);
  return (
    <Box className="box-container">
      <Testmonials />

      <Box display="flex" justifyContent="center" alignItems="center">
        <SimpleGrid spacing={40} templateColumns="repeat(3, 1fr)" width="90%">
          {displayedCards.map((card, index) => (
            <Box key={index} gridColumn="span 1">
              <Cardtestimonial
                imageSrc={card.imageSrc}
                rating={card.rating}
                name={card.name}
                month={card.month}
                year={card.year}
                description={card.description}
                country={card.country}
                city={card.city}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testmonialscontainer;
