# Polygon Airdropper

This project provides the methods query NFT collection holders, make an ERC1155 token, and airdrop them out to the holders at high speed ⚡

### Repo Tour:

[`contracts`](./contracts) contains the flat airdropper code that you can copy and paste into Remix to deploy.
[`query scripts`](./query scripts) contains 3 files:
- [`config.js`](./query scripts/config.js) to set your API endpoint, contract address, and contract ABI
- [`holderquery.js`](./query scripts/holderquery.js) to query all holders and write the data to `test.json`
- [`randomizer.js`](./query scripts/randomizer.js) *(OPTIONAL)* takes all owner addresses from `test.json` and randomly splits them to other  `.json` files under `randomizedlist`
