import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig =  {
  apiKey: "AAIzaSyCyTqFboXt1pR7BCKrP_wArrs2SqDFA3DQ",
  authDomain: "mst-constellations.firebaseapp.com",
  projectId: "mst-constellations"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db