"use client";

import React, { useState } from "react";
import { Box, Button, Text, Spacer, Link } from "@chakra-ui/react";
import "@/styles/explore.css";

const Explore = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "60px",
        marginBottom: "60px",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Button className="explore-btn">
        <Link className="explore-link" href="#">
          Explore more stays
        </Link>
      </Button>
    </Box>
  );
};

export default Explore;
