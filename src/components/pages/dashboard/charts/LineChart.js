import {
  CategoryScale,
  Chart,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

Chart.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineController,
  CategoryScale,
  LineElement,
);

const LineChart = ({ data }) => {
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed.y;
            return value !== null ? value : '';
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
