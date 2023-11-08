<script setup lang="ts">
import { homeQuery } from '~/queries';

const { queryApi, queryParams } = useQueryParams(homeQuery);
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

setPage(page);

const homeIcon = page?.home_icon?.[0];
const featured = page?.featured.map((item: any) => {
  return {
    ...item.project[0],
    columns: item.columns,
  }
})

const onMouseEnter = () => {
  showCursor()
}

const onMouseLeave = () => {
  hideCursor()
}

const onMouseMove = (e: any) => {
  const position = { x: e.pageX + 10, y: e.pageY + 16 };
  setCursor({position, text: 'View project ↗'});
}

</script>

<template>
  <div class="content featured-projects-list">

    <div v-for="project in featured" :key="project.id" :class="`featured-project columns-${project.columns}`">
      <a :href="`/work/${project.url}`">
        <img
          class="project-image"
          :src="project.main_image?.[0]?.url"
          :alt="project.main_image?.[0]?.alt"
          @mouseenter="onMouseEnter()"
          @mouseleave="onMouseLeave()"
          @mousemove="(e) => onMouseMove(e)"
        />
        <div class="project-info">
          <p><span class="project-title">{{ project.title }}</span>{{ project.excerpt }}</p>
        </div>
      </a>
    </div>
    
    <div class="background-icon">
      <img :src="homeIcon?.url" :alt="homeIcon?.alt" />
    </div>
    
    <CursorView />

  </div>

  
</template>

<style scoped lang="scss">
.project-image {
  cursor: pointer;
}
</style>