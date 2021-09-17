import Web3 from 'web3';
import {INFURA_ADDRESS, ADDRESS, ABI} from "/config.js";
var fs = require('fs');


/*--------------------SMART CONTRACT STUFF--------------------*/
const provider = new Web3.providers.HttpProvider(INFURA_ADDRESS)
const web3infura = new Web3(provider);
const lambContract = new web3infura.eth.Contract(ABI, ADDRESS)


function lambChecker() {

async function getAllHolders() {
  console.log('fetching data...')
  // Step 1 - Get the total population
  const totalSupply = await lambContract.methods.totalSupply().call();

  // Step 2 - Iterate over live tokens and log owners
  const holder = {};
  for(let i = 0; i < 101; i++){
    const ownerAddress = await lambContract.methods.ownerOf(i).call();
    const ownerTokens = await lambContract.methods.balanceOf(ownerAddress).call();
    if(!holder[ownerAddress]){
      holder[ownerAddress] = ownerTokens; 
    } else {
      console.log('<-- Amount of Holders')
      holder[ownerAddress]++;
    }
  }

  console.log('file is ready ;)')

  // Step 3 - Saving the snapshot
  fs.writeFile('holders.json', JSON.stringify(holder, null, 2),{ flag: 'w' },function (err) {
    if (err) return console.log(err);
    console.log("file has been saved"); 
  })

}; 

return (
<div id="body" className="flex flex-col items-center justify-center min-h-screen py-2">
  <div>
    <button onClick={() => getAllHolders()} id="rcorners" className="mt-6 Candycane text-5xl border-7 bg-purple-700 text-white hover:bg-purple-600 p-2 px-2 ">Fetch <b>Lamb Holder</b> Data</button>
  </div>      
</div>) 
}

export default lambChecker