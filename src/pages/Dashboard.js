import { useState, useEffect } from 'react';
import { Dashboards } from '../components/Dashboards/Dashboards'
import { Filters } from '../components/Filters';
import { doRequest } from '../components/Requests';

function Dashboard() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [stateFilter, setStateFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [neighborhoodFilter, setNeighborhoodFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await doRequest();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className='dashboard'>
      <Filters 
        setFilteredData={setFilteredData} 
        data={data} 
        stateFilter={stateFilter} 
        setStateFilter={setStateFilter} 
        cityFilter={cityFilter} 
        setCityFilter={setCityFilter} 
        neighborhoodFilter={neighborhoodFilter}
        setNeighborhoodFilter={setNeighborhoodFilter} 
      />
      <Dashboards filteredChartData={filteredData} stateFilter={stateFilter} cityFilter={cityFilter} /> 
    </div>
  );
}

export default Dashboard;