import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import "@/styles/footer.css";
const MidlleFooter = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <SimpleGrid spacing={20} templateColumns="repeat(5, 1fr)" width="90%">
          <Box gridColumn="span 1">
            <Image src="/logo.svg" alt="Logo" />
          </Box>
          <Box gridColumn="span 1" padding="4">
            <Text className="footer-header">About</Text>
            <ul>
              <li>About Tripma</li>
              <li>How it works</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Forum</li>
            </ul>
          </Box>
          <Box gridColumn="span 1" padding="4">
            <Text className="footer-header">Partner With Us</Text>
            <ul>
              <li>Partnership programs</li>
              <li>Affiliate program</li>
              <li>Connectivity partners</li>
              <li>Promotions and events</li>
              <li>Integrations</li>
              <li>Community</li>
              <li>Loyalty program</li>
            </ul>
          </Box>
          <Box gridColumn="span 1" padding="4">
            <Text className="footer-header">Support</Text>
            <ul>
              <li>Help Center</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
              <li>Terms of service</li>
              <li>Trust and safety</li>
              <li>Accessibility</li>
            </ul>
          </Box>
          <Box gridColumn="span 1" padding="4">
            <Text className="footer-header">Get The App</Text>
            <ul>
              <li>Tripma for Android</li>
              <li>Tripma for iOS</li>
              <li>Mobile site</li>

              <li style={{ marginTop: "30px" }}>
                <Image src="/apps/appstore.svg" alt="app store" />
              </li>
              <li>
                <Image src="/apps/googleplay.svg" alt="google play" />
              </li>
            </ul>
          </Box>
        </SimpleGrid>
      </Box>
      <hr />
    </>
  );
};

export default MidlleFooter;
