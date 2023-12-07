<script setup lang="ts">

const active = ref(false);
const cursorText = ref(null);
const cursorWidth = ref(0);

// const page = usePage().value;
const cursor = useCursor();
const { isMobile } = useDevice();

watch(cursor.value, () => {
  // Show cursor
  if (cursor.value.active && !active.value) {
    active.value = true;
    setTimeout(() => {
      cursorWidth.value = cursorText.value ? (cursorText.value as any).offsetWidth + 4 : 0;
    }, 10);
    
  }

  // Hide cursor
  if (!cursor.value.active && active.value) {
    cursorWidth.value = 0;
    setTimeout(() => active.value = false, 150);
  }
})

</script>

<template>
  <div
    v-if="!isMobile"
    class="cursor"
    :style="{
      left: `${cursor.position.x}px`,
      top: `${cursor.position.y}px`,
      width: `${cursorWidth}px`,
      transform: cursor.position.align === 'right' ? 'translateX(-60px)' : 'translateX(0)',
    }"
  >
    <span ref="cursorText">{{ cursor.text }}</span>
  </div>
</template>

<style scoped lang="scss">
.cursor {
  position: absolute;
  z-index: 9996;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  pointer-events: none;
  overflow: clip;
  width: 0;
  height: calc(1em + 4px);
  white-space: nowrap;
  transition: width .15s ease-in-out, transform .15s;

}
</style>