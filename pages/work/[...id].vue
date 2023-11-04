<script setup lang="ts">
import { getProjectQuery } from '~/queries'

const kirbyPath = useRoute().path;
const { queryApi, queryParams } = useQueryParams(getProjectQuery(kirbyPath));
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

console.log(page);

setPage(page);
</script>

<template>
<div class="content single-project">

  <div class="project-header">
    <div class="project-title">
      <p>{{ page?.title }}</p>
    </div>
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
        <p v-html="block.content.paragraph"></p>        
      </div>
    </div>
  </div>

  <div class="project-credits">
    <div v-for="credit in page?.credits" :key="credit.id">
      <div class="credits-title">
        <p v-html="credit.credits_title"></p>
      </div>
      <div class="credits-content">
        <p v-html="credit.credits_content"></p>
      </div>
    </div>
  </div>

  <div class="project-files">
    <div class="project-files-button">
      <p>More</p>
    </div>
    <div class="project-files-content">
      <div class="files-group">
        <div class="files-group-title">
          <p>Photo dump</p>
        </div>
        <div class="files-group-list">
          <div v-for="file in page?.photo_dump" :key="file.id">
            <p v-html="file.name"></p>
          </div>
        </div>
      </div>
      <div class="files-group">
        <div class="files-group-title">
          <p>Drawings / diagrams</p>
        </div>
        <div class="files-group-list">
          <div v-for="file in page?.drawings_diagrams" :key="file.id">
            <p v-html="file.name"></p>
          </div>
        </div>
      </div>
      <div class="files-group">
        <div class="files-group-title">
          <p>Models</p>
        </div>
        <div class="files-group-list">
          <div v-for="file in page?.models" :key="file.id">
            <p v-html="file.name"></p>
          </div>
        </div>
      </div>
      <div class="files-group">
        <div class="files-group-title">
          <p>Video</p>
        </div>
        <div class="files-group-list">
          <div v-for="file in page?.video" :key="file.id">
            <p v-html="file.name"></p>
          </div>
        </div>
      </div>
      <div class="files-group">
        <div class="files-group-title">
          <p>Graphics</p>
        </div>
        <div class="files-group-list">
          <div v-for="file in page?.graphics" :key="file.id">
            <p v-html="file.name"></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="project-lightbox">
    <div class="single-lightbox" id="photo_dump">
      <div v-for="file in page?.photo_dump" :key="file.id">
        <div v-if="file.type === 'video'" class="type-video">
          <video autoplay loop playsinline muted>
            <source :src="file.url" type="video/mp4">
          </video>
        </div>
        <div v-else class="type-image">
          <img :src="file.url" />
        </div>
      </div>
    </div>
    <div class="single-lightbox" id="drawings_diagrams">
      <div v-for="file in page?.drawings_diagrams" :key="file.id">
        <div v-if="file.type === 'video'" class="type-video">
          <video autoplay loop playsinline muted>
            <source :src="file.url" type="video/mp4">
          </video>
        </div>
        <div v-else class="type-image">
          <img :src="file.url" />
        </div>
      </div>
    </div>
    <div class="single-lightbox" id="models">
      <div v-for="file in page?.models" :key="file.id">
        <div v-if="file.type === 'video'" class="type-video">
          <video autoplay loop playsinline muted>
            <source :src="file.url" type="video/mp4">
          </video>
        </div>
        <div v-else class="type-image">
          <img :src="file.url" />
        </div>
      </div>
    </div>
    <div class="single-lightbox" id="video">
      <div v-for="file in page?.video" :key="file.id">
        <div v-if="file.type === 'video'" class="type-video">
          <video autoplay loop playsinline muted>
            <source :src="file.url" type="video/mp4">
          </video>
        </div>
        <div v-else class="type-image">
          <img :src="file.url" />
        </div>
      </div>
    </div>
    <div class="single-lightbox" id="graphics">
      <div v-for="file in page?.graphics" :key="file.id">
        <div v-if="file.type === 'video'" class="type-video">
          <video autoplay loop playsinline muted>
            <source :src="file.url" type="video/mp4">
          </video>
        </div>
        <div v-else class="type-image">
          <img :src="file.url" />
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script lang="ts">
export default {
  methods: {
    constructImageUrl(relativePath) {
      // Replace "file://" with the base URL or path to your images
      const baseUrl = 'http://gisto-backend.test/@/file/'; // Replace with your actual URL
      return `${baseUrl}/${relativePath.replace('file://', '')}`;
    },
  },
};
</script>
