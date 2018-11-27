const data = {
  prevYear: '',
  nextYear: '',
  prevMonth: '',
  nextMonth: '',
}
/*
  免费畅听
  通用弹窗交互方式
  时间限制

*/ 
const methods = {
  triggerToPrevYear() {
    let _year = this.data.year
    console.log('reduce before year', _year)
    this.setData({
      year: _year - 1,
      monthFirstDay: this.getFirstDay(this.data.month1, _year - 1),
      nowMonthDates: this.getNowMonthDates(this.data.month1, _year - 1),
      prevMonthDates: this.getNowMonthDates(this.data.month, _year - 1)
    })
    console.log('reduce after year', this.data.year)
    this.addDays()
  },
  triggerToNextYear() {
    let _year = this.data.year
    console.log('add before year', _year)
    this.setData({
      year: _year + 1,
      monthFirstDay: this.getFirstDay(this.data.month1, _year + 1),
      nowMonthDates: this.getNowMonthDates(this.data.month1, _year + 1),
      prevMonthDates: this.getNowMonthDates(this.data.month, _year + 1)
    })
    console.log('add after year', this.data.year)
    this.addDays()
  },
  triggerToPrevMonth() {
    if (this.data.month1 <= 1) {
      this.setData({
        month1: 12,
        month: 11,
      })
      this.triggerToPrevYear()
    } else {
      let month1 = this.data.month1
      this.setData({
        month1: month1 - 1,
        month: month1 - 1,
        monthFirstDay: this.getFirstDay(month1),
        nowMonthDates: this.getNowMonthDates(month1),
        prevMonthDates: this.getNowMonthDates(month1 - 1)
      })
      this.addDays()
    }
  },
  triggerToNextMont() {
    if (this.data.month1 >= 12) {
      this.setData({
        month1: 1,
        month: 12,
      })
      this.triggerToNextYear()
    } else {
      let month1 = this.data.month1
      this.setData({
        month1: month1 + 1,
        month: month1 - 1,
        monthFirstDay: this.getFirstDay(month1),
        nowMonthDates: this.getNowMonthDates(month1),
        prevMonthDates: this.getNowMonthDates(month1 - 1)
      })
      this.addDays()
    }
  }
}
export default {
  data,
  methods
}