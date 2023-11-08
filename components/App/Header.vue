<script setup lang="ts">
const route = useRoute()
const site = useSite()
const project = useProject();

const isHomePage = computed(() => route.path === '/');
const isAboutPage = computed(() => route.path === '/about');
const isWorkPage = computed(() => route.path === '/work');
const isProject = computed(() => route.path.startsWith('/work/'));

const projectCategories = ref([] as string[]);
const projectWorkTypes = ref([] as string[]);

if (isWorkPage) {
  site.value.projects?.forEach((p: any) => {
    p.category?.forEach((val: string) => {
      if (!projectCategories.value.includes(val)) {
        projectCategories.value.push(val);
      }
    })
    p.type_of_work?.forEach((val: string) => {
      if (!projectWorkTypes.value.includes(val)) {
        projectWorkTypes.value.push(val);
      }
    })
  });
}

const filters = useFilters();

</script>

<template>

  <div class="top-header">
    
    <Transition name="top" mode="out-in">
    <div v-if="isHomePage || isAboutPage" class="top-header-bio">
      <div class="row">
        <div class="col-lg-10 col-12">
          <div v-router-links v-html="site.long_bio" ></div>
        </div>
        <div class="col-lg-2 col-12"></div>
      </div>
    </div>
    </Transition>

    <Transition name="top">
    <div v-if="isWorkPage" class="top-header-filters">
      <div class="filters-group category-list">
        <p class="taxonomy-label">Categories:</p>
        <ul>
          <li
            :class="{ active: !filters?.category }"
            @click="setFilter('category', null), setFilteredWork()"
          >All</li>
          <li
            v-for="category in projectCategories"
            :key="category"
            :class="{ active: filters?.category === category }"
            @click="setFilter('category', category); setFilteredWork()"
          >{{ category }}</li>
        </ul>
      </div>
      <div class="filters-group type-of-work-list">
        <p class="taxonomy-label">Type of Work:</p>
        <ul>
          <li
            :class="{ active: !filters?.workType }"
            @click="setFilter('workType', null); setFilteredWork()"
          >All</li>
          <li
            v-for="workType in projectWorkTypes"
            :key="workType"
            :class="{ active: filters?.workType === workType }"
            @click="setFilter('workType', workType); setFilteredWork()"
          >{{ workType }}</li>
        </ul>
      </div>
    </div>
    </Transition>

    <Transition name="top">
    <div v-if="isProject" class="top-header-project">
      <div class="row">
        <div class="col-lg-1 col-12">
          <div class="header-content">
            <p v-html="project?.year"></p>
          </div>
          <div class="header-label">
            <p>Year</p>
          </div>
        </div>
        <div class="col-lg-3 col-12">
          <div class="header-content">
            <p v-html="project?.place"></p>
          </div>
          <div class="header-label">
            <p>Place</p>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="header-content">
            <p v-html="project?.client"></p>
          </div>
          <div class="header-label">
            <p>Client</p>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="header-content header-taxonomies">
            <p v-for="category in project?.category" :key="category" class="single-category">
              {{ category }}
            </p>
            <p v-for="typeOfWork in project?.type_of_work" :key="typeOfWork" class="single-type-of-work">
              {{ typeOfWork }}
            </p>
          </div>
        </div>
      </div>
      
    </div>
    </Transition>

  </div>

  <div class="white-header"></div>

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
.top-enter-active,
.top-leave-active {
  transition: all 0.5s;
}

.top-enter-active {
  transition-delay: 0.5s;
}

.top-enter-from,
.top-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.top-header {
  height: 60px;
  max-height: 60px;
  min-height: 60px;

  &-bio, &-filters, &-project {
    position: absolute;
    top: 0;
  }
}

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
