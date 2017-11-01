<template>
  <div>


    <div class="ui grid">
      <div class="three wide column">
        <div class="modal-div-canvas js-chart">
          <div class="chart-canvas">
             <canvas id="openedCanvas1" height="160px">   </canvas>
              <div class="chart-background"></div>
                <div style="margin-top: -30%;">
                  <span class="js-count" style="font-size: 3vh">
                  <b>24 %</b>
                  </span>
                </div>
                <span>Available</span>
          </div>
        </div>
      </div>

        <div class="three wide column">
        <div class="modal-div-canvas js-chart">
          <div class="chart-canvas">
             <canvas id="openedCanvas3" height="160px">   </canvas>
              <div class="chart-background"></div>
                <div style="margin-top: -30%;">
                  <span class="js-count" style="font-size: 3.5vh">
                  <b>70</b>
                  </span>
                  <span class="cuv-percent" style="font-size: 3.5vh"><b>%</b></span>
                </div>
          </div>
        </div>
        <!-- <label style="margin-top: 10vh">bose</label> -->
      </div>


      <div class="three wide column">
        <div class="modal-div-canvas js-chart" style="margin-tops: 10vh">
          <div class="chart-canvas">
             <canvas id="openedCanvas2" height="160px">   </canvas>
              <div class="chart-background"></div>
                <div style="margin-top: -30%;">
                  <span class="js-count" style="font-size: 3.5vh">
                  <b>95</b>
                  </span>
                  <span class="cuv-percent" style="font-size: 3.5vh"><b>%</b></span>
                </div>
          </div>
        </div>
      </div>
    </div>
    
   <!--  <canvas id="myChart" height="30px" >
      <div class="chart-background"></div>
    </canvas>
 -->
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  data () {
    return {
      cusname: '',
      no_user: ''
    }
  },
  created () {
    this.start()
    // drawChart()
    // alert('created' + localStorage.getItem('status'))
  },
  mounted () {
    // this.drawChart()
    this.drawChart1('openedCanvas3', '#31D9B8', 59)
    this.drawChart1('openedCanvas1', '#F33C17', 20)
    this.drawChart2()
    // alert('mounted' + localStorage.getItem('status'))
  },
  methods: {
    // start () {
    //   if (localStorage.getItem('status') === null || localStorage.getItem('status') === '0') {
    //     location.reload()
    //     localStorage.setItem('status', '1')
    //   } else if (localStorage.getItem('status') === '1') {
    //     localStorage.setItem('status', '0')
    //   }
    // }
    // drawChart () {
    //   var ctx = document.getElementById('myChart').getContext('2d')
    //   ctx.font = '36px verdana'
    //   ctx.fillText('76', 150, 100)
    //   // ctx.fillText('80%', 25, 26)
    //   var myChart = new Chart(ctx, {
    //     type: 'doughnut',
    //     data: {
    //       // labels: ['M', 'T'],
    //       datasets: [{
    //         backgroundColor: [
    //           '#0174DF',
    //           '#E6E6E6'
    //         ],
    //         hoverBackgroundColor: [
    //           '#0174DF',
    //           '#E6E6E6'
    //         ],
    //         data: [80, 20],
    //         borderWidth: [
    //           0, 0
    //         ]
    //       }]
    //     },
    //     options: {
    //       cutoutPercentage: 70,
    //       elements: {
    //         center: {
    //           text: 'Desktop',
    //           color: '#36A2EB',
    //           fontStyle: 'Helvetica',
    //           sidePadding: 15
    //         }
    //       }
    //       // tooltips: {
    //       //   mode: 'index'
    //       // }
    //     }
    //   })
    //   document.getElementById('myChart').innerHTML = myChart.toString()
    // },
    drawChart1 (id, color, percent) {
      var deliveredData = {
        labels: [
          'Value'
        ],
        datasets: [ {
          data: [percent, 100 - percent],
          backgroundColor: [
            color,
            '#E6E6E6'
          ],
          hoverBackgroundColor: [
            color,
            '#E6E6E6'
          ],
          borderWidth: [
            1, 4
          ]
        }],
        options: {
          // centertext: 'boseeee'
        }
      }
      var deliveredOpt = {
        cutoutPercentage: 85,
        animation: {
          animationRotate: true,
          duration: 2000
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        // centertext: 'boseeee',
        elements: {
          center: {
            text: 'Desktop',
            color: '#36A2EB',
            fontStyle: 'Helvetica',
            sidePadding: 15
          }
        }
      }
      var chart = new Chart($('#' + id), {
        type: 'doughnut',
        data: deliveredData,
        options: deliveredOpt
      })
      document.getElementById(id).innerHTML = chart.toString()
    },
    drawChart2 () {
      var deliveredData = {
        labels: [
          'Value'
        ],
        datasets: [ {
          data: [27, 73],
          backgroundColor: [
            '#0174DF',
            '#E6E6E6'
          ],
          hoverBackgroundColor: [
            '#0174DF',
            '#E6E6E6'
          ],
          borderWidth: [
            1, 4
          ]
        }],
        options: {
          // centertext: 'boseeee'
        }
      }
      var deliveredOpt = {
        cutoutPercentage: 85,
        animation: {
          animationRotate: true,
          duration: 1000
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        // centertext: 'boseeee',
        elements: {
          center: {
            text: 'Desktop',
            color: '#36A2EB',
            fontStyle: 'Helvetica',
            sidePadding: 15
          }
        }
      }
      var chart = new Chart($('#openedCanvas2'), {
        type: 'doughnut',
        data: deliveredData,
        options: deliveredOpt
      })
      document.getElementById('openedCanvas2').innerHTML = chart.toString()
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
/*#myChart2 {
  display: block;
  width: 1000px;
  height: 1000px;
}*/

</style>