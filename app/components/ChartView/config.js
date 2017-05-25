import {NAMES} from'../../constants/eventTypes';
import moment from 'moment';
let Highcharts='Highcharts';
const config={
  chart: {
   type: 'column'
},
title: {
   text: 'Total sleep'
},
subtitle: {
   text: 'total sleep for night'
},
xAxis: {
    visible:false,
   crosshair: true
},
exporting:{
  enabled:false
},
yAxis: {
   min: 0,
   title: {
       text: 'Hours'
   }
},
rangeSelector:{
  enabled:false
},
navigator:{
  enabled:false
},
scrollbar:{
  enabled:false
},
tooltip: {
   headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
   pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
       '<td style="padding:0"><b>{point.y}</b></td></tr>',
   footerFormat: '</table>',
   shared: true,
   useHTML: true
}
      };
const pieConfig = {
  chart: {
    plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Resperation indices'
    },
    exporting:{
      enabled:false
    },
    credits:{
      enabled:false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    }
};

const changedChart = {
  title: {
        text: 'Risk of appnea'
    },
    exporting:{
      enabled:false
    },
    yAxis: {
     title: {
        text: 'AHI'
     }
   },
   tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
   },
   rangeSelector:{
     enabled:false
   },
   navigator:{
     enabled:false
   },
   scrollbar:{
     enabled:false
   },
    legend:{
      enabled:false
    }
  };


  const gaugeOptions = {

      chart: {
          type: 'solidgauge'
      },

      title: null,

      pane: {
          center: ['50%', '85%'],
          size: '140%',
          startAngle: -90,
          endAngle: 90,
          background: {
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
              innerRadius: '60%',
              outerRadius: '100%',
              shape: 'arc'
          }
      },

      tooltip: {
          enabled: false
      },

      // the value axis
      yAxis: {
          stops: [
              [10, '#55BF3B'], // green
              [20, '#DDDF0D'], // yellow
              [30, '#DF5353'] // red
          ],
          lineWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          title: {
              y: -70
          },
          labels: {
              y: 16
          }
      },

      plotOptions: {
          solidgauge: {
              dataLabels: {
                  y: 5,
                  borderWidth: 0,
                  useHTML: true
              }
          }
      },
      yAxis: {
          min: 0,
          max: 50,
          title: {
              text: 'RPM'
          }
      },

      series: [{
          name: 'RPM',
          data: [55],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                     '<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
          },
          tooltip: {
              valueSuffix: ' revolutions/min'
          }
      }]

  };



export { config as conf };
export { pieConfig as PieChartConfig }
export { changedChart as ChangeChartConfig}
export { gaugeOptions as gaugeChart}
