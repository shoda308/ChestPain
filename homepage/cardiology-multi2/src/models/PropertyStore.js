//  データストア
var PropertyStore = {
  debug: true,
  state: {
    property: {
      type: '1',
      whatkind: '',
      whatkindother:'',
      calmother:'',
      whenother:'',
      otherother:'',
      where: '',
      id: '',
      howlong:'',
      howlongother:'',
      whereother:''
    }
  },
  validate () {
    return true
  }
}
export default PropertyStore
