import React, { useState } from 'react';
import NumberTable from './NumberTable';
import './style.css';



function App() {
  const [number, setNumber] = useState(0);

  const handleNumberChange = (e) => {
    const value = parseInt(e.target.value);
    setNumber(value || 0);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter a number"
      />
      <NumberTable number={number} />
    </div>
  );
}

export default App;
