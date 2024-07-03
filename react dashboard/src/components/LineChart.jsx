import { Line } from "react-chartjs-2";
import Data from "./Data.json";

export default function LineChart({option}) {
  return (
   <Line data={{
    labels: Data.map((data) => data.label),
    datasets: [
      {
        label: "Revenue",
        data: Data.map((data) => data.revenue),
        backgroundColor: "#064FF0",
        borderColor: "#064FF0",
      },
      {
        label: "Cost",
        data: Data.map((data) => data.cost),
        backgroundColor: "#FF3030",
        borderColor: "#FF3030",
      },
      {
        label: "Cost",
        data: Data.map((data) => data.profit),
        backgroundColor: "#b012da",
        borderColor: "#b012da",
      },
    ],
   }
  }
  options={option}
   />
  )
}
