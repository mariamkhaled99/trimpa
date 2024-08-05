import React from "react";
import { Box, Button, Flex, Input, Image } from "@chakra-ui/react";

const SearchHome = () => {
  return (
    // Main container for the search form with top and bottom margins
    <Box as="main" mt={60} mb={20} display="flex" justifyContent="center">
      
      {/* Flex container to hold the search form elements */}
      <Flex
        as="form"
        alignItems="center"
        bg="white"
        borderRadius="md"
        shadow="md"
        maxW="lg"
        className="search-home"
      >
        {/* Input field with an image for 'From where?' */}
        <Image src="/search-home/departure.png" alt="" />
        <Input placeholder="From where?" className="input-field" />
        
        {/* Separator between input fields */}
        <div className="separator" />
        
        {/* Input field with an image for 'Where to?' */}
        <Image src="/search-home/arrival.png" alt="" />
        <Input placeholder="Where to?" className="input-field" />
        
        {/* Separator between input fields */}
        <div className="separator" />
        
        {/* Input field with an image for 'Depart - Return' */}
        <Image src="/search-home/calendar.png" alt="" />
        <Input placeholder="Depart - Return" className="input-field" />
        
        {/* Separator between input fields */}
        <div className="separator" />
        
        {/* Input field with an image for '1 adult' */}
        <Image src="/search-home/person.png" alt="" />
        <Input placeholder="1 adult" className="input-field" />
        
        {/* Separator between input fields */}
        <div className="separator" />
        
        {/* Search button */}
        <Button className="search-btn" type="submit">
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchHome;
