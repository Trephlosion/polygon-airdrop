import fs from 'fs';
const saleHistory = fs.readFileSync("timedsales.txt", "utf8");

const splitAddresses = saleHistory.split(',');
console.log('# of transactions -> ' + splitAddresses.length)
 var counts = {};
splitAddresses.forEach(function(address) { counts[address] = (counts[address] || 0)+1; });

fs.writeFileSync('sortedsales.json', JSON.stringify(counts, null, 2),{ flag: 'w' })
console.log("timedsales.txt has been successfully sorted under sortedsales.json"); 