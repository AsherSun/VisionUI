const data = {
  docs: {
    name: '',
    document: '',
    codeExampleList: []
  }
}

const methods = {
  getMarkDown(self, _id, env = 'dev-a5cf14') {
    const DB = wx.cloud.database({
      env,
    })
    let collection = DB.collection('docs')
    collection.doc(_id).get().then(({data}) => {
      self.setData({
        [_id + '.name']: data.docsName,
        [_id + '.document']: data.document,
        [_id + '.codeExampleList']: data.codeExampleList
      })
      console.log(self.data)
    }).catch(err => {
      console.log(err)
    })
  },
}

module.exports = {
  data,
  methods,
}