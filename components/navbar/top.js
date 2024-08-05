"use client";
import React, { useState } from "react";
import "@/styles/top.css";

const Top = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="top-div">
      <span>
        Join Tripma today and save up to 20% on your flight using code TRAVEL at
        checkout. Promotion valid for new users only.
      </span>
      <button className="top-close" onClick={() => setVisible(false)}>
        ×
      </button>
    </div>
  );
};

export default Top;
