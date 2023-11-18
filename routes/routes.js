const express = require('express');
const router = express.Router();
const convert = require('xml-js');
const { api } = require('../services/ogame.service.js');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/players', async (req, res) => {
    const response = await api('get', 'players');
    const jsonData = convert.xml2json(response, { compact: true, spaces: 4 });
    const players = JSON.parse(jsonData).players;

    res.status(200).send(players);
});

router.get('/players/:id', async (req, res) => {
    const response = await api('get', 'players');
    const jsonData = convert.xml2json(response, { compact: true, spaces: 4 });
    const players = JSON.parse(jsonData).players.player;

    const id = req.params.id;
    const player = players.find(player => player._attributes.id === id) || null;

    res.status(200).send(player);
});

router.get('/playerData/:id', async (req, res) => {
    const id = req.params.id;
    const response = await api('get', 'playerData', {id: id, categorie: 'resources'});
    const jsonData = convert.xml2json(response, { compact: true, spaces: 4 });
    const player = JSON.parse(jsonData);

/*     const id = req.params.id;
    const player = players.find(player => player._attributes.id === id) || null; */

    res.status(200).send(player);
});

router.get('/universe', async (req, res) => {
    const response = await api('get', 'universe');
    const jsonData = convert.xml2json(response, { compact: true, spaces: 4 });
    const universe = JSON.parse(jsonData);
    res.status(200).send(universe);
});

router.get('/localization', async (req, res) => {
    const response = await api('get', 'localization');
    const jsonData = convert.xml2json(response, { compact: true, spaces: 4 });
    const localization = JSON.parse(jsonData);
    res.status(200).send(localization);
});

router.get('/alliances', async (req, res) => {
    const response = await api('get', 'alliances');
    const jsonData = convert.xml2json(response, { compact: true, spaces: 4 });
    const alliances = JSON.parse(jsonData);
    res.status(200).send(alliances);
});



module.exports = router;