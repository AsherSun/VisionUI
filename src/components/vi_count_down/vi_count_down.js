Component({
  properties: {
    endTime: { // 结束时间
      type: [String, Number],
      value: null,
      observer: function (newValue) {
        if (!newValue) return false
        this._createdCountDown()
      }
    },
    startTime: { // 开始时间
      type: [String, Number],
      value: null
    },
    endText: { // 倒计时结束要显示的提示语
      type: String,
      value: '该订单已超过支付时间'
    },
    isSlot: {
      type: Boolean,
      value: false
    }
  },
  data: {
    days: null, // 天数
    hours: null, // 小时
    minutes: null, // 分钟
    seconds: null, // 秒,
    timer: null, // 定时器
    surplus: 0, // 时差
    countDownOver: false // 判断倒计时是否结束
  },
  lifetimes: {
    detached() {
      clearTimeout(this.data.timer)
    },
  },
  methods: {
    countDown() { // 倒计时逻辑
      let days = null
      let hours = null
      let minutes = null
      let seconds = null
      this.setData({
        surplus: --this.data.surplus
      })
      if (this.data.surplus > 0) { // 处理倒计时逻辑
        days = this.getHMS(parseInt(this.data.surplus / 86400))
        let lastTime = this.data.surplus % 86400;
        hours = this.getHMS(parseInt(lastTime / 3600))
        lastTime = lastTime % 3600;
        minutes = this.getHMS(parseInt(lastTime / 60))
        seconds = this.getHMS(parseInt(lastTime % 60))
        if (this.data.isSlot) {
          this.triggerEvent('countdown', {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
          })
        } else {
          this.setData({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
          })
        }
      } else { // 清除定时器
        this.setData({
          countDownOver: true
        })
        clearInterval(this.data.timer)
      }
    },
    getTime() { // 获取开始与结束时间
      return {
        startTime: this.properties.startTime !== null ? new Date(this.properties.startTime) : new Date(),
        endTime: this.properties.endTime !== null ? new Date(this.properties.endTime) : null
      }
    },
    getHMS(HMS) { // 小于 10 补零
      return HMS >= 10 ? HMS : `0${HMS}`
    },
    _createdCountDown() { // 创建定时器
      this.data.surplus = (this.getTime().endTime - this.getTime().startTime) / 1000
      this.countDown()
      this.data.timer = setInterval(() => {
        console.log('sdfsdf')
        this.countDown()
      }, 1000)
    }
  }
})
