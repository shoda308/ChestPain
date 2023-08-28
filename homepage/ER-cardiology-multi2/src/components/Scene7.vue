<template>
  <div>
  <div class="scene7a">
    <h2>問診チェックシート 急性期Ver.(2/3)</h2>
    </div>
    <div class="scene7b">
      <div> 
        <h2>胸痛が生じた時間帯はいつですか？</h2>
        <s7time-radiobutton></s7time-radiobutton>
        <br>
      </div>
      <div> 
        「その他」を選んだ方: 時間帯を記入してください<br>
        <s7timeother-input></s7timeother-input>
        <br>
      </div>

      <div>
        <h2>他の症状（随伴症状、複数回答可）</h2>
        <s7other-radiobutton></s7other-radiobutton>
        <br>
        <div> 
        「その他」を選んだ方: 他の症状を記入してください<br>
        <s7otherother-input></s7otherother-input>
        <br>
        </div>
      </div>

      <div> 
        <h2>その胸痛症状は初めてですか？</h2>
        <s7firstTime-radiobutton></s7firstTime-radiobutton>
        <br>
        <submit7-button></submit7-button>
      </div>
    </div>
  </div>
</template>
<script>
//  インポート
import Vue from 'vue'
import PropertyStore from '../models/PropertyStore.js'
import {InputButton3,InputButton7, S7firstTimeButton, S7timeButton,S7timeOtherInput, S7otherButton, S7otherOtherInput} from './forms/Headers.js'

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
Vue.component('submit7-button', InputButton7)
Vue.component('submit2-button', InputButton3)
Vue.component('s7time-radiobutton', S7timeButton)
Vue.component('s7timeother-input', S7timeOtherInput)
Vue.component('s7other-radiobutton', S7otherButton)
Vue.component('s7otherother-input', S7otherOtherInput)
Vue.component('s7firstTime-radiobutton', S7firstTimeButton)
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scene7a{
  font-size: 1.8rem;
  text-align: center;
}
.scene7b{
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
.scene7c{
   background-color: #EEEEEE;
   width: 150pt;
   border: solid 1px silver;
}
</style>
