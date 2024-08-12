import React, { useState, useEffect } from "react";
import Link from "next/link";
import { flights } from "@/app/data";
import Image from "next/image";

const FlightTable = ({ onSelectFlight, onClearSelection }) => {
  const [selectedRow, setSelectedRow] = useState(null);
 
  const handleRowClick = (flight) => {
    console.log("Setting Selected Row:", flight.flightID);
    setSelectedRow(flight.flightID);
    onSelectFlight(flight);
  };

  useEffect(() => {
    if (onClearSelection) {
      setSelectedRow(null); // Reset selected row when clearing selection
    }
  }, [onClearSelection]);

  return (
    <div style={{ padding: "20px", maxWidth: "100%", overflowX: "auto" }}>
      <p style={{ fontSize: "18px", color: "#6e7491" }}>
        Choose a
        <Link href="#" style={{ color: "#605DEC", textDecoration: "none" }}>
          departing
        </Link>
        flight
      </p>
      <div
        style={{
          border: "1px solid #E9E8FC",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div style={{ height: "400px", overflowY: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
            {flights.map((flight, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(flight)}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    selectedRow === flight.flightID ? "#F6F6FE" : "transparent",
                }}
              >
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  {flight.imgsrc && (
                    <Image
                      src={flight.imgsrc}
                      alt={flight.airline}
                      width={40}
                      height={40}
                    />
                  )}
                </td>
                <td
                  style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                >
                  <div
                    style={{
                      paddingBottom: "4px",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "21.82px",
                    }}
                  >
                    {flight.flightDuration}
                  </div>
                  <div
                    style={{
                      paddingBottom: "4px",
                      color: "#7C8DB0",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "21.82px",
                    }}
                  >
                    {flight.airline}
                  </div>
                </td>
                <td
                  style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                >
                  <div
                    style={{
                      paddingBottom: "4px",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "21.82px",
                    }}
                  >
                    {flight.startDate} - {flight.endDate}
                  </div>
                </td>
                <td
                  style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                >
                  <div>
                    {flight.stopNumber >= 1 ? (
                      <>
                        <div style={{ paddingBottom: "4px" }}>
                          {flight.stopNumber} stop
                          {flight.stopNumber > 1 ? "s" : ""}
                        </div>
                        <div
                          style={{
                            paddingBottom: "4px",
                            color: "#7C8DB0",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "21.82px",
                          }}
                        >
                          {flight.stopDuration}
                        </div>
                      </>
                    ) : (
                      <div style={{ paddingBottom: "4px" }}>Nonstop</div>
                    )}
                  </div>
                </td>
                <td
                  style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                >
                  <div>${flight.price}</div>
                  <div
                    style={{
                      paddingBottom: "4px",
                      color: "#7C8DB0",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "21.82px",
                    }}
                  >
                    {flight.tripType}
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FlightTable;
