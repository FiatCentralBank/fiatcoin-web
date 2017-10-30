<template>
    <v-container fluid class="blue lighten-2 header-container header-height">
      <a href="https://fiatcoin.net">
        <img class="header-height hidden-sm-and-down" src="../assets/fiatcoin.png">
      </a>
      <img class="header-height hidden-md-and-up" src="../assets/fiatcoin_smaller.png">
      <v-btn class="header-button pull-right" dark href="https://medium.com/@fiatcentralbank">Blog</v-btn>
      <v-btn class="header-button pull-right" dark style="right: -4px;" href="https://fiatcoin.net">About</v-btn>
      <v-btn
        class="header-button pull-right"
        dark
        style="right: -8px;"
        href="https://docs.google.com/document/d/1wfwrRsJ73nti4eTjH89EAvu132f7-xFZg0QqoQoUXGg"
        target="_blank">
        Whitepaper
      </v-btn>
      <v-btn 
        class="header-button pull-right"
        dark style="right: -12px;"
        target="_blank"
        href="https://goo.gl/forms/m5rTykv1t9TICWLi1">
        Token Pre-Sale
      </v-btn>
    </v-container>
</template>

<script>

export default {
  name: 'fiatheader',
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header-container {
  padding: 0;
}

.header-span {
  position: absolute;
  right: 0;
}
.header-div {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 34px;
}

.header-height {
  height: 34px;
}

.header-button0 {
  width: 120px;
  margin: 0px 0px 0px auto;
  border-radius: 0px;
}

.header-button {
  width: calc(4% + 65px);
  height: 34px;
  margin: 0px;
  border-radius: 0px;
}

.header-button:hover {
  background-color: rgb(7, 54, 79) !important;
}
</style>
