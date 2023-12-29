
import React from "react";
import { useState } from "react";
import './../styles/App.css';
import Weather from "./Weather";

const App = () => {

  const weatherData = { temperature: 25, conditions: 'Sunny' };
  return (
    <div className="App">
      <Weather temperature={weatherData.temperature} conditions={weatherData.conditions} />
    </div>
  );
};

export default App