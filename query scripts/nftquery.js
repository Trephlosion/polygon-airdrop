const Moralis = require("moralis/node");
const fs = require("fs");
const Web3 = require('web3');
const web3 = new Web3('https://eth-mainnet.alchemyapi.io/v2/xjQShpF4qHj_YbheZbew83povCKUSuFw');

const holderInfo = fs.readFileSync("ethalienholders.json");
const parsedJson = JSON.parse(holderInfo);
console.log(parsedJson);

const serverUrl = "https://pich2meqs9ct.usemoralis.com:2053/server";
const appId = "Ul1m6C2NEXCrgTZAePZlthHEwSRx7erU9QZrJofU";
Moralis.start({ serverUrl, appId });

const oldestNFT = async (a) => {
  try {
    let _nfts = await Moralis.Web3API.account.getNFTs({
      address: a,
    });
    let _blockcache = new Array();
    _nfts.result.forEach((a) => {
      _blockcache.push(Math.round(a.block_number));
    });
    const min = _blockcache.reduce((a, b) => Math.min(a, b));
    return min;
  } catch (e) {
    console.error(e);
  }
};

parsedJson.forEach((a) => {
  oldestNFT(a).then(async (c) => {
    try {
      let _block = await web3.eth.getBlock(c)
      console.log(_block.timestamp);
    } catch (e) {
      console.error(e);
    }
  })
})