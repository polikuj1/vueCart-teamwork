//我是viewfire，是firebase的擴充套件，vue官方用的唷!

//firebas的引入區塊

import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports //要引入其他功能請在這裡寫


export const firebaseConfig = {
    apiKey: "AIzaSyDaHUkFSvkgHhEeoHvnyONv_PtPGNtrfSU",
    authDomain: "daka-63d4d.firebaseapp.com",
    projectId: "daka-63d4d",
    storageBucket: "daka-63d4d.appspot.com",
    messagingSenderId: "279905061059",
    appId: "1:279905061059:web:59898ef383053fb3023a76",
    measurementId: "G-3SK0VJWHEC"
  };
//這裡是專案的SDK碼


// used for the firestore refs
const db = getFirestore(firebaseApp)
// here we can export reusable database references
export const todosRef = collection(db, 'todos')