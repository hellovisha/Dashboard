// src/components/BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data, option }) => {
  const chartData = {
    labels: data.map(item => item.topic),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(item => item.intensity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} options={option} />;
};

export default BarChart;
