
    $(document).ready(function(){

Highcharts.chart('diagr', {
    chart: {
        type: 'column',
        height: "300"
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
        name: "Одобрения",
        colorByPoint: true,
        data: [{
            name: '',
            y: 76
        }, {
            name: ' ',
            y: 55
        },
        {
            name: '  ',
            y: 85
        },
        {
            name: '   ',
            y: 15
        },
        {
            name: '    ',
            y: 25
        },
        {
            name: '     ',
            y: 55
        },
        {
            name: '       ',
            y: 35
        },
        {
            name: '             ',
            y: 95
        },
        {
            name: '           ',
            y: 77
        },
         {
            name: '        ',
            y: 15
        }]
    }],
});



});