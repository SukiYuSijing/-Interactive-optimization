<template>
  <h3>验证el-checkbox使用插槽与否，在更新时的性能</h3>
  <div class="flex-container">
    <div class="highlight-index">
      高亮标题
      <el-input-number v-model="highLightNo" />
    </div>
    <ListComponent v-model:tags="tags" :high-light-no="highLightNo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ListComponent from './components/ListComponentSlot.vue'

export default defineComponent({
  components: {
    ListComponent,
  },
  setup() {
    const highLightNo = ref(0)
    const tags = ref([])
    return { highLightNo, tags }
  },
})
</script>

<style scoped>
.flex-container {
  display: flex;
}

.highlight-index {
  background: whitesmoke;
  padding: 10px;
}

.tags-display {
  background: whitesmoke;
  min-width: 100px;
  padding: 0 20px;
}
</style>
