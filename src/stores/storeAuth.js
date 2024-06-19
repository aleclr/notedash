import { defineStore } from 'pinia';
import { auth  } from '@/js/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
      user: {}
    }
  },
  actions: {

    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('USER LOGGED IN: ', user);
          this.user.id = user.uid;
          this.user.email = user.email;
        } else {
          console.log('USER LOGGED OUT: ', user);
          this.user = {};
        }
      });
    },

    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user;
        console.log('user: ', user)
      }).catch((error) => {
        console.log('error: ', error.message)
      });
    },

    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user;
        console.log('user logged in: ', user);
      }).catch((error) => {
        console.log(error.message);
      });
    },

    logoutUser() {
      signOut(auth).then(() => {
        console.log('user signed out.')
      }).catch((error) => {
        console.log(error.message)
      });
    }

  }
})