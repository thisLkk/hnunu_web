<template>
  <div class="about-info">
    <div class="about-info-desc">
      <h3>嗨，很幸运与你相识</h3>
      <p>我，鲁宽宽，94年出生于普通的农村</p>
      <p>不知不觉已经在前端游历了多年。在这段时间里，有遇到过不少的困难与挫折。也曾在黑夜里独自叹息，却天亮时踏出坚定的步伐</p>
      <p>驻足回望才发现不是所有的路都铺满鲜花，也不是每个人都能一开始就找到属于自己的舞台。我们不过是奔跑在追逐舞台的路上</p>
      <p>通过学习实践我掌握了大数的技能点，但却多次疲惫于复杂的人性。我试着去改变自己来适应环境，却发现环境不适应我。不过仰望天空的眼睛还是明亮的</p>
      <p>工作是生活的助力剂，不是生活的绊脚石</p>
    </div>
    <div class="about-info-img">
      <img src="~/assets/img/about/about-info-me.jpg" alt="我的自画像">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about-info {
  min-height: 60vh;
  display: flex;
  flex-wrap: wrap;
  &-desc {
    padding: 120px 20px;
    max-width: 600px;
    h3 {
      font-size: $font-size-24;
      margin-bottom: 40px;
    }
    p {
      margin-bottom: 20px;
      font-size: $font-size-xl;
    }
  }
  &-img {
    flex: 1;
    min-width: 370px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #181827;
    img {
      max-width: 70%;
    }
  }
}
</style>
