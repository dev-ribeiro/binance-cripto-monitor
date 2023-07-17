import { api } from '../lib/axios';

export async function fetchDataFromBinanceAPI() {
  return await api.get('/ticker/price')
}
