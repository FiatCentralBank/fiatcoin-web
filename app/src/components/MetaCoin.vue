<template>
  <div class="meta-coin">
    <h1>holaa</h1>
    <header>
      <img width="100" src="../assets/logo.png">
      <h1>MetaCoin</h1>
      <h2>Example Vue + Truffle Dapp</h2>
      <h3>You have <span class="black"><span id="balance" :class="{green: balance !== '0', red: balance === '0'}">{{ balance }}</span> META</span></h3>
    </header>

    <section>
      <h1>Send MetaCoin</h1>
      <form @submit.prevent="sendHandler">
        <label for="amount">Amount: </label>
        <input type="number" id="amount" placeholder="100" :value="amount" @input="updateAmount"></input>
        <label for="receiver">To Address: </label>
        <input type="text" id="receiver" placeholder="0x93e66d9baea28c17d9fc393b53e3fbdd76899dae" :value="address" @input="updateAddress"></input>
        <button id="send" type="submit">Send MetaCoin</button>
      </form>
      <p id="status">{{ status }}</p>
    </section>

    <footer>
      <span class="hint"><strong>Hint:</strong> open the browser developer console to view any errors and warnings.</span>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  name: 'meta-coin',
  computed: {
    ...mapGetters({
      address: 'address',
      amount: 'amount',
      balance: 'balance',
      status: 'status'
    })
  },
  methods: {
    sendHandler () {
      if (isNaN(this.amount) || this.amount === '0' || this.amount === '') {
        alert('invalid amount: ' + this.amount)
        return
      }

      if (this.address === '') {
        alert('invalid address: ' + this.address)
        return
      }

      this.$store.dispatch('sendMeta')
    },
    updateAddress (e) {
      this.$store.commit(types.UPDATE_ADDRESS, e.target.value)
    },
    updateAmount (e) {
      this.$store.commit(types.UPDATE_AMOUNT, e.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section, footer {
  margin-top: 3em;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ccc;
  margin-bottom: 1em;
}

button {
  padding: 0.5em 1em;
  background-color: #7FC76A;
  font-size: 1em;
  color: white;
  cursor: pointer;
  border: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#balance.green {
  color: #7FC76A;
}
#balance.red {
  color: #F62A00;
}
</style>
