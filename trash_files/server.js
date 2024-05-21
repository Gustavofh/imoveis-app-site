// import express from 'express';
// import mysql from 'mysql2';
// import cors from "cors";

// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// const app = express();

// export const activateAPI= () => {
//   app.use(cors(corsOptions))


//   const connection = mysql.createConnection({
//       user: 'user',
//       password: 'password',
//       host: 'localhost',
//       database: 'db'
//     });

//   connection.connect(err => {
//     if (err) {
//       console.error('Erro ao conectar ao banco de dados Mysql:', err);
//       return;
//     }
//     console.log('Conexão estabelecida com o banco de dados Mysql');
//   });

//   app.get('/api/dados', (req, res) => {
//     connection.query('SELECT * FROM imoveis', (err, results) => {
//       if (err) {
//         console.error('Erro ao executar a query:', err);
//         res.status(500).json({ error: 'Erro ao buscar dados.' });
//         return;
//       }
//       res.json(results);
//     });
//   });

//   app.listen(8080, () => {
//     console.log('Servidor backend rodando na porta 8080');
//   });
// }