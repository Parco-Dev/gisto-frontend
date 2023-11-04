<script setup lang="ts">

defineProps<{ group: { title: string, files: any } }>()

</script>

<template>
<div class="group">

  <div class="group-title">
    <p>{{ group.title }}</p>
  </div>

  <div class="group-list">
    <div
      v-for="(file, index) in group.files" :key="file.name" @click="{
        setLightboxContent(group.files)
        openLightbox(index)
    }">
      <p v-html="file.name"></p>
    </div>
  </div>

</div>
</template>
<!-- 
graphics 
  - 01
  - 02
  - 03
-->