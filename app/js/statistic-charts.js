document.addEventListener('DOMContentLoaded', function() {

    const lineOptions = () => ({
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            labels: ['Custom legend 1', 'Custom legend 2']
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'dataset 1',
                type: 'line',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'dataset 2',
                type: 'line',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
        ]
    });

    const humidityLine = echarts.init(document.getElementById('humidityLine'));
    const temperatureLine = echarts.init(document.getElementById('temperatureLine'));
    const activityLine = echarts.init(document.getElementById('activityLine'));
    const activityByRangeLine = echarts.init(document.getElementById('activityByRangeLine'));

    humidityLine.setOption(lineOptions());
    temperatureLine.setOption(lineOptions());
    activityLine.setOption(lineOptions());
    activityByRangeLine.setOption(lineOptions());

    const calendarOptions = (data, xLabels, yLabels) => ({
        tooltip: {
            position: 'top'
        },
        animation: false,
        grid: {
            top: '0%',
            bottom: 20,
            right: 0,
            left: 70
        },
        xAxis: {
            type: 'category',
            data: xLabels,
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: yLabels,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 1,
            max: 3,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%',
            inRange: {
                color: ['#ff0000', '#ff9900', '#eec031', '#fae096', '#b5d6a7', '#92c37c']
            },
            show: false
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                show: true
            },
        }]
    });

    const xLabels = ['00.00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00'];
    const yLabels = ['21.12.2019', '20.12.2019', '19.12.2019', '18.12.2019', '17.12.2019', '16.12.2019', '15.12.2019'];

    const dataGenerate = () => {
        const dataArr = [];

        for (let i = 0; i < yLabels.length; i++) {
            for (let j = 0; j < xLabels.length; j++) {
                dataArr.unshift([`${xLabels[j]}`, `${yLabels[i]}`, Math.floor((Math.random() + i) * 10)]);
            }
        }

        return dataArr;
    };

    const monitoringByWeek = echarts.init(document.getElementById('monitoringByWeek'));
    monitoringByWeek.setOption(calendarOptions(dataGenerate(), xLabels, yLabels));

    const circleOptions = () => ({
        tooltip: {
            trigger: 'item',
        },
        legend: {
            show: true,
            type: 'plain',
            orient: 'horizontal',
            bottom: '0',
            selectedMode: false
        },
        grid: {
            width: '100%',
        },
        series: [
            {
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '40 / Нормальная активность', itemStyle: {color: '#14af08'}},
                    {value: 310, name: '20 / Высокая активность', itemStyle: {color: '#eceff4'}},
                    {value: 234, name: '64 / Требуют замены', itemStyle: {color: '#ff0000'}},
                ]
            }
        ]
    });

    const beehiveCircle = echarts.init(document.getElementById('beehiveCircle'));

    beehiveCircle.setOption(circleOptions());

});
