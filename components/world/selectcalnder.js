import React, { useState } from "react";
import { Box, Button, Input, Divider } from "@chakra-ui/react";
import { DatePicker } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles
import moment from "moment"; // Ensure moment is installed for date handling

const { RangePicker } = DatePicker;

const MultiDatePicker = () => {
  const [dates, setDates] = useState([]); // Initialize as an empty array
  const [isRoundTrip, setIsRoundTrip] = useState(true); // Default to Round Trip
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); // Date picker closed by default

  const handleDateChange = (values) => {
    setDates(values || []); // Ensure dates is always an array
  };

  const handleDoneClick = () => {
    setIsDatePickerOpen(false);
  };

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "300px", // Adjust width to fit the RangePicker and Checkboxes
      }}
    >
      {/* Custom wrapper for icon, RangePicker, Checkboxes, and Done button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: "100%",
          border: "none",
          borderRadius: "4px",
          padding: "8px",
          marginBottom: "8px",
        }}
        onClick={toggleDatePicker}
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
        <Input
          readOnly
          value={
            isRoundTrip
              ? dates.length === 2
                ? `${dates[0]?.format("YYYY-MM-DD")} - ${dates[1]?.format(
                    "YYYY-MM-DD"
                  )}`
                : "Depart - Return"
              : dates.length === 1
              ? `${dates[0]?.format("YYYY-MM-DD")}`
              : "Depart"
          }
          placeholder={isRoundTrip ? "Depart - Return" : "Depart"}
          sx={{
            width: "100%",
            border: "none", // Remove default border
            boxShadow: "none", // Remove shadow
            textAlign: "center",
          }}
        />
      </Box>

      {isDatePickerOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "50px",
            zIndex: 1000,
            width: "100%", // Ensure this matches the width of the input box
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            borderRadius: "4px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginBottom: "8px",
            }}
          >
            {/* Custom checkboxes */}
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                flex: 1, // Allows checkboxes to take available space
              }}
            >
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={isRoundTrip}
                  onChange={() => setIsRoundTrip(true)}
                  
                />
                <span className="checkmark"></span>
                Round Trip
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={!isRoundTrip}
                  onChange={() => setIsRoundTrip(false)}
                />
                <span className="checkmark"></span>
                One Way
              </label>
            </Box>
            
            
          
          
          {isRoundTrip ? (
            <RangePicker
              value={dates.length ? dates : null} // Ensure RangePicker value is valid
              onChange={handleDateChange}
              format="YYYY-MM-DD"
              style={{
                width: "100%",
                border: "none", // Remove default border
                boxShadow: "none", // Remove shadow
              }}
              placeholder={["Depart", "Return"]}
              open={true}
            />
          ) : (
            <DatePicker
              value={dates[0] || null} // Ensure DatePicker value is valid
              onChange={(date) => handleDateChange([date, ])}
              format="YYYY-MM-DD"
              style={{
                width: "100%",
                border: "none", // Remove default border
                boxShadow: "none", // Remove shadow
              }}
              placeholder="Depart"
              open={true}
            />
          )}
          {/* Done Button */}
          <Button
              onClick={handleDoneClick}
              sx={{
                backgroundColor: "#605dec",
                color: "white",
                borderRadius: "4px",
                padding: "5px 10px",
                border: "none",
              }}
            >
              Done
            </Button>
        </Box>
        </Box>
      )}

      {/* Inline styles to remove suffix icon and border */}
      <style jsx global>{`
        .ant-picker-range .ant-picker-input input {
          border: none !important; /* Remove border */
          box-shadow: none !important; /* Remove shadow */
          border-bottom: none !important; /* Remove bottom border */
          
        }

        .ant-picker-range .ant-picker-suffix {
          display: none ; /* Hide suffix icon */
        }
       

        .ant-picker-range.ant-picker-focused .ant-picker-input {
          border-bottom: none !important; /* Ensure no border when focused */
        }

        .custom-checkbox {
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          padding-left: 30px; /* Space for custom checkbox */
        }

        .custom-checkbox input {
          opacity: 0;
          position: absolute;
          cursor: pointer;
          height: 0;
          width: 0;
          border:none;
          apperance:none;

        }

        .custom-checkbox .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 16px; /* Adjust size */
          width: 16px; /* Adjust size */
          background-color: white; /* Background color */
          border: 2px solid #605dec; /* Border color */
          border-radius: 50%; /* Make it circular */
        }

        .custom-checkbox input:checked ~ .checkmark {
          background-color: #605dec; /* Background color when checked */
          border: 2px solid #605dec; /* Border color when checked */
        }

        .custom-checkbox .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
      `}</style>
    </Box>
  );
};

export default MultiDatePicker;
