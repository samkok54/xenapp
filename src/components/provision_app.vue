<template>
  <div>

    <div class="ui segment" style="margin-left: -2.2vh;margin-top: -2vh;margin-right: 1.2vh;">
      <h1>Provission</h1>
      <form class="ui form">
        <div class="field">
          <label style="text-align: left;">Customer name</label>
          <input type="text" v-model="cusname" placeholder="Customer Name">
        </div>
        <div class="field">
          <label style="text-align: left;">User name</label>
          <input type="text" v-model="username" placeholder="User Name">
        </div>
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
            <input type="checkbox" v-model="check[index]">
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
      check: [false, false, false, false, false, false, false, false, false, false, false, false],
      sendapp: [],
      selectall: '',
      selectallvdi: '',
      selectallxenapp: ''
    }
  },
  created () {
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
    pro () {
      this.$router.push('/provisionapp')
    },
    depro () {
      this.$router.push('/de-provisionapp')
    },
    deletes () {
      this.$router.push('/deletes')
    },
    createcus () {
      this.$router.push('/createcus')
    },
    // deletecus () {
    // },
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

/*li {
  display: inline-block;
  margin: 0 10px;
}
*/
/*a {
  color: #42b983;
}*/
/*.menus {
  height: 40px;
  width: 218px;
  margin-top: 10px;
}
.menubutton {
  background: none;
  color: white; 
  text-align:left;
  font-size: 14px;
  margin-left: -19px;
  width: 400px;
}*/
</style>
