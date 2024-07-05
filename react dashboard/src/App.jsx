import React, { useState, useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Navbar from './components/Navbar';
import FilterComponent from './components/FilterComponent';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import axios from 'axios';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/items/')
      .then(response => {
        setItems(response.data);
        setFilteredItems(response.data); // Initialize filtered items
      })
      .catch(error => {
        console.log("There was an error fetching the data!", error);
      });
  }, []);

  const handleFilter = (filters) => {
    const { endYear, topic, sector, region, pestle, source, swot, country, city } = filters;
    const filtered = items.filter(item => {
      return (endYear ? item.end_year === endYear : true) &&
             (topic ? item.topic === topic : true) &&
             (sector ? item.sector === sector : true) &&
             (region ? item.region === region : true) &&
             (pestle ? item.pestle === pestle : true) &&
             (source ? item.source === source : true) &&
             (swot ? item.swot === swot : true) &&
             (country ? item.country === country : true) &&
             (city ? item.city === city : true);
    });
    setFilteredItems(filtered);
  };

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
    elements: {
      line: {
        tension: 0.3,
      },
    },
    plugins: {
      title: {
        text: "Monthly Revenue & Cost",
      },
    },
  };

  return (
    <>
      <Navbar />
      <FilterComponent onFilter={handleFilter} />
      <div className='App'>
        <div className="Chart Line">
          <LineChart data={filteredItems} option={LineOption} />
        </div>
        <div className="Chart Bar">
          <BarChart data={filteredItems} option={chartbarOption} />
        </div>
        <div className="Chart Pie">
          <PieChart data={filteredItems} options={chartOptions} />
        </div>
      </div>
      
    </>
  );
}

export default App;
