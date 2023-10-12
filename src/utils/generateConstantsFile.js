const ethers = require("ethers");

const { ABI_JSON: NetworkAbi } = require("../../lib/abi/IColonyNetwork.abi.js");

const COLONY_NETWORK_ADDRESS = process.env.NETWORK_ADDRESS || "0x78163f593D1Fa151B4B7cacD146586aD2b686294";
const BLOCK_PAGE_SIZE = 1_000_000;
const ONE_TX_PAYMENT = ethers.solidityPackedKeccak256(["string"], ["OneTxPayment"])
const VOTING_REPUTATION = ethers.solidityPackedKeccak256(["string"], ["VotingReputation"])

async function getAllExtensionInstallations(blockNumber, networkContract, oldNetworkContract, extensionIdentifier) {
  const filter = networkContract.filters.ExtensionInstalled(extensionIdentifier);
  const oldFilter = oldNetworkContract.filters.ExtensionInstalled(
    extensionIdentifier
  );

  // const events = await p.getLogs(filter);
  let extensions = []
  let fromBlock = 1;
  let toBlock = BLOCK_PAGE_SIZE;
  while (toBlock < blockNumber) {
    events = await networkContract.queryFilter(filter, fromBlock, toBlock);
    oldEvents = await oldNetworkContract.queryFilter(oldFilter, fromBlock, toBlock);
    events = events.concat(oldEvents);
    for (let i = 0; i < events.length; i++) {
      const e = events[i]; 
      // Get the address of the installed extension
      const extensionAddress = await networkContract.getExtensionInstallation(extensionIdentifier, e.args.colony, { blockTag: e.blockNumber })
      extensions.push(extensionAddress);
    }

    fromBlock = toBlock + 1;
    toBlock = Math.min(blockNumber, toBlock + BLOCK_PAGE_SIZE);
  }

  return extensions;
}

async function main() {
  const p = new ethers.JsonRpcProvider("https://xdai.colony.io/rpcarchive/");
  const cn = new ethers.Contract(COLONY_NETWORK_ADDRESS, NetworkAbi, p);
  const blockNumber = await p.getBlockNumber();
  const nColonies = await cn.getColonyCount({ blockTag: blockNumber });
  const latest = await cn.getColony(nColonies);
  const colonies = [];
  const networkContract = new ethers.Contract(COLONY_NETWORK_ADDRESS, NetworkAbi, p);

  const oldAbi = ["event ExtensionInstalled(bytes32 indexed extensionId, uint256 version, address indexed colony)"];
  const oldInterface = new ethers.Interface(oldAbi);
  const oldNetworkContract = new ethers.Contract(COLONY_NETWORK_ADDRESS, oldInterface, p);

  for (let i = 1; i <= nColonies; i += 1) {
    const colonyAddress = await cn.getColony(i); // No blockTag needed here -
    // it's a constant, and I think is slightly quicker if we omit
    // const colony = new ethers.Contract(colonyAddress, ColonyAbi, p);
    colonies.push(colonyAddress);
  }
  // Get all onetxpayments that have ever been installed
  const onetxpayments = await getAllExtensionInstallations(blockNumber, networkContract, oldNetworkContract, ONE_TX_PAYMENT);
  const votingreputations = await getAllExtensionInstallations(blockNumber, networkContract, oldNetworkContract, VOTING_REPUTATION);

  console.log(`export const COLONY_NETWORK_ADDRESS = '${COLONY_NETWORK_ADDRESS.toLowerCase()}';`);
  console.log(`export const PRELOAD_HEIGHT = ${blockNumber}`);
  console.log(`export const PRELOADED_COLONIES = ['${colonies.join("','")}']`);
  console.log(`export const PRELOADED_ONE_TX_PAYMENT = ['${onetxpayments.join("','")}']`);
  console.log(`export const PRELOADED_VOTING_REPUTATION = ['${votingreputations.join("','")}']`);
}

main();
