<template>
  <div>
 <div class="ui segment padding" style="margin-top: 6vh; 
    margin-left: 0.5vw;
    margin-right: 1vw; 
    height:100%;">
      <h1 class="ui dividing header" style="text-align: left;">User</h1>
      <h2 class="ui header" style="text-align: left;">{{get_user}} Company</h2>
      <button class="ui basic button" @click="createUser_Modal('show')" style="float:left;">
        <i class="cloud upload icon"></i>
        Create User
      </button>
      <button class="negative ui button" @click="deleteUser_Modal('show')" style="float:left;">
        <i class="minus circle icon"></i>
        Delete User
      </button>

      <div class="ui segment" v-if="this.loading === true">
        <div class="ui active dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>


      <table class="ui teal striped table selectable" style="margin-top: 7vh;">
        <thead>
          <tr>
            <th style="width: 1vh;">
              <div class="ui checkbox">
                <input type="checkbox" name="selectall" v-model="selectall">
                <label></label>
              </div>
            </th>
            <th>Name</th>
            <th>Registration Date</th>
            <th>E-mail address</th>
            <th>Premium Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in this.user">
            <td>
              <div class="ui checkbox">
                <input type="checkbox" v-model="check[index]">
                <label></label>
              </div>
            </td>
            <td>{{item}}</td>
            <td>September 14, 2013</td>
            <td>jhlilk22@yahoo.com</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
  </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      get_user: '',
      user: ['bose', 'tar', 'jam', 'both', 'fluke'],
      selectall: false,
      check: [false],
      loading: false
    }
  },
  created () {
    this.get_user = this.$route.params.customer
    this.getuser()
  },
  watch: {
    selectall: function (newQuestion) {
      var i = 0
      if (this.selectall === false) {
        for (i = 0; i < this.user.length; i++) {
          this.check[i] = false
        }
      } else {
        for (i = 0; i < this.user.length; i++) {
          this.check[i] = true
        }
      }
    }
  },
  methods: {
    getuser () {
      this.getcustomername = 'ok'
      this.$http.post(process.env.IPFLASK + '/GetCustomer').then((response) => {
        this.getcustomername = response.body
        // alert(response.body)
      }, (response) => {
        this.getcustomername = 'error'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.padding {
  padding-left: 1.2vw;
  padding-top: 3vh;
  padding-right: 1.2vw;
}

</style>
