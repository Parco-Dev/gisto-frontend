<script setup lang="ts">
import { BASE_DELAY } from '~/data/constants';

const props = defineProps<{
  image: {
    url: string,
    alt: string,
    url_load?: string,
    url_1920?: string,
    url_1280?: string,
    url_720?:  string,
  }
  delay?: number,
  className?: string,
}>()

const imageLoaded = ref(false);
const imageShown = ref(false);

if (process.client) {

  // Set image loaded immediately
  if (props.delay === undefined || !props.image?.url_1920 || !props.image?.url_load) {
    imageLoaded.value = true;
    imageShown.value = true;
  }
  // wait for main image to be loaded and show blurred
  else {
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
    loader.src = props.image.url_1920;
  }
}

</script>

<template>
  <ClientOnly>
    <div v-if="image?.url_load && !imageShown" class="image-blur">
      <img :src="image.url_load" />
    </div>
    <div v-if="image && imageLoaded" :class="[className, !imageShown && 'absolute']">
      <img
        :src="image.url_720"
        :srcset="`${image.url_720} 720w,
                  ${image.url_1280} 1280w,
                  ${image.url_1920} 1920w`"
        :alt="image.alt"
      />
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">

.home-image, .project-image, .image-about {
  z-index: 2;
  position: relative;
  clip-path: inset(0 0 0 0);
  opacity: 1;

  animation: slide-to-left 0.35s ease-in-out 1;
  cursor: pointer;

}

.absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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