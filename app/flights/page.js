"use client";
import React, { useState } from "react";

import Cardcontainer from "@/components/cardcontainer";
import FlightContainer from "@/components/flights/flightContainer";

import { cardData, ReviewData, PlacesData } from "@/app/data";

export default function Home() {
  return (
    <>
    <FlightContainer/>
      
    <Cardcontainer
        marginBottom="80px"
        cardData={PlacesData}
        initialVisibleCards={3}
        title="Explore unique "
        link="places to stay"
        link_class="places-to-btn"
        dataSource="places"
      />

      <Cardcontainer
        marginBottom="80px"
        cardData={PlacesData}
        initialVisibleCards={3}
        title="Explore unique "
        link="places to stay"
        link_class="places-to-btn"
        dataSource="places"
      />
    </>
  );
}
