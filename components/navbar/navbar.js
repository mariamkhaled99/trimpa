import React from "react";
import Link from "next/link";

import "@/styles/navbar.css";
import { Box, Flex, Spacer, Button, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="white" px={4} py={6}>
      <Flex alignItems="center">
        <Box>
          <Image src="/logo.svg" alt="Logo" />
        </Box>
        <Spacer />
        <Flex alignItems="center">
          <Box mx={20}>
            <Link href="/flights" className="link-flights" passHref>
              Flights
            </Link>
          </Box>

          <Box mx={20}>
            <Link href="/hotels" className="link" passHref>
              Hotels
            </Link>
          </Box>

          <Box mx={20}>
            <Link href="/packages" className="link" passHref>
              Packages
            </Link>
          </Box>

          <Box mx={20}>
            <Link href="/signin" className="link" passHref>
              Sign in
            </Link>
          </Box>

          <Box mx={20}>
            <Link href="/signup" className="link" passHref>
              <Button className="sign-up-btn">Sign up</Button>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
