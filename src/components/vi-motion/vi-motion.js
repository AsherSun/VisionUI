Component({
  properties: {
    ishide: {
      type: Boolean,
      value: false,
      observer(newValue) {
        if (this.data.outHasAnimate) {
          if (newValue) {
            this.setData({
              isShow: newValue
            });
          } else {
            setTimeout(() => {
              this.setData({
                isShow: newValue
              });
            }, this.data.animationDuration * 1000)
          }
        } else {
          this.setData({
            isShow: newValue
          });
        }
      }
    },
    enterAnimateName: {
      type: String,
      value: 'bounce'
    },
    outAnimateName: {
      type: String,
      value: ''
    },
    clickMaskHide: {
      type: Boolean,
      value: false
    },
    maskIsHide: {
      type: Boolean,
      value: false
    },
    outHasAnimate: {
      type: Boolean,
      value: true
    },
    maskColor: {
      type: String,
      value: 'rgba(0,0,0, .3)'
    },
    animationDuration: {
      type: Number,
      value: 1
    }
  },
  externalClasses: ['container-calss'],
  methods: {
    triggerToHide(e) {
      if (this.data.isMaskHide) return false;
      this.triggerEvent('hide', this.data.ishide)
    }
  },
  data: {
    isShow: false
  }
})
