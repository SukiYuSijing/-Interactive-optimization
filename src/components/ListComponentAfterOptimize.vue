<template>
  <div class="checkboxs-container">
    ListComponentAfterOptimize.vue
    <div v-for="(item, index) in options" :key="item.title">
      <ListItems
        :item="item"
        :index="index"
        :should-high-light="highLightNo === index"
        :tags="$attrs.tags[item.title]"
        @update:tags="handleCheckChanges"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from 'vue'
import getOptions from '../utils/getOptions'
import ListItems from './ListItems.vue'

export default defineComponent({
  components: {
    ListItems,
  },
  inheritAttrs: false,
  props: {
    flushKey: {
      type: Number,
      default: 0,
    },
    highLightNo: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    onUpdated(() => {
      console.log('ListComponent update')
    })
    const options = getOptions(10, 100)
    const handleCheckChanges = (value) => {
      emit('update:tags', value)
    }
    return { options, handleCheckChanges }
  },
})
</script>
<style scoped>
.checkboxs-container {
  background: ghostwhite;
}
</style>
