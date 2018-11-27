Component({
  properties: {
    selectedList: {
      type: Array,
      value: [],
      observer(newValue) {
        this.init()
      }
    },
    customHeader: {
      type: Boolean,
      value: false
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
    weekList: ['日', '一', '二', '三', '四', '五', '六'],
  },
  externalClasses: ['selected-class'],
  lifetimes: {
    attached() {
      this.init()
      this.setData({
        month1: this.data.month1,
        month: this.data.month,
        year: this.data.year,
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
      this.setData({
        datesList: []
      })
      let i = 0;
      let j = 0;
      let h = 0;
      let datesListLength = 35;
      let surplus = 0;
      let prevMonthDatesList = [];
      let nowMonthDatesList = [];
      let nextMonthDatesList = [];
      while (j < this.data.monthFirstDay) {
        prevMonthDatesList.push({
          value: this.data.prevMonthDates - j,
          isSelected: false,
          isInvalid: true
        });
        j++;
      }
      nowMonthDatesList = nowMonthDatesList.concat(prevMonthDatesList.reverse())
      for (; i < this.data.nowMonthDates; i++) {
        nowMonthDatesList.push({
          value: i + 1,
          isSelected: this.data.selectedList.includes(i + 1),
          isInvalid: false
        })
      }
      surplus = datesListLength - nowMonthDatesList.length;
      while (h < surplus) {
        nextMonthDatesList.push({
          value: h + 1,
          isSelected: false,
          isInvalid: true
        })
        h++
      }
      nowMonthDatesList = nowMonthDatesList.concat(nextMonthDatesList)
      this.recursionDatesList(nowMonthDatesList, 1)
    },
    recursionDatesList(source, count) {
      let i = (count - 1)* 7
      let len = count * 7
      let arr = []
      if (count > 5) {
        return true
      } else {
        for (;i < len;i++) {
          arr.push(source[i])
        }
        this.data.datesList.push(arr)
        this.setData({
          datesList: this.data.datesList
        })
        this.recursionDatesList(source, ++count)
      }
    }
  }
})
