<script setup lang="ts">
const content = useLightboxContent();
const isLightbox = useLightbox();
const fileIndex = useLightboxIndex();

const nextSlide = () => {
  setLightboxIndex(fileIndex.value + 1)
}

const prevSlide = () => {
  setLightboxIndex(fileIndex.value - 1)
}

</script>

<template>
  <div v-if="isLightbox" class="lightbox">

    <div class="arrow" @click="nextSlide()"> > </div>

    <div v-for="(file, index) in content" :key="file.id" class="lightbox-file" :class="{ active: fileIndex === index }">
      <div v-if="file.type === 'video'" class="type-video">
        <video autoplay loop playsinline muted>
          <source :src="file.url" type="video/mp4">
        </video>
      </div>
      <div v-else class="type-image">
        <img :src="file.url" />
      </div>
    </div>
  </div>
</template>