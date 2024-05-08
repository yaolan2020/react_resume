/*
 * @Author: your name
 * @Date: 2020-04-30 10:29:36
 * @LastEditTime: 2020-05-25 18:16:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_project/src/view/main/App.js
 */ 
import React from 'react';
import './echarts.css';
import echarts from 'echarts';


class Echarts extends  React.Component {
    constructor(props){
      super(props);
      this.state={
        datalist:[],
      }
    };
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts'+this.props.name));
        // 绘制图表
        myChart.setOption({
            color:[this.props.color, 'rgba(225,225,225,0)'],
            series: [
                {
                    name: this.props.name,
                    type: 'pie',
                    radius: ['50%', '62%'],
                    animation: false,
                    label: {
                        position: 'center',
                        alignTo: 'labelLine',
                        fontSize: '14',
                        fontWeight: 'bold'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: parseInt(this.props.data), name: this.props.name},
                        {value: 100-parseInt(this.props.data), name: '未完成'},
                    ]
                }
            ]
        });
    }
    render() {
        return (
            <div id={'echarts'+this.props.name} className="echarts"></div>
        );
    }
}
export default Echarts;
