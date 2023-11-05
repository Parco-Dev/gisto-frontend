<script setup lang="ts">
import { homeQuery } from '~/queries';

const { queryApi, queryParams } = useQueryParams(homeQuery);
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

setPage(page);

console.log(page);

const homeIcon = page?.home_icon?.[0]; 

const featured = page?.featured.map(f => {
  return {
    ...f.project[0],
    columns: f.columns,
  }
})

</script>

<template>
  <div class="content featured-projects-list">

    <div v-for="project in featured" :key="project.id" :class="`featured-project columns-${project.columns}`">
      <a :href="`/work/${project.url}`">
        <img :src="project.main_image?.[0]?.url" :alt="project.main_image?.[0]?.alt" />
        <div class="project-info">
          <p><span class="project-title">{{ project.title }}</span>{{ project.excerpt }}</p>
        </div>
      </a>
    </div>

    <CursorView />

    <div class="background-icon">
      <img :src="homeIcon?.url" :alt="homeIcon?.alt" />
    </div>

  </div>
</template>