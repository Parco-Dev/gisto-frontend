<script setup lang="ts">
const props = defineProps<{
  text: string,
  reveal?: boolean,
  revealMode?: undefined | 'opacity',
  delay?: number,
  className?: string,
  invert?: boolean,
  display?: 'inline-block' | 'inline',
}>()

const show = ref(false);

if (props.reveal && props.delay) {
  setTimeout(() => {
    show.value = true;
  }, props.delay);
}

</script>

<template>
  <span
    :class="[
      className,
      reveal && !show && revealMode === undefined && 'hidden',
      reveal && !show && revealMode === 'opacity' && 'hidden-opacity',
      invert && 'invert',
      'animated-text'
    ]"
    :style="[display ?? 'inline-block']"
    v-html="text"
  />
</template>

<style scoped lang="scss">
span {
  position: relative;
  transition: width .35s ease-in-out, opacity .35s ease-in-out;

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    background-color: white;
    width: 0px;
    height: 110%;
    top: 0;
    left: 0;
    transition: all .35s ease-in-out;
  }

  &.invert:after {
    background-color: black;
  }

  &.hidden:after {
    width: 110%;
  }

  &.hidden-opacity {
    opacity: 0;
  }

}

</style>