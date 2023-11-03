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

  <div class="project-content">
    <div class="single-module module-large-image">
      <img src="https://placehold.co/900x500/png">
      <div class="caption">
        <div class="row">
          <div class="col-lg-4 col-12"></div>
          <div class="col-lg-8 col-12">
            <p>Made and unmade through a series of collaborative workshops and exhibitions, each functioning as an editing/screening room. Using a custom-made analog projector, the participants worked on the archival images, composing visual sequences and voiceovers. For this project we specially designed and made of a set of analogue tools needed for the production and the stage of the project.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="single-module module-text">
      <div class="row">
        <div class="col-lg-8 col-12">
          <p>It is an experimental documentary film, made and unmade through a series of collaborative workshops and exhibitions, each functioning as an editing/screening room. Using a custom-made analog projector, the participants worked on the archival images, composing visual sequences and voiceovers.</p>
        </div>
        <div class="col-lg-4 col-12"></div>
      </div>
    </div>
    <div class="single-module module-double-image double-caption">
      <div class="row">
        <div class="col-lg-6 col-12">
          <img src="https://placehold.co/800x600/png">
          <div class="caption">
            <p>Made and unmade through a series of collaborative workshops and exhibitions, each functioning as an editing/screening room. Using a custom-made analog projector, the participants worked on the archival images, composing visual sequences and voiceovers. For this project we specially designed and made of a set of analogue tools needed for the production and the stage of the project.</p>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <img src="https://placehold.co/500x800/png">
          <div class="caption">
            <p>Made and unmade through a series of collaborative workshops and exhibitions, each functioning as an editing/screening room. Using a custom-made analog projector, the participants worked on the archival images, composing visual sequences and voiceovers. For this project we specially designed and made of a set of analogue tools needed for the production and the stage of the project.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="single-module module-large-image">
      <img src="https://placehold.co/900x500/png">
    </div>
    <div class="single-module module-text">
      <div class="row">
        <div class="col-lg-8 col-12">
          <p>It is an experimental documentary film, made and unmade through a series of collaborative workshops and exhibitions, each functioning as an editing/screening room. Using a custom-made analog projector, the participants worked on the archival images, composing visual sequences and voiceovers.</p>
        </div>
        <div class="col-lg-4 col-12"></div>
      </div>
    </div>
    <div class="single-module module-large-image">
      <img src="https://placehold.co/900x500/png">
      <div class="row">
        <div class="col-lg-4 col-12"></div>
        <div class="col-lg-8 col-12">
          <p>Made and unmade through a series of collaborative workshops and exhibitions, each functioning as an editing/screening room. Using a custom-made analog projector, the participants worked on the archival images, composing visual sequences and voiceovers. For this project we specially designed and made of a set of analogue tools needed for the production and the stage of the project.</p>
        </div>
      </div>
    </div>
    <div class="single-module module-double-image single-caption">
      <div class="row">
        <div class="col-lg-8 col-12">
          <img src="https://placehold.co/800x400/png">
        </div>
        <div class="col-lg-4 col-12">
          <img src="https://placehold.co/400x400/png">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-12"></div>
        <div class="col-lg-8 col-12">
          <div class="caption">
            <p>Made and unmade through a series of collaborative workshops and exhibitions, each functioning as an editing/screening room. Using a custom-made analog projector, the participants worked on the archival images, composing visual sequences and voiceovers. For this project we specially designed and made of a set of analogue tools needed for the production and the stage of the project.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="single-module module-large-image">
      <img src="https://placehold.co/900x500/png">
      <div class="row">
        <div class="col-lg-4 col-12"></div>
        <div class="col-lg-8 col-12">
          <p>Made and unmade through a series of collaborative workshops and exhibitions, each functioning as an editing/screening room. Using a custom-made analog projector, the participants worked on the archival images, composing visual sequences and voiceovers. For this project we specially designed and made of a set of analogue tools needed for the production and the stage of the project.</p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
