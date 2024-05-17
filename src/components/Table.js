import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const testTable = [
    { "state": "SP", "city": "São Paulo", "neighborhood": "Centro", "value": 500000, "address": "Rua A, 123", "propertyType": "Apartamento" },
    { "state": "RJ", "city": "Rio de Janeiro", "neighborhood": "Copacabana", "value": 750000, "address": "Avenida B, 456", "propertyType": "Casa" },
    { "state": "RS", "city": "Porto Alegre", "neighborhood": "Medianeira", "value": 900809, "address": "Avenida a, 102", "propertyType": "Casa" },
    { "state": "RJ", "city": "Rio de Janeiro", "neighborhood": "Copacabana", "value": 750000, "address": "Avenida B, 456", "propertyType": "Casa" },
    { "state": "ES", "city": "Vitoria", "neighborhood": "Copacabana", "value": 750000, "address": "Avenida B, 456", "propertyType": "Casa" },
    { "state": "RJ", "city": "Rio de Janeiro", "neighborhood": "Copacabana", "value": 750000, "address": "Avenida B, 456", "propertyType": "Casa" },
    { "state": "SC", "city": "Florianopolis", "neighborhood": "Copacabana", "value": 750000, "address": "Avenida B, 456", "propertyType": "Apartamento" },
    { "state": "RJ", "city": "Rio de Janeiro", "neighborhood": "Copacabana", "value": 750000, "address": "Avenida B, 456", "propertyType": "Casa" },
    { "state": "RJ", "city": "Rio de Janeiro", "neighborhood": "Copacabana", "value": 750000, "address": "Avenida B, 456", "propertyType": "Casa" },
    { "state": "RJ", "city": "Rio de Janeiro", "neighborhood": "Copacabana", "value": 750000, "address": "Avenida B, 456", "propertyType": "Casa" },
    { "state": "RJ", "city": "Rio de Janeiro", "neighborhood": "Copacabana", "value": 750000, "address": "Avenida B, 456", "propertyType": "Casa" },
    { "state": "RJ", "city": "Rio de Janeiro", "neighborhood": "Copacabana", "value": 750000, "address": "Avenida B, 456", "propertyType": "Casa" },
]

export const FinalTable = ({ filter }) => {

    const [data, setData] = React.useState(testTable);

    const [filteredData, setFilteredData] = React.useState(data);

    React.useEffect(() => {
        const filtered = data.filter(item => {
          return (
            (filter.state ? item.state.includes(filter.state.toUpperCase()) : true) &&
            (filter.city ? item.city.includes(filter.city) : true) &&
            (filter.neighborhood ? item.neighborhood.includes(filter.neighborhood) : true)
          );
        });
        setFilteredData(filtered);
      }, [filter, data]);
    
    return (
        <TableContainer className='FinalTable' component={Paper}>
            <Table className='table' aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell><b>Estado</b></TableCell>
                    <TableCell align="right"><b>Cidade</b></TableCell>
                    <TableCell align="right"><b>Bairro</b></TableCell>
                    <TableCell align="right"><b>Valor</b></TableCell>
                    <TableCell align="right"><b>Endereço</b></TableCell>
                    <TableCell align="right"><b>Tipo de Propriedade</b></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.map((item, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                        {item.state}
                        </TableCell>
                        <TableCell align="right">{item.city}</TableCell>
                        <TableCell align="right">{item.neighborhood}</TableCell>
                        <TableCell align="right">{item.value}</TableCell>
                        <TableCell align="right">{item.address}</TableCell>
                        <TableCell align="right">{item.propertyType}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



// const Table = ({ filter }) => {
    // const [data, setData] = useState([
    //   { state: 'SP', city: 'São Paulo', neighborhood: 'Centro', value: 500000, address: 'Rua A, 123', propertyType: 'Apartamento' },
    //   { state: 'RJ', city: 'Rio de Janeiro', neighborhood: 'Copacabana', value: 750000, address: 'Avenida B, 456', propertyType: 'Casa' },
    //   // adicione mais dados conforme necessário
    // ]);
  
//     const [filteredData, setFilteredData] = useState(data);
  
    // useEffect(() => {
    //   const filtered = data.filter(item => {
    //     return (
    //       (filter.state ? item.state.includes(filter.state) : true) &&
    //       (filter.city ? item.city.includes(filter.city) : true) &&
    //       (filter.neighborhood ? item.neighborhood.includes(filter.neighborhood) : true)
    //     );
    //   });
    //   setFilteredData(filtered);
    // }, [filter, data]);
  
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Estado</th>
//             <th>Cidade</th>
//             <th>Bairro</th>
//             <th>Valor</th>
//             <th>Endereço</th>
//             <th>Tipo de Imóvel</th>
//           </tr>
//         </thead>
//         <tbody>
        //   {filteredData.map((item, index) => (
        //     <tr key={index}>
        //       <td>{item.state}</td>
        //       <td>{item.city}</td>
        //       <td>{item.neighborhood}</td>
        //       <td>{item.value}</td>
        //       <td>{item.address}</td>
        //       <td>{item.propertyType}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };