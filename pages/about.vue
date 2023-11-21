<script setup lang="ts">
import { aboutQuery } from '~/queries'

const { queryApi, queryParams } = useQueryParams(aboutQuery);
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

setPage(page);
const site = useSite()
console.log(page);
console.log(site);

</script>

<template>
<div class="content page-about">

  <div class="about-text">
    <p v-html="page?.about_text"></p>
  </div>

  <div class="about-contacts">
    <div class="row">
      <div class="col-lg-3 col-12">
        <p class="footer-studio-address" v-router-links v-html="site.studio_address"></p>
      </div>
      <div class="col-lg-3 col-12">
        <p class="footer-workshop-address" v-router-links v-html="site.workshop_address"></p>
      </div>
      <div class="col-lg-2 col-12">
        <div class="contact-email">
          <p class="label">E-mail</p>
          <a :href="`mailto:${page.email}`">{{ page?.email }}</a>
        </div>
        <div class="contact-social">
          <p class="label">Social</p>
          <div class="social-list">
            <a v-for="social in page?.social" :key="social.url" :href="`${social.url}`">
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-12">
        <p v-html="page?.jobs"></p>
      </div>
      <div class="col-lg-1 col-12"></div>
    </div>
  </div>

  <div class="about-content">
    <div class="row">
      <div class="col-lg-8 col-12">
        <img :src="page?.about_image?.[0]?.url" :alt="page?.about_image?.[0]?.alt" />
        <p v-html="page?.text"></p>
      </div>
      <div class="col-lg-4 col-12"></div>
    </div>
  </div>


  <div class="about-collaborations-press">
    <div class="about-collaborations">
      <p class="label">Collaborations</p>
      <div v-html="page?.collaborations"></div>
    </div>
    <div class="about-press">
      <p class="label">Press</p>
      <div v-html="page?.press"></div>
    </div>
  </div>

  <div class="about-news">
    <div v-for="news in page?.news" :key="news.id" :class="`single-news columns-${news.columns}`">
      <img :src="news.news_image?.[0]?.url" :alt="news.news_image?.[0]?.alt" />
      <div class="news-info">
        <p><span class="news-title">{{ news.title }}</span> {{ news.text }}</p>
      </div>
      <div class="news-links">
        <a v-for="link in news.links" :key="link.id" :href="`${news.url}`" class="news-link">
          <p class="link-text"><span v-html="link.link_text"></span> ↗</p>
        </a>
      </div>
      <div class="news-downloads">
        <a v-for="download in news.downloads" :key="download.id" :href="`${download.link_download?.[0]?.url}`" class="download-link">
          <p class="download-text"><span v-html="download.name_download"></span> ↗</p>
        </a>
      </div>
    </div>
  </div>



</div>
</template>
