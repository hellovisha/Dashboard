
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data, option }) => {
  
  const topData = data.sort((a, b) => b.intensity - a.intensity).slice(0, 10);

  const chartData = {
    labels: topData.map(item => item.topic),
    datasets: [
      {
        label: 'Intensity',
        data: topData.map(item => item.intensity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} options={option} />;
};

export default BarChart;
