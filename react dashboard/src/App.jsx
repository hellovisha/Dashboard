import { element } from 'prop-types';
import React, { useState, useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import PieChart from './components/PieChart';
import { Chart as ChartJS , defaults } from "chart.js/auto";
import axios from 'axios';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/items/')
      .then(response => {
        console.log(response)
        setItems(response.data);
      })
      .catch(error => {
        console.log("There was an error fetching the data!", error);
      });
  }, []);
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
      <div className="App">
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p><strong>End Year:</strong> {item.end_year}</p>
            <p><strong>Intensity:</strong> {item.intensity}</p>
            <p><strong>Sector:</strong> {item.sector}</p>
            <p><strong>Topic:</strong> {item.topic}</p>
            <p><strong>Insight:</strong> {item.insight}</p>
            <p><strong>Start Year:</strong> {item.start_year}</p>
            <p><strong>Region:</strong> {item.region}</p>
            <p><strong>Impact:</strong> {item.impact}</p>
            <p><strong>Added:</strong> {item.added}</p>
            <p><strong>Published:</strong> {item.published}</p>
            <p><strong>Country:</strong> {item.country}</p>
            <p><strong>Relevance:</strong> {item.relevance}</p>
            <p><strong>Pestle:</strong> {item.pestle}</p>
            <p><strong>Source:</strong> {item.source}</p>
            <p><strong>Likelihood:</strong> {item.likelihood}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
