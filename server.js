const express = require('express');
const router = require('./Routes/datos');
const { route } = require('./Routes/datos');
const PORT=8081;
const app =express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('views', './views');
app.set('view engine','ejs');

app.use('/',router);

const server =app.listen(PORT, () => console.log('The server is running'));
server.on('error', ()=> console.log(`Error ${err}`));