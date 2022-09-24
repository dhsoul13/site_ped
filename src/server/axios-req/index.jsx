/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const request = async ({ method = 'get', url }) => {
  try {
    const response = await axios({
      method,
      url,
      baseURL: 'https://jsonplaceholder.typicode.com/',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      timeout: 5000,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
