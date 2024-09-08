<template>
  <div class="header">
    移动端
  </div>
</template>
<style lang="scss" scoped>
.header {
  position: relative;
  top: auto;
  display: flex;
  height: 80px;
  justify-content: space-between;
  background: $cyan;
  padding: $padding-sm 5% 0 5%;
  box-sizing: border-box;
  &-logo {
    position: relative;
    height: 100%;
    color: $black;
    overflow: hidden;
    img {
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
    h1 {
      position: absolute;
    }
  }
  nav {
    position: relative;
    a {
      position: relative;
      display: inline-block;
      margin-right: auto;
      margin-left: auto;
      padding: $padding-md;
      vertical-align: top;
      color: $text-link;
      font-size: $font-size-md;
      font-weight: 600;
      text-align: left;
      text-decoration: none;
      &:hover {
        color: $blue;
      }
      &.router-link-exact-active {
        color: $active-color;
        &:hover {
          color: $active-color;
        }
      }
    }
  }
}
</style>
