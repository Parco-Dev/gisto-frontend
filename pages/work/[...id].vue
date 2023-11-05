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

  <!--<div class="project-files">
    <div class="project-files-button">
      <svg class="closed-folder" version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 13.4 11.4" style="enable-background:new 0 0 13.4 11.4;" xml:space="preserve">
        <g>
          <g id="Raggruppa_100">
            <path id="Tracciato_50" class="st0" d="M13,1.1H4.3L3.9,0.3C3.8,0.1,3.6,0,3.5,0H1C0.8,0,0.6,0.1,0.6,0.3L0,1.3l0,0
              c0,0.1,0,0.1,0,0.2v9.4c0,0.2,0.2,0.4,0.4,0.4H13c0.2,0,0.4-0.2,0.4-0.4V1.5C13.4,1.3,13.2,1.1,13,1.1C13,1.1,13,1.1,13,1.1
              M12.5,10.5H0.9V2h11.6V10.5z"/>
          </g>
        </g>
      </svg>
      <svg class="open-folder" version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.1 11.4" style="enable-background:new 0 0 16.1 11.4;" xml:space="preserve">
        <g>
          <g id="Raggruppa_99">
            <path id="Tracciato_49" class="st0" d="M15.7,1.1H7L6.6,0.3C6.5,0.1,6.4,0,6.2,0H3.7C3.5,0,3.3,0.1,3.3,0.3l-0.5,1l0,0 c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1v2.2H0.4C0.3,3.8,0.2,3.8,0.1,4C0,4.1,0,4.2,0,4.4l2.7,6.7c0,0,0,0,0,0c0,0,0,0,0,0.1 c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.1,0.3,0.1h12.5c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.2c0-0.1,0.1-0.1,0.1-0.2l0-9.4 C16.1,1.3,15.9,1.1,15.7,1.1 M15,10.5H3.5L1.1,4.7h11.5L15,10.5z M13,3.8H3.6V2h11.6v6.6L13.4,4C13.3,3.9,13.2,3.8,13,3.8"/>
          </g>
        </g>
      </svg>
      <p>More</p>
    </div>
    <div class="project-files-content">
      <div v-if="page?.photo_dump && page.photo_dump.length" class="files-group">
        <div class="files-group-title">
          <p>Photo dump</p>
        </div>
        <div class="files-group-list">
          <div v-for="file in page?.photo_dump" :key="file.id" class="single-file">
            <p v-html="file.name + '.' + file.extension"></p>
          </div>
        </div>
      </div>
      <div v-if="page?.drawings_diagrams && page.drawings_diagrams.length" class="files-group">
        <div class="files-group-title">
          <p>Drawings / diagrams</p>
        </div>
        <div class="files-group-list">
          <div v-for="file in page?.drawings_diagrams" :key="file.id" class="single-file">
            <p v-html="file.name + '.' + file.extension"></p>
          </div>
        </div>
      </div>
      <div v-if="page?.models && page.models.length" class="files-group">
        <div class="files-group-title">
          <p>Models</p>
        </div>
        <div class="files-group-list">
          <div v-for="file in page?.models" :key="file.id" class="single-file">
            <p v-html="file.name + '.' + file.extension"></p>
          </div>
        </div>
      </div>
      <div v-if="page?.video && page.video.length" class="files-group">
        <div class="files-group-title">
          <p>Video</p>
        </div>
        <div class="files-group-list">
          <div v-for="file in page?.video" :key="file.id" class="single-file">
            <p v-html="file.name + '.' + file.extension"></p>
          </div>
        </div>
      </div>
      <div v-if="page?.graphics && page.graphics.length" class="files-group">
        <div class="files-group-title">
          <p>Graphics</p>
        </div>
        <div class="files-group-list">
          <div v-for="file in page?.graphics" :key="file.id" class="single-file">
            <p v-html="file.name + '.' + file.extension"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  -->

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
  mounted() {
    const projectFilesButton = document.querySelector('.project-files-button');
    const projectFilesContent = document.querySelector('.project-files-content');
    if (projectFilesButton && projectFilesContent) {
      projectFilesButton.addEventListener('click', () => {
        projectFilesButton.classList.toggle('opened');
        projectFilesContent.classList.toggle('visible');
      });
    }
    const filesGroupTitle = document.querySelector('.files-group-title');
    const filesGroupList = document.querySelector('.files-group-list');
    if (filesGroupTitle && filesGroupList) {
      filesGroupTitle.addEventListener('click', () => {
        filesGroupList.classList.toggle('visible');
      });
    }
  },
  methods: {
    constructImageUrl(relativePath) {
      const baseUrl = 'http://gisto-backend.test/@/file/';
      return `${baseUrl}/${relativePath.replace('file://', '')}`;
    },
  },
};
</script>
