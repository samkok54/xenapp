<template>

  <div class="ui dropdown" >
   <i class="big alarm outline icon" ></i>
   <div class="floating ui red label" style="
    text-align: center;
    width: 2.5vh;
    height: 2.5vh;
    padding-left: 0.5vh;
    padding-top: 6px;">9+</div>
  <div class="menu" style="
    margin-left: -24vh;
    margin-top: 1vh;">
    <div class="ui error message" >
      <div class="header">Error</div>
      <p>You must log-in to see all categories</p>
      <div class="ui divider"></div>
      <div class="header">Error</div>
      <p>You must log-in to see all categories</p>
      <div class="ui divider"></div>
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