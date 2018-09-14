// components/vi_dialog_motion/vi_dialog_motion.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isshow: {
      type: Boolean,
      value: false,
      observer(newValue) {
        this.setData({
          ishide: newVal,
          show: true
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
