<template>
  <main>
    <div class="fiatcoin-home">
      <v-container fluid class="home-container black">
        <v-flex xs12 class="pt-3 pb-3 hidden-md-and-down">
        </v-flex>
        <v-flex xs12 class="pt-2 pb-2 hidden-sm-and-down">
        </v-flex>
        <v-flex xs12 class="pt-1 pb-1 hidden-xs-only">
        </v-flex>
        <v-flex xs12>
            <img class="header-fiat-img" src="../assets/fiatcoin.png">
        </v-flex>
        <v-flex xs12>
          <v-card-text class="headline home-title-1 white--text text-xs-center hidden-sm-and-down">
          Cash bills 100% backed by Ethereum gold.
          </v-card-text>
          <countdown :time="time" :interval="100" tag="div">
            <template scope="props">
             <p class="white--text text-xs-center hidden-xs-only">
               Token Pre-Sale Starts in: {{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds.
             </p>
            </template>
          </countdown>
          <div class="preico-div">
            <v-btn
              class="preico-btn"
              href="https://goo.gl/forms/HlWhXtaK2WEQ4hgj1"
              target="_blank">
              Sign-up for the Token Pre-Sale now!
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs8 offset-xs2 class="pt-3 pb-3 hidden-md-and-down">
          <v-card-text class="subheading home-title-1 white--text text-xs-center hidden-sm-and-down">
          Cryptocurrency is the new gold. Gold has served as a standard for currency for millennia. Fiat cash is a physical currency 100% backed by Ethereum, with Fiatcoin cryptocurrency as an intermediary digital currency. Fiat cash bills enable users to easily do anonymous secure  instant transactions without requiring an internet connection. Holders of Fiat cash bills don't see the value of their money reduced with inflation. You can exchange Fiat cash with the equivalent Ethereum value: it's another way of acquiring Ethereum. There is no crypto-key in Fiat bills, so you don't need to worry about stolen crypto-keys.
          </v-card-text>
        </v-flex>
        <v-flex xs12 class="pt-3 pb-3 hidden-md-and-down">
        </v-flex>
        <v-flex xs12 class="pt-1 pb-1 hidden-sm-and-down">
        </v-flex>
        <v-flex xs12 class="pt-1 pb-1 hidden-xs-only">
        </v-flex>
      </v-container>
      <div class="grey">
        <div class="fiatcoin-other pb-4">
          <v-container fluid class="no-padding">
            <v-layout>
              <v-flex sm4 offset-sm2 xs12>
                <v-card-text class="display-5 home-title-1 text-sm-right text-xs-center">
                Subscribe for updates
                </v-card-text>
                <div class="signup text-sm-right text-xs-center">
                  <div id="mc_embed_signup2" >
                    <form
                      action="//fiatcoin.us16.list-manage.com/subscribe/post?u=36a8cc33584fa4d432186c697&amp;id=503a29a06c"
                      method="post"
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      class="validate"
                      target="_blank"
                      novalidate>
                      <div>
                      <input
                        placeholder="Enter your email"
                        type="email"
                        value=""
                        name="EMAIL"
                        class="required email grey lighten-4"
                        id="mce-EMAIL2">
                      <span id="mce-responses2" class="clear">
                        <div class="response" id="mce-error-response" style="display:none">
                        </div>
                        <div class="response" id="mce-success-response" style="display:none">
                        </div>
                      </span>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                      <span style="position: absolute; left: -5000px;" aria-hidden="true">
                        <input
                          type="text"
                          name="b_36a8cc33584fa4d432186c697_503a29a06c"
                          tabindex="-1"
                          value="">
                      </span>
                      <span class="clear">
                        <input
                          type="submit"
                          value="Subscribe"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          class="button">
                      </span>
                      </div>
                    </form>
                  </div>
                </div>
              </v-flex>
              <v-flex sm4 offset-sm2 xs12 class="hidden-xs-only">
                <v-card-text class="display-5 home-title-1 text-xs-left">
                Join the conversation
                </v-card-text>
                <a class="home-links pl-3" href="https://github.com/FiatCentralBank" target="_blank">
                  <v-icon>fa-github</v-icon>
                </a>
                <a class="home-links" href="https://twitter.com/FiatCentralBank" target="_blank">
                  <v-icon>fa-twitter</v-icon>
                </a>
                <a class="home-links" href="https://t.me/joinchat/BXcE1RHeVrbdHmaYoSnCVQ" target="_blank">
                  <v-icon>fa-comments</v-icon>
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
    </div>
    <div class="fiatcoin-other">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-text class="headline home-title-1">
              Anonymous transactions with cash. No inflation.
              </v-card-text>
              <v-card-text class="headline home-title-1 hidden-sm-and-down">
              As easy as using dollars.
              </v-card-text>
              <v-btn class="preico-btn text-xs-right" dark>Whitepaper</v-btn>
            </v-flex>
            <v-flex xs12>
              <v-card-text class="display-3 home-title-1">
              Features
              </v-card-text>
            </v-flex>
            <v-flex  md4 xs12>
                <img alt="easy-to-setup" src="https://global-uploads.webflow.com/593cdf92bedace68bd40cdbc/593cfb56d46a1d72cdafc305_Easy%20to%20setup%20icon.png" width="70">
                <v-card-text class="px-0">
                Cash is easy to use, you don’t need a computer or smartphone or to know how to use them to use cash.
                </v-card-text>
            </v-flex>
            <v-flex  md4 xs12>
                <img alt="easy-to-setup" src="https://global-uploads.webflow.com/593cdf92bedace68bd40cdbc/593cfb56d46a1d72cdafc305_Easy%20to%20setup%20icon.png" width="70">
                <v-card-text class="px-0">
                Cash is anonymous, cash transactions are not logged in principle. If you want to be anonymous on Ethereum or Bitcoin, you can, as long as your account is not linked to you, but the transactions are public.
                </v-card-text>
            </v-flex>
            <v-flex  md4 xs12>
                <img alt="easy-to-setup" src="https://global-uploads.webflow.com/593cdf92bedace68bd40cdbc/593cfb56d46a1d72cdafc305_Easy%20to%20setup%20icon.png" width="70">
                <v-card-text class="px-0">
                This is cash that doesn’t lose value from inflation. Unlike most fiat money (Euro, Dollar, Yen...), as Fiat cash bills are 100% backed with Ethereum, they don't lose value over time.
                </v-card-text>
            </v-flex>
            <v-flex  md4 xs12>
                <img alt="easy-to-setup" src="https://global-uploads.webflow.com/593cdf92bedace68bd40cdbc/593cfb56d46a1d72cdafc305_Easy%20to%20setup%20icon.png" width="70">
                <v-card-text class="px-0">
                You don’t have to worry about stolen keys. It’s true that with cash you do have to worry about whether the cash you hold is counterfeit but the technology to minimize counterfeit bills is better tested and well-known.
                </v-card-text>
            </v-flex>
            <v-flex  md4 xs12>
                <img alt="easy-to-setup" src="https://global-uploads.webflow.com/593cdf92bedace68bd40cdbc/593cfb56d46a1d72cdafc305_Easy%20to%20setup%20icon.png" width="70">
                <v-card-text class="px-0">
                Free transactions. Cash transactions are free, whereas Bitcoin and Ethereum transactions have some marginal cost.
                </v-card-text>
            </v-flex>
            <v-flex  md4 xs12>
                <img alt="easy-to-setup" src="https://global-uploads.webflow.com/593cdf92bedace68bd40cdbc/593cfb56d46a1d72cdafc305_Easy%20to%20setup%20icon.png" width="70">
                <v-card-text class="px-0">
                Instantaneous transactions. Cash transactions are instantaneous, you don’t need to wait minutes or seconds for confirmation.
                </v-card-text>
            </v-flex>
            <v-flex xs12>
                <img alt="easy-to-setup" src="https://global-uploads.webflow.com/593cdf92bedace68bd40cdbc/593cfb56d46a1d72cdafc305_Easy%20to%20setup%20icon.png" width="70">
                <v-card-text class="px-0">
                Ease of conversion between fiat and cryptocurrencies. Buying a cryptocurrency with other fiat currencies like Euro or Dollar is sometimes cumbersome, as you register on an exchange and give them personal details. Obtaining Ethereum with Fiat cash is simple as Fiat cash is 100% backed with Ethereum.
                </v-card-text>
            </v-flex>
            <v-flex xs12>
              <v-card-text class="display-3 home-title-1">
              Timeline
              </v-card-text>
            </v-flex>
            <v-flex  md6 xs12>
                <v-icon light>fa-circle</v-icon>
                <v-card-text class="px-0">
                15th December
                </v-card-text>
                <v-card-text class="px-0">
                Token Pre-Sale
                </v-card-text>
                <v-card-text class="px-0">
                The Fiatcoin ERC20 currency is launched and a small quantity of Fiatcoins is sold for a fixed price to selected investors. Investors can exchange them with Fiat bills.
                </v-card-text>
            </v-flex>
            <v-flex  md6 xs12>
                <v-icon light>fa-circle</v-icon>
                <v-card-text class="px-0">
                January 2018
                </v-card-text>
                <v-card-text class="px-0">
                Token Sale
                </v-card-text>
                <v-card-text class="px-0">
                Up to 125 million Fiatcoins are minted and sold in dutch auctions in the free market. The Fiat Central Bank will expand into multiple countries to ease changing Fiatcoins, Ethereum and Fiat bills.
                </v-card-text>
            </v-flex>
            <v-flex xs12>
              <v-card-text class="display-3 home-title-1">
              Fiat bills
              </v-card-text>
              <img alt="fiatcoin-history" src="static/fiatcoin.jpg" width="100%">
                <v-card-text class="px-0">
                A Fiat bill is forever. Its value is constant, in Ether. When the Fiat Central Bank issues a One Ethereum Fiat Bill to a user, the user gives the FCB the Fiatcoin  token (FTC) equivalent quantity of one Ethereum. The FCB will sell the Fiatcoins in the market and store One Ethereum in the vault. This way, the Fiatcoin to Ethereum rate might fluctuate, but the FCB will always be able to pay the bearer on demand the equivalent quantity of One Ethereum in Fiatcoins (FTC).
                </v-card-text>
                <v-card-text class="px-0">
                NOTE: This picture shows SAMPLE Fiat bills that are NOT exchangeable for Fiatcoins.
                </v-card-text>
            </v-flex>
            <v-flex xs12>
              <v-card-text class="display-3 home-title-1">
              About
              </v-card-text>
              <v-card-text class="display-1 home-title-1"> 
              Félix Robles
              </v-card-text>
              <v-card-text class="headline home-title-1">
              CEO / Founder
              </v-card-text>
              president AT fiatcentralbank DOT com
              <img class="founder-img" alt="CEO / Founder" src="static/about.jpg">
              <v-card-text class="headline">
              Master degree in Telecommunications Engineering. Work experience in multiple sectors (European Commission, Wacom, Airbus Military, secure electronic voting) and countries like Luxembourg, UK, Spain and Colombia as software engineer.
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
    </div>
  </main>
</template>

<script>

export default {
  name: 'fiatcoin-other',
  computed: {
  },
  data: function () {
    var now = new Date()
    var newYear = new Date()
    newYear.setFullYear(2017, 11, 15)

    return {
      time: newYear - now
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fiatcoin-home {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
}

.no-padding {
  padding: 0;
}

.preico-div {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.preico-btn {
  width: 310px;
  background-color: rgb(38, 189, 225) !important;
  color: white !important;
  cursor: pointer;
  border-radius: 5px;
}
.preico-btn:hover {
  background-color: rgb(7, 54, 79) !important;
}

.signup-input {
  margin-left: auto;
  margin-right: auto;
  width: 385px;
}

.header-fiat-img {
  display: block;
  margin: auto;
  height: 64px;
}

.fiatcoin-other {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.home-links {
  text-decoration: solid;
}

.home-links > .icon {
  color: black;
}

.home-links > .icon:hover {
  color: white;
}

input[type=email] {
  border-radius: 5px;
  padding: 5px 15px;
  border: 0 none;
}

input[type=email].big-email {
  font-size: 16px;
  width: 200px;
}

input[type=email]::placeholder {
  color: #ccc;
}

input[type=submit] {
  padding: 5px 25px;
  background: rgb(38, 189, 225);
  color: white;
  border: 0 none;
  cursor: pointer;
  border-radius: 5px;
}

input[type=submit].big-submit {
  font-size: 20px;
}

input[type=submit]:hover {
  background: rgb(7, 54, 79);
}

.home-title-1 {
  color: #2d273c;
}

.founder-img {
  display: block;
  width: 198px;
  border: 3px solid #888199;
  border-radius: 150px;
  filter: saturate(0%);
  margin: 10px auto;
}
</style>
