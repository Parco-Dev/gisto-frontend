<script setup lang="ts">
import { BASE_DELAY } from '~/data/constants';

const props = defineProps<{
  loadSrc?: string,
  src: string,
  alt?: string,
  delay?: number,
}>()

const imageLoaded = ref(false);
const imageShown = ref(false);

// Only on client, wait for main image to be loaded
if (process.client) {
  const loader = new Image();
  loader.onload = () => {
    setTimeout (() => {
      imageLoaded.value = true;
    }, BASE_DELAY);

    setTimeout (() => {
      imageShown.value = true;
    }, BASE_DELAY + 400 + (props?.delay ?? 0));
  }

  // eslint-disable-next-line vue/no-setup-props-destructure
  loader.src = props.src;
}

</script>

<template>
  <div v-if="loadSrc && !imageShown" class="image-blur">
    <img :src="loadSrc" />
  </div>
  <div v-if="imageLoaded" class="image" :class="[!imageShown && 'absolute']">
    <img :src="src" :alt="alt" />
  </div>
</template>

<style scoped lang="scss">
.image {
  z-index: 2;
  position: relative;
  clip-path: inset(0 0 0 0);
  opacity: 1;

  animation: slide-to-left 0.35s ease-in-out 1;
  cursor: pointer;

  &.absolute {
    position: absolute;
    top: 0;
    left: 0;
  }
}

.image-blur {
  z-index: 2;
  position: relative;
  overflow: hidden;
  animation: fade-in 0.35s ease-in-out 1;

  img {
    transform: scale(1.1);
    filter: blur(20px);
  }
}

@keyframes slide-to-left {
  0%   { clip-path: inset(0 0 0 100%) }  
  100% { clip-path: inset(0 0 0 0) }  
}

@keyframes fade-in {
  0%   { opacity: 0 }  
  25%  { opacity: 0 }  
  100% { opacity: 1 }  
}

</style>