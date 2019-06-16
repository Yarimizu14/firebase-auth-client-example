import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
    projectId: process.env.PROJECT_ID,
    storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_CLIENT_MESSAGING_SENDER_ID
  })
}

const db = firebase.firestore()
const auth = firebase.auth()
const functions = firebase.functions()
const storage = firebase.storage()

export { db, auth, functions, storage }
