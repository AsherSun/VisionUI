const app = getApp()

Component({
  properties: {
    tips: {
      type: String,
      value: ''
    },
    copyContent: {
      type: String,
      value: ''
    }
  },
  methods: {
    triggerToLongpress() {
      console.log('copyContent', this.data.copyContent)
      if (this.data.copyContent) app.copyTxt(this.data.copyContent);
    }
  }
})
