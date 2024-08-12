import React, { useState } from 'react';

const FlightGrid = () => {
  // Example data
  const dates = ['01/01', '01/02', '01/03', '01/04', '01/05'];
  const times = ['01/01', '01/02', '01/03', '01/04', '01/05'];
  const prices = [
    [100, 200, 150, 300, 250],
    [110, 210, 160, 310, 260],
    [120, 220, 170, 320, 270],
    [130, 230, 180, 330, 280],
    [140, 240, 190, 340, 290],
  ];

  const [hoveredCell, setHoveredCell] = useState({ row: null, col: null });

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${dates.length + 1}, 1fr)`,
    gridTemplateRows: `repeat(${times.length + 1}, 1fr)`,
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '5px',
    backgroundColor: 'white',
    overflow: 'hidden',
    fontSize: "12px",
    fontWeight: "600",
    fontFamily: "Nunito Sans, sans-serif",
    lineHeight: "16.37px",
  };

  const gridHeaderStyle = {
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: '10px',
    border: '1px solid #E9E8FC',
    color: "#52556F",
    fontSize: "12px",
    fontWeight: "600",
    fontFamily: "Nunito Sans, sans-serif",
    lineHeight: "16.37px",
  };

  const gridCellStyle = {
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: '10px',
    border: '1px solid #E9E8FC',
    color: "#6E7491",
    fontSize: "12px",
    fontWeight: "600",
    fontFamily: "Nunito Sans, sans-serif",
    lineHeight: "16.37px",
  };

  const hoveredStyle = {
    backgroundColor: '#e0e0e0',
  };

  return (
    <>
      <p style={{ fontSize: "18px", color: "#6E7495" }}> PriceGrid <span style={{ fontSize: "18px", color: " #6E7491" }}></span> (Flexible Date) </p>
      <div style={gridContainerStyle}>
        <div style={gridHeaderStyle}></div>
        {dates.map((date, index) => (
          <div
            key={`header-${index}`}
            style={{
              ...gridHeaderStyle,
              backgroundColor: hoveredCell.col === index ? '#e0e0e0' : '#fff',
            }}
          >
            {date}
          </div>
        ))}
        {times.map((time, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            <div
              style={{
                ...gridCellStyle,
                backgroundColor: hoveredCell.row === rowIndex ? '#e0e0e0' : '#fff',
                color: "#52556F",
              }}
            >
              {time}
            </div>
            {prices[rowIndex] &&
              prices[rowIndex].map((price, colIndex) => (
                <div
                  key={`cell-${rowIndex}-${colIndex}`}
                  style={{
                    ...gridCellStyle,
                    backgroundColor:
                      hoveredCell.row === rowIndex || hoveredCell.col === colIndex
                        ? '#e0e0e0'
                        : '#fff',
                  }}
                  onMouseEnter={() =>
                    setHoveredCell({ row: rowIndex, col: colIndex })
                  }
                  onMouseLeave={() => setHoveredCell({ row: null, col: null })}
                >
                  {price} $
                </div>
              ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default FlightGrid;
