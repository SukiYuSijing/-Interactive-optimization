<template>
  <div class="checkboxs-container">
    <el-button @click="() => (useSlotOrNot = !useSlotOrNot)"
      >切换el-checkbox为插槽--{{ useSlotOrNot }}</el-button
    >
    <div
      v-for="(item, index) in options"
      :key="item.title"
      :class="[index === highLightNo ? 'bg-yellow' : '']"
    >
      <h3>{{ item.title }}</h3>
      <template v-if="useSlotOrNot">
        <el-checkbox v-for="label in item.list" :key="label" :label="label">
          {{ label }}
        </el-checkbox>
      </template>
      <template v-if="!useSlotOrNot">
        <el-checkbox v-for="label in item.list" :key="label" :label="label" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from 'vue'
import getOptions from '../utils/getOptions'
export default defineComponent({
  components: {},
  inheritAttrs: false,
  props: {
    highLightNo: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const useSlotOrNot = ref(false)
    onUpdated(() => {
      console.log('ListComponent update')
    })
    const options = getOptions(10, 100)
    return { options, useSlotOrNot }
  },
})
</script>
<style scoped>
.bg-yellow {
  background: yellow;
}
.checkboxs-container {
  background: ghostwhite;
}
</style>
