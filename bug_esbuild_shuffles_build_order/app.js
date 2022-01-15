import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
// NOTE: If config is imported before firebase imports, we get a runtime
// error.  Side effects in all the glory.
// import * as config from './config';

// import { createStore } from './redux/store';

// const store = createStore();
// const firebaseApp = firebase.initializeApp(config);
// firebase.analytics(firebaseApp);
console.log('xx', firebase.analytics);
// const firebaseAppAuth = firebase.auth(firebaseApp);
// firebaseAppAuth.onAuthStateChanged();
// firebaseAppAuth.onIdTokenChanged(
//   user => {
//     if (user) {
//       console.log('firebase authenticated');
//     } else {
//       console.log('firebase no user');
//     }
//   },
//   error => {
//     console.log('firebase auth error', error);
//   }
// );