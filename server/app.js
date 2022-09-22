const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const info_rout = require('./routes/info.routes');

const config = require('config');
const PORT = config.get('Server.port') || 4000;

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
//   res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
// },express.json());

app.use(cors({
  credentials: true, 
  origin: 'http://localhost:3000',
  methods: "GET, POST, PATCH, DELETE, OPTIONS",
},
{
  headers: {
    'access-control-allow-credentials': true,
    'access-control-allow-headers': "Origin, X-Requested-With, Content-Type, Accept",
    'access-control-allow-methods': "GET, POST, PATCH, DELETE, OPTIONS",
    'access-control-allow-origin': '*'
  }
}
)); 

app.use('/api',info_rout);


if (process.env.NODE_ENV === 'production') {
  app.use('/',express.static(path.join(__dirname,'..','client','build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'..','client','build','index.html'))
  })
}

app.listen(PORT,()=>{
    console.log(`Start server ${PORT} on port`);
    console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
});



