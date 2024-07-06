import React from 'react';
import { Doughnut } from 'react-chartjs-2';


export default function PieChart({ data, options }) {
  // Sort the data by intensity in descending order and get the top 5
  const topSectors = data.sort((a, b) => b.intensity - a.intensity).slice(0, 5);

  return (
    <Doughnut
      data={{
        labels: topSectors.map((item) => item.sector),
        datasets: [
          {
            label: 'Sector',
            data: topSectors.map((item) => item.intensity),
            backgroundColor: [
              'rgba(43, 63, 229, 0.8)',
              'rgba(250, 192, 19, 0.8)',
              'rgba(253, 135, 135, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
            ],
            borderColor: [
              'rgba(43, 63, 229, 0.8)',
              'rgba(250, 192, 19, 0.8)',
              'rgba(253, 135, 135, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
            ],
          },
        ],
      }}
      options={options}
    />
  );
}
