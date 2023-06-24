import { Alchemy } from "alchemy";
import { Network, Alchemy } from 'alchemy-sdk';
const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

const settings = {
    apiKey: apiKey,
    network: Network.ASTAR_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);
