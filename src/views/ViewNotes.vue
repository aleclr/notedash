<template>
    <div class="notes">
        <AddEditNote v-model="newNote">
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

        <Note
            v-for="note in storeNotes.notes"
            :key="note.id"
            :note="note"
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
    import AddEditNote from '@/components/Notes/AddEditNote.vue';
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

</script>