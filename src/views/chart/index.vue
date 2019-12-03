<template>
    <div>
        <div id="main">123</div>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    data () {
        return {
            
        }
    },
    mounted(){
        this.createEcharts()
    },
    methods: {
        /* 创建图表 */
        createEcharts(){
            var echarts = require('echarts');

            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));

            var data = [];
            for (var i = 0; i <= 100; i++) {
                var theta = i / 100 * 360;
                var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
                data.push([r, theta]);
            }

            // 绘制图表
            myChart.setOption({
                title: {
                    text: '极坐标双数值轴',
                    show: false
                },
                legend: {
                    data: ['line']
                },
                polar: {},
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                angleAxis: {
                    type: 'value',
                    startAngle: 0
                },
                radiusAxis: {
                },
                series: [{
                    coordinateSystem: 'polar',
                    name: 'line',
                    type: 'line',
                    data: data
                }]
            });
        }
    }
}
</script>

<style scoped lang="less">
    #main   {
        width: 500px;
        height: 300px;
    }
</style>