import helper from './helper.js'
import handle from './handle.js'
import main from './main.js'
Component({
  properties: {
    config: {
      type: Object,
      value: {}
    }
  },
  created () {
    const sysInfo = wx.getSystemInfoSync()
    const screenWidth = sysInfo.screenWidth
    this.factor = screenWidth / 750
  },
  data: {

  },
  methods: {
    ...helper,
    ...handle,
    ...main,
    triggerToCreatedPoster() {
      this.createdPoster()
    },
    createdPoster() {
      this.ctx = wx.createCanvasContext('canvasid', this)

      // wx.showLoading({title: '生成中'})
      console.log(this.data.config)
      console.log()
    }
  }
})
