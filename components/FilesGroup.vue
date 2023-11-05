<script setup lang="ts">

const props = defineProps<{ group: { title: string, files: any, index: number } }>()

const groupContent = useLightboxContent();

const toggleGroup = () => {
  // If group is not active, open files list and update lightbox content
  if (props.group.index !== groupContent.value.index) {
    setLightboxContent(props.group.index, props.group.files)
    setLightboxSlideIndex(0);
  } 
  // If group is already active, close lightbox, files list and reset content
  else {
    closeLightbox();
    setLightboxContent(-1, null);
  }
}

</script>

<template>

  <div v-if="group.files.length" class="files-group">
    <div class="files-group-title" @click="toggleGroup()">
      <p>{{ group.title }}</p>
    </div>
    <div v-if="group.index === groupContent.index" class="files-group-list">
      <div v-for="(file, slideIndex) in group.files" :key="file.name" class="single-file" @click="openLightbox(slideIndex)">
        <p v-html="file.name"></p>
      </div>
    </div>
  </div>
  
</template>