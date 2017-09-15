    $(document).ready(function(){

Highcharts.chart('diagramma-disc-1', {
    chart: {
       plotBackgroundColor: null,
        plotBorderWidth: null,
       plotShadow: false,
        type: 'pie',
        width: 150,
        height: 150
    },
    title: {
        text: null
    },
    tooltip: {
        pointFormat: null
    },
    plotOptions: {
        pie: {
           allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
              //  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  //  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
       // name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Мужчины',
            y: 56.33,
            color: "#36a2eb"
        }, {
            name: 'Женщины',
            color: "#ff6384",
            y: 24.03
        }, {
            name: 'Неопределено',
            color: "#ffcd56",
            y: 10.38
        }]
    }]
});




    Highcharts.chart('diagramma-disc-2', {
    chart: {
       plotBackgroundColor: null,
        plotBorderWidth: null,
       plotShadow: false,
        type: 'pie',
        width: 150,
        height: 150
    },
    title: {
        text: null
    },
    tooltip: {
        pointFormat: null
    },
    plotOptions: {
        pie: {
           allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
              //  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  //  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
       // name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Мужчины',
            y: 80,
            color: "#36a2eb"
        }, {
            name: 'Женщины',
            color: "#ff6384",
            y: 5
        }, {
            name: 'Неопределено',
            color: "#ffcd56",
            y: 15
        }]
    }]
});



    Highcharts.chart('diagramma-disc-3', {
    chart: {
       plotBackgroundColor: null,
        plotBorderWidth: null,
       plotShadow: false,
        type: 'pie',
        width: 150,
        height: 150
    },
    title: {
        text: null
    },
    tooltip: {
        pointFormat: null
    },
    plotOptions: {
        pie: {
           allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
               format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                   color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
       // name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Мужчины',
            y: 10,
            color: "#36a2eb"
        }, {
            name: 'Женщины',
            color: "#ff6384",
            y: 50
        }, {
            name: 'Неопределено',
            color: "#ffcd56",
            y: 40
        }]
    }]
});

/*линейнные диаграммы */

    Highcharts.chart('line-diagramm-1', {
    chart: {
        type: 'bar',
            plotBackgroundColor: null,
        plotBorderWidth: null,
       plotShadow: false,
       background: "#fff",
        height: 150,
        width: 300
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: [1],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: null,
           // align: 'high'
        },
        labels: {
            //overflow: 'justify'
        }
    },
    tooltip: {
       // valueSuffix: ' millions'
       pointFormat: null
    },
    plotOptions: {
        bar: {
              allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        width: null,
        enabled: false,
      /*  layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,*/
     //   backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Принято',
        data: [53.12],
        color: "#3cd028"
    }, {
        name: 'В обработке',
        data: [26.91],
        color: "#36a2eb"
    }, {
        name: 'Отклонено',
        data: [19.97],
        color: "#ff6384"
    }]
});


   Highcharts.chart('line-diagramm-2', {
    chart: {
        type: 'bar',
            plotBackgroundColor: null,
        plotBorderWidth: null,
       plotShadow: false,
       background: "#fff",
        height: 150,
        width: 300
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: [1],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: null,
           // align: 'high'
        },
        labels: {
            //overflow: 'justify'
        }
    },
    tooltip: {
       // valueSuffix: ' millions'
       pointFormat: null
    },
    plotOptions: {
        bar: {
              allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        width: null,
        enabled: false,
      /*  layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,*/
     //   backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Принято',
        data: [53.12],
        color: "#3cd028"
    }, {
        name: 'В обработке',
        data: [26.91],
        color: "#36a2eb"
    }, {
        name: 'Отклонено',
        data: [19.97],
        color: "#ff6384"
    }]
});



   Highcharts.chart('line-diagramm-3', {
    chart: {
        type: 'bar',
            plotBackgroundColor: null,
        plotBorderWidth: null,
       plotShadow: false,
       background: "#fff",
        height: 150,
        width: 300
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: [1],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: null,
           // align: 'high'
        },
        labels: {
            //overflow: 'justify'
        }
    },
    tooltip: {
       // valueSuffix: ' millions'
       pointFormat: null
    },
    plotOptions: {
        bar: {
              allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        width: null,
        enabled: false,
      /*  layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,*/
     //   backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Принято',
        data: [53.12],
        color: "#3cd028"
    }, {
        name: 'В обработке',
        data: [26.91],
        color: "#36a2eb"
    }, {
        name: 'Отклонено',
        data: [19.97],
        color: "#ff6384"
    }]
});













/*коломная диаграмма */


// Коломная диаграмма-1 
Highcharts.chart('column-1', {
    chart: {
        type: 'column',
        height: "150"
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: null
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: "Трафик",
        colorByPoint: true,
        data: [{
            name: 'Десктоп',
            color: "#3cd028",
            y: 56.33,
            drilldown: 'Десктоп'
        }, {
            name: 'Мобильные',
            color: "#36a2eb",
            y: 24.03,
            drilldown: 'Мобильные'
        }, {
            name: 'Планшеты',
            color: "#ffcd56",
            y: 10.38,
            drilldown: 'Планшеты'
        }]
    }],
});






Highcharts.chart('column-2', {
    chart: {
        type: 'column',
        height: "150"
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: null
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: "Трафик",
        colorByPoint: true,
        data: [{
            name: 'Десктоп',
            y: 56.33,
            drilldown: 'Десктоп'
        }, {
            name: 'Мобильные',
            y: 24.03,
            drilldown: 'Мобильные'
        }, {
            name: 'Планшеты',
            y: 10.38,
            drilldown: 'Планшеты'
        }]
    }],
});




Highcharts.chart('column-3', {
    chart: {
        type: 'column',
        height: "150"
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: null
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: "Трафик",
        colorByPoint: true,
        data: [{
            name: 'Десктоп',
            y: 56.33,
            drilldown: 'Десктоп'
        }, {
            name: 'Мобильные',
            y: 24.03,
            drilldown: 'Мобильные'
        }, {
            name: 'Планшеты',
            y: 10.38,
            drilldown: 'Планшеты'
        }]
    }],
});




/* диаграммы колоны источники */

//источник-1 

Highcharts.chart('source-1', {
    chart: {
        type: 'column',
        height: "130"
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: null
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: "Трафик",
        colorByPoint: true,
        data: [{
            name: '',
            y: 32
        }, {
            name: ' ',
            y: 48,
        }, {
            name: '  ',
            y: 20,
        }]
    }],
});



//источник-2 



Highcharts.chart('source-2', {
    chart: {
        type: 'column',
        height: "150"
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: null
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: "Трафик",
        colorByPoint: true,
        data: [{
            name: ' ',
            y: 10
        }, {
            name: '  ',
            y: 50
        }, {
            name: '   ',
            y: 40
        }]
    }],
});




//  источник-3 


Highcharts.chart('source-3', {
    chart: {
        type: 'column',
        height: "150"
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: null
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: "Трафик",
        colorByPoint: true,
        data: [{
            name: ' ',
            y: 56.33
        }, {
            name: '  ',
            y: 24.03
        }, {
            name: '   ',
            y: 10.38
        }]
    }],
});



Highcharts.chart('diagr', {
    chart: {
        type: 'column',
        height: "150"
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: null
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: "Трафик",
        colorByPoint: true,
        data: [{
            name: ' ',
            y: 56.33
        }, {
            name: '  ',
            y: 24.03
        }, {
            name: '   ',
            y: 10.38
        }]
    }],
});



});