<template>
  <div>

  <div class="navbar">
  <!-- <a href="#home" style="margin-left: 8%;">Home</a>
  <a href="#news">News</a> -->
  <b style="float:right; padding-right: 3vh">
  <button class="ui inverted button" @click="Login" style="font-size: 1.6vh;">Logout</button>
  </b>

  <b style="float:right; margin-top: 0.8vh;">
    <noti/>
  </b>

  <b style="float:left; margin-left: 15vh;">
    <div class="item">
      <img src="../assets/citrix.png" style="width: 10vh; margin-bottom: -2.5vh;">
    </div>
  </b>

  <b style="float:left;">
    <div class="ui inverted secondary pointing menu" style="border: none;">
    <a :class="nav1" @click="chNav('1')">Home</a>
    <a :class="nav2" @click="chNav('2')">Messages</a>
    <a :class="nav3" @click="chNav('3')">Contact</a>
  </div>
  </b>
</div>

<div class="main">
  <p>Some text some text some text some text..</p>
</div>

<div class="ui grid" style="margin-top: 5vh;">
  <div class="sixteen wide column" style="margin-top: -2vh;"></div>
  <div class="three wide column" style="height: 60vh; margin-top: -1vh;">
    <div class="ui secondary vertical menu" style=" margin-top: -1.5vh;
    background: whitesmoke;
    text-align: left;
    width: 100%;
    height: 100%;">
      <label><h3 style="padding-left: 10%;padding-top: 2vh;
        padding-bottom: 2vh; 
        background-color: lightseagreen;
        color: white;">
        <i class="heart icon"></i>
        INET Devops
        <i class="unordered list icon" style="
          float: right;
          padding-right: 5vh;"></i>
      </h3>
      </label>
      <br>
      <router-link to="/createcus" active-class="active">
        <a class="item" style="padding-left: 6%;">
          <i class="large folder open icon" style="float: left;padding-right: 4vh;margin-top: -0.5vh;"></i>
          Project
        </a>
      </router-link>
      <router-link to="/createcus" active-class="active">
        <a class="item" style="padding-left: 6%;">
          <i class="large users icon" style="float: left;padding-right: 4vh;margin-top: -0.5vh;"></i>
          Customer
        </a>
      </router-link>
      <router-link to="/Application" active-class="active">
        <a class="item" style="padding-left: 6%;">

          <i class="large in cart icon" style="float: left;padding-right: 4vh; 
          margin-top: -0.5vh;"></i>
          Application
        </a>
      </router-link>
      <router-link to="/provision_app" active-class="active">
        <a class="item" style="padding-left: 6%;">
           <i class="large add circle icon" style="float: left;padding-right: 4vh;margin-top: -0.5vh;"></i>
          Provission
        </a>
      </router-link>
      <router-link to="/deprovision" active-class="active">
        <a class="item" style="padding-left: 6%;">
           <i class="large minus circle icon" style="float: left;padding-right: 4vh;margin-top: -0.5vh;"></i>
          De-Provission
        </a>
      </router-link>
      <router-link to="/deletes" active-class="active">
        <a class="item" style="padding-left: 6%;">
           <i class="large remove icon" style="float: left;padding-right: 4vh;margin-top: -0.5vh;"></i>
          Delete-customer
        </a>
      </router-link>
    </div>
  </div>


  <div class="thirteen wide column" style="background-color: none; margin-top: 1.5vh;">
    <router-view></router-view>
  </div>
    



    </div>
  </div>
</template>

<script>
import noti from '@/components/dropdown/noti'
$(document).ready(function () {
  $('.ui.dropdown').dropdown()
  // $('.ui.dropdown.bose').dropdown()
  // $('.act.dropdown').dropdown('hide')
  // $('.ui.labeled.icon.sidebar').sidebar('toggle')
  $('.ui.modal').modal('hide')
})

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
      sendapp: [],
      nav1: 'item active',
      nav2: 'item',
      nav3: 'item'
    }
  },
  components: {
    noti
  },
  methods: {
    chNav (i) {
      if (i === '1') {
        this.nav1 = 'item active'
        this.nav2 = 'item'
        this.nav3 = 'item'
      } else if (i === '2') {
        this.nav1 = 'item'
        this.nav2 = 'item active'
        this.nav3 = 'item'
      } else if (i === '3') {
        this.nav1 = 'item'
        this.nav2 = 'item'
        this.nav3 = 'item active'
      }
    },
    notification (status) {
      // $('.noti.dropdown').dropdown('show')
      // $('.act.dropdown').dropdown('hide')
    },
    bar () {
      // $('.ui.labeled.icon.sidebar').sidebar('toggle')
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
    Login () {
      this.$router.push('/Login')
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

f1 {
  /*font-size: 20px;*/
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}

/*li {
  display: inline-block;
  margin: 0 10px;
}*/

/*a {
  padding-left: 20%;

}*/


.navbar {
    position: fixed;
    z-index: 100;
    margin: 0em;
    width: 100%;
    /*position: fixed;*/
    /*overflow: hidden;*/
    background-color: #333;
    /*position: fixed;  Set the navbar to fixed position */
    /*top: 0;  Position the navbar at the top of the page */
    /*width: 100%;  Full width */
}
*, *:before, *:after {
   box-sizing: inherit;
}

/* Links inside the navbar */
.navbar b {
    /*position: fixed;*/
/*    font-size: 15px;*/
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Main content */
.main {
    /*margin-top: 30px;*/ /* Add a top margin to avoid content overlay */
}


/*.sizemenus {
 padding-left: 20px;
 padding-bottom: 20px;
}*/
.navbarwrap{
    padding-left: 2rem;
    padding-right: 2rem;
    /*padding-top: 50px !important;*/
  }
.athiti {
    font-family: 'Athiti', sans-serif !important;
    font-weight: 500 !important;
    font-style: normal !important;
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

/*.listItem{
  color:#000 !important;
  text-align:left !important;
  padding-top: 13px !important;
  padding-bottom: 13px !important;
  width: 100% !important;
}*/


</style>
