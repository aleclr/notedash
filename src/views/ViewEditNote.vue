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
            class="button is-link is-light"
          >
            Cancel
          </button>
          <button
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
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';

  const storeNotes = useStoreNotes();

  const noteContent = ref('');

  const route = useRoute();

  noteContent.value = storeNotes.getNoteContent(route.params.id);

</script>