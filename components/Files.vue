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
<div class="project-files">

  <div class="project-files-button" @click="toggleFiles()">
    <svg class="closed-folder" version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 13.4 11.4" style="enable-background:new 0 0 13.4 11.4;" xml:space="preserve">
      <g>
        <g id="Raggruppa_100">
          <path id="Tracciato_50" class="st0" d="M13,1.1H4.3L3.9,0.3C3.8,0.1,3.6,0,3.5,0H1C0.8,0,0.6,0.1,0.6,0.3L0,1.3l0,0
            c0,0.1,0,0.1,0,0.2v9.4c0,0.2,0.2,0.4,0.4,0.4H13c0.2,0,0.4-0.2,0.4-0.4V1.5C13.4,1.3,13.2,1.1,13,1.1C13,1.1,13,1.1,13,1.1
            M12.5,10.5H0.9V2h11.6V10.5z"/>
        </g>
      </g>
    </svg>
    <svg class="open-folder" version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.1 11.4" style="enable-background:new 0 0 16.1 11.4;" xml:space="preserve">
      <g>
        <g id="Raggruppa_99">
          <path id="Tracciato_49" class="st0" d="M15.7,1.1H7L6.6,0.3C6.5,0.1,6.4,0,6.2,0H3.7C3.5,0,3.3,0.1,3.3,0.3l-0.5,1l0,0 c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1v2.2H0.4C0.3,3.8,0.2,3.8,0.1,4C0,4.1,0,4.2,0,4.4l2.7,6.7c0,0,0,0,0,0c0,0,0,0,0,0.1 c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.1h12.5c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.2c0-0.1,0.1-0.1,0.1-0.2l0-9.4 C16.1,1.3,15.9,1.1,15.7,1.1 M15,10.5H3.5L1.1,4.7h11.5L15,10.5z M13,3.8H3.6V2h11.6v6.6L13.4,4C13.3,3.9,13.2,3.8,13,3.8"/>
        </g>
      </g>
    </svg>
    <p>More</p>
  </div>

  <div v-if="isFilesOpen" class="project-files-content">
    <FilesGroup v-for="group in groups" :key="group.title" :group="group" />
  </div>
</div>
</template>

<style scoped lang="scss">
</style>