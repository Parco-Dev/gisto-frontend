<script setup lang="ts">
import { getProjectsQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(getProjectsQuery());
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

const minHeight = ref('');
const hoveredProject = ref(-1);

setPage(page);

setWork(page.children);

const filteredWork = useFilteredWork();

onMounted(() => {
  // Calculate minimum height for content
  minHeight.value = '300px';

  // Add scroll listener
  window.addEventListener('scroll', (e) => scrollFunction(e))
})

const showImage = (index: number) => {
  hoveredProject.value = index;
}

const hideImage = () => {
  hoveredProject.value = -1;
}

const scrollFunction = (e: any) => {
  // console.log(e.target.body);
}

</script>

<template>
<div class="content page-work" :style="{minHeight}">

  <div class="projects-header">
    <div class="row">
        <div class="col-lg-1 col-12 column-button" @click="setFilteredWork('year')">
          <p>Year <IconSort /></p>
        </div>
        <div class="col-lg-5 col-12 column-button" @click="setFilteredWork('name')">
          <p>Name <IconSort /></p>
        </div>
        <div class="col-lg-3 col-12 column-button" @click="setFilteredWork('place')">
          <p>Place <IconSort /></p>
        </div>
        <div class="col-lg-3 col-12 column-button" @click="setFilteredWork('client')">
          <p>Client <IconSort /></p>
        </div>
      </div>
  </div>

  <div class="projects-list">
    <div
      v-for="(project, index) in filteredWork"
      :key="project.id"
      :data-project="`project-${index+1}`"
      class="single-project"
      :class="hoveredProject === index ? 'show-thumbnail' : ''"
    >
      <a :href="`/work/${project.url}`">
        <div class="row">
          <div class="col-lg-1 col-3 project-year">
            <div v-if="project.ongoing === 'true'">
              <p>Ongoing</p>
            </div>
            <div v-else>
              <p v-html="project.year"></p>
            </div>
          </div>
          <div class="col-lg-5 col-9 project-title">
            <p @mouseenter="showImage(index)" @mouseleave="hideImage()">{{ project.title }}</p>
          </div>
          <div class="col-lg-3 col-12 project-place">
            <p v-html="project.place"></p>
          </div>
          <div class="col-lg-3 col-12 project-client">
            <p v-html="project.client"></p>
          </div>
        </div>
      </a>
      <div class="single-thumbnail">
        <img :src="project.main_image?.[0]?.url" :alt="project.main_image?.[0]?.alt" />
      </div>
    </div>
    <div></div>
  </div>

  <div class="mobile-projects-images">
    <div v-for="(project, index) in filteredWork" :key="project.id" :data-project="`project-${index+1}`" class="single-thumbnail">
      <img :src="project.main_image?.[0]?.url" :alt="project.main_image?.[0]?.alt" />
    </div>
  </div>

  <!--
  <div class="thumbnails-list">
    <div class="single-thumbnail" v-for="(project, index) in page.children" :key="project.id" :id="'project-' + (index + 1)">
      <img :src="project.main_image?.[0]?.url" :alt="project.main_image?.[0]?.alt" />
    </div>
  </div>
  -->
    

</div>
</template>
