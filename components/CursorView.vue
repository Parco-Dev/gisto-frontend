<script setup lang="ts">

// const page = usePage().value;
const cursor = useCursor();

</script>

<template>
  <div v-if="cursor.active" class="cursor" :style="{ left: `${cursor.position.x}px`, top: `${cursor.position.y}px` }">
    <span>View project ↗</span>
  </div>
</template>

<style scoped lang="scss">
.cursor {
  position: absolute;
  z-index: 9996;
  display: inline;
  background-color: #eee;
  pointer-events: none;
}
</style>