<template>
  <div>
    <!-- <img src="../assets/citrix.png" style="margin-top: 20px; width: 250px;"> -->
     <br>
    <h1 style="color:white;">Testing API Citrix® CloudPortal™</h1>
    <div class="ui grid" style="margin-top:50px;">
      <div class="four wide column" style="margin-top:50px;">
        <div class="ui segment" style="margin-top: -64px; margin-right: 35px;   height: 133%;    background: rgba(7, 27, 56, 0.73); text-align:left;">

          <br>
          <label style="font-size: 35px; color:white;">MENU</label>
          <hr>

         <button class="ui button menus menubutton" @click="createcus" style="">
 <i class="add circle icon"></i> create customer
</button>
<button class="ui button menus menubutton" @click="pro"style="">
   <i class="green genderless icon"></i> Provision app
</button>
<!-- <button class="ui button menus" @click="prouser">
  Provision app to user
</button> -->
<button class="ui button menus menubutton" @click="depro">
 <i class="yellow genderless icon"></i> De-Provision app 
</button>
<button class="ui button menus menubutton" @click="deletes">
 <i class="red remove circle icon"></i> Delete user or customer
</button>
</div>
      </div>
      <div class="twelve wide column" style="background: white ;margin-left: -48px;">
        <h1>Create User or Customer</h1>
<form class="ui form">
      <div class="field">
        <label style="text-align: left;">Full name Customer</label>
        <input type="text" v-model="fullname" placeholder="Full Name of Customer">
      </div>
      <div class="field">
        <label style="text-align: left;">Customer name</label>
        <input type="text" v-model="cusname" placeholder="Customer Name">
      </div>
      <div class="field">
        <label style="text-align: left;">Number of user</label>
        <input type="text" v-model="no_user" placeholder="Number of user">
      </div>
          </form>
        <button class="ui primary button menus" @click="submit">
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
  color: #42b983;
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
