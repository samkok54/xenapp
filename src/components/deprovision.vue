<template>
  <div>
    <!-- <img src="../assets/citrix.png" style="margin-top: 20px;margin-left: -950px;width: 250px;"> -->
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
<!-- <button class="ui button menus" @click="deletecus">
  Delete app to customer
</button> -->
        
      </div>
      <div class="twelve wide column" style="background: white ;margin-left: -48px;">
      <!-- <div class="eight wide column" style="background: rgba(255, 165, 0, 0.65);"> -->
        <h1>De-Provisioning</h1>
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
      <div class="four wide column"></div>
    </div>

<!-- {{check}} -->

<!-- {{getservicesname}} -->



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
      check: [],
      sendapp: [],
      selectall: '',
      selectallvdi: '',
      selectallxenapp: '',
      vdiIndex: ''
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
      this.$http.post('http://localhost:5000/Getservice').then((response) => {
        this.getservicesname = response.body['name']
        this.getservicestype = response.body['type']
        // console.log(this.getservicesname.size())
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
      for (var i = 0; i < 16; i++) {
        if (this.check[i] === true) {
          this.sendapp[k] = this.getservicesname[i]
          k = k + 1
        }
      }
      if (this.username === '') {
        this.$http.post('http://localhost:5000/de-provisionappcus', {cus: this.cusname, app: this.sendapp}).then((response) => {
          this.$swal('--result--', response.body, 'success')
        }, (response) => {
          this.$swal('--result--', response.body, 'error')
        })
      } else {
        this.$http.post('http://localhost:5000/de-provisionappuser', {cus: this.cusname, user: this.username, app: this.sendapp}).then((response) => {
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
