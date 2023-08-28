<template>
  <div>
  <div class="scene9a">
    <h2>問診チェックシート 急性期Ver.(3/3)</h2>
    </div>
    <div class="scene9b">
      <div> 
        <h2>B いいえを選んだ方→その前に起きたのはいつですか？</h2>
        <s9lateHappen-radiobutton></s9lateHappen-radiobutton>
        <br>
      </div>
      <div>
        <h2>B いいえを選んだ方→どのように変化しましたか？</h2>
        <s9change-radiobutton></s9change-radiobutton>
        <br>
      </div>

      <div>
        <h2>上の質問でGを選んだ方→どのようにかわりましたか？</h2>
        <s9whereChange-radiobutton></s9whereChange-radiobutton>
        <br>
        <div> 
        「その他」を選んだ方: 他の症状を記入してください<br>
        <s9whereChangeother-input></s9whereChangeother-input>
        <br>
        </div>
      </div>

      <div> 
        <h2>上の質問でH or Iを選んだ方→どのようにかわりましたか？</h2>
        <s9whileChange-radiobutton></s9whileChange-radiobutton>
      </div>

      <div>
        <h2>上の質問でJを選んだ方→どのようにかわりましたか？</h2>
        <s9otherChange-radiobutton></s9otherChange-radiobutton>
        <br>
        <div> 
        「その他」を選んだ方: 他の症状を記入してください<br>
        <s9ohterChangeother-input></s9ohterChangeother-input>
        <br>
        </div>
        <submit2-button></submit2-button>
      </div>
    </div>
  </div>
</template>
<script>
//  インポート
import Vue from 'vue'
import PropertyStore from '../models/PropertyStore.js'
import {InputButton3,S9otherChageButton, S9lateHappenButton,S9whileChageButton,S9whereChangeOtherInput,S9whereChageButton, S9changeButton,S9changeOtherInput,S9otherChangeOtherInput} from './forms/Headers.js'

//  デフォルト値定義
export default {
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
}

//  コンポーネントを登録
// Vue.component('nickname-header', NickNameHeader)
//  コンポーネントを登録
Vue.component('submit2-button', InputButton3)
Vue.component('s9lateHappen-radiobutton', S9lateHappenButton)
Vue.component('s9change-radiobutton', S9changeButton)
Vue.component('s9changeother-input', S9changeOtherInput)
Vue.component('s9whereChange-radiobutton', S9whereChageButton)
Vue.component('s9whereChangeother-input', S9whereChangeOtherInput)
Vue.component('s9whileChange-radiobutton', S9whileChageButton)
Vue.component('s9otherChange-radiobutton', S9otherChageButton)
Vue.component('s9ohterChangeother-input', S9otherChangeOtherInput)
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scene9a{
  font-size: 1.8rem;
  text-align: center;
}
.scene9b{
  font-size: 1.2rem;
  text-align: left;
}
.button {
  display: inline;
  position: relative;
  margin: 0 auto;
  width: 100pt;
  background-color: white;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
.scene9c{
   background-color: #EEEEEE;
   width: 150pt;
   border: solid 1px silver;
}
</style>