<template>
  <Html lang="en">
    <Head>
      <Link rel="icon" href="/favicon.jpg" type="image/jpeg" />
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
 
/* 
  .page-enter-active,
  .page-leave-active {
    transition: all .35s;

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
        transition: all .35s ease-in-out;
      }
    }
  }

  @keyframes wipe {
    0%   { width: 100% }
    100% { width: 0 }
  }

  .page-enter-to {

    p:after {
      width: 100%;
      animation: wipe .35s ease-in-out 1;
    }
  }

  .page-leave-to {
    opacity: 0;

    p:after {
      width: 100%;
      animation: wipe .8s ease-in-out 1;
      animation-delay: .6s;
    }
  }  */
</style>