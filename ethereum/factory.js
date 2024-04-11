import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x77CB9aF499f6450B0b24AF4F8D0eB9cc42330D0e'
);

export default instance;