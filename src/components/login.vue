<template>
  <div>
    

<div class="ui grid">
  <div class="six wide column"></div>

<div class="four wide column" style="padding-top: 18%;">
<div class="ui segment" style="opacity: 0.99; background: rgba(255,255,255,0.85) overflow-y: auto;">
    <div class="ui two column middle aligned very relaxed stackable grid">
  <div class="column" style="width: 100%;height: 100%;padding-top: 5%; overflow-x: fixed;">
    <div class="ui form">

      <h1>
        <i class="smile icon"></i>Dev-ops
      </h1>

      <div class="ui divider"></div>
      
      <div class="field">
        <label>Username</label>
        <div class="ui left icon input">
          <input type="text" placeholder="Username">
          <i class="user icon"></i>
        </div>
      </div>
      <div class="field">
        <label>Password</label>
        <div class="ui left icon input">
          <input type="password">
          <i class="lock icon"></i>
        </div>
      </div>
      <div class="ui blue submit button" style="margin-top: 3%; width: 100%;" @click="Login"><h4>Login</h4></div>
    </div>
  </div>
  </div>
</div>
</div>

<div class="four wide column"></div>
</div>


  </div>
</template>

<script>

export default {
  data () {
    return {
      cusname: '',
      no_user: '',
      getservices: '',
      getservicesname: '',
      getservicestype: '',
      fullname: '',
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
    Login () {
      this.$router.push('/menubar')
    },
    // deletecus () {
    // },
    submit () {
      if (this.no_user === '') {
        this.$http.post(process.env.IPFLASK + '/createcus', {full: this.fullname, cus: this.cusname}).then((response) => {
          this.$swal('--result--', response.body, 'success')
        }, (response) => {
          this.$swal('--result--', response.body, 'error')
        })
      } else {
        this.$http.post(process.env.IPFLASK + '/createuser', {full: this.fullname, cus: this.cusname, user: this.no_user}).then((response) => {
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
  color: black;
  font-family: inherit;
  font-size: 60px;

}
.menus {
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

}
</style>
