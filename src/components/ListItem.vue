<!-- <template>
  <sub-container />
  <button class="btn" @click="changePosition">传送门</button>
  <teleport :to="to" :disabled="disabled">
    <div class="send_content">{{ showingString }}</div>
  </teleport>
</template> -->
<template>
  <div>
    <slot>
      {{ $props.label }}
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from 'vue'

export default defineComponent({
  components: {},
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    onUpdated(() => {
      console.log(props.label, 'update')
    })
  },
})
</script>
