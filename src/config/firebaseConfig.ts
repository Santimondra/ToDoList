import * as firebase from 'firebase';
require('firebase/firestore');
const config = {
    apiKey: "AIzaSyALkMKEcUiafaT8sanlMCJHwz5PcoxsRFs",
    authDomain: "firsttodolist.firebaseapp.com",
    databaseURL: "https://firsttodolist.firebaseio.com",
    projectId: "firsttodolist",
    storageBucket: "",
    messagingSenderId: "335421185829"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;