import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import '/Users/C93670A/Desktop/web-app/imoveis-app-site/src/templatesCss/Filters.css'

export function Filters({ data, setFilteredData, stateFilter, setStateFilter, cityFilter, setCityFilter, neighborhoodFilter, setNeighborhoodFilter }) {

  const citiesByState = {};

  const chartData = data.map(item => ({
    state: item.state,
    city: item.city,
    neighborhood: item.neighborhood,
    value: Number(item.value),
  }));

  chartData.forEach(item => {
    if (!citiesByState[item.state]) {
      citiesByState[item.state] = [];
    }
    citiesByState[item.state].push(item.city);
  });

  const filteredChartData = chartData.filter(item => {
    const stateMatch = item.state.toLowerCase().includes(stateFilter.toLowerCase());
    const cityMatch = item.city.toLowerCase().includes(cityFilter.toLowerCase());
    const neighborhoodMatch = item.neighborhood.toLowerCase().includes(neighborhoodFilter.toLowerCase());
    return stateMatch && cityMatch && neighborhoodMatch;
  });

  setFilteredData(filteredChartData)

  console.log(filteredChartData)

  return (
    <>
      <div className='filters'>
        <FormControl className='estado-filter'>
          <InputLabel>Estado</InputLabel>
          <Select
            value={stateFilter}
            onChange={e => {
              if (e.target.value === 'Todos') {
                setStateFilter('');
                setCityFilter('');
              } else {
                setStateFilter(e.target.value);
                setCityFilter('');
                setNeighborhoodFilter('');
              }
            }}
          >
            <MenuItem value="Todos">-- Todos os estados --</MenuItem>
            {Array.from(new Set(chartData.map(item => item.state))).map(state => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className='cidade-filter'>
          <InputLabel>Cidade</InputLabel>
          <Select
            value={cityFilter}
            onChange={e => {
              if (e.target.value === 'Todos') {
                setCityFilter('');
              } else {
                setCityFilter(e.target.value);
              }
              setNeighborhoodFilter('');
            }}
          >
            <MenuItem value="Todos">-- Todas as cidades --</MenuItem>
            {stateFilter
              ? Array.from(new Set(citiesByState[stateFilter])).map(city => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))
              : Array.from(new Set(chartData.map(item => item.city))).map(city => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
        <FormControl className='bairro-filter'>
          <InputLabel>Bairro</InputLabel>
          <Select
            value={neighborhoodFilter}
            onChange={e => {
              if (e.target.value === 'Todos') {
                setNeighborhoodFilter('');
              } else {
                setNeighborhoodFilter(e.target.value);
              }
            }}
          >
            {cityFilter ? (
              Array.from(new Set(chartData.filter(item => item.city === cityFilter).map(item => item.neighborhood))).map(neighborhood => (
                <MenuItem key={neighborhood} value={neighborhood}>
                  {neighborhood}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">-- Selecione uma cidade --</MenuItem>
            )}
          </Select>
        </FormControl>
      </div>
    </>
  );
}
