import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';
import Chart from 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const FlightHistory = () => {
  // Sample data with multiple peaks
  const data = {
    labels: ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07'], // X-axis labels
    datasets: [
      {
        data: [100, 200, 150, 300, 250, 400, 350], // Y-axis data with multiple peaks
        fill: true, // Fill the area under the curve to the origin
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#A5A4F4'); // Updated gradient start color
          gradient.addColorStop(0.44, 'rgba(195, 194, 248, 0.328125)'); // Updated gradient middle color
          gradient.addColorStop(1, 'rgba(210, 209, 250, 0)'); // Updated gradient end color
          return gradient;
        },
        borderColor: '#605DEC', // Purple Blue color
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {},
      },
    },
    scales: {
      x: {
        display: false,
        title: {
          display: false,
          text: 'Date',
        },
        grid: {
          display: false, // Hide grid lines on x-axis
        },
      },
      y: {
        display: true,
        title: {
          display: false,
        },
        grid: {
          display: true, // Display grid lines on y-axis
        },
        ticks: {
          // Set custom tick values
          stepSize: 50,
          min: 0,
          max: 500,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  // Styles for the chart container
  const chartContainerStyle = {
    borderRadius: '4px', // Reduced border radius for a flatter look
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Reduced shadow for a flatter look
    padding: '20px',
    backgroundColor: 'white', // Ensure background color
   
    
  };

  return (
    // <div style={{  margin:"20px",
    //    }}>
    <>
    <p style={{ fontSize:"18px",color: " #6E7491" }}> Price History</p>
    <div  style={chartContainerStyle}>
      
      <Line data={data} options={options} />
    </div>
    </>
    // </div>
  );
};

export default FlightHistory;
