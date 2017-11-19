<template>
  <div>


    <div class="ui segment padding" style="margin-top: 6vh; 
    margin-left: 0.5vw;
    margin-right: 1vw; 
    height:100%;">
      <h1 class="ui dividing header Kanitonly">Provission {{customer_name}}</h1>
      <hr style="opacity: 0.3;margin-bottom: 2vh;">

      <form class="ui form">
      <!--   <div class="field">
          <label style="text-align: left;">Customer name</label>
          <input type="text" v-model="cusname" placeholder="Customer Name">
        </div>
        <div class="field">
          <label style="text-align: left;">User name</label>
          <input type="text" v-model="username" placeholder="User Name">
        </div> -->
        <div style="text-align: left; overflow:scroll;">
        <div class="field" v-for="(name,index) in getusername" >
          <div class="ui checkbox">
            <input type="checkbox" v-model="checkuser[index]">
            <label>{{name}}</label>
          </div>
        </div>
      </div>
        <hr style="opacity: 0.3;margin-bottom: 2vh;">
        <div class="fields" style="text-align: left;">
          <div class="field" style="text-align: left;">
            <div class="ui checkbox">
              <input type="checkbox" v-model="selectall">
              <label>SELECT ALL</label>
            </div>
          </div>
          <div class="field" style="text-align: left;">
            <div class="ui checkbox">
              <input type="checkbox" v-model="selectallxenapp">
              <label>SELECT ALL Xenapp</label>
            </div>
          </div>
          <div class="field" style="text-align: left;">
            <div class="ui checkbox">
              <input type="checkbox" v-model="selectallvdi">
              <label>SELECT ALL VDI</label>
            </div>
          </div>
        </div>
        <hr>
        <div class="field" v-for="(name,index) in getservicesname" style="text-align: left;">
          <div class="ui checkbox">
            <input type="checkbox" v-model="checkapp[index]">
            <label>{{name}}</label>
          </div>
        </div>

      </form>




      <button class="ui primary button menus" @click="submit">
        Submit
      </button>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cusname: '',
      username: '',
      getservices: '',
      getservicesname: '',
      getservicestype: '',
      checkuser: [false, false, false, false, false, false, false, false, false, false, false, false],
      checkapp: [false, false, false, false, false, false, false, false, false, false, false, false],
      sendapp: [],
      selectall: '',
      selectallvdi: '',
      selectallxenapp: '',
      customer_name: '',
      getusername: ['jam', 'bose', 'james', 'ying', 'teng', 'preaw', 'both']
    }
  },
  created () {
    this.customer_name = this.$route.params.customer
    this.getservice()
  },
  watch: {
    selectall: function (newQuestion) {
      var i = 0
      if (this.selectall === false) {
        for (i = 0; i < this.getservicesname.length; i++) {
          this.check[i] = false
        }
      } else {
        for (i = 0; i < this.getservicesname.length; i++) {
          this.check[i] = true
        }
      }
    },
    selectallvdi: function (newQuestion) {
      var i = 0
      if (this.selectallvdi === false) {
        for (i = 0; i < 2; i++) {
          this.check[i] = false
        }
      } else {
        for (i = 0; i < 2; i++) {
          this.check[i] = true
        }
      }
    },
    selectallxenapp: function (newQuestion) {
      var i = 0
      if (this.selectallxenapp === false) {
        for (i = 2; i < this.getservicesname.length; i++) {
          this.check[i] = false
        }
      } else {
        for (i = 2; i < this.getservicesname.length; i++) {
          this.check[i] = true
        }
      }
    }
  },
  methods: {
    getservice () {
      this.$http.post(process.env.IPFLASK + '/Getservice').then((response) => {
        this.getservicesname = response.body['name']
        this.getservicestype = response.body['type']
        console.log(this.getservicesname)
        for (var i = 0; i < this.getservicesname.length; i++) {
          this.check[i] = false
          console.log(i)
        }
      }, (response) => {
        this.getservicesname = 'error'
        this.getservicestype = 'error'
      })
    },
    submit () {
      var k = 0
      this.sendapp = []
      for (var i = 0; i < 16; i++) {
        if (this.check[i] === true) {
          this.sendapp[k] = this.getservicesname[i]
          k = k + 1
        }
      }
      if (this.username === '') {
        this.$http.post(process.env.IPFLASK + '/provisionappcus', {cus: this.cusname, app: this.sendapp}).then((response) => {
          this.$swal('--result--', response.body, 'success')
        }, (response) => {
          this.$swal('--result--', response.body, 'error')
        })
      } else {
        this.$http.post(process.env.IPFLASK + '/provisionappuser', {cus: this.cusname, user: this.username, app: this.sendapp}).then((response) => {
          this.$swal('--result--', response.body, 'success')
        }, (response) => {
          this.$swal('--result--', response.body, 'error')
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
}

</style>
