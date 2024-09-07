<template>
  <div class="work-wrap">
    <div class="work-main">
      <CommonHtmlObserver v-slot="slotProps" source="index-work" observer-id="work-observe-wrap">
        <div id="work-observe-wrap" :class="{'animation': slotProps.elIsShow}">
          <div class="work-info">
            <h2>最右-我的快乐源泉</h2>
            <p>最右,是年轻人都在用、超级有趣的兴趣社区。有趣不只帖子,更有脑洞神评论,完全笑不停。精准的推荐,帮你找到兴趣相投的人,总有一个话题让你流连忘返</p>
            <a href="https://www.izuiyou.com/" target="_blank">官网 ></a>
          </div>
          <div class="work-img">
            <img src="~/assets/img/index/index-work-img.png" alt="最右展示图片">
          </div>
        </div>
      </CommonHtmlObserver>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.work-wrap {
  background-image: url('~/assets/img/index/index-work.svg');
  background-position: 0 0;
  background-size: cover;
  .work-main {
    padding:  $padding-xl;
    #work-observe-wrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .work-info {
        opacity: 0;
        max-width: 500px;
        h2 {
          font-size: $font-size-32;
          color: $gray-2;
          font-weight: 700;
        }
        p {
          padding: $padding-xl 0;
          max-width: 380px;
          font-size: $font-size-xl;
          line-height: 2em;
          color: $gray-6;
        }
        a {
          font-size: $font-size-lg;
          color: $gray-2;
        }
      }
      .work-img {
        opacity: 0;
        flex: 1;
        min-width: 200px;
        img {
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
}
#work-observe-wrap.animation {
  .work-info, .work-img {
    position: relative;
    top: 50px;
    animation-name: slideTopAnimation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}

@keyframes slideTopAnimation {
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
