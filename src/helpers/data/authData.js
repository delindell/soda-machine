import firebase from 'firebase/app';
import 'firebase/auth';

// function that can be used for later applications, like tracking user tendencies among other things (right now it is not called)

const getUid = () => firebase.auth().currentUser.uid;

export default { getUid };
