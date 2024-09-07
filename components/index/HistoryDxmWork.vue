<template>
  <div class="work-dxm-wrap">
    <div class="work-dxm-main">
      <CommonHtmlObserver v-slot="slotProps" source="index-work" observer-id="work-dxm-observe-wrap">
        <div id="work-dxm-observe-wrap" :class="{'animation': slotProps.elIsShow}">
          <div class="work-info">
            <h2>度小满（2018.12~2020.07）</h2>
            <h3>助力小微企业，成就美好生活</h3>
            <ul>
              <li>梦起步的地方，有幸遇到很nice的他（她）同事</li>
              <li>公司健全的基础建设，标准化的流程制度，浓厚的技术氛围引领着我领略前端的全貌</li>
            </ul>
            <a href="https://www.duxiaoman.com/index" target="_blank">度小满官网 ></a>
          </div>
          <div class="work-img">
            <img class="work-img-1" src="~/assets/img/index/index-work-dxm-img-1.png" alt="度小满背景图片">
            <img class="work-img-2" src="~/assets/img/index/index-work-dxm-img-2.png" alt="度小满logo图片">
            <img class="work-img-3" src="~/assets/img/index/index-work-dxm-img-3.png" alt="度小满背景图片">
            <img class="work-img-4" src="~/assets/img/index/index-work-dxm-img-4.png" alt="度小满背景图片">
            <img class="work-img-5" src="~/assets/img/index/index-work-dxm-img-5.png" alt="度小满背景图片">
          </div>
        </div>
      </CommonHtmlObserver>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.work-dxm-wrap {
  overflow: hidden;
  background: linear-gradient(140deg, #cca7f8, #aadaf1);
  .work-dxm-main {
    padding:  $padding-xl;
    #work-dxm-observe-wrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .work-info {
        padding-bottom: 200px;
        opacity: 0;
        max-width: 500px;
        h2 {
          font-size: $font-size-32;
          color: $yellow;
          font-weight: 700;
        }
        h3 {
          padding-left: 1em;
          margin-bottom: 40px;
          font-size: $font-size-24;
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
        position: relative;
        flex: 1;
        opacity: 0;
        min-width: 200px;
        img {
          display: inline-block;
          width: 100%;
        }
        .work-img-1 {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -50%;
          margin-left: -50%;
          width: 100%;
        }
        .work-img-2 {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -20px;
          margin-left: -20px;
          width: 40px;
        }
        .work-img-3 {
          position: absolute;
          top: 25%;
          left: 50%;
          margin-top: -20px;
          margin-left: -30px;
          width: 60px;
        }
        .work-img-4 {
          position: absolute;
          top: 60%;
          left: 30%;
          margin-left: -30px;
          width: 60px;
        }
        .work-img-5 {
          position: absolute;
          top: 60%;
          right: 30%;
          margin-right: -30px;
          width: 60px;
        }
      }
    }
  }
}
#work-dxm-observe-wrap.animation {
  .work-info {
    position: relative;
    top: 100px;
    animation-name: slideDxmLeftAnimation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  .work-img {
    position: relative;
    right: -50%;
    animation-name: slideDxmRightAnimation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}

@keyframes slideDxmLeftAnimation {
   0% {
    top: 100px;
    opacity: 0;
   }
   100% {
    top: 0px;
    opacity: 1;
   }
}
@keyframes slideDxmRightAnimation {
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
