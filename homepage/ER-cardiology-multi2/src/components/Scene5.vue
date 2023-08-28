<template>
  <div class="scene5">
    <id-header></id-header>
    <h2>問診情報を登録しました</h2>　
    <h3>受付番号を担当医にお知らせください</h3>
  </div>
</template>

<script>
//  インポート
import Vue from 'vue'
import {IDHeader} from './forms/Headers.js'

//  デフォルト値定義
export default {
  data () {
    return {

    }
  }
}

//  コンポーネントを登録
Vue.component('id-header', IDHeader)

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
