<template>
    <div class="notes">
        <AddEditNote
          v-model="newNote"
          placeholder="Add a new note..."
          ref="addEditNoteRef"
        >
            <template v-slot:buttons>
                <button
                  @click="addNote"
                  :disabled="!newNote"
                  class="button is-link has-background-success"
                >
                    Add New Note
                </button>
            </template>
        </AddEditNote>

        <progress
          v-if="!storeNotes.notesLoaded"
          class="progress is-large is-success"
          max="100"
        />

        <template
          v-else
        >
            <Note
                v-for="note in storeNotes.notes"
                :key="note.id"
                :note="note"
            />
        </template>
    </div>
</template>

<style>
    .card-footer {
        width: 100% !important;
    }
</style>

<script setup>
    import Note from '@/components/Notes/Note.vue';
    import AddEditNote from '@/components/Notes/AddEditNote.vue';
    import { ref } from 'vue';
    import { useStoreNotes } from '@/stores/storeNotes';
    import { useWatchCharacters } from '@/use/useWatchCharacters';

    const newNote = ref('');

    const addEditNoteRef = ref(null);

    const storeNotes = useStoreNotes();

    const addNote = () => {

        storeNotes.addNote(newNote.value);

        newNote.value = '';

        addEditNoteRef.value.focusTextArea();
    };

    useWatchCharacters(newNote);

</script>