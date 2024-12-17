import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Chart } from "react-google-charts";


function App() {
  const data = [
    ["Task", "Hours per Week"],
    ["Работа", 30],
    ["Домашняя работа", 30],
    ["Еда", 14],
    ["Семья", 31],
    ["Отдых и сон", 57],
    ["Спорт", 6],
  ];

  const options = {
    title: "Распределение времени в течение недели",
    is3D: true,
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default App
