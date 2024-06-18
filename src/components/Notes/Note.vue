<template>
  <div
    class="card mb-4"
  >
      <div class="card-content">
          <div class="content">
              {{ note.content }}
              <div class="columns is-mobile has-text-grey-light mt-2">
                <small class="column">{{ dateFormatted.value }}</small>
                <small class="column has-text-right">{{ characterLength }}</small>
              </div>
          </div>
      </div>
      <footer class="card-footer">
          <RouterLink
          :to="`/editNote/${ props.note.id }`"
            class="card-footer-item"
            href="#"
          >Edit</RouterLink>
          <a
            @click.prevent="modals.deleteNote = true"
            class="card-footer-item"
            href="#"
          >
            Delete
          </a>
      </footer>
      <ModalDeleteNote 
        v-if="modals.deleteNote"
        v-model="modals.deleteNote"
        :noteId="note.id"
      />
  </div>
</template>

<script setup>
  import { computed, reactive } from 'vue';
  import { useStoreNotes } from '@/stores/storeNotes';
  import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue';
  import { useDateFormat } from '@vueuse/core';

  const storeNotes = useStoreNotes();

  // props
  const props = defineProps({
    note: Object,
    required: true
  });

  //computed character length
  const characterLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character';
    return `${length} ${description}`
  });

  //SHOW/HIDE MODALS (reactive objects)  
  const modals = reactive({
    deleteNote: false
  });

  //date formatted
  const dateFormatted = computed(() => {

    let date = new Date(parseInt(props.note.date));
    return useDateFormat(date, "DD-MM-YYYY @ HH:mm");

  });

</script>