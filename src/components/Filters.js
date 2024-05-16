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
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </label>
      <label>
        Cidade:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <label>
        Bairro:
        <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
      </label><br/><br/>
      <button className='filter-btn' onClick={handleFilter}>Filtrar</button>
      <br/>
    </div>
  );
};
