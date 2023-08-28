<template>
  <div>
  <div class="scene4a">
<!--    <nickname-header></nickname-header> -->
  <h2>問診チェックシート 急性期Ver.(1/3)</h2>
  </div>
  <div class="scene4b">
    <h2>胸痛の症状を教えてください？</h2>
    <s4whatkind-radiobutton></s4whatkind-radiobutton>
    <br>
   「その他」を選んだ方: どのような痛みなのか記入してください<br>
    <s4whatkind-input></s4whatkind-input>
    <br>
    <h2>症状の部位は？</h2>
    <s4where-radiobutton></s4where-radiobutton>
    <br>
   「その他」を選んだ方: 部位を記入してください<br>
    <s4where-input></s4where-input>
    <br>
    <div>
      <h2>症状は何をしているときに起きましたか？</h2>
      <s4when-radiobutton></s4when-radiobutton>
      <br>
    </div>
   「その他」を選んだ方: どのような時か記入してください<br>
      <s4whenother-input></s4whenother-input>
      <br>
    <submit4-button></submit4-button>

    
  </div>
  </div>
</template>
<script>
//  インポート
import Vue from 'vue'
import PropertyStore from '../models/PropertyStore.js'
import {InputButton4, S4whatkindButton,S4WhatkindOtherInput, S4whereButton, S4WhereOtherInput, S4whenButton,S4whenOtherInput} from './forms/Headers.js'

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
Vue.component('submit4-button', InputButton4)
Vue.component('s4whatkind-radiobutton', S4whatkindButton)
Vue.component('s4whatkind-input', S4WhatkindOtherInput)
Vue.component('s4where-radiobutton', S4whereButton)
Vue.component('s4where-input', S4WhereOtherInput)
Vue.component('s4when-radiobutton', S4whenButton)
Vue.component('s4whenother-input', S4whenOtherInput)

</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scene4a{
  font-size: 1.8rem;
  text-align: center;
}
.scene4b{
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
.scene4c{
   background-color: #EEEEEE;
   width: 150pt;
   border: solid 1px silver;
}
</style>