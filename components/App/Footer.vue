<script setup lang="ts">
const site = useSite()

const [ home, about ] = computed(() =>
  (site.value?.children ?? []).filter((i: any) => i.isListed)
).value;

</script>

<template>
  <footer class="site-footer">
    <div class="footer-bio" v-router-links v-html="site.short_bio"></div>
    <div class="footer-studio-address" v-router-links v-html="site.studio_address"></div>
    <div class="footer-workshop-address" v-router-links v-html="site.workshop_address"></div>
    <div class="footer-social" v-router-links v-html="site.social"></div>
    <div class="footer-legal" v-router-links v-html="site.legal"></div>
  </footer>
</template>

<style scoped lang="scss">
</style>