// src/components/ChartComponent.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
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

    return <Bar data={chartData} />;
};

export default ChartComponent;
