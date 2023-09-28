importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const app = initializeApp({
  apiKey: 'AIzaSyDXNQBE9GilhysQ2fPgotfbvh4YjN8nxDI',
  authDomain: 'ccp-push.firebaseapp.com',
  projectId: 'ccp-push',
  storageBucket: 'ccp-push.appspot.com',
  messagingSenderId: '712283960458',
  appId: '1:712283960458:web:bfaa8b4cd1ca5720ae6973',
  measurementId: 'G-80BXFCQ0EN'
});

const messaging = getMessaging(app);

messaging.onBackgroundMessage(payload => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './image/troop.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
