<template>
  <div>

    <div class="ui segment" style="margin-left: -2.2vh;margin-top: -3vh;margin-right: 1.2vh; height:100%;">
      <h1 class="ui dividing header">Overview</h1>
      

      <div id="doughnutChart" class="chart"></div>



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
      no_user: ''
    }
  },
  created () {
    this.getcustomer()
  },
  methods: {
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
  height: 90px !important;
  width: 90px !important;
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