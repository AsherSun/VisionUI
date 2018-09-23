// components/vi_sku/vi_sku.js.js
Component({
  properties: {
    skuBase: {
      type: Object,
      value: {}
    },
    skuid: {
      type: String, Number,
      value: '',
      observer: function (newValue, oldValue) {
        if (Number(newValue) === 0) return false
        this.propPathDefault(newValue)
      }
    },
    props: {
      type: Array,
      value: []
    }
  },
  externalClasses: ['sku-class'],
  data: {
    classNameObj: [], // 选中样式对象
    skuDisabled: [], // 用于装载 禁止选中的 样式 id
  },
  methods: {
    /*
     * sku选择逻辑
     */
    btnClickFn(e) { // 按钮点击事件，ci 为 自身索引值，pi 为父元素索引值, btnid为当前按钮的id, pid 为当前按钮的父级id
      let dataset = e.target.dataset
      let { ci, pi, btnid, pid } = dataset
      if (this.data.classNameObj[pi] === ci) return false
      this.data.classNameObj[pi] = ci
      this.setData({ // 选中样式设置
        classNameObj: this.data.classNameObj
      })
      this.validataDisableFn(pid + ':' + btnid, pi, ci) // 验证其余属性是否有不匹配的
      this.combinationId(ci, pi)
    },
    validataDisableFn(attrId, pi, ci) { // 过滤skus中propPath属性有多少匹配的
      if (pi === 0) {
        this.contrastDataFn(this.properties.skuBase.skus.filter((item, index) => {
          if (item.propPath.indexOf(attrId) !== -1) {
            return item
          }
        }))
      }
    },
    contrastDataFn(arr) { // 数据比对
      let ddd = []
      this.properties.skuBase.props.forEach((item, index) => {
        let sss = []
        item.values.forEach((cItem, cIndex) => {
          let bbb = new Set()
          arr.forEach((arrItem, arrIndex) => {
            if (arrItem.propPath.indexOf(`${item.pid}:${cItem.vid}`) !== -1) {
              bbb.add(false)
            } else {
              bbb.add(true)
            }
          })
          sss.push(bbb)
        })
        ddd.push(sss)
      })
      this.addDisableFn(ddd)
    },
    addDisableFn(arr) { // 禁止选择的样式添加
      arr.forEach((item, index) => {
        let isDisableArr = []
        item.forEach((cItem, cIndex) => {
          if (cItem.size === 2 || cItem.has(false)) {
            isDisableArr.push(false)
          } else {
            isDisableArr.push(true)
          }
        })
        this.data.skuDisabled[index] = isDisableArr
        this.setData({ // 更新禁止选中的内容
          skuDisabled: this.data.skuDisabled
        })
      })
    },
    combinationId(ci, pi) {
      this.triggerEvent('selected') // 触发事件判断用户有没有选择完成
      let arr = []
      if (this.data.classNameObj.length === this.properties.skuBase.props.length) {
        this.data.classNameObj.forEach((item, index) => {
          arr.push({
            attrId: this.properties.skuBase.props[index].pid + ':' + this.properties.skuBase.props[index].values[item].vid,
            attrDes: this.properties.skuBase.props[index].values[item].name
          })
        })
        this.validataSkuId(arr)
      }
    },
    validataSkuId(arr) { // 验证用户选中的skuId是否有库存
      let skusFn = key => {
        return arr.map(item => {
          return item[key]
        })
      }
      this.properties.skuBase.skus.forEach((item, index) => {
        if (item.propPath.trim() === skusFn('attrId').join(';')) {
          item.props = skusFn('attrDes')
          this.triggerEvent('selected', item) // 触发事件，表示已选择完成
        }
      })
    },
    /*
     * sku 默认选中逻辑
     */
    propPathDefault(id) { // 获取默认 propPath 值
      if (!this.properties.skuBase || !this.properties.skuBase.skus) return false
      this.defaultAttrArr(this.properties.skuBase.skus.filter(item => {
        return item.skuId === id
      }))
    },
    defaultAttrArr(str) { // 根据默认propPath值拆解为数组
      let _this = this
      let [skusObj] = str
      let arr = []
      skusObj && skusObj.propPath.split(';').forEach((item, index) => {
        this.properties.skuBase.props[index].values.forEach((vItem, vIndex) => {
          if (item === `${this.properties.skuBase.props[index].pid}:${vItem.vid}`) {
            arr.push(vItem.name)
            this.data.classNameObj[index] = vIndex
            this.setData({ // 选中样式设置
              classNameObj: this.data.classNameObj
            })
            if (arr.length === this.properties.skuBase.props.length) {
              skusObj.props = arr
              setTimeout(() => {
                _this.triggerEvent('selected', skusObj) // 触发事件，表示已选择完成
              }, 100)
              // _this.triggerEvent('selected', skusObj) // 触发事件，表示已选择完成
            }
          }
        })
      })
    }
  }
})
