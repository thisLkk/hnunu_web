<template>
  <div class="info-wrap">
    <div class="info-main">
      <h1>
        <span>鲁宽宽</span>一位<span>前端</span>开发的从业者。他认为技术是一个强大的<span>工具</span>，能在关键时刻<span>解决问题</span>!
      </h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.info-wrap {
  background-image: url('~/assets/img/index/index-info.svg');
  background-position: 0 0;
  background-size: cover;
  .info-main {
    max-width: 1200px;
    object-position: 50% 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 15% 0;
    h1 {
      margin-bottom: auto;
      margin-top: auto;
      padding: $padding-xl;
      color: $gray-9;
      flex-direction: column;
      justify-content: center;
      font-family: DM Sans, sans-serif;
      font-size: $font-size-32;
      font-weight: 600;
      line-height: 1.4em;
      text-decoration: none;
      display: block;
      span {
        padding: 0 $padding-xs;
        background-image: linear-gradient(rgba(0, 0, 0, 0) 60%, #ffc7ee 30%);
        transition: background-color .5s;
      }
    }
  }
}
</style>
