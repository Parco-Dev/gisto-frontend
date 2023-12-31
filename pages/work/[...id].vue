<script setup lang="ts">
import { getProjectQuery } from '~/queries';
import { BASE_DELAY } from '~/data/constants';

const kirbyPath = useRoute().path;
const { queryApi, queryParams } = useQueryParams(getProjectQuery(kirbyPath));
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;
const projectTitle = ref(null as any);

setPage(page);
setProject(page);

// Set white bar height dynamically
onMounted(() => {
  if (projectTitle.value) {
    setTimeout(() => {
      const topHeader = document.querySelector('.top-header');
      const siteHeader = document.querySelector('.site-header');
      if (!topHeader || !siteHeader) return;
      setProjectHeader(topHeader.clientHeight + siteHeader.clientHeight + projectTitle.value.clientHeight);
    }, 1500)
  }
})

</script>

<template>
<div class="content single-project single-project-page">

  <div ref="projectTitle" class="project-title">
    <Text :text="page.title" :reveal="true" :delay="BASE_DELAY" :invert="true" />
  </div>

  <div class="project-header">
    <div class="project-subtitle">
      <div class="row">
        <div class="col-lg-8 col-12">
          <Text :text="page.subtitle" :reveal="true" :delay="BASE_DELAY + 50" />
        </div>
        <div class="col-lg-4 col-12"></div>
      </div>
    </div>
  </div>

  <div class="project-blocks">
    <div v-for="(block, index) in page.content" :key="block.id" class="project-block">
      <div v-if="block.type === 'fullwidth_images'" class="single-module module-fullwidth-image">
        <Image v-if="block.image" :image="block.image" class-name="project-image" :delay="15 * index" />
        <div class="caption">
          <div class="row">
            <div class="col-lg-4 col-3"></div>
            <div class="col-lg-8 col-9">
              <Text :text="block.caption" :reveal="true" :delay="BASE_DELAY + 15 * index" />
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="block.type === 'double_images'" class="single-module module-double-images">
        <div class="row double-image-column-container">
          <div class="col-lg-6 col-9 double-image-column">
            <Image v-if="block.image1" :image="block.image1" class-name="project-image" :delay="15 * index" />
            <div class="caption">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <Text :text="block.caption1" :reveal="true" :delay="BASE_DELAY + 15 * index" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-9 double-image-column">
            <Image v-if="block.image2" :image="block.image2" class-name="project-image" :delay="15 * index" />
            <div class="caption">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <Text :text="block.caption2" :reveal="true" :delay="BASE_DELAY + 15 * index" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="single-module module-text">
        <div class="row">
          <div class="col-lg-8 col-12">
            <Text :text="block.paragraph" :reveal="true" :delay="BASE_DELAY + 15 * index" />
          </div>
          <div class="col-lg-4 col-12"></div>
        </div>     
      </div>
    </div>
  </div>

  <div class="project-credits">
    <div v-for="credit in page?.credits" :key="credit.id" class="credits-group">
      <div class="credits-title">
        <Text :text="credit.credits_title" :reveal="true" :delay="BASE_DELAY" />
      </div>
      <div class="credits-content">
        <Text :text="credit.credits_content" :reveal="true" :delay="BASE_DELAY + 15" />
      </div>
    </div>
  </div>

  <Files />

  <Lightbox />

  <div class="projects-navigation">
    <NuxtLink v-if="page?.prev" :to="`/work/${page.prev.slug}`" class="prev-link">
      <p>← Prev</p>
      <p v-html="page.prev.title"></p>
    </NuxtLink>
    <NuxtLink v-if="page?.next" :to="`/work/${page.next.slug}`" class="next-link">
      <p>Next →</p>
      <p v-html="page.next.title"></p>
    </NuxtLink>
  </div>

</div>
</template>

<style scoped lang="scss">
.single-module {
  position: relative;
}

.double-image-column {
  position: relative;

  .absolute {
    padding: 0px 2.5px;
  }
}
</style>