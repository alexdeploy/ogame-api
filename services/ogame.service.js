// dinamic import of fetch
const fetch = require('node-fetch');

const protocol = `https://`
const server = `s198-es`

const api = async (method, data, ...params) => {

    switch (data) {
        case 'players':
        case 'universe':
        case 'universes':
        case 'alliances':
        case 'localization':
            const uri = `${protocol}${server}.ogame.gameforge.com/api/${data}.xml`
            console.log(uri);
            const response = await fetch(uri, { method: 'GET' })
            const xml = await response.text();
            return xml;
        case 'playerData':
            const id = params[0].id;
            const uri2 = `${protocol}${server}.ogame.gameforge.com/api/${data}.xml?id=${id}`
            const response2 = await fetch(uri2, { method: 'GET' })
            const xml2 = await response2.text();
            return xml2;
        case 'serverData':
            return await post(data);
        default:
            return null;
    }
}

module.exports = { api };