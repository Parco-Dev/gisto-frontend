<script setup lang="ts">

const content = useLightboxContent();
const isLightbox = useLightbox();
const fileIndex = useLightboxSlideIndex();

// Check click on left or right side of the image
const changeSlide = (e: any) => {

  // Previous slide
  if (e.offsetX < e.target.width / 2) {
    setLightboxSlideIndex((fileIndex.value - 1) % content.value.files.length)
  }
  // Next slide
  else {
    setLightboxSlideIndex((fileIndex.value + 1) % content.value.files.length)
  }
}

const onMouseEnter = () => {
  showCursor()
}

const onMouseLeave = () => {
  hideCursor()
}

const onMouseMove = (e: any) => {
  const isLeft = (e.offsetX < e.target.width / 2);
  const position = { x: e.pageX + (isLeft ? 10 : -50), y: e.pageY + 16 };
  setCursor({position, text: isLeft ? '← Prev' : 'Next →'});
}

const reset = () => {
  closeLightbox();
  setLightboxContent(-1, null);
  setFilesList(false);
}

</script>

<template>
  <div v-if="isLightbox" class="lightbox">

    <div class="close" @click="reset()"></div>

    <div
      v-for="(file, index) in content.files"
      :key="file.id"
      class="lightbox-file"
      @click="(e) => changeSlide(e)"
      @mouseenter="onMouseEnter()"
      @mouseleave="onMouseLeave()"
      @mousemove="(e) => onMouseMove(e)"
    >

      <div v-if="fileIndex === index && file.type === 'video'" class="type-video">
        <video autoplay loop playsinline muted>
          <source :src="file.url" type="video/mp4">
        </video>
      </div>

      <div v-else-if="fileIndex === index && file.type === 'image'" class="type-image">
        <img :src="file.url" />
      </div>
     
    </div>

    <CursorView />
  </div>
</template>

<style lang="scss">
.lightbox {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;

  .close {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .lightbox-file {
    position: relative;
    cursor: pointer;

    .type-video {
      video {
        max-width: 60vw;
        max-height: 80vh;
        height: auto;
      }
    }
    .type-image {
      img {
        max-width: 60vw;
        max-height: 80vh;
        height: auto;
      }
    }
  }
}
</style>