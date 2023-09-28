import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { getUserToken, messaging } from './firebase';

const app = initializeApp({
  apiKey: 'AIzaSyDXNQBE9GilhysQ2fPgotfbvh4YjN8nxDI',
  authDomain: 'ccp-push.firebaseapp.com',
  projectId: 'ccp-push',
  storageBucket: 'ccp-push.appspot.com',
  messagingSenderId: '712283960458',
  appId: '1:712283960458:web:bfaa8b4cd1ca5720ae6973',
  measurementId: 'G-80BXFCQ0EN'
});

export const initializeFirebase = () => {
  initializeApp({
    apiKey: 'AIzaSyDXNQBE9GilhysQ2fPgotfbvh4YjN8nxDI',
    authDomain: 'ccp-push.firebaseapp.com',
    projectId: 'ccp-push',
    storageBucket: 'ccp-push.appspot.com',
    messagingSenderId: '712283960458',
    appId: '1:712283960458:web:bfaa8b4cd1ca5720ae6973',
    measurementId: 'G-80BXFCQ0EN'
  });
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    console.log('Requesting permission...');
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // const token = getUserToken();
      // console.log('token:', token);
      // You can now use messaging to handle notifications
    } else {
      console.log('Notification permission not granted.');
    }
  } catch (error) {
    console.error(error);
  }
};
