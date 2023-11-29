<template>
  <Html lang="en">
    <Head>
      <Link rel="icon" href="/favicon.jpg" type="image/jpeg" />
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
  opacity: 0;
  transform: translateY(5px);
}
</style>