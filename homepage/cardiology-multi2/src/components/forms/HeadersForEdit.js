//  インポートします。
import Vue from 'vue'
import axios from 'axios'
import PropertyStore from '../../models/PropertyStore.js'

//  ニックネーム表示用のヘッダーコンポーネントを作成
export var IDHeader = Vue.extend({
  name: 'id_header',
  template: '<h2>受付番号: {{ sharedState.state.property.id }}</h2>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})


//  ボタン用のコンポーネントを作成
export var InputButton4 = Vue.extend({
  name: 'input-button',
  template: '<button class="button" v-on:click="validate">次へ</button>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  methods: {
    validate: function (event) {
      console.log(this.$el)
      var valid = true
      try {
        valid = this.$data.sharedState.validate()
        if (valid) {
          this.$router.push('/scene7')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
})

export var S7DifectButton = Vue.extend({
  name: 's7difect',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.difect"
    light
    rounded
  >
  <v-container>
  <v-row align="left"> 
    <v-col
      cols="12"
      sm="12"
    >
    <v-btn tile value="A">
    あり
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    なし
    </v-btn>
    </v-col>
    </v-row>
  </v-container>
  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4SexButton = Vue.extend({
  name: 's4sex',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.sex"
    light
    rounded
  >
  <v-container>
  <v-row align="left"> 
    <v-col
      cols="12"
      sm="12"
    >
    <v-btn tile value="A">
    男
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    女
    </v-btn>
    </v-col>
    </v-row>
  </v-container>
  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4ClarityButton = Vue.extend({
  name: 's4clarity',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.clarity"
    light
    rounded
  >
  <v-container>
  <v-row align="left"> 
    <v-col
      cols="12"
      sm="12"
    >
    <v-btn tile value="A">
    はい
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    いいえ
    </v-btn>
    </v-col>
    </v-row>
  </v-container>
  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4ConstitutionButton = Vue.extend({
  name: 's4constitution',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.constitution"
    light
    rounded
  >
  <v-container>
  <v-row align="left"> 
    <v-col
      cols="12"
      sm="12"
    >
    <v-btn tile value="A">
    1人
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    複数人
    </v-btn>
    </v-col>
    </v-row>
  </v-container>
  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

//
export var S4whatkindButton = Vue.extend({
  name: 's4whatkind',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.whatkind"
    light
    multiple
  >
  <v-container>
  <v-row align="left"> 
  <v-col
  cols="12"
  sm="12"
  >
    <v-btn tile value="A">
    刺すような痛み
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    鈍い痛み
    </v-btn>
    &emsp; &emsp;
    <v-btn value="C">
    圧迫されるような痛み
    </v-btn>
    &emsp; &emsp;
    <v-btn value="D">
    締め付けるような痛み
    </v-btn>
    &emsp;
    <v-btn value="H">
    その他
    </v-btn>
    </v-col>
    </v-row>
  </v-container>
  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4WhatkindOtherInput = Vue.extend({
  name: 's4whatkindotherinput',
  template: `<div class="scene4c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.whatkindother"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4whereButton = Vue.extend({
  name: 's4where',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.where"
    light
    multiple
  >
  <v-container>
  <v-row align="left"> 
  <v-col
  cols="12"
  sm="12"
  >
    <v-btn tile value="A">
    左胸部
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    右胸部
    </v-btn>
    &emsp; &emsp;
    <v-btn value="C">
    前胸部
    </v-btn>
    &emsp; &emsp;
    <v-btn value="D">
    心窩部
    </v-btn>
    &emsp; &emsp;
    <v-btn value="E">
    背部
    </v-btn>
    </v-col>
    <v-col
    cols="12"
    sm="12"
    >
    <v-btn value="F">
    首や肩に放散
    </v-btn>
    &emsp; &emsp;
    <v-btn value="G">
    局所的（指でさせるような）
    </v-btn>
    &emsp;
    <v-btn value="H">
    その他
    </v-btn>
    </v-col>
    </v-row>
  </v-container>
  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4WhereOtherInput = Vue.extend({
  name: 's4whereotherinput',
  template: `<div class="scene4c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.whereother"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4howlongButton = Vue.extend({
  name: 's4howlong',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.howlong"
    light
    multiple
  >
  <v-container>
  <v-row align="left"> 
  <v-col
  cols="12"
  sm="12"
  >
    <v-btn tile value="A">
    瞬間的（数秒以内）
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    5分以内
    </v-btn>
    &emsp; &emsp;
    <v-btn value="C">
    5分以上～20分以内
    </v-btn>
    &emsp; &emsp;
    <v-btn value="D">
    20分以上～数時間
    </v-btn>
    </v-col>
    <v-col
    cols="12"
    sm="12"
    >
    <v-btn value="E">
    それ以上
    </v-btn>
    &emsp; &emsp;
    <v-btn value="H">
    その他
    </v-btn>
    </v-col> 
    </v-row>
  </v-container>
  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4HowlongOtherInput = Vue.extend({
  name: 's4howlonginput',
  template: `<div class="scene4c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.howlongother"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})


export var S4whenButton = Vue.extend({
  name: 's4when',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.when"
    light
    multiple
  >
  <v-container>
    <v-row align="left"> 
      <v-col
        cols="12"
        sm="12"
      >
        <v-btn tile value="A">
        動いた時
        </v-btn>&emsp;
        <v-btn value="B">
        安静時
        </v-btn>&emsp;
        <v-btn value="C">
        体位を変えた時
        </v-btn>&emsp;
        <v-btn value="D">
        呼吸との関係(深呼吸で痛みが誘発されるなど)
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-btn value="E">
        食中もしくは食後
        </v-btn>&emsp;
        <v-btn value="F">
        透析中
        </v-btn>
        &emsp;
        <v-btn value="H">
        その他
        </v-btn>
      </v-col> 
    </v-row>
  </v-container>
  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4whenOtherInput = Vue.extend({
  name: 's4whenotherinput',
  template: `<div class="scene7c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.whenother"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4inactionButton = Vue.extend({
  name: 's4inaction',
  props: ['s4'],
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.inaction"
    light
    rounded
  >
  <v-container>
  <v-row align="left"> 
    <v-col
      cols="12"
      sm="12"
    >
    <v-btn tile value="A">
    はい
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    いいえ
    </v-btn>
    </v-col> 
    </v-row>
  </v-container>

  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4calmButton = Vue.extend({
  name: 's4calm',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.calm"
    light
    multiple
  >
  <v-container>
  <v-row align="left"> 
    <v-col
      cols="12"
      sm="12"
    >
    <v-btn tile value="A">
    朝方
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    日中
    </v-btn>
    &emsp; &emsp;
    <v-btn value="C">
    夜
    </v-btn>
    &emsp; &emsp;
    <v-btn value="D">
    寝ているとき
    </v-btn>
    &emsp; &emsp;
    <v-btn value="E">
    特にない
    </v-btn>
    &emsp;
   <v-btn value="H">
   その他
    </v-btn>
    </v-col> 
    </v-row>
  </v-container>
  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4calmOtherInput = Vue.extend({
  name: 's4calmotherinput',
  template: `<div class="scene7c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.calmother"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4otherButton = Vue.extend({
  name: 's4other',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.other"
    light
    multiple
  >
  <v-container>
  <v-row align="left"> 
    <v-col
      cols="12"
      sm="12"
    >
    <v-btn tile value="A">
    動悸
    </v-btn>
    &emsp; 
    <v-btn value="B">
    呼吸困難
    </v-btn>
    &emsp; 
    <v-btn value="C">
    発熱
    </v-btn>
    &emsp; 
    <v-btn value="D">
    冷汗
    </v-btn>
    &emsp; 
    <v-btn value="E">
    吐き気、おう吐
    </v-btn>
    &emsp; 
    <v-btn value="F">
    倦怠感
    </v-btn>
    &emsp; 
    <v-btn value="G">
    失神・前失神
    </v-btn>
    &emsp;
    <v-btn value="I">
    特にない
    </v-btn>
    <v-btn value="H">
    その他
    </v-btn>
    </v-col> 
    </v-row>
  </v-container>
  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S4otherOtherInput = Vue.extend({
  name: 's4otherotherinput',
  template: `<div class="scene7c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.otherother"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

//  ボタン用のコンポーネントを作成
export var InputButton3 = Vue.extend({
  name: 'submit-button',
  template: '<button class="button" v-on:click="validate">登録</button>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  methods: {
    validate: function (event) {
      console.log(this.$el)
      var valid = false
      var url = '__URL__'
      try {
        valid = this.$data.sharedState.validate()
        if (valid) {
          let params = new URLSearchParams()
//          params.append('text', 'テストだよー')
//          params.append('id', this.$data.sharedState.state.property.nickname)
          //性別
          if (this.$data.sharedState.state.property.sex != null) {
            params.append('sex', this.$data.sharedState.state.property.sex)
          }
          //家族構成
          if (this.$data.sharedState.state.property.constitution != null) {
            params.append('constitution', this.$data.sharedState.state.property.constitution)
          }
          //watkindの要素登録
          if (this.$data.sharedState.state.property.whatkind != null) {
            params.append('whatkind', this.$data.sharedState.state.property.whatkind)
          }
          if (this.$data.sharedState.state.property.whatkind.includes('H')) {
            params.append('whatkindother', this.$data.sharedState.state.property.whatkindother)
          }
          //whereの要素登録
          if (this.$data.sharedState.state.property.where != null) {
            params.append('where', this.$data.sharedState.state.property.where)
          }
          //whereでその他が選択された場合
          if (this.$data.sharedState.state.property.where.includes('H')) {
            params.append('whereother', this.$data.sharedState.state.property.whereother)
          }
          //howlongの要素登録
          if (this.$data.sharedState.state.property.howlong != null) {
            params.append('howlong', this.$data.sharedState.state.property.howlong)
          }
          //howlongでその他が選択された場合
          if (this.$data.sharedState.state.property.howlong.includes('H')) {
            params.append('howlongother', this.$data.sharedState.state.property.howlongother)
          }
          //whenの要素登録
          if (this.$data.sharedState.state.property.when != null) {
            params.append('when', this.$data.sharedState.state.property.when)
            //whenにA(運動時)が含まれている場合
            if (this.$data.sharedState.state.property.when.includes('A')) {
              if (this.$data.sharedState.state.property.inaction != null) {
                params.append('inaction', this.$data.sharedState.state.property.inaction)
              }
            }
            //whenにB(安静時)が含まれている場合
            if (this.$data.sharedState.state.property.when.includes('B')) {
              if (this.$data.sharedState.state.property.calm != null) {
                params.append('calm', this.$data.sharedState.state.property.calm)
              }
              //calmにその他が選択された場合
              if (this.$data.sharedState.state.property.where.includes('H')) {
                params.append('calmother', this.$data.sharedState.state.property.calmother)
              }
            }
            //whenでその他が選択された場合
            if (this.$data.sharedState.state.property.where.includes('H')) {
              params.append('whenother', this.$data.sharedState.state.property.whenother)
            }
          }
          //otherの要素登録
          if (this.$data.sharedState.state.property.other != null) {
            params.append('other', this.$data.sharedState.state.property.other)
          }
          //otherでその他が選択された場合
          if (this.$data.sharedState.state.property.other.includes('H')) {
            params.append('otherother', this.$data.sharedState.state.property.otherother)
          }
          if (this.$data.sharedState.state.property.diagnosis != null) {
            params.append('diagnosis', this.$data.sharedState.state.property.diagnosis)
          }
          if (this.$data.sharedState.state.property.otherdisgnosis != null) {
            params.append('otherdiagnosis', this.$data.sharedState.state.property.otherdisgnosis)
          }
          if (this.$data.sharedState.state.property.beforeinspection != null) {
            params.append('beforeinspection', this.$data.sharedState.state.property.beforeinspection)
          }
          //明瞭性
          if (this.$data.sharedState.state.property.clarity != null) {
            params.append('clarity', this.$data.sharedState.state.property.clarity)
          }
          //不備の有無
          if (this.$data.sharedState.state.property.clarity != null) {
            params.append('difect', this.$data.sharedState.state.property.difect)
          }
          axios.post(url, params).then(response => {
  //            console.log('受信したID: ' + response.data.id)
              this.$data.sharedState.state.property.id = response.data.id
          }).catch(error => { console.log(error) })
          this.$router.push('/scene5')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
})

export var S6diagnosisButton = Vue.extend({
  name: 's6diagnosis',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.diagnosis"
    light
    multiple
  >
  <v-container>
  <v-row align="left"> 
  <v-col
  cols="12"
  sm="12"
  >

    <v-btn color="red" value="A">
      労作性狭心症（安定狭心症）
    </v-btn>
    &emsp; 
    <v-btn value="B">
      不安定狭心症（冠攣縮性狭心症を除く）
    </v-btn>
    &emsp; 
    <v-btn value="C">
      冠攣縮性狭心症
    </v-btn>
    &emsp; 
    <v-btn value="E">
      大動脈弁狭窄症
    </v-btn>
    </v-col>
      </v-row>
    </v-container>

  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})
export var S6beforeInspectionButton = Vue.extend({
  name: 's6beforeinspection',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.beforeinspection"
    light
    multiple
  >
  <v-container>
  <v-row align="left"> 
  <v-col
  cols="12"
  sm="12"
  >

    <v-btn value="A">
      狭心症疑い
    </v-btn>
    &emsp; 
    <v-btn value="B">
      狭心症否定目的
    </v-btn>
    </v-col>
      </v-row>
    </v-container>

  </v-btn-toggle>
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})
export var S6otherInput = Vue.extend({
  name: 's6otherinput',
  template: `<div class="scene6c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.otherdisgnosis"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})
//  ボタン用のコンポーネントを作成
export var InputButton6 = Vue.extend({
  name: 'InputButton6',
  template: '<button class="button" v-on:click="validate">開始</button>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  methods: {
    validate: function (event) {
      console.log(this.$el)
      var valid = true
      try {
        if (valid) {
          this.$router.push('/scene4')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
})
