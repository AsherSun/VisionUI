Page({
  data: {
    docsName: '',
    document: ''
  },
  onLoad: function (options) {

  },
  triggerToSubmitDocs({ detail }) {
    let resource = {
      document: '',
      codeExampleList: []
    }
    if (!this.valideDate(detail.value)) return false;
    resource.document =  this.httpTransformHttps(detail.value.document)
    resource.codeExampleList = this.getCodeExampleList(detail.value.document)
    this.insertDocument(Object.assign({}, detail.value, resource))
  },
  insertDocument(resource) {
    const DB = wx.cloud.database({
      env: 'dev-a5cf14'
    })
    let collection = DB.collection('docs')
    collection.doc(resource.docsName).set({
      data: resource
    }).then(data => {
      wx.showToast({
        title: '文档添加成功',
        duration: 1500,
        mask: true,
      });
      this.setData({
        document: '',
        docsName: ''
      })
    })
  },
  httpTransformHttps(str) {
    return str.replace(/http:\/\//gim, 'https://')
  },
  getCodeExampleList(str) {
    let codeExampleStr = str.split('<!-- visionUI code example -->')[1]
    return codeExampleStr.split('<!-- code example -->').filter(item => {
      return item.length > 20
    })
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
    if (!resource.document) {
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
})