import fs from 'fs';
import convert from 'xml-js';

export const save = async (type, data) => {
    const result = convert.xml2json(data, { compact: true, spaces: 4 });
    fs.writeFileSync(`./data/${type}.json`, result);
};