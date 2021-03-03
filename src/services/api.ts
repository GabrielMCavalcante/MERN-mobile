/* eslint-disable prettier/prettier */
import axios from 'axios';

export default axios.create({
  baseURL: 'https://mern-test-server.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
