const data = {
  prevYear: '',
  nextYear: '',
  prevMonth: '',
  nextMonth: '',
}
const methods = {
  triggerToPrevYear() {
    this.setData({
      year: --this.data.year
    })
  },
  triggerToNextYear() {
    this.setData({
      year: ++this.data.year
    })
  },
  triggerToPrevMonth() {
    if (this.data.month1 <= 1) {
      this.setData({
        month1: 12,
        month: 11,
        monthFirstDay: this.getFirstDay(this.data.year, 12),
        nowMonthDates: this.getNowMonthDates(this.data.year, 12),
        prevMonthDates: this.getNowMonthDates(this.data.year, 1)
      })
      this.triggerToPrevYear()
    } else {
      let month1 = this.data.month1
      this.setData({
        month1: --month1,
        month: month1 - 1,
        monthFirstDay: this.getFirstDay(this.data.year, month1),
        nowMonthDates: this.getNowMonthDates(this.data.year, month1),
        prevMonthDates: this.getNowMonthDates(this.data.year, month1 - 1)
      })
      this.addDays()
    }

  },
  triggerToNextMont() {
    if (this.data.month1 >= 12) {
      this.setData({
        month1: 1,
        month: 12,
        monthFirstDay: this.getFirstDay(this.data.year, 1),
        nowMonthDates: this.getNowMonthDates(this.data.yea, 1),
        prevMonthDates: this.getNowMonthDates(this.data.yea, 12)
      })
      this.triggerToNextYear()
    } else {
      let month1 = this.data.month1
      this.setData({
        month1: ++month1,
        month: month1 - 1,
        monthFirstDay: this.getFirstDay(this.data.year, month1),
        nowMonthDates: this.getNowMonthDates(this.data.yea, month1),
        prevMonthDates: this.getNowMonthDates(this.data.yea, month1 - 1)
      })
      this.addDays()
    }
  }
}
export default {
  data,
  methods
}