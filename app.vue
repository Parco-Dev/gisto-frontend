<template>
  <Html lang="en">
    <Head>
      <Link rel="icon" href="/favicon.jpg" type="image/jpeg" />
      <ScriptIubenda />
    </Head>

    <Body>
      <div class="page">
        <AppHeader />
        <NuxtPage /> 
        <AppFooter />
      </div>
    </Body>
  </Html>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  /* opacity: 0;
  transform: translateY(5px); */
}

.page-leave-to {
  .animated-image {
    opacity: 0 !important;
  }

  .animated-text {
    opacity: 0;
    &:after {
      width: 101%;
    }
  }
}
</style>