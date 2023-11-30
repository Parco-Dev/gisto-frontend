<script setup lang="ts">
const site = useSite()

</script>

<template>
  <footer class="site-footer">
    <div v-router-links class="footer-bio" v-html="site.short_bio"></div>
    <div v-router-links class="footer-studio-address" v-html="site.studio_address"></div>
    <div v-router-links class="footer-workshop-address" v-html="site.workshop_address"></div>
    <div v-router-links class="footer-social" v-html="site.social"></div>
    <div v-router-links class="footer-legal" v-html="site.legal"></div>
  </footer>
</template>

<style scoped lang="scss">
</style>