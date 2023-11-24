<template>
  <Html lang="en">
    <Head>
      <Link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>

    <Body>
      <div class="page">
        <AppHeader />

        <!-- <main class="main"> -->
          <NuxtPage /> 
        <!-- </main> -->

        <AppFooter />
      </div>
    </Body>
  </Html>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
</style>