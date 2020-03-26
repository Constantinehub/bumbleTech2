document.addEventListener('DOMContentLoaded', function() {

    const meterOptions = (value) => ({
        toolbox: {
            show: false,
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                axisLine: {
                    lineStyle: {width: 15}
                },
                splitLine: {length: 20},
                pointer: {width: 3},
                name: 'chart-name',
                type: 'gauge',
                detail: {
                    formatter: '{value}%',
                    fontSize: 16
                },
                data: [{value: value}]
            }
        ]
    });

    const temperature = echarts.init(document.getElementById('temperature'));
    const activity = echarts.init(document.getElementById('activity'));
    const wet = echarts.init(document.getElementById('wet'));

    temperature.setOption(meterOptions(89));
    activity.setOption(meterOptions(54));
    wet.setOption(meterOptions(22));

    const scatterOptions = () => ({
        xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {},
        legend: {
            show: false
        },
        tooltip: {
            show: true
        },
        grid: {
            top: '2%',
            left: '2%',
            right: '2%',
            bottom: '0%',
            containLabel: true
        },
        series: [{
            symbolSize: 30,
            data: [2, 3, 4, 6, 12, 3, 11, 31, 54, 39, 9, 22],
            type: 'scatter'
        }]
    });

    const wetComparePoint = echarts.init(document.getElementById('wetComparePoint'));
    const tempComparePoint = echarts.init(document.getElementById('tempComparePoint'));
    const activityComparePoint = echarts.init(document.getElementById('activityComparePoint'));
    const exitComparePoint = echarts.init(document.getElementById('exitComparePoint'));

    wetComparePoint.setOption(scatterOptions());
    tempComparePoint.setOption(scatterOptions());
    activityComparePoint.setOption(scatterOptions());
    exitComparePoint.setOption(scatterOptions());

});
