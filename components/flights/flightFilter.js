import React from "react";
import { Box } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const FlightFilter = () => {
  // Inline styles for the button
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    backgroundColor: "white",
    color: "black",
    padding: "8px 16px",
    borderRadius: "0.25rem",
    fontSize: "medium",
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.2s, border-color 0.2s",
  };

  // Hover and active states
  const buttonHoverStyle = {
    backgroundColor: "#f8f9fa",
  };

  const buttonActiveStyle = {
    backgroundColor: "#e2e6ea",
    borderColor: "#ccc",
  };

  return (
    <Box
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {["Max Price", "Shops", "Times", "Airlines", "Seat Class", "More"].map(
        (label, index) => (
          <button
            key={index}
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.currentTarget.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            {label}
            <ChevronDownIcon style={{ marginLeft: "8px" }} />
          </button>
        )
      )}
    </Box>
  );
};

export default FlightFilter;
