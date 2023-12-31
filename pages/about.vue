<script setup lang="ts">
import { aboutQuery } from '~/queries'
import { BASE_DELAY } from '~/data/constants';

const { queryApi, queryParams } = useQueryParams(aboutQuery);
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;
const site = useSite();

const collaborations = computed(() => textareaToArray(page.collaborations));
const press = computed(() => textareaToArray(page.press));

setPage(page);

</script>

<template>
<div class="content page-about">

  <div class="about-text">
    <Text :text="page.about_text" :reveal="true" :delay="800" />
  </div>

  <div class="about-contacts">
    <div class="row">
      <div class="col-lg-3 col-12">
        <Text v-router-links class="footer-studio-address" :text="site.studio_address" :reveal="true" :delay="BASE_DELAY" />
      </div>
      <div class="col-lg-3 col-12">
        <Text v-router-links class="footer-workshop-address" :text="site.workshop_address" :reveal="true" :delay="BASE_DELAY + 50" />
      </div>
      <div class="col-lg-2 col-12">
        <div class="contact-email">
          <div><Text class-name="label" text="E-mail" :reveal="true" :delay="BASE_DELAY + 75" /></div>
          <a :href="`mailto:${page.email}`"><Text :text="page.email" :reveal="true" :delay="BASE_DELAY + 75" /></a>
        </div>
        <div class="contact-social">
          <div><Text class-name="label" text="Social" :reveal="true" :delay="BASE_DELAY + 100" /></div>
          <div class="social-list">
            <a v-for="social in page.social" :key="social.url" :href="`${social.url}`" target="_blank">
              <Text :text="social.name" :reveal="true" :delay="BASE_DELAY + 100" />
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-12">
        <Text v-router-links :text="page.jobs" :reveal="true" :delay="BASE_DELAY + 150" />
      </div>
      <div class="col-lg-1 col-12"></div>
    </div>
  </div>

  <div class="about-content">
    <div class="row">
      <div class="col-lg-8 col-12">
        <div class="about-image">
          <Image :image="page.about_image" class-name="image-about" :delay="BASE_DELAY + 250" />
        </div>
        <Text :text="page.text" :reveal="true" :delay="BASE_DELAY" />
      </div>
      <div class="col-lg-4 col-12"></div>
    </div>
  </div>


  <div class="about-collaborations-press">
    <div class="about-collaborations">
      <Text class-name="label" text="Collaborations" :reveal="true" :delay="BASE_DELAY" />
      <div v-for="(collaboration, index) in collaborations" :key="collaboration">
        <Text :text="collaboration" :reveal="true" :delay="BASE_DELAY + index * 25" />
      </div>
    </div>
    <div class="about-press">
      <Text class-name="label" text="Press" :reveal="true" :delay="850" />
      <div v-for="(pressItem, index) in press" :key="pressItem">
        <Text :text="pressItem" :reveal="true" :delay="BASE_DELAY + index * 25" />
      </div>
    </div>
  </div>

  <div class="about-news">
    <div v-for="news in page?.news" :key="news.id" :class="`single-news columns-${news.columns}`">
      <img :src="news.news_image?.url" :alt="news.news_image?.alt" />
      <div class="news-info">
        <p><span class="news-title">{{ news.title }}</span> {{ news.text }}</p>
      </div>

      <ClientOnly>
      <div class="news-links">
        <span v-for="link in news.links" :key="link.id" class="news-link">
          <p class="link-text"><span v-html="link?.link_text"></span> ↗</p>
        </span>
      </div>
      </ClientOnly>

      <ClientOnly>
      <div class="news-downloads">
        <a v-for="download in news.downloads" :key="download.id" :href="`${download.link_download?.[0]?.url}`" class="download-link" target="_blank">
          <p class="download-text"><span v-html="download.name_download"></span> ↗</p>
        </a>
      </div>
      </ClientOnly>
    </div>
  </div>



</div>
</template>

<style scoped lang="scss">
.about-image {
  position: relative;
}
</style>