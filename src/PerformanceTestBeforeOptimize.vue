<template>
  <h3>未优化的时候</h3>
  <div class="flex-container">
    <div class="highlight-index">
      高亮标题
      <el-input-number v-model="highLightNo" />
    </div>

    <ListComponent v-model:tags="tags" :high-light-no="highLightNo" />

    <div class="tags-display">
      <el-tag
        v-for="tag in tags"
        :key="tag"
        class="mx-1"
        closable
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ListComponent from './components/ListComponent.vue'

export default defineComponent({
  components: {
    ListComponent,
  },
  setup() {
    const highLightNo = ref(0)
    const tags = ref([])
    const handleClose = (tag: string) => {
      tags.value.splice(tags.value.indexOf(tag), 1)
    }
    return { highLightNo, tags, handleClose }
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
