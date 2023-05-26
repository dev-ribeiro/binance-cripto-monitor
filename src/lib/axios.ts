import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://testnet.binance.vision/api',
})
