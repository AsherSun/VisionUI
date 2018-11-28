const data = {
  prevYear: '',
  nextYear: '',
  prevMonth: '',
  nextMonth: '',
}
const methods = {
  triggerToPrevYear() {
    let _year = this.data.year
    this.setData({
      year: _year - 1,
      monthFirstDay: this.getFirstDay(this.data.month1, _year - 1),
      nowMonthDates: this.getNowMonthDates(this.data.month1, _year - 1),
      prevMonthDates: this.getNowMonthDates(this.data.month, _year - 1)
    }, () => {
      this.addDays()
    })
  },
  triggerToNextYear() {
    let _year = this.data.year
    this.setData({
      year: _year + 1,
      monthFirstDay: this.getFirstDay(this.data.month1, _year + 1),
      nowMonthDates: this.getNowMonthDates(this.data.month1, _year + 1),
      prevMonthDates: this.getNowMonthDates(this.data.month, _year + 1)
    }, () => {
      this.addDays()
    })
  },
  triggerToPrevMonth() {
    if (this.data.month1 <= 1) {
      this.setData({
        month1: 12,
        month: 11,
      }, () => {
        this.triggerToPrevYear()
      })
    } else {
      let month1 = this.data.month1
      this.setData({
        month1: month1 - 1,
        month: month1 - 2,
        monthFirstDay: this.getFirstDay(month1 - 1),
        nowMonthDates: this.getNowMonthDates(month1 - 1),
        prevMonthDates: this.getNowMonthDates(month1 - 2)
      }, () => {
        this.addDays()
      })
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
        month: month1,
        monthFirstDay: this.getFirstDay(month1 + 1),
        nowMonthDates: this.getNowMonthDates(month1 + 1),
        prevMonthDates: this.getNowMonthDates(month1)
      }, () => {
        this.addDays()
      })
    }
  }
}
export default {
  data,
  methods
}