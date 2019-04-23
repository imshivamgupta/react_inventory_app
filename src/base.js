import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCPeDIyQ1M4VSXnFgUelM7DCjABwGIOXuM',
  authDomain: 'handlinguserinput-bd4fc.firebaseapp.com',
  databaseURL: 'https://handlinguserinput-bd4fc.firebaseio.com'
});

var db = firebase.database(firebaseApp);
var base = Rebase.createClass(db);

export default base;
export { firebaseApp };
