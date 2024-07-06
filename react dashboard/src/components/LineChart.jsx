import React from "react";
import { Line } from "react-chartjs-2";


export default function LineChart({ data, option }) {
  return (
    <Line
      data={{
        labels: data.map((item) => item.topic), // or any other field you want to use as labels
        datasets: [
          {
            label: "Intensity",
            data: data.map((item) => item.intensity),
            backgroundColor: "rgba(6, 79, 240, 0.2)",
            borderColor: "#064FF0",
            fill: false,
          },
          {
            label: "Relevance",
            data: data.map((item) => item.relevance),
            backgroundColor: "rgba(255, 48, 48, 0.2)",
            borderColor: "#FF3030",
            fill: false,
          },
          {
            label: "Likelihood",
            data: data.map((item) => item.likelihood),
            backgroundColor: "rgba(176, 18, 218, 0.2)",
            borderColor: "#b012da",
            fill: false,
          },
        ],
      }}
      options={option}
    />
  );
}
