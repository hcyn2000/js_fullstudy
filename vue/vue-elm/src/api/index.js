import { get } from './heloers';

const getSeller = get('api/seller');
const getGoods = get('api/goods');

export {
    getSeller,
    getGoods,
};
