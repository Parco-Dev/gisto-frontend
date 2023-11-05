<script setup lang="ts">

defineProps<{ group: { title: string, files: any } }>()

import { getPageQuery } from '~/queries'

const kirbyPath = useRoute().path
const { queryApi, queryParams } = useQueryParams(getPageQuery(kirbyPath));
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

setPage(page);

</script>

<template>

  <div v-if="page?.photo_dump && page.photo_dump.length" class="files-group">
    <div class="files-group-title">
      <p>{{ group.title }}</p>
    </div>
    <div class="files-group-list">
      <div v-for="(file, index) in group.files" :key="file.name" @click="() => { setLightboxContent(group.files); openLightbox(index); }" class="single-file">
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