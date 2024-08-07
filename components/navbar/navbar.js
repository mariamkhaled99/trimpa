"use client";

import React, { useState } from "react";
import Link from "next/link";
import "@/styles/navbar.css";
import { Box, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import SignUp from "@/components/signup"; // Adjust the import path as needed

const Navbar = () => {
  // State to control the visibility of the SignUp modal
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  // Function to open the SignUp modal
  const openSignUp = () => setSignUpOpen(true);

  // Function to close the SignUp modal
  const closeSignUp = () => setSignUpOpen(false);

  return (
    <>
      {/* Navigation bar */}
      <Flex alignItems="center">
        <Box>
          {/* Logo */}
          <Link href="/" className="link-flights" passHref>
            <Image src="/logo.svg" alt="Logo" />
          </Link>
        </Box>
        <Spacer />
        <Flex alignItems="center">
          {/* Navigation links */}
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

          {/* Sign up button */}
          <Box mx={20}>
            <Button className="sign-up-btn" onClick={openSignUp}>
              Sign up
            </Button>
          </Box>
        </Flex>
      </Flex>

      {/* SignUp Modal */}
      <SignUp isOpen={isSignUpOpen} onClose={closeSignUp} />
    </>
  );
};

export default Navbar;
