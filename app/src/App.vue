<template>
  <v-app
    height="815px"
    dark
    id="e3"
    standalone
    toolbar>
    <fiatheader></fiatheader>
    <div id="app">
      <router-view></router-view>
    </div>
    <v-footer class="grey darken-1">
      <span class="white--text">© 2017 Fiatcoin</span>
    </v-footer>
  </v-app>
</template>

<script>
// /* global web3:true */

// import Web3 from 'web3'
import { mapGetters } from 'vuex'
import 'font-awesome/css/font-awesome.css'

export default {
  name: 'app',
  data () {
    return {
      accountInterval: null
    }
  },
  computed: {
    ...mapGetters({
      account: 'account'
    })
  },
  mounted () {
    /*
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 === 'undefined') {
      console.error('No web3 detected. Please use MetaMask for development. https://metamask.io/')
      return
    }

    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider)

    // keep account updated if user decides to switch
    this.$store.dispatch('setAccount', web3.eth.accounts[0])
    this.accountInterval = setInterval(() => {
      const account = web3.eth.accounts[0]
      if (account !== this.account) {
        this.$store.dispatch('updateAccount', account)
      }
    }, 100)
    */
  },
  beforeDestroy () {
    clearInterval(this.accountInterval)
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
  margin: 0px;
  padding: 0px;
}
</style>
