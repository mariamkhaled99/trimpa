import React, { useState } from "react";
import { Box, Input, Image } from "@chakra-ui/react";
import { DatePicker } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles
import moment from "moment"; // Ensure moment is installed for date handling
import "antd/dist/reset.css"; // Import Ant Design styles

const { RangePicker } = DatePicker;

const MultiDatePicker = () => {
  const [dates, setDates] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleDateChange = (values) => {
    if (values[0] && values[1] && values[1].isBefore(values[0])) {
      setAlertMessage("Return date cannot be before departure date.");
      setShowAlert(true);
    } else {
      setAlertMessage("");
      setShowAlert(false);
      setDates(values);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        width: "200px", // Adjust width to fit the RangePicker
      }}
    >
      {/* Custom wrapper for icon and RangePicker */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src="/search-home/calendar.png"
          alt="calendar"
          style={{
            width: "24px",
            height: "24px",
            marginRight: "8px", // Space between icon and input
          }}
        />
        <RangePicker
          value={dates}
          onChange={handleDateChange}
          format="YYYY-MM-DD"
          style={{
            width: "100%",
            border: "none", // Remove default border
            boxShadow: "none", // Remove shadow
          }}
          placeholder={["Depart", "Return"]}
        />
      </Box>

      {/* Inline styles to remove suffix icon and border */}
      <style jsx global>{`
        .ant-picker-range .ant-picker-input input {
          border: none !important; /* Remove border */
          box-shadow: none !important; /* Remove shadow */
          border-bottom: none !important; /* Remove bottom border */
        }

        .ant-picker-range .ant-picker-suffix {
          display: none !important; /* Hide suffix icon */
        }

        .ant-picker-range.ant-picker-focused .ant-picker-input {
          border-bottom: none !important; /* Ensure no border when focused */
        }
      `}</style>
    </Box>
  );
};

export default MultiDatePicker;
