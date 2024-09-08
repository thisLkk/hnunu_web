<template>
  <div class="work-zz-wrap">
    <div class="work-zz-main">
      <CommonHtmlObserver v-slot="slotProps" source="index-work" observer-id="work-zz-observe-wrap">
        <div id="work-zz-observe-wrap" :class="{'animation': slotProps.elIsShow}">
          <div class="work-info">
            <h2>转转</h2>
            <h3>(2020.07~2023.09)</h3>
            <h4>真的官方验，买卖二手不一样</h4>
            <ul>
              <li>二手手机买卖首选站点，我有机会参与了旗下[采货侠]业务发展的各个方面</li>
              <li>从基础建设JSBridge升级，核心业务模块的设计，到产品性能体验的优化</li>
            </ul>
            <a href="https://www.zhuanzhuan.com/" target="_blank">转转官网 ></a>
          </div>
          <div class="work-img">
            <img src="~/assets/img/index/index-work-zz-img.png" alt="转转展示图片">
          </div>
        </div>
      </CommonHtmlObserver>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.work-zz-wrap {
  opacity: 0.8;
  overflow: hidden;
  padding-bottom: 20%;
  background-color: $red;
  background-position: 0 0;
  background-size: cover;
  .work-zz-main {
    padding:  $padding-xl;
    #work-zz-observe-wrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .work-info {
        opacity: 0;
        max-width: 500px;
        h2 {
          font-size: $font-size-32;
          color: $yellow;
          font-weight: 700;
        }
        h3 {
          font-size: $font-size-24;
          color: $yellow;
          font-weight: 700;
        }
        h4 {
          margin-bottom: 40px;
          font-size: $font-size-xl;
          color: $yellow;
          font-weight: 700;
        }
        ul {
          display: block;
          li {
            padding: $padding-xs 0;
            max-width: 380px;
            font-size: $font-size-lg;
            line-height: 1.5;
            color: $yellow;
            opacity: 0.9;
          }
        }
        a {
          display: block;
          margin-top: 40px;
          font-size: $font-size-lg;
          color: $yellow;
        }
      }
      .work-img {
        display: flex;
        flex: 1;
        align-items: center;
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
#work-zz-observe-wrap.animation {
  .work-info {
    position: relative;
    left: -50%;
    animation-name: slideZzLeftAnimation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  .work-img {
    position: relative;
    right: -50%;
    animation-name: slideZzRightAnimation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}

@keyframes slideZzLeftAnimation {
   0% {
    left: -50%;
    opacity: 0;
   }
   100% {
    left: 0px;
    opacity: 1;
   }
}
@keyframes slideZzRightAnimation {
   0% {
    right: -50%;
    opacity: 0;
   }
   100% {
    right: 0px;
    opacity: 1;
   }
}
</style>
