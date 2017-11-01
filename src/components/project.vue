<template>
  <div>

    <div class="ui segment padding" style="margin-top: 6vh; 
    margin-left: 0.5vw;
    margin-right: 1vw; 
    height:100%;">
      <h1 class="ui dividing header">Dashboard</h1>
      <!-- <div id="doughnutChart" class="chart"></div> -->
    </div>

    
    <div class="ui segment padding" style="margin-top: 0vh; 
    margin-left: 0.5vw;
    margin-right: 1vw; 
    height:100%;">
    <label style="
    font-size: 2.5vh;
    float: left;">Usage Summary</label>
    <br>
      <div class="ui statistics">
        <div class="statistic">
          <div class="value">
            5
          </div>
          <div class="label">
            CUSTOMERS
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            76
          </div>
          <div class="label">
            USERS
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            12
          </div>
          <div class="label">
            APPLICATION
          </div>
        </div>
      </div>
    </div>

    <div class="ui segment padding" style="margin-top: 0h; 
    margin-left: 0.5vw;
    margin-right: 1vw; 
    height:50vh">      


     <!-- <canvas id="myChart" height="30px" v-model="myChart"></canvas> -->



   <chartproject/>

  </div>
</div>


    </div>


  </div>
</template>
<script>
// import Chart from 'chart.js'
import chartproject from '@/components/chart/chartproject'
// var myChart
// function drawChart () {
//   var ctx = document.getElementById('myChart').getContext('2d')
//   var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       // labels: ['M', 'T'],
//       datasets: [{
//         backgroundColor: [
//           '#2ecc71',
//           '#3498db'
//         ],
//         hoverBackgroundColor: [
//           '#2ecc71',
//           '#3498db'
//         ],
//         data: [80, 20]
//       }]
//     },
//     options: {
//       maintainAspectRatio: true,
//       cutoutPercentage: 80,
//       tooltips: {
//         mode: 'index'
//       }
//     }
//   })
//   document.getElementById('myChart').innerHTML = myChart.toString()
// }
// $(document).ready(function () {
//   // var ctx = document.getElementById('myChart')
//   // var ctx = document.getElementById('myChart').getContext('2d')
//   // var ctx = $('#myChart')
//   // var ctx = 'myChart'
//   drawChart()
// })
$(document).ready(function () {
  $('.ui.dropdown').dropdown('hide')
  $('.ui.labeled.icon.sidebar').sidebar('toggle')
  $('.small.modal').modal('hide')
  // var ctx = document.getElementById('myChart')
  // var ctx = document.getElementById('myChart').getContext('2d')
  // var ctx = $('#myChart')
  // var ctx = 'myChart'
  // drawChart()
})

export default {
  data () {
    return {
      cusname: '',
      no_user: '',
      myChart: ''
    }
  },
  components: {
    chartproject
  },
  created () {
    // this.str()
    localStorage.setItem('page', 'p')
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
#myChart1 {
  /*position: relative;*/
  display: block;
  /*border-radius: 11px;*/
  width: 1000px;
  height: 1000px;
  /*border-radius: 10%;*/
  /*border-radius: 10px;*/
    /*top: 50%;
    left: 50%;*/
}

</style>