"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/styles/navbar.css";
import { Box, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import SignUp from "@/components/signup"; // Adjust the import path as needed

const Navbar = () => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const openSignUp = () => setSignUpOpen(true);
  const closeSignUp = () => setSignUpOpen(false);

  return (
    <>
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
            <Button className="sign-up-btn" onClick={openSignUp}>
              Sign up
            </Button>
          </Box>
        </Flex>
      </Flex>

      <SignUp isOpen={isSignUpOpen} onClose={closeSignUp} />
    </>
  );
};

export default Navbar;
