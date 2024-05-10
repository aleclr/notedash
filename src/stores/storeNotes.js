import { defineStore, mapActions } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
          {
            id: 'id1',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, totam libero facilis cupiditate voluptatem quis vel sit fuga voluptatibus est deserunt voluptates. Assumenda perspiciatis atque, corrupti recusandae beatae adipisci aliquam!'
        },
        {
            id: 'id2',
            content: 'This is a shorter note!'
        }
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(), id = currentDate.toString();

        let note = {
            id,
            content: newNoteContent
        };

        this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => { return note.id !== idToDelete })
    }
  }
})