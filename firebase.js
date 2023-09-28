// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDXNQBE9GilhysQ2fPgotfbvh4YjN8nxDI',
  authDomain: 'ccp-push.firebaseapp.com',
  projectId: 'ccp-push',
  storageBucket: 'ccp-push.appspot.com',
  messagingSenderId: '712283960458',
  appId: '1:712283960458:web:bfaa8b4cd1ca5720ae6973',
  measurementId: 'G-80BXFCQ0EN'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const getUserToken = setTokenFound => {
  return getToken(messaging)
    .then(currentToken => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch(err => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
};
