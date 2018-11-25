Page({
  data: {
    docsName: 'vi-motion',
    docsSection: ''
  },
  onLoad: function (options) {

  },
  triggerToSubmitDocs({ detail }) {
    let resource = {
      docsSection: '',
      codeExampleList: []
    }
    if (!this.valideDate(detail.value)) return false;
    resource.docsSection =  this.httpTransformHttps(detail.value.docsSection)
    resource.codeExampleList = this.getCodeExampleList(detail.value.docsSection)
    this.insertDocument(Object.assign({}, detail.value, resource))
  },
  insertDocument(resource) {
    const DB = wx.cloud.database({
      env: 'dev-a5cf14'
    })
    let collection = DB.collection('docs')
    collection.doc(resource.docsName).set({
      data: {
        'document': resource.docsSection,
        codeList: resource.codeExampleList
      }
    }).then((data) => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  },
  httpTransformHttps(str) {
    return str.replace(/http:\/\//gim, 'https://')
  },
  getCodeExampleList(str) {
    let codeExampleStr = str.split('<!-- visionUI code example -->')[1]
    return codeExampleStr.split('<!-- code example -->')
  },
  valideDate(resource) {
    if (!resource.docsName) {
      wx.showToast({
        title: '请输入文档名称',
        icon: 'none',
        duration: 1500,
        mask: true,
      });
      return false
    }
    if (!resource.docsSection) {
      wx.showToast({
        title: '请输入文档内容',
        icon: 'none',
        duration: 1500,
        mask: true,
      });
      return false
    }
    return true
  },
  onShareAppMessage: function () {

  }
})