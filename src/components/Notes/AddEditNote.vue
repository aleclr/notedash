<template>
  <div
    class="card p-4 mb-5"
    :class="`has-background-${ props.bgColor }`"
  >

    <label
      v-if="props.label"
      class="has-text-white"
    >
      {{ props.label }}
    </label>

    <div class="field">
        <div class="control">
            <textarea
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
              class="textarea"
              :placeholder="props.placeholder"
              ref="textareaRef"
              v-autofocus
            />
        </div>
    </div>
    
    <div class="field is-grouped is-grouped-right">
        <div class="control">
            <slot name="buttons" />
        </div>
    </div>    
 </div>
</template>

<script setup>

import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

  const textareaRef = ref(null);

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'primary'
    },
    placeholder: {
      type: String,
      default: 'Type something...'
    },
    label: {
      type: String
    }
  });

  const emit = defineEmits(['update:modelValue']);

  const focusTextArea = () => {
    textareaRef.value.focus()
  };

  defineExpose({
    focusTextArea
  });

</script>