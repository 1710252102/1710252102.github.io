// 折线图
(function(){
    var myChart=echarts.init(document.querySelector('.line .chart'));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top:"5%",
            textStyle:{
                color: "rgba(255,255,255,.5)",
                fontSize: 10
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: "20",
            top: "60",
            right: "20",
            bottom: "8",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['4.21', '4.22', '4.23', '4.24', '4.25', '4.26', '4.27'],
                axisLabel:{
                    textStyle:{
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.2)"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick:{show:false},
                axisLine:{
                    lineStyle:{
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel:{
                    textStyle:{
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '总新增确诊',
                type: 'line',
                smooth: true,
                areaStyle: {},
                lineStyle: {
                    color: "#0184d5",
                    width: 2 
                },
                // data: [1005, 959, 915, 838, 801, 723, 648],
                data:[37,15,9,13,14,3,6],
                areaStyle: {
                    // 渐变色，只需要复制即可
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                      },
                      {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)",
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 设置拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle:{
                    color:"#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 8
                },
                // 开始不显示拐点，鼠标经过显示
                showSymbol:false
            },
            {
                name: '新增境外输入',
                type: 'line',
                smooth: true,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                          0,
                          0,
                          0,
                          1,
                          [
                            {
                              offset: 0,
                              color: "rgba(0, 216, 135, 0.4)"
                            },
                            {
                              offset: 0.8,
                              color: "rgba(0, 216, 135, 0.1)"
                            }
                          ],
                          false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                      }
                },
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 8
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // data: [78, 63, 57, 49, 51, 52, 50]
                data:[23,6,2,11,5,2,3]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();

// 饼形图
(function(){
    var myChart=echarts.init(document.querySelector('.bar .chart'));
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom:"0%",
            itemWidth:5,
            itemHeight:5,
            left: 'center',
            top: 'bottom',
            textStyle:{
                color: "rgba(255,255,255,.5)",
                fontSize: 10
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true}
            }
        },
        series: [
            {
                name: '年级模式',
                type: 'pie',
                radius: ["10%","70%"],
                center: ['50%', '50%'],
                roseType: 'area',
                // 图形文字标签
                label:{
                    fontSize:12
                },
                labelLine:{
                    length:6, //链接扇形线长
                    length2:8 //连接文字线长
                },
                data: [
                    { value: 37, name: '山西' },
                    { value: 46, name: '北京' },
                    { value: 50, name: '陕西' },
                    { value: 50, name: '陕西' },
                    { value: 53, name: '内蒙古' },
                    { value: 53, name: '上海' },
                    { value: 116, name: '台湾' },
                    { value: 222, name: '香港' },
                    { value: 340, name: '黑龙江' },
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    })
})();

// 画地图
(function(){
    var myChart=echarts.init(document.querySelector('.map .chart'));
    window.dataList = [{
            name: "南海诸岛",
            value: 0
        },
        {
            name: '北京',
            value: 46
        },
        {
            name: '天津',
            value: 5
        },
        {
            name: '上海',
            value: 53
        },
        {
            name: '重庆',
            value: 0
        },
        {
            name: '河北',
            value: 4
        },
        {
            name: '河南',
            value: 0
        },
        {
            name: '云南',
            value: 2
        },
        {
            name: '辽宁',
            value: 1
        },
        {
            name: '黑龙江',
            value: 340
        },
        {
            name: '湖南',
            value: 0
        },
        {
            name: '安徽',
            value: 0
        },
        {
            name: '山东',
            value: 12
        },
        {
            name: '新疆',
            value: 0
        },
        {
            name: '江苏',
            value: 7
        },
        {
            name: '浙江',
            value: 6
        },
        {
            name: '江西',
            value: 0
        },
        {
            name: '湖北',
            value: 0
        },
        {
            name: '广西',
            value: 0
        },
        {
            name: '甘肃',
            value: 0
        },
        {
            name: '山西',
            value: 37
        },
        {
            name: '内蒙古',
            value: 53
        },
        {
            name: '陕西',
            value: 50
        },
        {
            name: '吉林',
            value: 10
        },
        {
            name: '福建',
            value: 5
        },
        {
            name: '贵州',
            value: 0
        },
        {
            name: '广东',
            value: 32
        },
        {
            name: '青海',
            value: 0
        },
        {
            name: '西藏',
            value: 0
        },
        {
            name: '四川',
            value: 0
        },
        {
            name: '宁夏',
            value: 0
        },
        {
            name: '海南',
            value: 0
        },
        {
            name: '台湾',
            value: 116
        },
        {
            name: '香港',
            value: 246
        },
        {
            name: '澳门',
            value: 13
        }
    ];
    var option = {
        tooltip: {
            triggerOn: "click",
            formatter: function(e, t, n) {
                return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
            }
        },
        visualMap: {
            min: 0,
            max: 1000,
            left: 26,
            bottom: 40,
            showLabel: !0,
            text: ["高", "低"],
            textStyle:{
                color:"#fff"
            },
            pieces: [{
                gt: 500,
                label: "> 500 人",
                color: "#000080"
            }, {
                gte: 100,
                lte: 499,
                label: "100 - 499 人",
                color: "#0000CD"
            }, {
                gte: 10,
                lt: 99,
                label: "10 - 99 人",
                color: "#4169E1"
            }, {
                gte: 1,
                lt: 9,
                label: "1 - 9 人",
                color: "#1E90FF"
            }, {
                value: 0,
                color: "#6495ED"
            }],
            show: !0
        },
        geo: {
            map: "china",
            roam: !1,
            scaleLimit: {
                min: 1,
                max: 2
            },
            zoom: 1.0,
            top: 35,
            left: 150,
            label: {
                normal: {
                    show: !0,
                    fontSize: "8",
                    width:2,
                    color: "#fff"
                }
            },
            itemStyle: {
                normal: {
                    //shadowBlur: 50,
                    // shadowColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: "rgba(0, 0, 0, 0.2)"
                },
                emphasis: {
                    areaColor: "#99CCFF",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 0
                }
            }
        },
        series: [{
            name: "确诊病例",
            type: "map",
            geoIndex: 0,
            data: window.dataList
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    })
})();