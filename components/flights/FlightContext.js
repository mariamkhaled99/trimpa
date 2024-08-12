import React, { createContext, useState } from 'react';

// Create Context
export const FlightContext = createContext();

// Create Provider Component
export const FlightProvider = ({ children }) => {
  // Retrieve flight data from localStorage directly
  const flightData = JSON.parse(localStorage.getItem("selectedFlight")) || {
    imgsrc: "/airport/delta.svg",
    price: 200,
    flightDuration: "16h 45m",
    airline: "Japan Airlines",
    arrival: "San Francisco",
    startDate: "7:00AM",
    endDate: "9:30AM",
    tripType: "round trip",
    stopNumber: 1,
    flightID: "FBGSYKW123",
    fromAirport: "SFO",
    fromCountry: "US",
    fromCity: "California",
    toAirport: "NRT",
    toCountry: "US",
    toCity: "San Francisco",
    stopDuration: "2h 45m",
  };

  const [selectedFlight, setSelectedFlight] = useState(flightData);

  // Update progress based on flight data
  const determineProgress = () => {
    const tripType = flightData.tripType;
    return (tripType === "one way" || tripType === "round trip") ? "Departing" : "";
  };

  const [progress, setProgress] = useState(determineProgress());

  return (
    <FlightContext.Provider value={{ selectedFlight, progress }}>
      {children}
    </FlightContext.Provider>
  );
};
