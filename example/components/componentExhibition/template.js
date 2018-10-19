let space = /[^(\n|\r)]+/gm;
class TemplateParse {
  constructor (str) {
   this.str = str
   this.init()
  }
  init () {
    this.oneFilter(this.str)
  }
  oneFilter(str) {
    this.oneCode = str.match(space)
  }
}

module.exports = TemplateParse