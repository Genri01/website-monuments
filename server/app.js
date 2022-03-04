const express = require('express');
const app = express();

const PORT = config.get('Server.port') || 8080;

app.listen(PORT,()=>{
    console.log(`Start server ${PORT} on port`);
    console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
});



