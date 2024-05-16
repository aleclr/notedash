<template>

  <div class="edit-note">

    <AddEditNote
      v-model="noteContent"
      bg-color="link"
      placeholder="Edit note..."
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template v-slot:buttons>
          <button
            @click="$router.back()"
            class="button is-link is-light mr-2"
          >
            Cancel
          </button>
          <button
            @click="handleSaveClicked"
            class="button is-link has-background-link-dark"
            :disabled="!noteContent"
          >
            Save Note
          </button>
      </template>
    </AddEditNote>

  </div>

</template>

<script setup>

  import AddEditNote from '@/components/Notes/AddEditNote.vue';
  import { useStoreNotes } from '@/stores/storeNotes';
  import { useRoute, useRouter } from 'vue-router';
  import { ref } from 'vue';

  const storeNotes = useStoreNotes();

  const noteContent = ref('');

  const route = useRoute();

  const router = useRouter();

  noteContent.value = storeNotes.getNoteContent(route.params.id);

  const handleSaveClicked = () => {

    storeNotes.updateNote(route.params.id, noteContent.value);

    router.push('/');

  };

</script>