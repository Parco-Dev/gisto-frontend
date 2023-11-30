<script setup lang="ts">
import { homeQuery } from '~/queries';
import { BASE_DELAY } from '~/data/constants';

const { queryApi, queryParams } = useQueryParams(homeQuery);
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

setPage(page);

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
    <div v-for="(project, index) in featured" :key="project.id" :class="`featured-project columns-${project.columns}`">
      <a :href="`/work/${project.url}`">
        <div
          class="project-image"
          @mouseenter="onMouseEnter()"
          @mouseleave="onMouseLeave()"
          @mousemove="(e) => onMouseMove(e)"
        >
          <Image :image="project.main_image" :delay="index * 15" class-name="home-image" />
        </div>
        <div class="project-info">
          <p>
            <Text class-name="project-title" :text="project.title" :reveal="true" :delay="BASE_DELAY + index * 15" />&nbsp;
            <Text :text="project.excerpt" :reveal="true" reveal-mode="opacity" :delay="BASE_DELAY + 200 + index * 15" />
          </p>
        </div>
      </a>
    </div>
    
    <div class="background-icon">
      <img :src="page.home_icon?.url" :alt="page.home_icon?.alt" />
    </div>
    
    <CursorView />

  </div>

  
</template>

<style scoped lang="scss">

.featured-project a {
  position: relative;
}

</style>