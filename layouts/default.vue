<template>
  <div class="layout-default">
    <div class="layout-default-header">
      <LayoutHeaderWeb />
    </div>
    <slot />
    <LayoutSocial />
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts">


</script>
<style lang="scss" scoped>
.layout-default {
  background: $white;
  &-header {
    position: sticky;
    top: 0;
    z-index: 999999; // 全局最大
  }
}
@media (min-width: 600px) {
  #header-web {
    display: flex;
  }
  #header-mobile {
    display: none;
  }
}
@media (max-width: 600px) {
  #header-web {
    display: none;
  }
  #header-mobile {
    display: block;
  }
}
</style>
