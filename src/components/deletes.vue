<template>
  <div>
    <div class="ui segment" style="margin-left: -2.2vh;margin-top: -2vh;margin-right: 1.2vh;">
      <h1>Delete</h1>
      <form class="ui form">
        <div class="field">
          <label style="text-align: left;">Customer name</label>
          <input type="text" v-model="cusname" placeholder="Customer Name">
        </div>
        <div class="field">
          <label style="text-align: left;">User name</label>
          <input type="text" v-model="username" placeholder="User Name">
        </div>
      </form>
      <button class="ui bprimary button menus" @click="submit">
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
      check: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      sendapp: []
    }
  },
  created () {
  },
  methods: {
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
      if (this.username === '') {
        this.$http.post(process.env.IPFLASK + '/deletecus', {cus: this.cusname}).then((response) => {
          this.$swal('--result--', response.body, 'success')
        }, (response) => {
          this.$swal('--result--', response.body, 'error')
        })
      } else {
        this.$http.post(process.env.IPFLASK + '/deleteuser', {cus: this.cusname, user: this.username}).then((response) => {
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
}*/
/*
a {
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
