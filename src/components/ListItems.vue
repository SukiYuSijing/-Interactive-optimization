<template>
  <h3>{{ item.title }}</h3>
  <el-checkbox-group
    :model-value="$attrs.tags"
    :class="[shouldHighLight ? 'bg-yellow' : '']"
    @update:model-value="handleCheck"
  >
    <el-checkbox v-for="label in item.list" :key="label" :label="label">
      {{ label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts">
import { defineComponent, onUpdated, watch } from 'vue'
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
  },
  setup(props, { attrs, emit }) {
    onUpdated(() => {
      console.log(props.item.title, 'ListItems update')
    })
    const handleCheck = (v) => {
      emit('update:tags', { key: props.item.title, value: v })
    }
    return {
      handleCheck,
    }
  },
})
</script>
<style scoped>
.bg-yellow {
  background: yellow;
}
</style>
