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
            v-for="note in notes"
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
    import { ref } from 'vue';

    const newNote = ref('');

    const newNoteRef = ref(null);

    const notes = ref([
        {
            id: 'id1',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, totam libero facilis cupiditate voluptatem quis vel sit fuga voluptatibus est deserunt voluptates. Assumenda perspiciatis atque, corrupti recusandae beatae adipisci aliquam!'
        },
        {
            id: 'id2',
            content: 'This is a shorter note!'
        }
    ]);

    const addNote = () => {
        let currentDate = new Date().getTime(), id = currentDate.toString();

        let note = {
            id,
            content: newNote.value
        };

        notes.value.unshift(note);

        newNote.value = '';

        newNoteRef.value.focus();
    };

</script>