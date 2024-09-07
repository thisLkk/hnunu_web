<template>
  <div class="observer">
    <slot :el-is-show="targetElIsShow" />
  </div>
</template>
<script setup lang="ts">
  const {observerId} = defineProps({
    source: {
      required: true,
      type: String,
      default: ''
    },
    observerId: {
      required: true,
      type: String,
      default: ''
    }
  })
  const targetElIsShow = ref(false);
  const intersectionObserver = ref<any>('');

  // 创建一个DOM的监听
  const observerDomShowHandle = () => {
    if (!observerId) return
    intersectionObserver.value = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) return;
      targetElIsShow.value = true
    });
    // 断言有值
    const currentEl = document.getElementById(observerId) as Element
    intersectionObserver.value.observe(currentEl);
  }

  onMounted(() => {
    observerDomShowHandle();
  })
  onUnmounted(() => {
    intersectionObserver.value.disconnect();
  })
</script>
<style lang="scss" scoped>
.info {
  max-width: 1200px;

}
</style>
