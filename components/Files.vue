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
]

const isFilesOpen = ref(false);

const toggleFiles = () => {
  isFilesOpen.value = !isFilesOpen.value;
}

</script>

<template>
<div class="files">

  <div class="files-button" @click="toggleFiles()">
    <p>More</p>
  </div>

  <div v-if="isFilesOpen" class="files-content">
    <FilesGroup v-for="group in groups" :key="group.title" :group="group" />
  </div>
</div>
</template>

<style scoped lang="scss">
</style>