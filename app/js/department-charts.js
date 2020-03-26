document.addEventListener("DOMContentLoaded", function() {

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

    const department1 = echarts.init(document.getElementById('department1'));
    const department2 = echarts.init(document.getElementById('department2'));
    const department3 = echarts.init(document.getElementById('department3'));

    department1.setOption(meterOptions(89));
    department2.setOption(meterOptions(54));
    department3.setOption(meterOptions(22));

});
