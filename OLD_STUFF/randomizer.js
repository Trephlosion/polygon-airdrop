import fs from 'fs';
const holderInfo = fs.readFileSync("elvenowners.json");
const parsedJson = JSON.parse(holderInfo);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

Object.keys(parsedJson).forEach((key) => {
    fs.appendFile(`./randomizedlist/${getRandomInt(2)}.json`, `"${key}",\n`, (err) => {
        if (err) {return console.error(err)} 
    }) 
    //console.log(`key: ${key}`)
})