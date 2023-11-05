<script setup lang="ts">
import { getProjectsQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(getProjectsQuery());
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

setPage(page);
console.log(page);

</script>

<template>
<div class="content page-work">


      <!--<ul>
        <li v-for="typeOfWork in project?.type_of_work" :key="typeOfWork">
          {{ typeOfWork }}
        </li>
      </ul>
      <ul>
        <li v-for="category in project?.category" :key="category">
          {{ category }}
        </li>
      </ul>-->

      <div class="projects-header">
        <div class="row">
            <div class="col-lg-1 col-12 column-button">
              <p>Year
                <svg class="sort-icon" version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 13.1 11.4" style="enable-background:new 0 0 13.1 11.4;" xml:space="preserve">
                  <polygon points="6.6,0 0,11.4 13.1,11.4 "/>
                </svg>
              </p>
            </div>
            <div class="col-lg-5 col-12 column-button">
              <p>Name
                <svg class="sort-icon" version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 13.1 11.4" style="enable-background:new 0 0 13.1 11.4;" xml:space="preserve">
                  <polygon points="6.6,0 0,11.4 13.1,11.4 "/>
                </svg>
              </p>
            </div>
            <div class="col-lg-3 col-12 column-button">
              <p>Client
                <svg class="sort-icon" version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 13.1 11.4" style="enable-background:new 0 0 13.1 11.4;" xml:space="preserve">
                  <polygon points="6.6,0 0,11.4 13.1,11.4 "/>
                </svg>
              </p>
            </div>
            <div class="col-lg-3 col-12 column-button">
              <p>Place
                <svg class="sort-icon" version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 13.1 11.4" style="enable-background:new 0 0 13.1 11.4;" xml:space="preserve">
                  <polygon points="6.6,0 0,11.4 13.1,11.4 "/>
                </svg>
              </p>
            </div>
          </div>
      </div>

      <div class="projects-list">
        <div v-for="(project, index) in page.children" :key="project.id" :data-project="'project-' + (index + 1)" class="single-project">
          <a :href="`/work/${project.url}`">
            <div class="row">
              <div class="col-lg-1 col-12 project-year">
                <p v-html="project.year"></p>
              </div>
              <div class="col-lg-5 col-12 project-title">
                <p>{{ project.title }}</p>
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
