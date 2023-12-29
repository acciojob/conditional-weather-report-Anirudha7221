
import React from "react";
import { useState } from "react";
import './../styles/App.css';
import Weather from "./Weather";

const App = () => {
  const weatherData = { temperature: 25, conditions: "Sunny" };
  const threshold = 20;
  const temperatureClass = weatherData.temperature > threshold ? 'above-threshold' : 'below-threshold';

  return (
    <div className="main">
      <p>
        Temperature:{" "}<span className={temperatureClass}>{weatherData.temperature}</span>
      </p>
      <p>Conditions: {weatherData.conditions}
      
      </p>

    </div>
  );
};

export default App