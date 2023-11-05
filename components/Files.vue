<script setup lang="ts">

const page = usePage().value;

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
].filter(group => group.files.length)

const isFilesOpen = useFilesList();

const toggleFilesList = () => {

  // If files list is open, close and reset lightbox
  if (isFilesOpen.value) {
    setLightboxContent(-1, null);
    closeLightbox();
  }

  setFilesList(!isFilesOpen.value);
}

</script>

<template>
<div class="project-files">

  <div
    class="project-files-button"
    @click="toggleFilesList()"
    >
    <IconFolder :is-open="isFilesOpen" />
    <p>More</p>
  </div>

  <div v-if="isFilesOpen" class="project-files-content">
    <FilesGroup v-for="(group, index) in groups" :key="group.title" :group="{...group, index}" />
  </div>
</div>
</template>

<style scoped lang="scss">
</style>