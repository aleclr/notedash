<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ storeNotes.getNotesCount }}</td>
                </tr>
                <tr>
                    <td>Total number of characters</td>
                    <td>{{ storeNotes.getTotalCharactersCount }}</td>
                </tr>
            </tbody>
        </table>

        <input
          v-model="loveMe"
          class="input"
          type="text"
          placeholder="Do you like me?"
          v-autofocus
        >
    </div>
</template>

<script setup>

import { vAutofocus } from '@/directives/vAutofocus';
import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchCharacters } from '@/use/useWatchCharacters';
import { ref } from 'vue';

    const storeNotes = useStoreNotes();

    const loveMe = ref('');

    useWatchCharacters(loveMe, 20);
</script>