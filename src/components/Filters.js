import React, { useState } from 'react';
import "../templatesCss/button.css"; 
import "../templatesCss/filters.css"; 

export function Filter({ onFilter }) {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [isFilterOpen, setFilterMenu] = useState(false); // Adicione o estado isFilterOpen aqui

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ state, city, neighborhood });
    setFilterMenu(!isFilterOpen);
  };

  const handleClearFilters = () => {
    setState('');
    setCity('');
    setNeighborhood('');
    onFilter({ state: '', city: '', neighborhood: '' });
    setFilterMenu(!isFilterOpen);
  };

  const handleFilterClick = () => {
    setFilterMenu(!isFilterOpen); // Alterna o valor do estado isFilterOpen
  };

  return (
    <>
      <div className='filter-btn'>
        <button className={`menu-icon-filter ${isFilterOpen ? "open" : ""}`} onClick={handleFilterClick}>FILTER</button>
      </div>
      <div className='Filters'>
      {isFilterOpen && (
        <div className='menu-content-filter'>
          <form onSubmit={handleFilter}>
              <ul>
                <li>
                  <label>
                    Estado:
                    <input className='input-state' type="text" value={state} onChange={(e) => setState(e.target.value)} />
                  </label>
                </li>
                <li>
                  <label>
                    Cidade:
                    <input className='input-city' type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                  </label>
                </li>
                <li>
                  <label>
                    Bairro:
                    <input className='input-neighborhood' type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
                  </label>
                </li>
              </ul>
            <div className='ButtonGroup'>
              <button className='filter-button' type="submit" onClick={handleFilter}>Filtrar</button>
              <button className='clear-button' type="submit" onClick={handleClearFilters}>Limpar Filtros</button>
            </div>
          </form>
        </div>
      )}
      </div>
    </>
  );
}
