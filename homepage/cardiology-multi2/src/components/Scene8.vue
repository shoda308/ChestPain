<template>
  <div>
  <div class="scene6a">
<!--    <nickname-header></nickname-header> -->
    <h2>医療従事者へ</h2>
  </div>
  <div class="scene6b">
    <h2>患者の臨床診断は？(複数回答可)</h2>
    <s6diagnosis-radiobutton></s6diagnosis-radiobutton>
    <br>
   その他の診断結果がある場合は以下にご記入ください<br>
    <s6other-input></s6other-input>
    <br>
    <submit6-button></submit6-button>
  </div>
  </div>
</template>
<script>
//  インポート
import Vue from 'vue'
import PropertyStore from '../models/PropertyStore.js'
import {InputButton6, S6diagnosisButton, S6otherInput} from './forms/Headers.js'

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
Vue.component('submit6-button', InputButton6)
Vue.component('s6diagnosis-radiobutton', S6diagnosisButton)
Vue.component('s6other-input', S6otherInput)

</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scene6a{
  font-size: 1.8rem;
  text-align: center;
}
.scene6b{
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
.scene6c{
   background-color: #EEEEEE;
   width: 150pt;
   border: solid 1px silver;
}

</style>
