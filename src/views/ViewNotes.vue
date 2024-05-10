<template>
    <div class="notes">

        <div class="card has-background-primary p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea
                      v-model="newNote"  
                      class="textarea"
                      placeholder="Add a new note..."
                      ref="newNoteRef"
                    />
                </div>
            </div>
    
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button
                      @click="addNote"
                      :disabled="!newNote"
                      class="button is-link has-background-success"
                    >
                        Add New Note
                    </button>
                </div>
            </div>    
        </div>
        <Note
            v-for="note in storeNotes.notes"
            :key="note.id"
            :note="note"
            @delete-clicked="deleteNote"
        />
    </div>
</template>

<style>
    .card-footer {
        width: 100% !important;
    }
</style>

<script setup>
    import Note from '@/components/Notes/Note.vue';
    import { ref } from 'vue';
    import { useStoreNotes } from '@/stores/storeNotes';

    const newNote = ref('');

    const newNoteRef = ref(null);

    const storeNotes = useStoreNotes();

    const addNote = () => {

        storeNotes.addNote(newNote.value);

        newNote.value = '';

        newNoteRef.value.focus();
    };

    //deleteNote
    const deleteNote = (idToDelete) => {
        console.log('deleting note', idToDelete);
        notes.value = notes.value.filter(note => { return note.id !== idToDelete })
    };

</script>