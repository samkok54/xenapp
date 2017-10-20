<template>
  <div>

    <div class="ui segment" style="margin-left: -2.2vh;margin-top: -2vh;margin-right: 1.2vh; height:50vh;">
      <h1>Customer</h1>
      <hr style="opacity: 0.3;margin-bottom: 2vh;">
      <button class="ui button" @click="createUser_Modal()" style="float:left;">
      <i class="icon users"></i>
      Create Customer
      </button>
    </div>

    <div class="ui small modal">
      <i class="close icon" style="
      color: black;
      margin-top: 4.2vh;
      margin-right: 4.2vh;"></i>
      <div class="header">
        Create User or Customer
      </div>
      <div class="ui grid">
        <div class="nine wide column">
          <div class="ui segment" style="margin-top: 0.7vh;margin-left: 1vh;">
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
        </div>
      </div>

      <div class="seven wide column">
          <div class="ui segment" style="margin-top: 0%;margin-right: 1vh;margin-left: -2vh;margin-top: 0.6vh;">
            <h4 class="ui header">Text Selection</h4>
              <p>A site can specify text selection styles.</p>
              <p>Fusce mollis sagittis elit ut maximus. Nullam blandit lacus sit amet luctus euismod. Duis luctus leo vel consectetur consequat. Phasellus ex ligula, pellentesque et neque vitae, elementum placerat eros. Proin eleifend odio nec velit lacinia suscipit. Morbi mollis ante nec dapibus gravida. In tincidunt augue eu elit porta, vel condimentum purus posuere. Maecenas tincidunt, erat sed elementum sagittis, tortor erat faucibus tellus, nec molestie mi purus sit amet tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris a tincidunt metus. Fusce congue metus aliquam ex auctor eleifend.</p>
          </div>
          <div class="actions" >
              <button class="ui primary button menus" @click="submit" style="
              float: right;
              margin-top: 1vh;
              margin-bottom: 2vh;
              margin-right: 1vh;">
              Submit
            </button>
          </div>
          <div class="actions" >
              <button class="ui button menus" @click="createUser_Modal(false)" style="
              float: right;
              margin-top: 1vh;
              margin-bottom: 2vh;
              margin-right: 0.5vh;">
              Cancel
            </button>
          </div>
      </div>

    </div>
  </div>


  </div>
</template>
<script>

$(document).ready(function () {
  $('.ui.dropdown').dropdown('false')
  $('.ui.labeled.icon.sidebar').sidebar('toggle')
  $('.ui.modal').modal('false')
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
    createUser_Modal () {
      $('.small.modal').modal('show')
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
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
}



/*element.style {
    display: block !important;
    background-color: rgba(0,0,0,0.1);
}*/


/*li {
  display: inline-block;
  margin: 0 10px;
}*/

/*a {
  color: #42b983;
}*//*
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

}*/


</style>


