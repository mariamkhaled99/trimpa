"use client";
import React, { useState } from "react";

import World from "@/components/world";
import Cardcontainer from "@/components/cardcontainer";
import CustomCard from "@/components/card";
import Explore from "@/components/explore";
import Testmonialscontainer from "@/components/review/testmonialscontainer";
import { cardData, ReviewData, PlacesData } from "@/app/data";

export default function Home() {
  return (
    <>
      <main className="main-class">
        <World />
      </main>
      <Cardcontainer
        marginBottom="80px"
        cardData={cardData}
        initialVisibleCards={4}
        title="Find your next adventure with these"
        link="flight deals"
        link_class="fligt-deals-btn"
        dataSource="flights"
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
      <Explore />
      <Testmonialscontainer ReviewData={ReviewData} marginBottom="80px" />
    </>
  );
}
