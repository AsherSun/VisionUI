import cityData from './cityData.js'
const resultCityData = cityData.map(item => {
  return {
    name: item.name,
    code: item.code,
    sub: item.sub.map(twoItem => {
      return {
        name: twoItem.name,
        code: twoItem.code,
        sub: twoItem.sub.filter(threeItem => {
          return threeItem.name !== '市辖区'
        })
      }
    })
  }
})
Component({
  properties: {
    isHide: {
      type: Boolean,
      value: false,
      observer(newVal) {
        this.setData({
          classNameStatus: newVal,
          addClassName: true
        })
      }
    },
    areaHide: {
      type: Boolean,
      value: false
    }
  },
  data: {
    provinces: [],
    addClassName: false,
    citys: [],
    areas: [],
    classNameStatus: false,
    provincesIndex: 0,
    citysIndex: 0,
    areasIndex: 0,
    address: [],
    resultCityData: resultCityData
  },
  attached() {
    this._setInitCity()
  },
  methods: {
    tapBtn({
      currentTarget: {
        dataset: {
          sign
        }
      }
    }) {
      if (sign === 'cancel' || sign === 'mask') {
        this.triggerEvent('cancel')
      } else {
        this.triggerEvent('confirm', this.data.address)
      }
      this.setData({
        classNameStatus: !this.data.classNameStatus
      })
      this.triggerEvent('hide', sign)
    },
    prickAddressChange({detail: {value: [a, b, c]} }) {
      let citysIndex = b
      let areasIndex = c
      if (a !== this.data.provincesIndex) {
        citysIndex = 0
        areasIndex = 0
      }
      if (citysIndex !== this.data.citysIndex) {
        areasIndex = 0
      }
      this.setData({
        provincesIndex: a,
        citysIndex,
        areasIndex
      })
      this._setInitCity()
    },
    _setInitCity() {
      this.setData({
        provinces: this.data.resultCityData,
        citys: this.data.resultCityData[this.data.provincesIndex].sub,
        areas: this.data.resultCityData[this.data.provincesIndex].sub[this.data.citysIndex].sub,
      })
      this.data.address = [{
        id: this.data.provinces[this.data.provincesIndex].code,
        name: this.data.provinces[this.data.provincesIndex].name
      }, {
          id: this.data.citys[this.data.citysIndex].code,
        name: this.data.citys[this.data.citysIndex].name
      }, {
          id: this.data.areas[this.data.areasIndex].code,
        name: this.data.areas[this.data.areasIndex].name
      }]
      this.triggerEvent('addresschange', this.data.address)
    }
  }
})