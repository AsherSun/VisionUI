/*
* 打卡页面的日历组件
* author：Asher Sun
* email: sunxl@cnjiang.com
*
* @param { Array } properties 当前选中的日期列表
* @param { Class Name } selected-class 选中的样式扩展
*
**/
Component({
  properties: {
    selectedList: {
      type: Array,
      value: [],
      observer(newValue) {
        this.setData({
          datesList: []
        })
        this.init()
      }
    }
  },
  data: {
    month: 0,                           // 获取计算器中的月份
    month1: 0,                          // 获取现实中的月份
    monthFirstDay: 0,                   // 获取每月的第一天是周几
    year: 0,                            // 获取年份
    prevMonthDates: 0,                  // 获取上个月的天数
    nowMonthDates: 0,                   // 获取当前月的天数
    datesList: [],                      // 页面渲染的数据
  },
  externalClasses: ['selected-class'],
  lifetimes: {
    attached() {
      this.setData({
        month: this.data.month1
      })
    }
  },
  methods: {
    init() {
      this.data.month = this.getMonth();
      this.data.month1 = this.data.month + 1;
      this.data.year = this.getFullYear();
      this.data.prevMonthDates = this.showCalendar(this.data.month);
      this.data.nowMonthDates = this.showCalendar(this.data.month1);
      this.data.monthFirstDay = this.getFirstDay(this.data.year, this.data.month1);
      this.addDays()
    },
    getMonth() {
      return new Date().getMonth()
    },
    getFullYear() {
      return new Date().getFullYear()
    },
    runNian(_year) { // 计算闰年
      if (_year % 400 === 0 || (_year % 4 === 0 && _year % 100 !== 0)) {
        return true;
      }
      else { return false; }
    },
    getFirstDay(_year, _month) {
      var allDay = 0, y = _year - 1, i = 1;
      allDay = y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + 1;
      for (; i < _month; i++) {
        switch (i) {
          case 1: allDay += 31; break;
          case 2:
            if (this.runNian(_year)) { allDay += 29; }
            else { allDay += 28; }
            break;
          case 3: allDay += 31; break;
          case 4: allDay += 30; break;
          case 5: allDay += 31; break;
          case 6: allDay += 30; break;
          case 7: allDay += 31; break;
          case 8: allDay += 31; break;
          case 9: allDay += 30; break;
          case 10: allDay += 31; break;
          case 11: allDay += 30; break;
          case 12: allDay += 31; break;
        }
      }
      return allDay % 7;
    },
    showCalendar(_month) {
      var monthDay = 0; //月份的天数
      switch (_month) {
        case 1: monthDay = 31; break;
        case 2:
          if (this.runNian(_year)) { monthDay = 29; }
          else { monthDay = 28; }
          break;
        case 3: monthDay = 31; break;
        case 4: monthDay = 30; break;
        case 5: monthDay = 31; break;
        case 6: monthDay = 30; break;
        case 7: monthDay = 31; break;
        case 8: monthDay = 31; break;
        case 9: monthDay = 30; break;
        case 10: monthDay = 31; break;
        case 11: monthDay = 30; break;
        case 12: monthDay = 31; break;
      }
      return monthDay
    },
    addDays() {
      let i = 0;
      let j = 0;
      let h = 0;
      let datesListLength = 35;
      let surplus = 0;
      let prevMonthDatesList = [];
      while (j < this.data.monthFirstDay) {
        prevMonthDatesList.push({
          value: this.data.prevMonthDates - j,
          isSelected: false,
          isInvalid: true
        });
        j++;
      }
      this.data.datesList = this.data.datesList.concat(prevMonthDatesList)
      for (; i < this.data.nowMonthDates; i++) {
        this.selectedComputed(i + 1)
      }
      while (h < datesListLength - this.data.nowMonthDates) {
        this.data.datesList.push({
          value: h + 1,
          isSelected: false,
          isInvalid: true
        })
        h++
      }
      this.setData({
        datesList: this.data.datesList
      })
    },
    selectedComputed(date) { // 计算选中的日期
      if (!date) return false;
      this.data.datesList.push({
        value: date,
        isSelected: this.data.selectedList.includes(date),
        isInvalid: false
      })
    }
  }
})
