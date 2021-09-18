import fs from 'fs';
const holderInfo = fs.readFileSync("24hrsales.json");
const parsedJson = JSON.parse(saleHistory);

//console.log(saleHistory);