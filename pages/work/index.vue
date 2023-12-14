<script setup lang="ts">
import { getProjectsQuery } from '~/queries';
import { BASE_DELAY } from '~/data/constants';

const { queryApi, queryParams } = useQueryParams(getProjectsQuery());
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

const hoveredProject = ref(-1);

setPage(page);
setWork(page.children);

const filteredWork = useFilteredWork();

onMounted(() => {
  if (process.client) {
    const pageWorkElement = document.getElementsByClassName("page-work")[0];
    pageWorkElement?.addEventListener('scroll', (e) => scrollFunction(e));
  }
})

const showImage = (index: number) => {
  hoveredProject.value = index;
}

const hideImage = () => {
  hoveredProject.value = -1;
}

const scrollFunction = (e: Event) => {
  if (process.client) {
    const pageWorkElement = e.target as HTMLElement;
    const projects = document.querySelectorAll('.single-project');
    const scroll = pageWorkElement.scrollTop;
    projects.forEach((project) => {
      const projectRect = project.getBoundingClientRect();
      const projectTop = projectRect.top;
      if (projectTop >= 120 && projectTop <= 140) {
        const dataProject = project.getAttribute('data-project');
        // console.log(`Active Project (data-project): ${dataProject}`);
        const mobileProjectsImages = document.querySelector('.mobile-projects-images');
        const correspondingImage = mobileProjectsImages.querySelector(`[data-project="${dataProject}"]`);
        if (correspondingImage) {
          console.log(`${dataProject}`);
          correspondingImage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
};

</script>

<template>
<div class="content page-work">

  <div class="projects-header">
    <div class="row">
        <div class="col-lg-1 col-12 column-button" @click="setFilteredWork('year')">
          <p><Text text="Year" :reveal="true" :delay="BASE_DELAY" /> <IconSort /></p>
        </div>
        <div class="col-lg-5 col-12 column-button" @click="setFilteredWork('name')">
          <p><Text text="Name" :reveal="true" :delay="BASE_DELAY" /> <IconSort /></p>
        </div>
        <div class="col-lg-3 col-12 column-button" @click="setFilteredWork('client')">
          <p><Text text="Client" :reveal="true" :delay="BASE_DELAY" /> <IconSort /></p>
        </div>
        <div class="col-lg-3 col-12 column-button" @click="setFilteredWork('place')">
          <p><Text text="Place" :reveal="true" :delay="BASE_DELAY" /> <IconSort /></p>
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
              <Text text="Ongoing" :reveal="true" :delay="BASE_DELAY + index * 15" />
            </div>
            <div v-else>
              <Text :text="project.year" :reveal="true" :delay="BASE_DELAY + index * 15" />
            </div>
          </div>
          <div class="col-lg-5 col-9 project-title">
            <Text :text="project.title" :reveal="true" :delay="BASE_DELAY + 50 + index * 15" @mouseenter="showImage(index)" @mouseleave="hideImage()" />
          </div>
          <div class="col-lg-3 col-12 project-client">
            <Text :text="project.client" :reveal="true" :delay="BASE_DELAY + 150 + index * 15" />
          </div>
          <div class="col-lg-3 col-12 project-place">
            <Text :text="project.place" :reveal="true" :delay="BASE_DELAY + 100 + index * 15" />
          </div>
        </div>
      </a>
      <div class="single-thumbnail">
        <img v-if="project.main_image?.url_1280" :src="project.main_image.url_1280" :alt="project.main_image.alt" />
      </div>
    </div>
    <div></div>
  </div>

  <div class="mobile-projects-images">
    <div v-for="(project, index) in filteredWork" :key="project.id" :data-project="`project-${index+1}`" class="single-thumbnail">
      <img v-if="project.main_image?.url_1280" :src="project.main_image.url_1280" :alt="project.main_image.alt" />
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
