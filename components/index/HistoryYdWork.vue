<template>
  <div class="work-yd-wrap">
    <div class="work-yd-main">
      <CommonHtmlObserver v-slot="slotProps" source="index-work" observer-id="work-yd-observe-wrap">
        <div id="work-yd-observe-wrap" :class="{'animation': slotProps.elIsShow}">
          <div class="work-info">
            <h2>江苏盈达（2017.12~2018.12）</h2>
            <ul>
              <li>初识江湖，不知门派</li>
              <li>我当像鸟飞往我的山</li>
            </ul>
          </div>
          <div class="work-img">
            <img class="work-img-1" src="~/assets/img/index/index-work-yd-img.png" alt="度小满背景图片">
          </div>
        </div>
      </CommonHtmlObserver>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.work-yd-wrap {
  overflow: hidden;
  background: linear-gradient(140deg, #fee, #fff);
  .work-yd-main {
    padding:  $padding-xl;
    #work-yd-observe-wrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .work-info {
        padding-bottom: 200px;
        opacity: 0;
        max-width: 500px;
        h2 {
          font-size: $font-size-32;
          color: $black;
          font-weight: 700;
          padding-bottom: 60px;
        }
        ul {
          display: block;
          li {
            padding: $padding-xs 0;
            max-width: 380px;
            font-size: $font-size-lg;
            line-height: 1.5;
            color: $yellow;
            color: $gray-8;
            opacity: 0.9;
          }
        }
      }
      .work-img {
        position: relative;
        flex: 1;
        opacity: 0;
        min-width: 200px;
        img {
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
}
#work-yd-observe-wrap.animation {
  .work-info {
    position: relative;
    top: 50px;
    animation-name: slideYdLeftAnimation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  .work-img {
    position: relative;
    top: 50px;
    animation-name: slideYdRightAnimation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}

@keyframes slideYdLeftAnimation {
  0% {
    top: 50px;
    opacity: 0;
   }
   100% {
    top: 0px;
    opacity: 1;
   }
}
@keyframes slideYdRightAnimation {
  0% {
    top: 50px;
    opacity: 0;
   }
   100% {
    top: 0px;
    opacity: 1;
   }
}
</style>
