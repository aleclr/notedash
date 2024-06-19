import { defineStore, mapActions } from 'pinia';

import {  collection, onSnapshot,
          addDoc, doc, deleteDoc, updateDoc,
          query, orderBy
} from "firebase/firestore";

import { db } from '@/js/firebase';

import { useStoreAuth } from './storeAuth';

let notesCollectionRef;

let notesCollectionQuery;

let getNotesSnapshot = null;

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        // {
        //   id: 'id1',
        //   content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, totam libero facilis cupiditate voluptatem quis vel sit fuga voluptatibus est deserunt voluptates. Assumenda perspiciatis atque, corrupti recusandae beatae adipisci aliquam!'
        // },
        // {
        //   id: 'id2',
        //   content: 'This is a shorter note!'
        // }
      ],
      notesLoaded: false
    }
  },
  actions: {

    init() {
      const storeAuth = useStoreAuth();

      notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes');
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

      //inicializing database refs
      this.getNotes()
    },

    async getNotes() {

      this.notesLoaded = false;

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = [];

        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          };
          notes.push(note);
        });

        this.notes = notes;
        this.notesLoaded = true;

      }, error => {
        console.log('error message: ', error.message);
      });
      
    },

    clearNotes() {

      this.notes = [];

      //unsubscribe from any active listener
      if (getNotesSnapshot) {
        getNotesSnapshot();
      };

    },

    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(), date = currentDate.toString();

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date: date
      });

    },

    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },

    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content: content
      });
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => { return note.id === id })[0].content
      }
    },
    getNotesCount: (state) => {
      return state.notes.length
    },
    getTotalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach(note => {
        count += note.content.length
      });
      return count
    }
  }
})