/* Again, HUGE thanks to xtremetom in the creation of this address fetcher 
https://gist.github.com/CoolCatsNFTPublic/c59ad54b6faf349dd38a3c15e2d14088#file-getallholders-js */

import Web3 from "web3";
import { INFURA_ADDRESS, ADDRESS, ABI } from "./config.js";
import fs from "fs";
import { ethers } from "ethers";

/*--------------------SMART CONTRACT STUFF--------------------*/
const provider = new Web3.providers.HttpProvider(INFURA_ADDRESS);
const web3infura = new Web3(provider);
const contract = new web3infura.eth.Contract(ABI, ADDRESS);
/*---------------------------OR-------------------------------
 const _provider = new ethers.providers.InfuraProvider("homestead", {
  projectId: process.env.PROJECT_ID,
  projectSecret: process.env.PROJECT_SECRET,
}); 
const contract = new ethers.Contract(
  ADDRESS,
  ABI,
  _provider
);*/

console.log("fetching data...");
// Step 1 - Get the total population
const totalSupply = await lambContract.methods.totalSupply().call(); //WEB3
//const totalSupply = await contract.totalSupply(); //ETHERS

// Step 2 - Iterate over live tokens and log owners
let holder = {};
for (let i = 0; i < totalSupply; i++) {
  console.log(i);

  //const ownerAddress = await contract.ownerOf(i);
  //const ownerTokens = await contract.balanceOf(ownerAddress);

  const ownerAddress = await lambContract.methods.ownerOf(i).call();
  const ownerTokens = await lambContract.methods.balanceOf(ownerAddress).call();

  if (!holder[ownerAddress]) {
    holder[ownerAddress] = ownerTokens;
  }
}

// Step 3 - Saving the snapshot
fs.writeFile(
  "test.json",
  JSON.stringify(holder, null, 2),
  { flag: "w" },
  function (err) {
    if (err) return console.log(err);
    console.log("file has been saved");
  }
);
