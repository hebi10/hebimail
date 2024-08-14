import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hebi10.cafe24app.com',
  withCredentials: true,
});

export default instance;
