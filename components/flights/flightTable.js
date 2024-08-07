import React, { useState } from "react";

// Sample data with more rows for testing
const flights = [
  {
    imgsrc: "",
    price: 200,
    flightDuration: "16h 45m",
    airline: "Chicago",
    arrival: "San Francisco",
    startDate: "7:00AM",
    tripType: "round trip",
  },
  {
    imgsrc: "",
    price: 300,
    flightDuration: "16h 45m",
    airline: "Miami",
    arrival: "Dallas",
    startDate: "7:00AM",
    tripType: "round trip",
  },
  {
    imgsrc: "",
    price: 400,
    flightDuration: "16h 45m",
    airline: "Boston",
    arrival: "Seattle",
    startDate: "7:00AM",
    tripType: "one way",
  },
  {
    imgsrc: "",
    price: 500,
    flightDuration: "16h 45m",
    airline: "San Diego",
    arrival: "Atlanta",
    startDate: "7:00AM",
    tripType: "round trip",
  },
  {
    imgsrc: "",
    price: 600,
    flightDuration: "16h 45m",
    airline: "Houston",
    arrival: "Denver",
    startDate: "7:00AM",
    tripType: "one way",
  },
  {
    imgsrc: "",
    price: 700,
    flightDuration: "16h 45m",
    airline: "Phoenix",
    arrival: "Philadelphia",
    startDate: "7:00AM",
    tripType: "round trip",
  },
  {
    imgsrc: "",
    price: 800,
    flightDuration: "16h 45m",
    airline: "San Antonio",
    arrival: "San Jose",
    startDate: "7:00AM",
    tripType: "one way",
  },
  {
    imgsrc: "",
    price: 900,
    flightDuration: "16h 45m",
    airline: "Dallas",
    arrival: "San Diego",
    startDate: "7:00AM",
    tripType: "round trip",
  },
  {
    imgsrc: "",
    price: 1000,
    flightDuration: "16h 45m",
    airline: "San Francisco",
    arrival: "New York",
    startDate: "7:00AM",
    tripType: "one way",
  },
];

const FlightTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (price) => {
    setSelectedRow(price);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "100%", overflowX: "auto" }}>
      <div style={{ height: "300px", overflowY: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {flights.map((flight) => (
              <tr
                key={flight.price}
                onClick={() => handleRowClick(flight.price)}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    selectedRow === flight.price ? "#e0e0e0" : "transparent",
                }}
              >
                <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                  <div
                    style={{
                      
                      paddingBottom: "4px",
                    }}
                  >
                    {flight.flightDuration}
                  </div>
                  <div>{flight.price}</div>
                </td>
                <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                  <div
                    style={{
                      
                      paddingBottom: "4px",
                    }}
                  >
                    {flight.airline}
                  </div>
                  <div>{flight.startDate}</div>
                </td>
                <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                  <div
                    style={{
                      
                      paddingBottom: "4px",
                    }}
                  >
                    {flight.arrival}
                  </div>
                  <div>{flight.tripType}</div>
                </td>
                <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                  <div
                    style={{
                     
                      paddingBottom: "4px",
                    }}
                  >
                    {flight.startDate}
                  </div>
                  <div>{flight.flightDuration}</div>
                </td>
                <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                  <div
                    style={{
                      
                      paddingBottom: "4px",
                    }}
                  >
                    {flight.tripType}
                  </div>
                  <div>{flight.airline}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightTable;
