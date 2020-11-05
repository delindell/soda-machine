import firebase from 'firebase/app';
import firebaseConfig from '../apiKeys.json';

// this function connects the application to the realtime Firebase database, allowing us to track how many sodas are available etc.

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig.firebaseKeys);
  }
};

export default firebaseApp;
