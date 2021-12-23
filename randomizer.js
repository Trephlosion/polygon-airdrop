import fs from 'fs';
const holderInfo = fs.readFileSync("christmas_nonmixed.json");
const parsedJson = JSON.parse(holderInfo);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

Object.keys(parsedJson).forEach((key) => {
    fs.appendFile(`./randomizedlist/test${getRandomInt(6)}.json`, `"${key}",\n`, (err) => {
        if (err) {return console.error(err)} 
    }) 
    //console.log(`key: ${key}`)
})