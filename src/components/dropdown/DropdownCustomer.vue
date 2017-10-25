<template>
<div class="ui dropdown">
<button class="ui primary basic button">Provission
	<i class="dropdown icon" style="margin-left: 5px; margin-right:-10px;"></i>
</button>

          <div class="menu" style="margin-left: 0vh; margin-top: 0.5vh;">
            <div class="header" @click="showAlert()">Company</div>
            <div class="ui divider"></div>
            <div class="item">
            	<i class="add circle icon"></i>Provison
            </div>
            <div class="item">
            	<i class="minus circle icon"></i>De-Provison
            </div>
            <div class="item">
            	<i class="sidebar icon"></i>Detail
            </div>
             <!-- <div class="item">{{newMenus}}</div> -->
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