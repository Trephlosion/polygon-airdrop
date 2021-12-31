/* Again, HUGE thanks to xtremetom in the creation of this address fetcher 
https://gist.github.com/CoolCatsNFTPublic/c59ad54b6faf349dd38a3c15e2d14088#file-getallholders-js */

import Web3 from "web3";
import { INFURA_ADDRESS, ADDRESS, ABI } from "./config.js";
import fs from "fs";
import { ethers } from "ethers";

/*--------------------SMART CONTRACT STUFF--------------------*/
const provider = new Web3.providers.HttpProvider(INFURA_ADDRESS);
const web3infura = new Web3(provider);
const lambContract = new web3infura.eth.Contract(ABI, ADDRESS);

 const _provider = new ethers.providers.InfuraProvider("homestead", {
  projectId: "0c4501096c58411782c4d631c9d297b5",
  projectSecret: "c77aa09639d447538071ffa3ded6d273",
}); 

//const _provider = new ethers.getDefaultProvider();

const contract = new ethers.Contract(
  "0x56b391339615fd0e88E0D370f451fA91478Bb20F",
  new ethers.utils.Interface([
    "function totalSupply() external view returns (uint256)",
    "function ownerOf(uint256) external view returns (address)",
    //"function balanceOf(address) external view returns (uint256)",
  ]),
  _provider
);

console.log("fetching data...");
// Step 1 - Get the total population
//const totalSupply = await lambContract.methods.totalSupply().call();
const totalSupply = await contract.totalSupply();

// Step 2 - Iterate over live tokens and log owners
let holder = {};
for (let i = 0; i < 50; i++) {
  console.log(i);

  const ownerAddress = await contract.ownerOf(i);
  //const ownerTokens = await contract.balanceOf(ownerAddress);

  //const ownerAddress = await lambContract.methods.ownerOf(i).call();
  //const ownerTokens = await lambContract.methods.balanceOf(ownerAddress).call();

  if (!holder[ownerAddress]) {
    holder[ownerAddress] = 1;
  }
}

// Step 3 - Saving the snapshot
fs.writeFile(
  "ethalienholders.json",
  JSON.stringify(holder, null, 2),
  { flag: "w" },
  function (err) {
    if (err) return console.log(err);
    console.log("file has been saved");
  }
);
