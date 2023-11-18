/* 
import { api } from './services/api.service.js';
import convert from 'xml-js';
import { save } from './utils/data.js'; */
const express = require('express');
const app = express();
const PORT = 3000;

const routes = require('./routes/routes');
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

/* const players = await api('get', 'players');
save('players', players); */

/* const universe = await api('get', 'universe');
save('universe', universe); */