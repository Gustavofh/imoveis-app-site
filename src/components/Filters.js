import React, { useState } from 'react';

export function Filter({ onFilter }) {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const handleFilter = () => {
    onFilter({ state, city, neighborhood });
  };

  return (
    <div>
      <label>
        Estado:
        <input type="text" value={state} onChange={(e) => setState(e.target.value.toLowerCase)} />
      </label><br/>
      <label>
        Cidade:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value.toLowerCase)} />
      </label><br/>
      <label>
        Bairro:
        <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value.toLowerCase)} />
      </label>
      <button onClick={handleFilter}>Filtrar</button>
    </div>
  );
};
