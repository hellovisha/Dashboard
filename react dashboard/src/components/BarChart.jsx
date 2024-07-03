import { Bar } from "react-chartjs-2";
import Source from "./Source.json"

export default function BarChart({option}) {
  return (
      <Bar
      data={{
        labels: Source.map((data) => data.label),
        datasets: [
          {
            label: "revenue",
            data: Source.map((data) => data.value ),
            backgroundColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
            borderRadius: 5,
          },
        ],
      }}
      options={option}
      />
  )
}
