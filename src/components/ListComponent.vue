<template>
  <div class="checkboxs-container">
    ListComponentBeforeOptimize.vue
    <div v-for="(item, index) in options" :key="item.title">
      <h3>{{ item.title }}</h3>
      <el-checkbox-group
        :model-value="$attrs.tags"
        :class="[index === highLightNo ? 'bg-yellow' : '']"
        @update:model-value="$attrs['onUpdate:tags']"
      >
        <el-checkbox v-for="label in item.list" :key="label" :label="label">
          {{ label }}
        </el-checkbox>
      </el-checkbox-group>
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
    const checkedBoxs = ref([])

    onUpdated(() => {
      console.log('ListComponent update')
    })
    const options = getOptions(10, 100)
    const handleCheckChanges = (v) => {
      emit('update:tags', v)
    }
    return { options, checkedBoxs, handleCheckChanges }
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
