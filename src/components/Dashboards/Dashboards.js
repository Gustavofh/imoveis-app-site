import { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { doRequest } from '../Requests';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import '/Users/C93670A/Desktop/web-app/imoveis-app-site/src/templatesCss/Filters.css'

export function Dashboards() {
  const [data, setData] = useState([]);

  const [stateFilter, setStateFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [neighborhoodFilter, setNeighborhoodFilter] = useState('');

  const citiesByState = {};

  const chartData = data.map(item => ({
    state: item.state,
    city: item.city,
    neighborhood: item.neighborhood,
    value: Number(item.value),
  }));

  const filteredChartData = chartData.filter(item => {
    const stateMatch = item.state.toLowerCase().includes(stateFilter.toLowerCase());
    const cityMatch = item.city.toLowerCase().includes(cityFilter.toLowerCase());
    const neighborhoodMatch = item.neighborhood.toLowerCase().includes(neighborhoodFilter.toLowerCase());
    return stateMatch && cityMatch && neighborhoodMatch;
  });

  const results = Object.entries(
    filteredChartData.reduce((acc, item) => {
      if (!stateFilter) {
        const { state } = item;
        acc[state] = (acc[state] || 0) + 1;
      } if (stateFilter) {
        const { city } = item;
        acc[city] = (acc[city] || 0) + 1;
      } if (cityFilter) {
        const { neighborhood } = item;
        acc[neighborhood] = (acc[neighborhood] || 0) + 1;
      }
      return acc;
    }, {})
  ).map(([location, count]) => ({
    location,
    count,
  }));  

  chartData.forEach(item => {
    if (!citiesByState[item.state]) {
      citiesByState[item.state] = [];
    }
    citiesByState[item.state].push(item.city);
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await doRequest();
      setData(result);
    };

    fetchData();
  }, []);

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

      <BarChart
        id='barchart-valuesPerlocation'
        dataset={filteredChartData}
        xAxis={[
          {
            scaleType: 'band',
            data: filteredChartData.map(item => {
              if (cityFilter) {
                return item.neighborhood;
              } else if (stateFilter) {
                return item.city;
              } else {
                return item.state;
              }
            }),
          },
        ]}
        series={[
          {
              data: results.map(item => item.count),
          },
      ]}
        width={500}
        height={300}
      />
    </>
  );
}
