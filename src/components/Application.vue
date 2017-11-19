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

   
      <h1 class="ui dividing header Kanitonly">Application</h1>

<h2 class="ui header Kanitonly">XenDesktop</h2>
      <table class="ui red celled padded table" style="text-align:center;">
        <tr v-for="(desktop,index) in XenDesktop">
          <td v-for="desk in desktop">
            <img class="ui image small" src="../../static/windows.png"><br>
           <b>{{desk['displayname']}}</b>
           <!-- <br>Status : Active -->
         </td>
        </tr>
      </table>

<!-- <input type="datetime" is="datetime" /> -->

      <h2 class="ui header Kanitonly">XenApp</h2>
       <table class="ui blue celled padded table" style="text-align:center;">
         <tr v-for="(apps,index) in XenApp">
          <td v-for="app in apps">
            <img class="ui image small" :src="app['pic']"><br>
           <b>{{app['displayname']}}</b>
          <!-- <br>Status : Active -->
         </td>
         </tr>
       </table>


      

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
      time: '',
      // customer_test: ['bose', 'tara', 'jam', 'both', 'fluke'],
      // check: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      // sendapp: [],
      XenApp: [
        // [ {name: 'google chrome', pic: '../../static/googlech.png'},
        //   {name: 'paint', pic: '../../static/paint.png'},
        //   {name: 'calculator', pic: '../../static/calculator.png'},
        //   {name: 'Notepad', pic: '../../static/notepad.png'}],
        // [ {name: 'LibreOffice Writer', pic: '../../static/libreblue.png'},
        //   {name: 'LibreOffice Calc', pic: '../../static/libregreen.png'},
        //   {name: 'LibreOffice Impress', pic: '../../static/librered.png'},
        //   {name: 'windows Media Player', pic: '../../static/winmedia.png'}]
      ],
      // app: [
      //   {name: 'Google Chrome', pic: '../../static/googlech.png'}
      // ],
      XenDesktop: [
      // {name: 'Window', pic: '../../static/windows.png'}
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
      this.$http.post(process.env.IPFLASK + '/GetserviceAll').then((response) => {
        this.XenApp = response.body['data']
        this.XenDesktop = response.body['desktop']
        // alert(response.body)
      }, (response) => {
        this.XenApp = 'error'
      })
      var testURL = '"dvuivnhuiv_ew"'
      var output = testURL.substring(0, testURL.lastIndexOf('_') + 0)
      console.log(output)
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
table, th, td {
    border-bottom: solid rgba(34,36,38,.1);
}

</style>


