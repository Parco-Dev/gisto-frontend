<script setup lang="ts">

const page = usePage().value;
const isFilesOpen = useFilesList();
const isLightboxOpen = useLightbox();
const { isMobile } = useDevice();

const groups = [
  {
    title: 'Photo dump',
    files: page.photo_dump,
  },
  {
    title: 'Drawings / diagrams',
    files: page.drawings_diagrams,
  },
  {
    title: 'Models',
    files: page.models,
  },
  {
    title: 'Video',
    files: page.video,
  },
  {
    title: 'Graphics',
    files: page.graphics,
  },
  {
    title: 'Links',
    files: page.links,
  },
].filter(group => group.files.length)

</script>

<template>
<div class="project-files">

  <div
    class="project-files-button"
    @click="isLightboxOpen && isMobile ? closeLightbox() : toggleFilesList(groups)"
  >
    <div v-if="isLightboxOpen && isMobile" class="icon-close"></div>
    <IconFolder v-else :is-open="isFilesOpen" />

    <p v-html="isLightboxOpen && isMobile ? 'Close' : 'More'"></p>
  </div>

  <div v-if="isFilesOpen" class="project-files-content">
    <FilesGroup v-for="(group, index) in groups" :key="group.title" :group="{...group, index}" />
  </div>
</div>
</template>

<style scoped lang="scss">
.icon-close {
  width:  1em;
  height: 1em;
  position: relative;
  margin-top: .1em;
  margin-left: .6em;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 100%;
    transform-origin: 50% 50%;
    border-left: 1px solid black;
  }
  &::after {
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
}
</style>