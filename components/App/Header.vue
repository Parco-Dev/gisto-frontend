<script setup lang="ts">
import { BASE_DELAY } from '~/data/constants';

const route = useRoute()
const site = useSite()
const page = usePage();
const project = useProject() as any;
const { isMobile } = useDevice();

const isHomePage = computed(() => route.path === '/');
const isAboutPage = computed(() => route.path === '/about');
const isWorkPage = computed(() => route.path === '/work');
const isProject = computed(() => route.path.startsWith('/work/'));
const whiteHeaderHeight = useProjectHeader();

const filters = useFilters();
const projectInfoMobileVisible = ref(false);
const siteHeader = ref(null as any);

const projectInfoMobile = () => {
  if (projectInfoMobileVisible.value == true) {
    projectInfoMobileVisible.value = false;
  } else {
    projectInfoMobileVisible.value = true;
  }
}

// Auto-scroll navigation when page is loaded
onMounted(() => {
  if (process.client && siteHeader.value) {
    if (isHomePage.value || isProject.value) siteHeader.value.scrollLeft = 0;
    else if (isWorkPage.value) siteHeader.value.scrollLeft = 120;
    else if (isAboutPage.value) siteHeader.value.scrollLeft = 200;
  }
})

// Auto-scroll navigation on click
const scrollNavPosition = (event: { target: any; }) => {
  siteHeader.value.scrollTo({
    left: event.target.offsetLeft - 100,
    behavior: 'smooth'
  })
}

</script>

<template>

  <div v-if="isProject && isMobile" class="top-header-project top-header-project-mobile">
    <div class="project-info-button" @click="projectInfoMobile()" >
      <p>Project info <span :class="['arrow', projectInfoMobileVisible && 'rotate']" >↓</span></p>
    </div>
    <div v-if="projectInfoMobileVisible" class="project-info-content">
      <div class="content-row">
        <div class="header-label">
          <p>Year</p>
        </div>
        <div class="header-content">
          <p v-html="page?.year"></p>
        </div>
      </div>
      <div class="content-row">
        <div class="header-label">
          <p>Place</p>
        </div>
        <div class="header-content">
          <p v-html="page?.place"></p>
        </div>
      </div>
      <div class="content-row">
        <div class="header-label">
          <p>Client</p>
        </div>
        <div class="header-content">
          <p v-html="page?.client"></p>
        </div>
      </div>
      <div class="content-row">
        <div class="header-label">
          <p>Categories</p>
        </div>
        <div class="header-content">
          <p v-for="category in page?.category" :key="category" class="single-category">
            {{ category }}
          </p>
        </div>
      </div>
      <div class="content-row">
        <div class="header-label">
          <p>Types of work</p>
        </div>
        <div class="header-content">
          <p v-for="typeOfWork in page?.type_of_work" :key="typeOfWork" class="single-type-of-work">
            {{ typeOfWork }}
          </p>
        </div>
      </div>
      <div v-for="credit in page?.credits" :key="credit.id" class="content-row">
        <div class="header-label">
          <p v-html="credit.credits_title"></p>
        </div>
        <div class="header-content">
          <p v-html="credit.credits_content"></p>
        </div>
      </div>
    </div>
  </div>

  <div class="top-header">

    <Transition name="top" mode="out-in">
    <div v-if="isHomePage || isAboutPage" class="top-header-bio">
      <div class="row">
        <div v-router-links class="col-lg-10 col-12">
          <Text :text="site.long_bio" :reveal="true" :delay="BASE_DELAY" :invert="true" />
        </div>
        <div class="col-lg-2 col-12"></div>
      </div>
    </div>
    </Transition>

    <Transition name="top" mode="out-in">
    <div v-if="isWorkPage" class="top-header-filters">
      <div class="filters-group category-list">
        <p class="taxonomy-label">
          <Text text="Categories:" :reveal="true" :delay="BASE_DELAY" :invert="true" />
        </p>
        <ul>
          <li
            :class="{ active: !filters?.category }"
            @click="setFilter('category', null), setFilteredWork()"
          >
            <Text text="All" :reveal="true" :delay="BASE_DELAY" :invert="true" />
          </li>
          <li
            v-for="(category, index) in site.categories"
            :key="category"
            :class="{ active: filters?.category === category }"
            @click="setFilter('category', category); setFilteredWork()"
          >
            <Text :text="category" :reveal="true" :delay="BASE_DELAY + 15 * index" :invert="true" />
          </li>
        </ul>
      </div>
      <div class="filters-group type-of-work-list">
        <p class="taxonomy-label">
          <Text text="Type of work:" :reveal="true" :delay="BASE_DELAY" :invert="true" />
        </p>
        <ul>
          <li
            :class="{ active: !filters?.workType }"
            @click="setFilter('workType', null); setFilteredWork()"
          >
            <Text text="All" :reveal="true" :delay="BASE_DELAY" :invert="true" />
          </li>
          <li
            v-for="(workType, index) in site.workTypes"
            :key="workType"
            :class="{ active: filters?.workType === workType }"
            @click="setFilter('workType', workType); setFilteredWork()"
          >
            <Text :text="workType" :reveal="true" :delay="BASE_DELAY + 15 * index" :invert="true" />
          </li>
        </ul>
      </div>
    </div>
    </Transition>

    <ClientOnly>
    <Transition name="top" mode="out-in">
    <div v-if="isProject" class="top-header-project top-header-project-desktop">
      <div class="row">
        <div class="col-lg-1 col-12">
          <div class="header-content">
            <Text :text="project?.year" :reveal="true" :delay="BASE_DELAY" :invert="true" />
          </div>
          <div class="header-label">
            <Text text="Year" :reveal="true" :delay="BASE_DELAY" :invert="true" />
          </div>
        </div>
        <div class="col-lg-3 col-12">
          <div class="header-content">
            <Text :text="project?.place" :reveal="true" :delay="BASE_DELAY + 15" :invert="true" />
          </div>
          <div class="header-label">
            <Text text="Place" :reveal="true" :delay="BASE_DELAY + 15" :invert="true" />
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="header-content">
            <Text :text="project?.client" :reveal="true" :delay="BASE_DELAY + 30" :invert="true" />
          </div>
          <div class="header-label">
            <Text text="Client" :reveal="true" :delay="BASE_DELAY + 30" :invert="true" />
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="header-content header-taxonomies">
            <div class="header-category">
              <Text v-for="category in project?.category" :key="category" :text="category" :reveal="true" :delay="BASE_DELAY + 45" :invert="true" />
            </div>
            <div class="header-type-of-work">
              <Text v-for="typeOfWork in project?.type_of_work" :key="typeOfWork" :text="typeOfWork" :reveal="true" :delay="BASE_DELAY + 45" :invert="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Transition>    
    </ClientOnly>
  </div>

  <div class="white-header" :style="{height: isProject ? `${whiteHeaderHeight - (isMobile ? 30 : 60)}px` : undefined}"></div>

  <header ref="siteHeader" class="site-header" :class="[isProject && 'site-header-project']">

    <NuxtLink
      to="/"
      class="header-title"
      :aria-current="route.path == '/' ? 'page' : undefined"
      @click="(e) => scrollNavPosition(e)"
    >
      <Text :text="site.title" :reveal="true" :delay="50" :invert="true" />
    </NuxtLink>

    <nav class="header-nav">
      <ul class="header-nav-inner">
        <li class="header-item">
          <NuxtLink 
            to="/work"
            :aria-current="route.path.startsWith('/work') ? 'page' : undefined"
            @click="(e) => scrollNavPosition(e)"
          >
            <Text text="Work" :reveal="true" :delay="100" :invert="true" />
          </NuxtLink>
        </li>
        <li class="header-item">
          <NuxtLink 
            to="/about"
            :aria-current="route.path.startsWith('/about') ? 'page' : undefined"
            @click="(e) => scrollNavPosition(e)"
          >
            <Text text="About" :reveal="true" :delay="150" :invert="true" />
          </NuxtLink>
        </li>
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

.top-leave-to {
  .animated-text {
    opacity: 0;
    &:after {
      width: 101%;
    }
  }
  li.active:before {
    width: 0%;
  }
}

.top-header {
  &-bio, &-filters, &-project {
    position: fixed;
    top: 0;
    width: 100%;
    animation: fade-from-top .75s ease-in-out 1;
  }
  &-project-mobile {
    border-bottom: 2px solid white;
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

.arrow {
  display: inline-block;
  transition: transform .15s;
  &.rotate {
    transform: rotate(180deg) translateY(2px);
  }
}

@keyframes fade-from-top {
  0%   { opacity: 0; transform: translateY(-10px); }
  50%  { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
