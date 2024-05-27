import { BarChart } from '@mui/x-charts/BarChart';
import '/Users/C93670A/Desktop/web-app/imoveis-app-site/src/templatesCss/Filters.css'

export function Dashboards({ filteredChartData, cityFilter, stateFilter }) {

  const results = Object.entries(
    filteredChartData.reduce((acc, item) => {
      const { state, city, neighborhood } = item;
      const location = cityFilter ? neighborhood : stateFilter ? city : state;
      acc[location] = (acc[location] || 0) + 1;
      return acc;
    }, {})
  ).map(([location, count]) => ({
    location,
    count,
  }));  

  console.log(results)

  return (
    <>
      <BarChart
        id='barchart-valuesPerlocation'
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
