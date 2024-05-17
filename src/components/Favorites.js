import React, { useEffect, useState } from 'react';

export function Testando() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        {data.map(item => (
          <div key={item.id}>{item.value}</div>
        ))}
      </p>
    </div>
  );
}

