//  データストア
var PropertyStore = {
  debug: true,
  state: {
    property: {
      type: '1',
      whatkind: '',
      whatkindother:'',
      where: '',
      whereother:'',
      when:'',
      whenother:'',

      time:'',
      timeother: '',
      other:'',
      otherother:'',
      firsttime:'',

      lateHappen:'',
      change: '',
      changeother: '',
      whereChange: '',
      whereChangeother: '',
      whileChange: '',
      otherChange: '',
      ohterChangeother: '',
      
      id: ''
    }
  },
  validate () {
    return true
  }
}
export default PropertyStore
