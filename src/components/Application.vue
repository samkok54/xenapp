<template>
  <div>


    <!-- <div class="ui segment padding" style="margin-top: 6vh; 
    margin-left: 0.5vw;
    margin-right: 1vw; 
    height:100%;">
      <h1 class="ui dividing header">Application</h1>
      <div id="doughnutChart" class="chart"></div>
    </div>
 -->

    <div class="ui segment padding" style="margin-top: 6vh; 
    margin-left: 0.5vw;
    margin-right: 1vw; 
    height:100%;">
      <h1 class="ui dividing header">Application</h1>
      <h2 class="ui header">XenApp</h2>
       <table class="ui blue celled padded table">
         <tr >
          <td v-for="(app,index) in XenApp">
            <img class="ui image small" :src="app['pic']"><br>
           <b>{{app['name']}}</b>
          <br>Status : Active
         </td>
         </tr>
       </table>


      <h2 class="ui header">XenDesktop</h2>
      <table class="ui red celled padded table">
        <tr>
          <td v-for="(app,index) in XenDesktops">
            <img class="ui image small" :src="app['pic']"><br>
           <b>{{app['name']}}</b>
           <br>Status : Active
         </td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         </tr>
      </table>

    </div>

    <div class="ui small modal">
      <i class="close icon"  @click="createUser_Modal('hide all')" style="
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
              <button class="ui button menus" @click="createUser_Modal('hide')" style="
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
  $('.ui.dropdown').dropdown('hide')
  $('.ui.labeled.icon.sidebar').sidebar('toggle')
  $('.small.modal').modal('hide')
})

export default {
  data () {
    return {
      cusname: '',
      no_user: '',
      getservices: '',
      getservicesname: '',
      getcustomername: 'ttes',
      getservicestype: '',
      fullname: '',
      customer_test: ['bose', 'tara', 'jam', 'both', 'fluke'],
      // check: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      // sendapp: [],
      XenApp: [
      {name: 'google chrome', pic: '../../static/googlech.png'},
      {name: 'paint', pic: '../../static/paint.png'},
      {name: 'calculator', pic: '../../static/calculator.png'},
      {name: 'Notepad', pic: '../../static/notepad.png'},
      {name: 'LibreOffice Writer', pic: '../../static/libreblue.png'},
      {name: 'LibreOffice Calc', pic: '../../static/libregreen.png'},
      {name: 'LibreOffice Impress', pic: '../../static/librered.png'},
      {name: 'windows Media Player', pic: '../../static/winmedia.png'}
      ],
      XenDesktops: [
      {name: 'Window 7', pic: '../../static/win2007.png'},
      {name: 'Window 8', pic: '../../static/win10.png'},
      {name: 'Window 10', pic: '../../static/win10.png'},
      {name: 'Window 12', pic: '../../static/win2012.png'}
      ]
      // url: '../../static/googlech.png'
    }
  },
  created () {
    this.getcustomer()
    localStorage.setItem('page', 'a')
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
    createUser_Modal (status) {
      $('.small.modal').modal(status)
    },
    // deletecus () {
    // },
    getcustomer () {
      this.getcustomername = 'ok'
      this.$http.post(process.env.IPFLASK + '/GetCustomer').then((response) => {
        this.getcustomername = response.body
        // alert(response.body)
      }, (response) => {
        this.getcustomername = 'error'
      })
    },
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
.small {
  height: 70px !important;
  width: 70px !important;
}

.padding {
  padding-left: 1.2vw;
  padding-top: 3vh;
  padding-right: 1.2vw;
}

td {
  width: 150px;
  padding-top: 2vh !important;
}
td img{
    display: block;
    margin-left: auto;
    margin-right: auto;
}

</style>


