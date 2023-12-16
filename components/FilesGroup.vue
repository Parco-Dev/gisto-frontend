<script setup lang="ts">

const props = defineProps<{ group: { title: string, files: any, index: number } }>()

const groupIndex = useLightboxGroupIndex();
const slideIndex = useLightboxSlideIndex();
const content = useLightboxContent();

const toggleGroup = () => {
  // If group is not active, open files list and update lightbox content
  if (props.group.index !== groupIndex.value) {
    setLightboxGroupIndex(props.group.index);
    setLightboxSlideIndex(0);
    loadFiles(content.value?.[groupIndex.value]);
  } 
  // If group is already active, close lightbox, files list and reset content
  else {
    closeLightbox();
  }
}

</script>

<template>

  <div v-if="group.files.length" class="files-group">
    <div class="files-group-title" @click="toggleGroup()">
      <p>{{ group.title }}</p>
    </div>
    <div v-if="group.index === groupIndex" class="files-group-list">
      <div
        v-for="(file, fileIndex) in group.files"
        :key="file.name"
        :class="['single-file', slideIndex === fileIndex && 'current']"
        @click="openLightbox(fileIndex)"
      >
        <p v-if="file.name" v-html="`${file.name}.${file.extension}`"></p>
        <p v-else-if="file.title" v-html="file.title"></p>
        <p v-else-if="file.media?.[0]" v-html="`${file.media[0].name}.${file.media[0].extension}`"></p>
        <p v-else-if="file.embeds" v-html="`${file.title || 'Video'} on Youtube`"></p>
      </div>
    </div>
  </div>
  
</template>