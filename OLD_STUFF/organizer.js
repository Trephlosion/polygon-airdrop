import fs from 'fs';
const holderInfo = fs.readFileSync("ethalien.json");
const parsedJson = JSON.parse(holderInfo);

const addresses = Object.keys(parsedJson);
let tokens  = Object.values(parsedJson);

const xmasdrop = {};

 for (let i = 0; i < tokens.length; i++){
    if (tokens[i] >= 5){
        xmasdrop[addresses[i]] = 5;
    } 
} 


const xmasAddresses = Object.keys(xmasdrop);
console.log('xmas length = '+ xmasAddresses.length)
fs.writeFileSync('alienxmasdrop.json', JSON.stringify(xmasAddresses, null, 2),{ flag: 'w' }) 

console.log('merry christmas ;)')