<script setup lang="ts">
const route = useRoute()
const site = useSite()

const pages = computed(() =>
  (site.value?.children ?? []).filter((i: any) => i.isListed)
).value;

const page = usePage();
const projects = site.value?.projects;

// console.log(page);
// console.log(projects);

const isHomePage = computed(() => route.path === '/');
const isAboutPage = computed(() => route.path === '/about');
const isWorkPage = computed(() => route.path === '/work');
const isProject = computed(() => route.path.startsWith('/work/'));

const projectCategories = ref([] as string[]);
const projectWorkTypes = ref([] as string[]);

site.value.projects?.forEach((project: any) => {
  project.category?.forEach((val: string) => {
    if (!projectCategories.value.includes(val)) {
      projectCategories.value.push(val);
    }
  })
  project.type_of_work?.forEach((val: string) => {
    if (!projectWorkTypes.value.includes(val)) {
      projectWorkTypes.value.push(val);
    }
  })
});

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
      <div class="filters-group category-list">
        <p class="taxonomy-label">Categories:</p>
        <ul>
          <li class="active">All</li>
          <li v-for="category in projectCategories" :key="category">{{ category }}</li>
        </ul>
      </div>
      <div class="filters-group type-of-work-list">
        <p class="taxonomy-label">Type of Work:</p>
        <ul>
          <li class="active">All</li>
          <li v-for="workType in projectWorkTypes" :key="workType">{{ workType }}</li>
        </ul>
      </div>
    </div>

    <div class="top-header-project" v-if="isProject">
      <div class="row">
        <div class="col-lg-1 col-12">
          <div class="header-content">
            <p v-html="page?.year"></p>
          </div>
          <div class="header-label">
            <p>Year</p>
          </div>
        </div>
        <div class="col-lg-3 col-12">
          <div class="header-content">
            <p v-html="page?.place"></p>
          </div>
          <div class="header-label">
            <p>Place</p>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="header-content">
            <p v-html="page?.client"></p>
          </div>
          <div class="header-label">
            <p>Client</p>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="header-content header-taxonomies">
            <p v-for="category in page?.category" :key="category">
              {{ category }}
            </p>
            <p v-for="typeOfWork in page?.type_of_work" :key="typeOfWork">
              {{ typeOfWork }}
            </p>
          </div>
        </div>
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
