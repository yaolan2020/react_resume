/*
 * @Author: your name
 * @Date: 2020-04-30 10:29:36
 * @LastEditTime: 2020-05-25 18:16:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_project/src/view/main/App.js
 */ 
import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';


class Menu extends  React.Component {
    constructor(props){
      super(props);
      this.state={
      }
    };
    render() {
        return (
            <div className='menu'>
                <Link to={`/contactme`} >联系我</Link>
                <Link to={`/works`} >作品库</Link>
                <Link to={`/aboutme`} >关于我</Link>
                <Link to={`/home`} >首页</Link>
            </div>
        );
    }
}
export default Menu;
