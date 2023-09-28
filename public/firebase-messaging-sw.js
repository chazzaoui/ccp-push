importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

initializeApp({
  apiKey: 'AIzaSyDXNQBE9GilhysQ2fPgotfbvh4YjN8nxDI',
  authDomain: 'ccp-push.firebaseapp.com',
  projectId: 'ccp-push',
  storageBucket: 'ccp-push.appspot.com',
  messagingSenderId: '712283960458',
  appId: '1:712283960458:web:bfaa8b4cd1ca5720ae6973',
  measurementId: 'G-80BXFCQ0EN'
});

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'image/troop.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
