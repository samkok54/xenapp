<template>

  <div class="ui inline dropdown">
    <div class="text">
      <img class="ui avatar image" src="../../../static/user.png">
      Cloud Admin
    </div>
    <i class="dropdown icon"></i>
    <div class="menu" style="
    margin-left: 2vw;
    text-align: center;">
      <div class="item" @click="Login">
        <i class="sign out icon"></i>
        Logout
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['newMenu', 'newMenus'],
    // methods: {
    //   showAlert () {
    //     this.$emit('showAlert', 'korkla')
    //   }
    // },
    mounted () {
      $('.ui.inline.dropdown').dropdown()
    },
    methods: {
      Login () {
        localStorage.clear()
        this.$router.push('/Login')
      }
    }
  }
</script>