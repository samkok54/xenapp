<template>
  <div>

    <div class="ui segment" style="margin-left: -2.2vh;margin-top: -3vh;margin-right: 1.2vh; height:100%;">
      <h1 class="ui dividing header">Customer</h1>
      <button class="ui basic button" @click="createUser_Modal('show')" style="float:left;">
        <i class="cloud upload icon"></i>
        Create Customer
      </button>
      <button class="negative ui button" @click="deleteUser_Modal('show')" style="float:left;">
        <i class="minus circle icon"></i>
        Delete Customer
      </button>
      <button class="ui basic button" style="float:right;">
        Filter
      </button>
      <!-- <div class="ui action input" style="float:right;">
        <input type="text" placeholder="Search...">
      </div> -->
      <!-- <div class="ui input focus" style="float:right; margin-right:1vh;">
        <input type="text" placeholder="Search...">
      </div> -->
      <div class="ui left icon input" style="float:right; margin-right:1vh;">
        <input type="text" placeholder="Search customers..." style="
          height: 3.8vh;">
        <i class="users icon"></i>
      </div>


      <table class="ui teal striped table" style="margin-top: 7vh;">
        <thead>
          <tr>
            <th style="width: 1vh;">
              <div class="ui checkbox">
                <input type="checkbox" name="selectall" v-model="selectall">
                <label></label>
              </div>
            </th>
            <th>Name</th>
            <th>Fullname</th>
            <th>User</th>
            <th>Primary Domain</th>
            <th>Status</th>
            <th style="text-align:center;">Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(item,index) in getcustomername['name']"> -->
          <tr v-for="(item,index) in customer_test" >
            <td>
              <div class="ui checkbox">
                <input type="checkbox" v-model="check[index]">
                <label></label>
              </div>
            </td>
            <!-- <td>{{getcustomername['name'][index]}}</td>
            <td>{{getcustomername['fullname'][index]}}</td>
            <td>{{getcustomername['id'][index]}}</td>
            <td>{{getcustomername['name'][index]}}</td>
            <td>{{getcustomername['status'][index]}}</td> -->
            
            <td style="color: dodgerblue;">{{customer_test[index]}}</td>
            <td>bose company</td>
            <td>69</td>
            <td>bose.local</td>
            <td>Running</td>
            <td style="text-align:center;"> 
            <DropdownCustomer customer='bose' @showAlert="showAlertInCustomer"/>
            </td>
          </tr>

          <!-- <tr v-for="(item,index) in getcustomername['name']">
            <td>
              <div class="ui checkbox">
                <input type="checkbox" name="example">
                <label></label>
              </div>
            </td>
            <td>{{getcustomername['name'][index]}}</td>
            <td>{{getcustomername['fullname'][index]}}</td>
            <td>{{getcustomername['id'][index]}}</td>
            <td>{{getcustomername['name'][index]}}</td>
            <td>{{getcustomername['status'][index]}}</td>
            <td>
              
            </td>

          </tr> -->

        </tbody>
      </table>
    </div>


    <div class="ui mini modal">
      <div class="header">Delete Your Customer</div>
      <div class="content">
        <p>Are you sure you want to delete your customer</p>
        </div>
        <div class="actions">
          <button class="negative ui button" @click="deleteUser_Modal('hide all')">
            No
          </button>
          <button class="ui positive right labeled icon button" @click="submit_delete()">
            <i class="checkmark icon"></i>
            Yes
          </button>
      </div>
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
              <div class="field" v-if="!errors.has('nouser')">
                <label style="text-align: left;">Number of user</label>
                <input type="text" v-model="no_user" placeholder="Number of user" name="nouser"   v-validate="'required|decimal'" :class="{'input': true, 'is-danger': errors.has('nouser') }">
              </div>
              <div class="field error" v-else>
                <label style="text-align: left;">Number of user</label>
                <input type="text" v-model="no_user" placeholder="Number of user" name="nouser"   v-validate="'required|decimal'" :class="{'input': true, 'is-danger': errors.has('nouser') }">
              </div>
              <p v-show="errors.has('nouser')" style="color:red; font-size:1vh; margin-top: -1vh;
              margin-left: 0.4vh;">
             * {{errorHuman[0]['head']}}({{errorHuman[0]['tail']}})
            </p>

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
              <button class="ui primary button menus" @click="submit()" style="
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
import DropdownCustomer from '@/components/dropdown/DropdownCustomer'
$(document).ready(function () {
  $('.ui.dropdown.bose').dropdown()
  // $('.ui.labeled.icon.sidebar').sidebar('toggle')
  $('.small.modal').modal()
  $('.mini.modal').modal()
})
export default {
  data () {
    return {
      cusname: '',
      username: '',
      no_user: '',
      getservices: '',
      getservicesname: '',
      getcustomername: 'ttes',
      getservicestype: '',
      fullname: '',
      customer_test: ['bose', 'tar', 'jam', 'both', 'fluke'],
      sendapp: [],
      errorHuman: [{head: 'Please insert number type ', tail: 'Integer'}],
      selectall: false,
      check: [false, false, false, false, false]
    }
  },
  components: {
    DropdownCustomer
  },
  created () {
    this.getcustomer()
  },
  watch: {
    selectall: function (newQuestion) {
      var i = 0
      if (this.selectall === false) {
        for (i = 0; i < this.customer_test.length; i++) {
          this.check[i] = false
        }
      } else {
        for (i = 0; i < this.customer_test.length; i++) {
          this.check[i] = true
        }
      }
    }
  },
  methods: {
    // actdrop (status) {
    //   $('.act.dropdown').dropdown('show')
    // },
    showAlertInCustomer (name) {
      alert(name)
    },
    createUser_Modal (status) {
      $('.small.modal').modal(status)
    },
    deleteUser_Modal (status) {
      $('.mini.modal').modal(status)
    },
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
      this.$validator.validateAll().then((result) => {
        if (!result) {
          this.$swal('ไม่สามารถส่งคำขอได้', 'กรุณาตรวจสอบข้อมูลค่ะ', 'warning')
          // return
        } else {
          // this.$http.post(process.env.IPFLASK + '/Seminar_insertDetail', {data: this.editJson()}).then((response) => {
          //   this.$swal('Success!', 'การส่งข้อมูลสำเร็จ', 'success')
          // }, (response) => {
          //   this.$swal('error!', 'การส่งข้อมูลไม่สำเร็จ', 'error')
          // })
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
          // if (this.no_user === '') {
          //   this.$http.post(process.env.IPFLASK + '/createcus', {full: this.fullname, cus: this.cusname}).then((response) => {
          //     this.$swal('--result--', response.body, 'success')
          //   }, (response) => {
          //     this.$swal('--result--', response.body, 'error')
          //   })
          // } else {
          //   this.$http.post(process.env.IPFLASK + '/createuser', {full: this.fullname, cus: this.cusname, user: this.no_user}).then((response) => {
          //     this.$swal('--result--', response.body, 'success')
          //   }, (response) => {
          //     this.$swal('--result--', response.body, 'error')
          //   })
          // }
        }
      }).catch(() => {
        alert('jam')
      })
    },
    submit_delete () {
      if (this.username === '') {
        this.$http.post(process.env.IPFLASK + '/deletecus', {cus: this.cusname}).then((response) => {
          this.$swal('--result--', response.body, 'success')
        }, (response) => {
          this.$swal('--result--', response.body, 'error')
        })
        this.deleteUser_Modal('hide all')
      } else {
        this.$http.post(process.env.IPFLASK + '/deleteuser', {cus: this.cusname, user: this.username}).then((response) => {
          this.$swal('--result--', response.body, 'success')
        }, (response) => {
          this.$swal('--result--', response.body, 'error')
        })
        this.deleteUser_Modal('hide all')
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

/*f_blue {
  font-weight: normal;
  text-align: left;
}*/

ul {
  list-style-type: none;
  padding: 0;
}


.errorUI{
    position: absolute !important;
    margin-top: -35px !important;
    /*margin-left: 15px !important;*/
    font-weight: normal;
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


