<template>
  <div>
    <img src="../assets/citrix.png" style="margin-top: 20px;margin-left: -950px;width: 250px;">
    <h1>Testing API Citrix® CloudPortal™</h1>
    <div class="ui grid" style="margin-top:50px;">
      <div class="four wide column" style="margin-top:50px;">
         <button class="ui button menus" @click="createcus">
  create customer with user
</button>
<button class="ui green button menus" @click="pro">
  Provision app
</button>
<!-- <button class="ui button menus" @click="prouser">
  Provision app to user
</button> -->
<button class="ui orange button menus" @click="depro">
  De-Provision app
</button>
<!-- <button class="ui button menus" @click="deprouser">
  De-Provision app to user
</button> -->
<button class="ui red button menus" @click="deletes">
  Delete user or customer
</button>
<!-- <button class="ui button menus" @click="deletecus">
  Delete app to customer
</button> -->
        

      </div>
      <div class="eight wide column" style="background: rgba(255, 0, 0, 0.59);">
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
          <!-- <div class="field" v-for="(name,index) in getservicesname" style="text-align: left;">
          <div class="ui checkbox">
            <input type="checkbox" v-model="check[index]">
            <label>{{name}}</label>
          </div>
        </div> -->

        </form>
        <button class="ui button menus" @click="submit">
  Submit
</button>


      </div>
      <div class="four wide column"></div>
    </div>

<!-- {{check}} -->

<!-- {{getservices}} -->



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
        this.$http.post('http://localhost:5000/deletecus', {cus: this.cusname}).then((response) => {
          this.$swal('--result--', response.body, 'success')
        }, (response) => {
          this.$swal('--result--', response.body, 'error')
        })
      } else {
        this.$http.post('http://localhost:5000/deleteuser', {cus: this.cusname, user: this.username}).then((response) => {
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
  color: #42b983;
}
.menus {
  height: 40px;
  width: 218px;
  margin-top: 10px;
}
</style>
