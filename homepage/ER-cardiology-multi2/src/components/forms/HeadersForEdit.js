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

export var InputButton7 = Vue.extend({
  name: 'input7-button',
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
          this.$router.push('/scene9')
        }
      } catch (e) {
        alert(e.message)
      }
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
  首や肩に歯に放散
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
        動いた時(労作)
        </v-btn>&emsp;
        <v-btn value="B">
        安静時
        </v-btn>&emsp;
        <v-btn value="C">
        体位を変えた時
        </v-btn>&emsp;
        <v-btn value="D">
        呼吸時(深呼吸など)
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-btn value="E">
        食中もしくは食後
        </v-btn>&emsp;
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
  template: `<div class="scene4c">
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


export var S7firstTimeButton = Vue.extend({
  name: 's7firstTime',
  props: ['s7'],
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.firsttime"
    light
  >
  <v-container>
  <v-row align="left"> 
    <v-col
      cols="12"
      sm="12"
    >
    <v-btn tile value="A">
    A はい
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    B いいえ
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

export var S7timeButton = Vue.extend({
  name: 's7time',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.time"
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

export var S7timeOtherInput = Vue.extend({
  name: 's7timeotherinput',
  template: `<div class="scene7c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.timeother"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S7otherButton = Vue.extend({
  name: 's7other',
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
    意識喪失
    </v-btn>
    &emsp;
    <v-btn value="I">
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

export var S7otherOtherInput = Vue.extend({
  name: 's7otherotherinput',
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

export var S9lateHappenButton = Vue.extend({
  name: 's9lateHappen',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.lateHappen"
    light
  >
  <v-container>
  <v-row align="left"> 
  <v-col
  cols="12"
  sm="12"
  >
    <v-btn tile value="A">
    48時間以内
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    1ヶ月以内
    </v-btn>
    &emsp; &emsp;
    <v-btn value="C">
    2ヶ月以内
    </v-btn>
    &emsp;
    <v-btn value="H">
    2ヶ月以上
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

export var S9changeButton = Vue.extend({
  name: 's9change',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.change"
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
    a 症状の閾値が低下　（軽い労作でも生じるようになった）
    </v-btn>
    &emsp; 
    <v-btn value="B">
    b 元々安静時にはなかったが、安静時にも生じるようになった
    </v-btn>
    &emsp; 
    <v-btn value="C">
    c 症状の頻度が増えた。
    </v-btn>
    &emsp; 
    <v-btn value="D">
    d 症状の性状が変わった。
    </v-btn>
    &emsp; 
    <v-btn value="E">
    e 症状の性状は変わらないが強くなった。
    </v-btn>
    &emsp; 
    <v-btn value="F">
    f 症状の性状は変わらないが弱くなった。
    </v-btn>
    &emsp;
    <v-btn value="G">
    g 症状の部位が変わった/広がった。
    </v-btn>
    &emsp;
    <v-btn value="H">
    h 症状の持続時間が長くなった。
    </v-btn>
    &emsp;
    <v-btn value="I">
    i 症状の持続時間が短くなった。
    </v-btn>
    &emsp;
    <v-btn value="J">
    j 随伴症状が変わった。
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

export var S9whereChageButton = Vue.extend({
  name: 's9whereChange',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.whereChange"
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
  首や肩に歯に放散
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

export var S9whileChageButton = Vue.extend({
  name: 's9whileChange',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.whileChange"
    light
  >
  <v-container>
  <v-row align="left"> 
  <v-col
  cols="12"
  sm="12"
  >
    <v-btn tile value="A">
    瞬間的(数秒以内)
    </v-btn>
    &emsp; &emsp;
    <v-btn value="B">
    5分以内
    </v-btn>
    &emsp; &emsp;
    <v-btn value="C">
    5~20分以内
    </v-btn>
    &emsp;
    <v-btn value="D">
    20分以上~数時間
    </v-btn>
    &emsp;
    <v-btn value="E">
    それ以上
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


export var S9otherChageButton = Vue.extend({
  name: 's9otherChange',
  template: `<div>
  <v-btn-toggle
    v-model="sharedState.state.property.otherChange"
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
    意識喪失
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

export var S9lateHappenOtherInput = Vue.extend({
  name: 's9lateHappenOtherinput',
  template: `<div class="scene9c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.lateHappenOther"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S9changeOtherInput = Vue.extend({
  name: 's9changeOtherinput',
  template: `<div class="scene9c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.changeother"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S9whereChangeOtherInput = Vue.extend({
  name: 's9whereChangeOtherinput',
  template: `<div class="scene9c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.whereChangeother"
  >
  </div>`,
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})

export var S9otherChangeOtherInput = Vue.extend({
  name: 's9ohterChangeOtherinput',
  template: `<div class="scene9c">
  <input type="text" width=300pt
    v-model="sharedState.state.property.ohterChangeother"
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
          //whenの要素登録
          if (this.$data.sharedState.state.property.when != null) {
            params.append('when', this.$data.sharedState.state.property.when)
          }
          //whenのその他選択時
          if (this.$data.sharedState.state.property.when.includes('H')) {
            params.append('whenother', this.$data.sharedState.state.property.whenother)
          }

          //ここから2ページ目
          
          //timeの要素登録
          if (this.$data.sharedState.state.property.time != null) {
            params.append('time', this.$data.sharedState.state.property.time)
          }
          //timeでその他が選択された場合
          if (this.$data.sharedState.state.property.time.includes('H')) {
            params.append('timeother', this.$data.sharedState.state.property.timeother)
          }
          //otherの要素登録
          if (this.$data.sharedState.state.property.other != null) {
            params.append('other', this.$data.sharedState.state.property.other)
          }
          //otherでその他が選択された場合
          if (this.$data.sharedState.state.property.other.includes('H')) {
            params.append('otherother', this.$data.sharedState.state.property.otherother)
          }
          if (this.$data.sharedState.state.property.firsttime != null) {
            params.append('firsttime', this.$data.sharedState.state.property.firsttime)
          }

          //ここから3ページ目

          if (this.$data.sharedState.state.property.firsttime.includes('B')) {
            //watkindの要素登録
            if (this.$data.sharedState.state.property.lateHappen != null) {
              params.append('lateHappen', this.$data.sharedState.state.property.lateHappen)
            }
            if (this.$data.sharedState.state.property.change != null) {
              params.append('change', this.$data.sharedState.state.property.change)
            }
            if (this.$data.sharedState.state.property.change.includes('H')) {
              params.append('changeother', this.$data.sharedState.state.property.changeother)
            }
            if (this.$data.sharedState.state.property.change.includes('G')) {
              if (this.$data.sharedState.state.property.whereChange != null) {
                params.append('whereChange', this.$data.sharedState.state.property.whereChange)
              }
              //whereChangeでその他が選択された場合
              if (this.$data.sharedState.state.property.whereChange.includes('H')) {
                params.append('whereChangeother', this.$data.sharedState.state.property.whereChangeother)
              }
            }
            if (this.$data.sharedState.state.property.change.includes('H')|| this.$data.sharedState.state.property.change.includes('I')) {
              //whileChangeの要素登録
              params.append('whileChange', this.$data.sharedState.state.property.whileChange)
            }
            if (this.$data.sharedState.state.property.change.includes('J')) {
              //otherChangeの要素登録
              if (this.$data.sharedState.state.property.otherChange != null) {
                params.append('otherChange', this.$data.sharedState.state.property.otherChange)
              }
              //whenのその他選択時
              if (this.$data.sharedState.state.property.otherChange.includes('H')) {
                params.append('ohterChangeother', this.$data.sharedState.state.property.ohterChangeother)
              }
            }

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
