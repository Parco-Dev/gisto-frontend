<script setup lang="ts">
const route = useRoute()
const site = useSite()

const pages = computed(() =>
  (site.value?.children ?? []).filter((i: any) => i.isListed)
).value;

const page = site.value;
const projects = site.value?.projects;

// console.log(page);
// console.log(projects);

const isHomePage = computed(() => route.path === '/');
const isAboutPage = computed(() => route.path === '/about');
const isWorkPage = computed(() => route.path === '/work');
const isProject = computed(() => route.path.startsWith('/work/'));

</script>

<template>

  <div class="top-header">

    <div class="top-header-bio" v-if="isHomePage">
      <div class="row">
        <div class="col-lg-10 col-12">
          <div v-router-links v-html="site.long_bio" ></div>
        </div>
        <div class="col-lg-2 col-12"></div>
      </div>
    </div>

    <div class="top-header-bio" v-if="isAboutPage">
      <div class="row">
        <div class="col-lg-10 col-12">
          <div v-router-links v-html="site.long_bio" ></div>
        </div>
        <div class="col-lg-2 col-12"></div>
      </div>
    </div>

    <div class="top-header-filters" v-if="isWorkPage">
      <div class="category-list">
        <p>Categories:</p>
        <ul>
          <li v-for="category in projectCategories" :key="category">{{ category }}</li>
        </ul>
      </div>
      <div class="type-of-work-list">
        <p>Type of Work:</p>
        <ul>
          <li v-for="workType in projectWorkTypes" :key="workType">{{ workType }}</li>
        </ul>
      </div>
    </div>

    <div class="top-header-project" v-if="isProject">
      <div v-html="projects?.year"></div><!-- missing -->
      <div v-html="projects?.place"></div><!-- missing -->
      <div v-html="projects?.client"></div><!-- missing -->
      <div v-for="category in projects?.category" :key="category">
        {{ category }}
      </div>
      <div v-for="typeOfWork in projects?.type_of_work" :key="type_of_work">
        {{ typeOfWork }}
      </div>
    </div>

  </div>

  <header class="site-header">

    <NuxtLink
      to="/"
      class="header-title"
      :aria-current="route.path.startsWith('/') ? 'page' : undefined"
    >
      {{ site.title }}
    </NuxtLink>

    <nav class="header-nav">

      <ul class="header-nav-inner">
        <li class="header-item">
          <NuxtLink to="/work">Work</NuxtLink>
        </li>
        <li class="header-item">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <!-- <li v-for="page in pages" :key="page.id" class="header-item">
          <NuxtLink
            :to="`/${page.id}`"
            :aria-current="route.path.startsWith(`/${page.id}`) ? 'page' : undefined"
          >
            {{page.title}}
          </NuxtLink>
        </li> -->
      </ul>

    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 20px;

  &__nav {
    display: flex;
  }

  &__item {
    [aria-current="page"] {
      text-decoration: underline;
    }
  }
}
</style>
