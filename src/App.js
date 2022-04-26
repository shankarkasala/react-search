import React, { useState } from 'react';
import './style.css';
//["delhi","hyderabad","banglore","indore"]
export default function App() {
  const [query, setQuery] = useState('');
  const cities = [
    'delhi',
    'hyderabad',
    'banglore',
    'indore',
    'ap',
    'arunachel',
    'bombay',
  ];

  return (
    <div>
      <input
        placeholder="Enter City"
        onKeyUp={(event) => setQuery(event.target.value)}
      />
      {cities
        .filter((city) => {
          if (query === '') {
            return city;
          } else if (city.toLowerCase().startsWith(query.toLowerCase())) {
            return city;
          }
        })
        .map((city, index) => {
          return (
            <div key={index}>
              <p>{city}</p>
            </div>
          );
        })}
      <h1>Hello StackBlitz!</h1>
    </div>
  );
}
