<template>

  <div class="ui dropdown" >
   <i class="big world icon" ></i>
   <div class="floating ui red label" style="
    width: 3vh;
    height: 2.5vh;
    padding-left: 0.7vh;
    padding-top: 5px;">69</div>
  <div class="menu" style="margin-top: 1vh;margin-right: -1vh;">
    <div class="ui error message" >
      <div class="header">Error</div>
      <p>You must log-in to see all categories</p>
    </div>
    <div class="ui error message" >
      <div class="header">Error</div>
      <p>You must log-in to see all categories</p>
    </div>
    <div class="ui error message" >
      <div class="header">Error</div>
      <p>You must log-in to see all categories</p>
    </div>
  </div>
</div>

</template>

<script>
  export default {
    props: ['newMenu', 'newMenus'],
    methods: {
      showAlert () {
        this.$emit('showAlert', 'korkla')
      }
    },
    mounted () {
      $('.ui.dropdown').dropdown()
    }
  }
</script>