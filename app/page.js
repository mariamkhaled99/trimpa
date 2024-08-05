"use client";
import React, { useState } from "react";
import SignUp from "@/components/signup";
import World from "@/components/world";

export default function Home() {
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const handleOpenSignUp = () => {
    setSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setSignUpOpen(false);
  };
  return (
    <main className="main-class">
      <World />

      {/* <SignUp isOpen={isSignUpOpen} onClose={handleCloseSignUp} /> */}
    </main>
  );
}
