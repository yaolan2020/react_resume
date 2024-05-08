/*
 * @Author: your name
 * @Date: 2020-04-30 10:29:36
 * @LastEditTime: 2020-05-25 18:16:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_project/src/view/main/App.js
 */ 
import React from 'react';
import './main.css';
import Menu from './../menu/menu';

class Main extends  React.Component {
    constructor(props){
      super(props);
      this.state={
        screenwidth:window.screen.height+'px',
      }
    };
    render() {
        let store = this.props.store;
        let ali = [];
        store.getState().list.forEach((v,i)=>{
            ali.push(<li key={i} onClick={()=>store.dispatch({'type':'list_remove','text':i})}>{v}</li>)
        })
        return (
            <div className='main'>
                <Menu />
                <div id="page-wrapper" className="page-wrapper" style={{height:this.state.screenwidth}}>
                    {this.props.children} 
                </div>
                {/* redux练习 */}
                {/* <div className='list_module'>
                    <div className='module'>
                        <div className='counter'>
                            <input type='button' value='-' onClick={()=>store.dispatch({'type':'counter_remove'})} />
                            {store.getState().counter}
                            <input type='button' value='+' onClick={()=>store.dispatch({'type':'counter_add'})} />
                        </div>   
                        <div className='list_input'>
                            <input type='text' ref='myinput'/>
                            <input type='button' value='add' onClick={()=>store.dispatch({'type':'list_add','text':this.refs.myinput.value})} />
                        </div>
                        <div className='list_li'>
                            <ul>{ali}</ul>
                        </div>
                    </div>          
                </div> */}
            </div>
        );
    }
}
export default Main;
