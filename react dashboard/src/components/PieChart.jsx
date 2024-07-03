import Source from "./Source.json";
import { Doughnut } from "react-chartjs-2";

export default function PieChart({options}) {
  return (
    <Doughnut
      data={{
        labels: Source.map((data) => data.label),
        datasets: [
          {
            label: "revenue",
            data: Source.map((data) => data.value),
            backgroundColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
            borderColor:[
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
          },
        ],
      }}
      options={options}
    />
  )
}
