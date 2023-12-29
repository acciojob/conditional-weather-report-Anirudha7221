import React from 'react';

const Weather = ({ temperature, conditions }) => {
  // Determine the color based on the threshold
  const textColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div style={{ color: textColor }}>
      <h2>Current Temperature: {temperature}°C</h2>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default Weather;