<script setup lang="ts">
import { homeQuery } from '~/queries';

const { queryApi, queryParams } = useQueryParams(homeQuery);
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

setPage(page);

const homeIcon = page?.home_icon?.[0]; 

// console.log(page);

</script>

<template>
  <div class="content featured-projects-list">

    <div class="row">

      <div class="single-project col-lg-8 col-12">
        <NuxtLink to="/work/analogue-tools">
          <img src="https://placehold.co/900x500/png">
          <div class="project-info">
            <p><span class="project-title">Analogue tools</span> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
          </div>
        </NuxtLink>
      </div>
      
      <div class="single-project col-lg-4 col-12">
        <a href="#">
          <img src="https://placehold.co/500x800/png">
          <div class="project-info">
            <p><span class="project-title">AR/GE kunst</span> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
          </div>
        </a>
      </div>

      <div class="single-project col-lg-5 col-12">
        <a href="#">
          <img src="https://placehold.co/500x800/png">
          <div class="project-info">
            <p><span class="project-title">Unknown unknowns</span> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
          </div>
        </a>
      </div>

      <div class="single-project col-lg-7 col-12">
        <a href="#">
          <img src="https://placehold.co/900x500/png">
          <div class="project-info">
            <p><span class="project-title">Unknown unknowns</span> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
          </div>
        </a>
      </div>

      <div class="single-project col-lg-6 col-12">
        <a href="#">
          <img src="https://placehold.co/800x600/png">
          <div class="project-info">
            <p><span class="project-title">Unknown unknowns</span> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
          </div>
        </a>
      </div>

      <div class="single-project col-lg-6 col-12">
        <a href="#">
          <img src="https://placehold.co/800x600/png">
          <div class="project-info">
            <p><span class="project-title">Unknown unknowns</span> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
          </div>
        </a>
      </div>
    </div> 

    <div class="background-icon">
      <img :src="homeIcon?.url" :alt="homeIcon?.alt" />
    </div>

    <!--<li v-for="project in page?.featuredProjects" :key="project.id">
      <a :href="`/work/${project.url}`">
        <h3>{{ project.title }}</h3>
        <div v-html="project.excerpt"></div>
        <img :src="project.main_image?.[0]?.url" :alt="project.main_image?.[0]?.alt" />
      </a>
    </li>-->

  </div>
</template>