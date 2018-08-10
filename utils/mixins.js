let native = Page
Page = source => {
  native(new Merge(source))
}
class Merge {
  constructor(source) {
    let { mixins = [] } = source
    if (!mixins[0]) return source
    Reflect.deleteProperty(source, "mixins")
    return this.start(source, mixins)
  }
  
  start(source, mixins) {
    let root = {}
    mixins.forEach((item) => {
      root = this.recursive(source, item)
    })
    return root
  }

  recursive = (source, item) => {
    for (let attr in item) {
      switch (this.validate_proto_(source[attr])) {
        case 'Undefined':
          source[attr] = item[attr]
          break
        case 'Object':
          this.recursive(source[attr], item[attr])
          break
        case 'Function':
          if (this.validate_proto_(source[attr]) === 'Function') {
            item[attr].call(source)
          } else {
            source['$m_' + attr] = item[attr]
          }
          break
        default:
          source[attr] = item[attr]
      }
    }
    return source
  }

  validate_proto_ (item) {
    let str = Object.prototype.toString.call(item)
    return str.substring(1, str.length -1).split(' ')[1]
  }
}
