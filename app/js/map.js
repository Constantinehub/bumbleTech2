document.addEventListener('DOMContentLoaded', function() {

    const mapOptions = (data, xLabels, yLabels, right) => ({
        tooltip: {
            position: 'top'
        },
        animation: false,
        grid: {
            top: '0%',
            right: Boolean(right) ? 30 : 0, // px
            left: Boolean(right) ? 0 : 30, // px
            bottom: 20 // px
        },
        xAxis: {
            type: 'category',
            data: xLabels,
            splitArea: {
                show: true
            }
        },
        yAxis: {
            position: Boolean(right) ? 'right' : 'left',
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
            name: 'Tooltip Title',
            type: 'heatmap',
            data: data,
            label: {
                show: true
            },
        }]
    });

    const data = () => {
        const collection = [];

        for (let i = 0; i < yLabels.length; i++) {
            for (let j = 0; j < xLabels.length; j++) {
                collection.push([`${xLabels[j]}`, `${yLabels[i]}`, Math.floor((Math.random() + i) * 10)]);
            }
        }

        return collection;
    };

    const yLabels = ['2.1', '3.1', '4.1', '5.1', '6.1', '7.1', '8.1', '9.1', '10.1', '11.1'];
    const xLabels = ['23', '16', '10', '7', '1'];
    const leftSide = echarts.init(document.getElementById('left-side'));
    const rightSide = echarts.init(document.getElementById('right-side'));

    leftSide.setOption(mapOptions(data(), xLabels, yLabels));
    rightSide.setOption(mapOptions(data(), xLabels.reverse(), yLabels, 'right'))

});
