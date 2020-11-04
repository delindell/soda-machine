import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSodas = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/.json`)
    .then((result) => {
      const allSodasObject = result.data;
      const sodas = [];
      if (allSodasObject !== null) {
        Object.keys(allSodasObject).forEach((sodaId) => {
          const newSoda = allSodasObject[sodaId];
          newSoda.id = sodaId;
          sodas.push(newSoda);
        });
      }
      resolve(sodas);
      console.log('data', sodas);
    })
    .catch((err) => reject(err));
});

export default {
  getSodas,
};
