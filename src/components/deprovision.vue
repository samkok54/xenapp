<template>
  <div>


    <div class="ui segment padding" style="margin-top: 6vh; 
    margin-left: 0.5vw;
    margin-right: 1vw; 
    height:100%;">
      <h1 class="ui dividing header Kanitonly">De-provision {{customer_name}}</h1>
      <!-- <hr style="opacity: 0.3;margin-bottom: 2vh;"> -->
      <div class="ui form">
      <!--   <div class="field">
          <label style="text-align: left;">Customer name</label>
          <input type="text" v-model="cusname" placeholder="Customer Name">
        </div>
        <div class="field">
          <label style="text-align: left;">User name</label>
          <input type="text" v-model="username" placeholder="User Name">
        </div> -->
        <!--  <div style="text-align: left; overflow:scroll;">
        <div class="field" v-for="(name,index) in getusername" >
          <div class="ui checkbox">
            <input type="checkbox" v-model="checkuser[index]">
            <label>{{name}}</label>
          </div>
        </div>
      </div>-->
        <!-- <hr style="opacity: 0.3;margin-bottom: 2vh;"> -->
        <div class="fields dividing Kanitonly" style="text-align: left;">
          <div class="field" style="text-align: left;">
            <div class="ui checkbox">
              <input type="checkbox" v-model="selectall">
              <label>Select all</label>
            </div>
          </div>
          <div class="field" style="text-align: left;">
            <div class="ui checkbox">
              <input type="checkbox" v-model="selectallvdi">
              <label>All Desktops</label>
            </div>
          </div>
          <div class="field" style="text-align: left;">
            <div class="ui checkbox">
              <input type="checkbox" v-model="selectallxenapp">
              <label>All Xenapps</label>
            </div>
          </div>
          
        </div>
        <!-- {{selectall}} {{selectallxenapp}}  {{selectallvdi}} 

        <hr> -->
        <!-- <hr> -->
      
<div class="ui grid">
  <div class="seven wide column" >
        <div class="scollShowapp desk">
        <div class="field Kanitonly" v-for="(item,index) in getservicedesktop" style="text-align: left; ">
          <div v-if="item['inuse'] == 'False'" class="ui checkbox">
            <input type="checkbox" v-model="checkapp[index]">
            <label class="fontcheck">{{item['displayname']}}</label>
          </div>
          <div v-else class="ui checkbox">
            <input type="checkbox" disabled="disabled" checked="checked" >
            <label>{{item['displayname']}}</label>
          </div>
        </div>
      </div>
<div class="scollShowapp">
        <div class="field" v-for="(item,index) in getserviceapp" style="text-align: left; ">
          <div v-if="item['inuse'] == 'False'" class="ui checkbox">
            <input type="checkbox" v-model="checkapp[index+lengthdesk]">
            <label class="fontcheck Kanitonly">{{item['displayname']}}</label>
          </div>

          <div v-else class="ui checked checkbox">
            <input type="checkbox"  disabled="disabled" checked="checked">
            <label>{{item['displayname']}}</label>
          </div>
        </div>
      </div>
</div>
<div class="eight wide column showapp">
  <div class="scollShowapp2">

    <p v-for="(item,index) in sendapp">
      {{item['displayname']}}
    </p>
  </div>
  <button class="ui primary button menus" @click="submit()">
        Submit
      </button>
  
</div>
</div>
<!-- {{checkapp}} -->





      </div>
<!-- {{getservicedesktop}} -->
<!-- {{checkapp}} -->



      

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cusname: '',
      getservices: '',
      getservicesname: '',
      getservicestype: '',
      getservicedesktop: '',
      getserviceapp: '',
      checkapp: [],
      sendapp: [],
      selectall: '',
      selectallvdi: '',
      selectallxenapp: '',
      customer_name: '',
      lengthdesk: ''
    }
  },
  created () {
    this.customer_name = this.$route.params.customer
    this.getservice()
  },
  watch: {
    selectall: function (newQuestion) {
      // var i = 0
      // alert(this.getserviceapp.length + this.lengthdesk)
      if (this.selectall === false) {
        // for (i = 0; i < this.getserviceapp.length + this.lengthdesk; i++) {
        //   this.checkapp[i] = false
        // }
        this.selectallvdi = false
        this.selectallxenapp = false
      } else {
        this.selectallvdi = true
        this.selectallxenapp = true
        // for (i = 0; i < this.getserviceapp.length + this.lengthdesk; i++) {
        //   this.checkapp[i] = true
        // }
      }
      this.application()
    },
    selectallvdi: function (newQuestion) {
      var i = 0
      if (this.selectallvdi === false) {
        for (i = 0; i < this.lengthdesk; i++) {
          this.checkapp[i] = false
        }
      } else {
        // this.selectall = false
        for (i = 0; i < this.lengthdesk; i++) {
          if (this.getservicedesktop[i]['inuse'] !== 'True') {
            this.checkapp[i] = true
          }
        }
      }
      this.application()
    },
    selectallxenapp: function (newQuestion) {
      var i = 0
      if (this.selectallxenapp === false) {
        for (i = this.lengthdesk; i < this.getserviceapp.length + this.lengthdesk; i++) {
          this.checkapp[i] = false
        }
      } else {
        // this.selectall = false
        for (i = this.lengthdesk; i < this.getserviceapp.length + this.lengthdesk; i++) {
          if (this.getserviceapp[i - this.lengthdesk]['inuse'] !== 'True') {
            this.checkapp[i] = true
          }
        }
      }
      this.application()
    },
    checkapp: function (newQuestion) {
      this.application()
    }
  },
  methods: {
    getservice () {
      this.$http.post(process.env.IPFLASK + '/GetservicecusforDe', {cus: this.customer_name}).then((response) => {
        this.getservicedesktop = response.body['datadesktop']
        this.getserviceapp = response.body['dataapp']
        this.lengthdesk = response.body['lengthDesk']
        // this.getservicestype = response.body['type']
        // console.log(response.body)
        // console.log(this.getserviceapp.length + this.lengthdesk)
        for (var i = 0; i < this.getserviceapp.length + this.lengthdesk; i++) {
          this.checkapp[i] = false
          // console.log(i)
        }
        // console.log(this.checkapp)
      }, (response) => {
        // this.getservicesname = 'error'
        // this.getservicestype = 'error'
      })
    },
    application () {
      var k = 0
      this.sendapp = []
      for (var i = 0; i < this.getserviceapp.length + this.lengthdesk; i++) {
        if (this.checkapp[i] === true) {
          if (i < this.lengthdesk) {
            this.sendapp[k] = this.getservicedesktop[i]
            k = k + 1
          } else {
            this.sendapp[k] = this.getserviceapp[i - this.lengthdesk]
            k = k + 1
          }
        }
      }
    },
    submit () {
      console.log(this.sendapp)
      this.$http.post(process.env.IPFLASK + '/de-provisionappcus', {cus: this.customer_name, app: this.sendapp}).then((response) => {
        if (response.body['status'] === 'complete') {
          this.$swal('complete', '', 'success')
        } else {
          this.$swal('error', response.body['data'][0]['message'], 'error')
        }
        console.log(response.body)
        // location.reload()
        // this.$forceUpdate()
        this.getservice()
        this.sendapp = []
        // this.$router.push('/provision_app/' + this.customer_name)
      }, (response) => {
        console.log('error')
        this.$swal('--result--', response.body, 'error')
      })
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
.menus {
  height: 40px;
  width: 218px;
  margin-top: 10px;
  float: right;
}
.fontcheck {
  font-weight: bold;
}

.scollShowapp {
  margin-top: 10px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: block;
  overflow-y:scroll;
  height: 240px;
  width: 35vw;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.07);
}
.showapp {
  margin-top: 10px;
  display: block;
  height: 412px;
  /*background: rgba(0, 0, 0, 0.07);*/
  /*width: 35vw !important;*/
}
.desk {
  height: 100px !important;
}
.Kanitonly {
    font-family: 'Kanit', sans-serif !important;
    /*font-weight: 300 !important;*/
    /*color:#777 !important;*/
  }
.scollShowapp2 {
/*margin-top: 23px;*/
text-align: left;
  padding-left: 20px;
  padding-top: 10px;
  display: block;
  overflow-y:scroll;
  height: 350px;
  /*width: 548px;*/
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.07);
}
</style>
