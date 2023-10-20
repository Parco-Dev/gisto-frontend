<script setup lang="ts">
import { getProjectQuery } from '~/queries'

const kirbyPath = useRoute().path
const { queryApi, queryParams } = useQueryParams(getProjectQuery(kirbyPath));
const { data } = await useFetch(queryApi, queryParams);
const page = (data?.value as any)?.result;

setPage(page);
</script>

<template>
<div class="content">

  <h1>{{ page?.title }}</h1>
  <div v-router-links v-html="page?.text" />

</div>
</template>
