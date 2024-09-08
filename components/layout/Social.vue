<template>
  <div class="social">
    <div class="social-img-wrap">
      <template v-for="item in socialData.list"  :key="item.id">
        <div class="social-img-item" @click="itemHandle(item.id)">
          <img v-if="!item.isShow" class="social-img-item-hover" :src="item.hoverImg" :alt="item.tip">
          <template v-if="item.isShow">
            <img class="social-img-item-img" :src="item.logo" :alt="item.tip">
            <h3>{{ item.title }}</h3>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import jjImg from '~/assets/img/footer/footer-social-jj-img.png'
  import jjImgHover from '~/assets/img/footer/footer-social-jj-hover-img.png'
  import gzhImg from '~/assets/img/footer/footer-social-gzh-img.png'
  import gzhImgHover from '~/assets/img/footer/footer-social-gzh-hover-img.jpg'
  import wxImg from '~/assets/img/footer/footer-social-wx-img.png'
  import wxImgHover from '~/assets/img/footer/footer-social-wx-hover-img.jpg'

  interface DataOption {
    id: number;
    title: string;
    tip: string;
    logo: any;
    hoverImg: any;
    isShow: boolean;
  }

  const socialData = reactive({
    list: [
      {
        id: 1,
        title: '稀土掘金号',
        tip: '稀土掘金二维码',
        logo: jjImg,
        hoverImg: jjImgHover,
        isShow: true
      },
      {
        id: 2,
        title: '微信公众号',
        tip: '微信公众号二维码',
        logo: gzhImg,
        hoverImg: gzhImgHover,
        isShow: true
      },
      {
        id: 3,
        title: '微信号',
        tip: '微信号二维码',
        logo: wxImg,
        hoverImg: wxImgHover,
        isShow: true
      },
    ]
  })

  const itemHandle = (id: number) => {
    console.log(socialData.list)
    const currentItem = socialData.list.find(item => item.id === id) as DataOption;
    currentItem.isShow = !currentItem.isShow
  }

</script>
<style lang="scss" scoped>
.social {
  background: linear-gradient(160deg, #071138, #1e317a);
  &-img-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: $padding-xl 0;
    overflow: hidden;
    .social-img-item {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: $padding-xl 0;
      width: 120px;
      height: 120px;
      overflow: hidden;
      flex-shrink: 0;
      cursor: pointer;
      &-img {
        position: relative;
        display: block;
        width: 60px;
        height: 60px;
      }
      h3 {
        color: $white;
        width: 100%;
        flex-shrink: 0;
        text-align: center;
      }
      &-hover {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
