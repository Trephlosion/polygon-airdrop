import fs from 'fs';
const holderInfo = fs.readFileSync("holders.json");
const parsedJson = JSON.parse(holderInfo);

const addresses = Object.keys(parsedJson);
let tokens  = Object.values(parsedJson);

const tier1 = {};
const tier2 = {};
const tier3 = {}; 

 for (let i = 0; i < tokens.length; i++){
    
    if (tokens[i] >= 1) {
        tier1[addresses[i]] = 'tier 1';
    }
    if (tokens[i] >= 5){
        tier2[addresses[i]] = 'tier 2';
    } 
    if (tokens[i] >= 10){
        tier3[addresses[i]] = 'tier 3';
    }
} 

const tier1Addresses = Object.keys(tier1);
console.log('tier 1 = '+ tier1Addresses.length)

const tier2Addresses = Object.keys(tier2);
console.log('tier 2 = '+ tier2Addresses.length)

const tier3Addresses = Object.keys(tier3);
console.log('tier 3 = '+ tier3Addresses.length)

fs.writeFileSync('tier1.json', JSON.stringify(tier1Addresses, null, 2),{ flag: 'w' }) 
fs.writeFileSync('tier2.json', JSON.stringify(tier2Addresses, null, 2),{ flag: 'w' }) 
fs.writeFileSync('tier3.json', JSON.stringify(tier3Addresses, null, 2),{ flag: 'w' })
console.log('all files are ready ;)')