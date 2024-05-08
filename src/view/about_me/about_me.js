import React from 'react';
import './about_me.css';
import other from './../../Other';
import Echarts from './../common/echarts/echarts'
import UrlPath from './../../other/Config'

class AboutMe extends  React.Component {
    constructor(props){
      super(props);
      this.state={
        screenwidth:other.methods.getViewportOffset().h+'px',
        datalist:''
      }
      this.getdata();
    };
    getdata=()=>{
        let _self=this;
        other.methods.ajaxNew({
           type:'get',
           url:UrlPath.path+'/getUser/',
           data:{},
           success:function(data){
             let result = JSON.parse(data);
             if(result.code === 0){
                   _self.setState({
                       datalist:result.data
                   }) 
             }else{
               alert('服务器错误')
             }
           },
           error:function(){
             console.log('服务器错误')
           }
        })
      }
    render() {
        let user = this.state.datalist;
        return (
            <div className='aboutme' style={{minHeight:this.state.screenwidth}}>
                <div className='aboutme_left'>
                    <div className='aboutme_left_content'>
                        <span className='content_title'>自我介绍</span>
                        <span className='content_content'>
                            <label>您好！我的名字叫{user.userName}，是一名{user.position}，现在在{user.workAddr}工作，{user.birthDate}年出生，毕业于{user.university}，{user.education}学历，专业是{user.major}，
                            工作经验长达{user.workDate}年，热爱编程。
                            </label> 
                        </span>
                        <span className='content_title'>工作经历</span>
                        <table className='aboutme_table'>
                          <thead>
                            <tr>
                              <th>工作时间</th>
                              <th>公司名称</th>
                              <th>项目简介</th>
                            </tr>
                          </thead>
                          <tbody>
                              {user.workexprience&&user.workexprience.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                        <td>{item.workDateStart}~{item.workDateEnd}</td>
                                        <td>{item.companyName}</td>
                                        <td>{item.projectDes}</td>
                                    </tr>
                                  )
                              })}
                          </tbody>
                        </table>
                        <span className='content_title'>自我评价</span>
                        <span className='content_content'>
                            <label>1.我是一个对工作和生活都认真负责的人</label><br/>
                            <label>2.有丰富的独立开发经验和协作开发经验</label><br/>
                            <label>3.遇到问题能够自己平静的分析问题并解决问题</label><br/>
                            <label>4.热爱学习，有良好的编程习惯</label><br/>
                            <label>5.了解客户的需求，认真思考需求，本着对客户负责的态度，认真开发每一个需求</label><br/>
                        </span>
                    </div>
                </div>
                <div className='aboutme_right'>
                  <Echarts name='javascript' data='95' color='red'></Echarts>
                  <Echarts name='css' data='90' color='brown'></Echarts>
                  <Echarts name='bootstropt' data='95' color='green'></Echarts>
                  <Echarts name='nodejs' data='60' color='yellow'></Echarts>
                  <Echarts name='es6' data='80' color='purple'></Echarts>
                  <Echarts name='react' data='70' color='blue'></Echarts>
                </div>
            </div>
        );
    }
}
export default AboutMe;