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

<style lang='scss'>
  .page-enter-active,
  .page-leave-active {
    transition: all .5s;

    p {
      position: relative;
      
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        background-color: white;
        width: 0px;
        height: 100%;
        top: 0;
        left: 0;
        transition: all .5s ease-in-out;
        /* transition-delay: 1s; */
      }
    }
  }

  @keyframes wipe {
    0%   { width: 100% }
    100% { width: 0 }
  }

  .page-enter-to {
    /* opacity: 0; */
    /* transform: translateY(20px); */
    /* transition-delay: .5s; */

    p:after {
      width: 100%;
      animation: wipe .5s ease-in-out 1;
    }
  }

  .page-leave-to {
    opacity: 0;
    transform: translateY(20px);
    /* transition-delay: .5s; */

    p:after {
      width: 100%;
      animation: wipe 1s ease-in-out 1;
      animation-delay: .5s;
    }
  }
</style>