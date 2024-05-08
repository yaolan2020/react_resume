/*
 * @Author: your name
 * @Date: 2020-04-30 10:29:36
 * @LastEditTime: 2020-05-25 18:16:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_project/src/view/main/App.js
 */ 
import React from 'react';
import $ from 'jquery'
import './snow.css';
import redPackage from './../../../images/red-package.png';


class Snow extends  React.Component {
    constructor(props){
      super(props);
      this.state={
        screenwidth:window.screen.width,
      }
      this.snowDrop(50, this.randomInt(1035, this.state.screenwidth-60));
      this.snow(50, 150);
    };
    snow=(num, speed)=> {
      if (num > 0) {
        let self=this;
        setTimeout(function () {
          $('#drop_' + self.randomInt(1, 250)).addClass('animate');
          self.snow(num--, speed);
        }, speed);
      }
    };
    snowDrop=(num,position)=>{
        if (num > 0) {
            var drop = `<div class="drop snow" id=${'drop_'+num}>
                           <img class='redPackage' src='${redPackage}'>
                        </div>`;
			$('#snowAnimation').append(drop);
			$('#drop_' + num).css('left', position);
			num--;
			this.snowDrop(num, this.randomInt(60, this.state.screenwidth-60));
		}
    };
    randomInt=(min,max)=>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    render() {
        return (
            <div id='snowAnimation' className="snowAnimation"> </div>
        );
    }
}
export default Snow;
