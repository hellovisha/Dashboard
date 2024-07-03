import { element } from 'prop-types';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import PieChart from './components/PieChart';
import { Chart as ChartJS , defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function App() {

  const chartOptions = {
    plugins: {
      title: {
        text: "Revenue Sources",
      },
    },
  };

  const chartbarOption = {
    plugins: {
      title: {
        text: "Revenue Source",
      },
    },
  };

  const LineOption = {
    elements:{
      line:{
        tension:0.3
      },
    },
    plugins: {
      title: {
        text:  "Monthly Revenue & Cost",
      },
    },
  };

  return (
    <>
    <Navbar/>
      <div className='App'>
        <div className="Chart Line">
        <LineChart option={LineOption}/>
        </div>
        <div className="Chart Bar">
        <BarChart option={chartbarOption}/>
        </div>
        <div className="Chart Pie">
        <PieChart options={chartOptions}/>
        </div>
      </div>
    </>
  )
}

export default App
