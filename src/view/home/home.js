/*
 * @Author: your name
 * @Date: 2020-04-30 10:29:36
 * @LastEditTime: 2020-05-25 18:16:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_project/src/view/main/App.js
 */ 
import React from 'react';
import './home.css';
import PicTab from './../common/pictab/pictab';

import dm_1 from './../../images/pictab/dm/dm_1.jpg';
import dm_2 from './../../images/pictab/dm/dm_2.jpg';
import dm_3 from './../../images/pictab/dm/dm_3.png';
import dm_4 from './../../images/pictab/dm/dm_4.jpg';
import dm_5 from './../../images/pictab/dm/dm_5.jpeg';
import dm_6 from './../../images/pictab/dm/dm_6.jpg';
import dm_7 from './../../images/pictab/dm/dm_7.jpeg';
import dm_8 from './../../images/pictab/dm/dm_8.jpg';

import project_1 from './../../images/pictab/project/baoshui.jpeg';
import project_2 from './../../images/pictab/project/huanbao.png';
import project_3 from './../../images/pictab/project/ycgouche_list.png';
import project_4 from './../../images/pictab/project/ycgouche_detail.png';
import project_5 from './../../images/pictab/project/ycgouche_pc_list.png';
import project_6 from './../../images/pictab/project/ycgouche_pc_detail.jpeg';
import project_7 from './../../images/pictab/project/pxjkc_list.png';
import project_8 from './../../images/pictab/project/pxjck_search.png';
import project_9 from './../../images/pictab/project/tanying_list.png';



class Home extends  React.Component {
    constructor(props){
      super(props);
      this.state={
        datalist:[],
      }
    };

    
    render() {
      let picjson={
        picUrl:[
          project_1,project_2,project_3,project_4,project_5,project_6,project_7,project_8,project_9, 
        ],
        text:[
            '密云水库智能保水平台',
            '智慧环保园系统',
            '一成购车',
            '一成购车',
            '一成购车',
            '一成购车',
            '平行进口车',
            '平行进口车',
            '檀营综合治理数据调度指挥平台',
        ],
        bText:[
            '北京市密云区水库电视墙展示内屏页,页面由echars，rtmp视频直播流，高德地图等元素构成',
            '深圳智慧环保园系统，电视墙形式展示，页面由echars，rtmp视频直播流，高德地图等元素构成',
            '一成购车移动端列表页',
            '一成购车移动端详情页',
            '一成购车pc端列表页',
            '一成购车pc端详情页',
            '平行进口车列表页',
            '平行进口车查询',
            '檀营综合治理数据调度指挥平台',
        ]
    }
        return (
            <div className="home">
                <PicTab PicJson={picjson}></PicTab>
            </div>
        );
    }
}
export default Home;
