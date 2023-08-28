
<template>
  <div>
    <div class="scene7a">
      <h2>胸痛はどのような症状ですか？(2/2)</h2>
    </div>
    <div class="scene7b">
      <div>
        <h2>どのような時に痛みますか</h2>
        <s4when-radiobutton></s4when-radiobutton>
        <br>
      </div>
      <div> 
        「その他」を選んだ方: どのような時か記入してください<br>
        <s4whenother-input></s4whenother-input>
         <br>
      </div>
      <div> 
        「動いた時」を選んだ方: 同じ運動をすれば胸痛は起きますか? (再現性)<br>
        <s4inaction-radiobutton></s4inaction-radiobutton>
        <br>
      </div>
      <div> 
        「安静時」を選んだ方: 症状の起きやすい時間帯は?<br>
        <s4calm-radiobutton></s4calm-radiobutton>
        <br>
      </div>
      <div> 
        「その他」を選んだ方: 時間帯を記入してください<br>
        <s4calmother-input></s4calmother-input>
        <br>
      </div>
      <div>
        <h2>他の症状（随伴症状、複数回答可）</h2>
        <s4other-radiobutton></s4other-radiobutton>
        <br>
        <div> 
        「その他」を選んだ方: 他の症状を記入してください<br>
        <s4otherother-input></s4otherother-input>
        <br>
        <h2>問診内容に信憑性はありますか</h2>
        <s4clarity-radiobutton></s4clarity-radiobutton>
        <br>
        <h2>問診内容に不備はありますか</h2>
        <s7difect-radiobutton></s7difect-radiobutton>
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
import {InputButton3, S4whenButton,S4whenOtherInput, S4inactionButton, S4calmButton,S4calmOtherInput, S4otherButton, S4otherOtherInput,S4ClarityButton,S7DifectButton} from './forms/Headers.js'

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
Vue.component('s4when-radiobutton', S4whenButton)
Vue.component('s4whenother-input', S4whenOtherInput)
Vue.component('s4inaction-radiobutton', S4inactionButton)
Vue.component('s4calm-radiobutton', S4calmButton)
Vue.component('s4calmother-input', S4calmOtherInput)
Vue.component('s4other-radiobutton', S4otherButton)
Vue.component('s4otherother-input', S4otherOtherInput)
Vue.component('s4clarity-radiobutton', S4ClarityButton)
Vue.component('s7difect-radiobutton', S7DifectButton)
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
