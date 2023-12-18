<template>
  <h3>优化方法一：拆分组件，修改入参</h3>
  <div class="flex-container">
    <div class="highlight-index">
      高亮标题
      <el-input-number v-model="highLightNo" />
    </div>

    <ListComponent
      :tags="tags"
      :high-light-no="highLightNo"
      @update:tags="handleTagsChange"
    />

    <div class="tags-display">
      <el-tag
        v-for="tag in tagsArray"
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
import { computed, defineComponent, ref } from 'vue'
import ListComponent from './components/ListComponentAfterOptimize.vue'
export default defineComponent({
  components: {
    ListComponent,
  },
  setup() {
    const highLightNo = ref(0)
    const tags = ref({})
    const handleClose = (tag: string) => {
      Object.values(tags.value).forEach((array) => {
        const _index = array?.indexOf(tag)
        const hasEle = _index > -1
        hasEle && array?.splice(_index, 1)
      })
    }
    const tagsArray = computed(() => Object.values(tags.value).flat())
    const handleTagsChange = (v) => {
      // tags.value = Object.assign(tags.value, v)
      const { key, value } = v || {}
      !!key && (tags.value[key] = value)
      console.log(tags.value)
    }
    return { highLightNo, tags, handleClose, tagsArray, handleTagsChange }
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
