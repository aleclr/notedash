import { defineStore, mapActions } from 'pinia';
import { collection, onSnapshot, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '@/js/firebase';

const notesCollectionRef = collection(db, 'notes');

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
      ]
    }
  },
  actions: {

    async getNotes() {

      onSnapshot(notesCollectionRef, (querySnapshot) => {
        let notes = [];

        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content
          };
          notes.push(note);
        });

        this.notes = notes;
      });
      
    },

    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(), id = currentDate.toString();

        await setDoc(doc(notesCollectionRef, id), {
          content: newNoteContent
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