export default {
  toPx(rpx) { // 转换为 px
    return rpx * this.factor;
  },
  toRpx(px) { // 转换为 rpx
    return px / this.factor;
  }
}