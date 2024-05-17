import React, { useState } from 'react';

export function Filter({ onFilter }) {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const handleFilter = () => {
    onFilter({ state, city, neighborhood });
  };

  return (
    <div className='Filters'><br/>
      <label>
        Estado:
        <input className='input-state' type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </label>
      <label>
        Cidade:
        <input className='input-city' type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <label>
        Bairro:
        <input className='input-neighborhood' type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
      </label><br/><br/>
        <button className='filter-button' onClick={handleFilter}>Filtrar</button>
      <br/>
    </div>
  );
};
