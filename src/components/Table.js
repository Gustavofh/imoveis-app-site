import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { doRequest } from './Requests';
import '../templatesCss/table.css'

const testTable = await doRequest()

export const FinalTable = () => {

    const [data, setData] = React.useState(testTable);

    const [filteredData, setFilteredData] = React.useState(data);
    
    return (
        <div className='main-table'>
            <TableContainer className='FinalTable' component={Paper}>
                <Table className='table' aria-label="simple table">
                <TableHead>
                    <TableRow className='table-head'>
                        <TableCell><b>Estado</b></TableCell>
                        <TableCell align="right"><b>Cidade</b></TableCell>
                        <TableCell align="right"><b>Bairro</b></TableCell>
                        <TableCell align="right"><b>Endereço</b></TableCell>
                        <TableCell align="right"><b>Tipo de Propriedade</b></TableCell>
                        <TableCell align="right"><b>Valor</b></TableCell>
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
                            <TableCell align="right">{item.address}</TableCell>
                            <TableCell align="right">{item.propertyType}</TableCell>
                            <TableCell align="right">{item.value}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

// export const FinalTable = ({ filter }) => {

//     const [data, setData] = React.useState(testTable);

//     const [filteredData, setFilteredData] = React.useState(data);

//     React.useEffect(() => {
//         const filtered = data.filter(item => {
//           return (
//             (filter.state ? item.state.includes(filter.state.toUpperCase()) : true) &&
//             (filter.city ? item.city.includes(filter.city) : true) &&
//             (filter.neighborhood ? item.neighborhood.includes(filter.neighborhood) : true)
//           );
//         });
//         setFilteredData(filtered);
//       }, [filter, data]);
    
//     return (
//         <div className='main-table'>
//             <TableContainer className='FinalTable' component={Paper}>
//                 <Table className='table' aria-label="simple table">
//                 <TableHead>
//                     <TableRow className='table-head'>
//                         <TableCell><b>Estado</b></TableCell>
//                         <TableCell align="right"><b>Cidade</b></TableCell>
//                         <TableCell align="right"><b>Bairro</b></TableCell>
//                         <TableCell align="right"><b>Endereço</b></TableCell>
//                         <TableCell align="right"><b>Tipo de Propriedade</b></TableCell>
//                         <TableCell align="right"><b>Valor</b></TableCell>
//                     </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {filteredData.map((item, index) => (
//                             <TableRow
//                             key={index}
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//                             <TableCell component="th" scope="row">
//                             {item.state}
//                             </TableCell>
//                             <TableCell align="right">{item.city}</TableCell>
//                             <TableCell align="right">{item.neighborhood}</TableCell>
//                             <TableCell align="right">{item.address}</TableCell>
//                             <TableCell align="right">{item.propertyType}</TableCell>
//                             <TableCell align="right">{item.value}</TableCell>
//                         </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// }

// import React, { useMemo } from 'react';
// import { useTable, useFilters } from 'react-table';
// import { doRequest } from './Requests';
// import '../templatesCss/table.css';

// export const FinalTable = ({ filter }) => {
//     const columns = useMemo(
//         () => [
//             { Header: 'Estado', accessor: 'state' },
//             { Header: 'Cidade', accessor: 'city' },
//             { Header: 'Bairro', accessor: 'neighborhood' },
//             { Header: 'Endereço', accessor: 'address' },
//             { Header: 'Tipo de Propriedade', accessor: 'propertyType' },
//             { Header: 'Valor', accessor: 'value' },
//         ],
//         []
//     );

//     //   const data = doRequest(); // Fetch your data here
//     const data = [
//         {
//             "state": "SP",
//             "city": "São Paulo",
//             "neighborhood": "Centro",
//             "address": "Rua A, 123",
//             "propertyType": "Apartamento",
//             "value": 500000
//         },
//         {
//             "state": "RJ",
//             "city": "Rio de Janeiro",
//             "neighborhood": "Copacabana",
//             "address": "Avenida B, 456",
//             "propertyType": "Casa",
//             "value": 750000
//         },
//         {
//             "state": "RS",
//             "city": "Porto Alegre",
//             "neighborhood": "Medianeira",
//             "address": "Tv. Lucas de Lima, 102",
//             "propertyType": "Casa",
//             "value": 100000
//         }
//     ]

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//     } = useTable(
//         {
//             columns,
//             data,
//         },
//         useFilters // Enable filtering
//     );

//     return (
//         <div className='FinalTable'>
//             <table {...getTableProps()}>
//                 <thead>
//                     {headerGroups.map(headerGroup => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map(column => (
//                                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {rows.map(row => {
//                         prepareRow(row);
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map(cell => (
//                                     <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                 ))}
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

