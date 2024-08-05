import React from "react";
import { Box, Button, Flex, Input, Image } from "@chakra-ui/react";

const SearchHome = () => {
  return (
    <Box as="main" mt={60} mb={20} display="flex" justifyContent="center">
      <Flex
        as="form"
        alignItems="center"
        bg="white"
        borderRadius="md"
        shadow="md"
        maxW="lg"
        className="search-home"
      >
        <Image src="/search-home/departure.png" alt="" />
        <Input placeholder="From where?" className="input-field" />
        <div className="separator" />
        <Image src="/search-home/arrival.png" alt="" />
        <Input placeholder="Where to?" className="input-field" />
        <div className="separator" />
        <Image src="/search-home/calendar.png" alt="" />
        <Input placeholder="Depart - Return" className="input-field" />
        <div className="separator" />
        <Image src="/search-home/person.png" alt="" />
        <Input placeholder="1 adult" className="input-field" />
        <div className="separator" />
        <Button className="search-btn"type="submit">
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchHome;
