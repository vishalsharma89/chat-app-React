import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage';
import 'firebase/messaging'
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('europe-west3');
export const messaging = firebase.messaging.isSupported()
    ? app.messaging()
    : null;

if (messaging) {
    messaging.usePublicVapidKey(
        PUBLICVALIDAPIKEY
    );

    // messaging.onMessage(data => {
    //     // const { title, body } = notification;
    //     console.log(data);
    //     // Toast.info({ title, description: body, duration: 0 });
    // });
    messaging.onMessage(({ notification }) => {
        const { title, body } = notification;
        Toast.info({ title, description: body, duration: 0 });
    });
}

if (isLocalhost) {
    functions.useFunctionsEmulator('http://localhost:5001');
}