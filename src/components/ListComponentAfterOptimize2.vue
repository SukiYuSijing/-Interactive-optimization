<template>
  <div class="checkboxs-container">
    ListComponentAfterOptimize.vue
    <div v-for="(item, index) in options" :key="item.title">
      <ListItems
        :item="item"
        :index="index"
        :should-high-light="highLightNo === index"
        v-bind="{ ...$attrs }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from 'vue'
import getOptions from '../utils/getOptions'
import ListItems from './ListItems2.vue'

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
  setup(props, { emit, attrs }) {
    const checkedBoxs = ref([])
    onUpdated(() => {
      console.log('ListComponent update')
    })
    const options = getOptions(10, 100)
    return { options, checkedBoxs }
  },
})
</script>
<style scoped>
.checkboxs-container {
  background: ghostwhite;
}
</style>
