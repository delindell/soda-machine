import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// this function gets all the sodas and their quantites from Firebase so we can print them out.
// it adds keys to all of the data and turns the data into an array of objects, instead of an object of objects so we can loop over them later.

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
    })
    .catch((err) => reject(err));
});

// this function updates the amount of soda in the Firebase DB whenever a sale is made 

const updateSodaQuantity = (sodaId, updatedSoda) => axios.put(`${baseUrl}/${sodaId}.json`, updatedSoda);

export default {
  getSodas,
  updateSodaQuantity,
};
