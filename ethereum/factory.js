import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x418d134a65d76Ac60E7B5e3Be77ca1B1fACC099b'
);

export default instance;
