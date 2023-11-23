<script setup lang="ts">

const content = useLightboxContent();
const isLightbox = useLightbox();
const fileIndex = useLightboxSlideIndex();
const groupIndex = useLightboxGroupIndex();

const prevGroup = () => {
  setLightboxGroupIndex(
    groupIndex.value <= 0
    ? content.value.length - 1
    : groupIndex.value - 1
  )
  setLightboxSlideIndex(content.value?.[groupIndex.value]?.files.length - 1)
}

const nextGroup = () => {
  setLightboxGroupIndex(
    groupIndex.value >= content.value.length - 1
    ? 0
    : groupIndex.value + 1
  )
  setLightboxSlideIndex(0)
}

const prevSlide = () => {
  setLightboxSlideIndex(fileIndex.value - 1)
}

const nextSlide = () => {
  setLightboxSlideIndex(fileIndex.value + 1)
}

const prev = () => {
  const isFirstSlide = fileIndex.value <= 0;
  if (isFirstSlide) prevGroup();
  else prevSlide();
}

const next = () => {
  const isLastSlide = fileIndex.value >= content.value?.[groupIndex.value]?.files.length - 1;
  if (isLastSlide) nextGroup();
  else nextSlide();
}

// Check click on left or right side of the image
const changeSlide = (e: any) => {
  if (e.offsetX < e.target.width / 2) prev();
  else next();
}

const onMouseEnter = () => {
  showCursor()
}

const onMouseLeave = () => {
  hideCursor()
}

const onMouseMove = (e: any) => {
  const isLeft = (e.offsetX < e.target.width / 2);
  const position = { x: e.clientX + 10, y: e.clientY + 16, align: isLeft ? 'right' : 'left' };
  setCursor({position, text: isLeft ? '← Prev' : 'Next →'});
}

const reset = () => {
  closeLightbox();
  setFilesList(false);
}

onMounted(() => {
  window.addEventListener('keydown', useArrowNavigation);
})

onUnmounted(() => {
  window.removeEventListener('keydown', useArrowNavigation);
})

const useArrowNavigation = (e: KeyboardEvent) => {
  if (isLightbox) {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setFilesList(false);
        closeLightbox();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        prev();
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        next();
        break;
    }
  }
}

</script>

<template>
  <div v-if="isLightbox" class="lightbox">

    <div class="overlay-close" @click="reset()"></div>

    <div
      v-for="(file, index) in content[groupIndex].files"
      :key="file.id"
      class="lightbox-file"
      @click="(e) => changeSlide(e)"
      @mouseenter="onMouseEnter()"
      @mouseleave="onMouseLeave()"
      @mousemove="(e) => onMouseMove(e)"
    >

      <div class="lightbox-top">
        <h6 class="lightbox-file-title">{{file.name}}</h6>
      </div>


      <div v-if="fileIndex === index && file.embed">
        <p>Embed</p>
      </div>
      
      <div v-else-if="fileIndex === index && file.type === 'video'" class="type-video">
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

  &-top {
    position: absolute;
    top: -1.5em;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1.5em;
    padding: .25em;
		font-family: 'Cousine', monospace;
		font-weight: 400;
    background-color: #fff;
  }

  &-file-title {
    font-size: 11px;
    line-height: 1.35em;
  }

  &-file {
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

  .overlay-close {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>