import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.monobank.ua/bank/currency',
});

export const getCurrency = async () => {
  const { data } = await instance.get('/');
  return data;
};
