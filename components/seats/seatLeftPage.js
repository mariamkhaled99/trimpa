import React, { useState, useRef, useEffect } from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import { Seats } from "@/app/data";

const BusinessSeatColor = "#22C3A6";
const OccupiedSeatColor = "#E9E8FC";
const EconomySeatColor = "#605DEC";
const SelectedSeatColor = "red";

const SeatLeftPage = ({ selectedSeat, onSeatSelect }) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight,
      });
    }
  }, [imageRef]);

  const handleSeatClick = (seat) => {
    onSeatSelect(seat);
  };

  return (
    <>
      <Box>
        {/* Logo */}
        <Link href="/" passHref>
          <Image src="/logo.svg" alt="Logo" />
        </Link>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflowY="auto"
        overflowX="hidden" // Hide overflow to remove scrollbar
        position="relative"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
          position="relative"
        >
          <Image
            ref={imageRef}
            src="/seats/plane.svg" // Replace with your image path
            alt="Airplane Seat Map"
            maxWidth="none"
            maxHeight="none"
            height="100%"
            width="auto"
            useMap="#seats-map" // Associate image with the image map
          />

          <svg
            width="2426"
            height="2965"
            style={{
              position: "absolute",
              pointerEvents: "none",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${imageDimensions.width} ${imageDimensions.height}`}
          >
            {Seats.map((seat) => {
              const [left, top, right, bottom] = seat.coords
                .split(",")
                .map(Number);
              const width = right - left;
              const height = bottom - top;

              return (
                <rect
                  key={seat.id}
                  x={left}
                  y={top}
                  width={width}
                  height={height}
                  rx={4}
                  fill={
                    seat.status === "occupied"
                      ? OccupiedSeatColor
                      : selectedSeat && selectedSeat.id === seat.id
                      ? SelectedSeatColor
                      : seat.class === "Economy"
                      ? EconomySeatColor
                      : BusinessSeatColor
                  }
                  style={{ pointerEvents: "none" }}
                />
              );
            })}
          </svg>

          <map name="seats-map">
            {Seats.map((seat) => (
              <area
                key={seat.id}
                shape="rect"
                coords={seat.coords}
                onClick={() => handleSeatClick(seat)}
                style={{
                  cursor:
                    seat.status === "occupied" ? "not-allowed" : "pointer",
                  backgroundColor: "transparent",
                }}
                alt={`Seat ${seat.id}`}
              />
            ))}
          </map>
        </Box>
      </Box>
    </>
  );
};

export default SeatLeftPage;
