import React from "react";
import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";
import "@/styles/footer.css";
import MidlleFooter from "./mid-footer";

const Footer = () => {
  return (
    <>
      <MidlleFooter />
      <Box padding="4" bg="gray.100" mx="30px">
        <Flex alignItems="center">
          {/* Social Icons */}
          <Flex alignItems="center" mr="auto">
            <Box mx={4}>
              <Link href="#" >
                <Image src="/social-logo/meta.svg" alt="meta" />
              </Link>
            </Box>
            <Box mx={4}>
              <Link href="#" >
                <Image src="/social-logo/insta.svg" alt="insta" />
              </Link>
            </Box>
            <Box mx={4}>
              <Link href="#">
                <Image src="/social-logo/twitter.svg" alt="twitter" />
              </Link>
            </Box>
          </Flex>

          {/* Copyright Text */}
          <Text className="copyright" textAlign="center">
            © 2020 Tripma incorporated
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
