import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bff-qa.mesalva.com/json/pages/',
});

export default api;
