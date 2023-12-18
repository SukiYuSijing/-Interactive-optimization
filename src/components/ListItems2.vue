<template>
  <h3>{{ item.title }}</h3>
  <el-checkbox-group
    v-memo="[shouldUpdate, shouldHighLight]"
    :model-value="$props.tags"
    :class="[shouldHighLight ? 'bg-yellow' : '']"
    @update:model-value="$attrs['onUpdate:tags']"
  >
    <el-checkbox v-for="label in item.list" :key="label" :label="label">
      {{ label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref, watch } from 'vue'
import _ from 'lodash-es'
// import ListItem from './ListItem.vue'
export default defineComponent({
  components: {},
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0,
    },
    shouldHighLight: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: Array,
      default: [],
    },
  },
  setup(props, { attrs }) {
    const shouldUpdate = ref()
    onUpdated(() => {
      console.log(props.item.title, 'ListItems update')
    })
    watch(
      () => props.tags,
      (newValue, oldValue) => {
        const diffValues = _.difference(newValue, oldValue)
        shouldUpdate.value = props.item.list.includes(diffValues[0] || '')
          ? !shouldUpdate.value
          : shouldUpdate.value
      },
      {
        immediate: true,
      }
    )
    return {
      shouldUpdate,
    }
  },
})
</script>
<style scoped>
.bg-yellow {
  background: yellow;
}
</style>
