<template>
  <div class="scene5">
    <id-header></id-header>
    <out-header></out-header>
    <div v-if="sharedState.state.property.out < 0.319">狭心症でない可能性が高い。</div>
    <div v-if="sharedState.state.property.out > 0.319">狭心症の可能性が高い。</div>
  </div>
</template>

<script>
//  インポート
import Vue from 'vue'
import PropertyStore from '../models/PropertyStore.js'
import {IDHeader,OutHeader} from './forms/Headers.js'

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
Vue.component('id-header', IDHeader)
Vue.component('out-header', OutHeader)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scene5{
  font-size: 1.8rem;
  text-align: center;
}
.nickname{
  display: block;
  height: 3rem;
}
</style>
