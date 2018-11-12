/*
* @param { DOM } slot.main 页面主体内容
* @param { DOM } slot.footer 页面底部内容
* @param { Number } footerHeight 页面底部的高度，单位是px。默认是50px
*/

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    footerHeight: {
      type: Number
    }
  }
})
