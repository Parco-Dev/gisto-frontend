<script setup lang="ts">
import { getProjectQuery } from '~/queries'

const kirbyPath = useRoute().path;
const { queryApi, queryParams } = useQueryParams(getProjectQuery(kirbyPath));
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

setPage(page);
setProject(page);

</script>

<template>
<div class="content single-project">

  <div class="project-title">
    <p>{{ page?.title }}</p>
  </div>

  <div class="project-header">
    <div class="project-subtitle">
      <div class="row">
        <div class="col-lg-8 col-12">
          <p v-html="page.subtitle"></p>
        </div>
        <div class="col-lg-4 col-12"></div>
      </div>
    </div>
  </div>

  <div class="project-blocks">
    <div v-for="block in page.content" :key="block.id" class="project-block">
      <div v-if="block.type === 'fullwidth_images'" class="single-module module-fullwidth-image">
        <img :src="constructImageUrl(block.content.images?.[0])" />
        <div class="caption">
          <div class="row">
            <div class="col-lg-4 col-12"></div>
            <div class="col-lg-8 col-12">
              <p v-html="block.content.caption"></p>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="block.type === 'double_images'" class="single-module module-double-images">
        <div class="row">
          <div class="col-lg-6 col-12">
            <img :src="constructImageUrl(block.content.image1?.[0])" />
            <div class="caption">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <p v-html="block.content.caption1"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <img :src="constructImageUrl(block.content.image2?.[0])" />
            <div class="caption">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <p v-html="block.content.caption2"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="single-module module-text">
        <div class="row">
          <div class="col-lg-8 col-12">
            <p v-html="block.content.paragraph"></p>  
          </div>
          <div class="col-lg-4 col-12"></div>
        </div>     
      </div>
    </div>
  </div>

  <div class="project-credits">
    <div v-for="credit in page?.credits" :key="credit.id" class="credits-group">
      <div class="credits-title">
        <p v-html="credit.credits_title"></p>
      </div>
      <div class="credits-content">
        <p v-html="credit.credits_content"></p>
      </div>
    </div>
  </div>

  <Files />

  <Lightbox />

</div>
</template>