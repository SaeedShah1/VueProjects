<template>
  <router-view/>
</template>

<script>

import fundTransfer from './MainPage/fundTransfer.vue'
// import {paycashVue,BranchTxtF,branchCombo,interBranchPayCash,CurrencyCombo,CustNumTxt,RadioGroup,AccountComb,OkBtn} from './SubComponents'

export default {
  name: "App",
  components: {
    fundTransfer
  
  },
};
</script>

<style lang = "scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #90b383;
}
</style>
