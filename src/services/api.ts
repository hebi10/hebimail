import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://hebi10.cafe24app.com',
  withCredentials: true,
});

export default instance;
