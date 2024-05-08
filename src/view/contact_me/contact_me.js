/*
 * @Author: your name
 * @Date: 2020-04-30 10:29:36
 * @LastEditTime: 2020-05-25 18:16:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_project/src/view/main/App.js
 */ 
import React from 'react';
import './contact_me.css';
import qqImg from './../../images/contact/QQ.png';
import weixinImg from './../../images/contact/weixin.png';
import myweixinImg from './../../images/contact/my_weixin.jpeg';
import bokeImg from './../../images/contact/boke.png';
import phoneImg from './../../images/contact/phone.png';


class ContactMe extends  React.Component {
    constructor(props){
      super(props);
      this.state={
      }
    };
    render() {
        return (
            <div className='contactme'>
               <div flex='1'>
                   <img src={qqImg} />
                   <p> QQ：1216827215</p>
               </div>
               <div flex='1'>
                   <img src={weixinImg} />
                   <img className='weixin' src={myweixinImg} />
               </div>
               <div flex='1'>
                   <img src={bokeImg} />
                   <p> 博客：诉诉飞飞</p>
               </div>
               <div flex='1'>
                   <img src={phoneImg} />
                   <p> 电话号码：18394517598</p>
               </div>
            </div>
        );
    }
}
export default ContactMe;
