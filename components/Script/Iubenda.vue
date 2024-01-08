<script setup>
useHead({
  script: [{ src:"https://cs.iubenda.com/autoblocking/3346216.js"}],
})
useHead({
  script: [{ src:"https://cdn.iubenda.com/cs/gpp/stub.js"}],
})
useHead({
  script: [{ src:"https://cdn.iubenda.com/cs/iubenda_cs.js" }],
})
useHead({
  script: [{ children: `
    var _iub = _iub || [];
    _iub.csConfiguration = {
      "siteId":3346216,
      "cookiePolicyId":77235204,
      "askConsentAtCookiePolicyUpdate":true,
      "enableFadp":true,
      "enableLgpd":true,
      "enableUspr":true,
      "fadpApplies":true,
      "floatingPreferencesButtonDisplay":"bottom-right",
      "floatingPreferencesButtonIcon":false,
      "perPurposeConsent":true,
      "usprApplies":false,
      "whitelabel":false,
      "lang":"it",
      "floatingPreferencesButtonCaption":true,
      "banner":{
        "acceptButtonDisplay":true,
        "closeButtonDisplay":false,
        "customizeButtonDisplay":true,
        "explicitWithdrawal":true,
        "listPurposes":true,
        "position":"bottom",
        "rejectButtonDisplay":true
      }};
  ` }],
});
</script>

<template>
  <div></div>
</template>