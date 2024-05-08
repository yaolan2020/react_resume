/*
 * @Author: your name
 * @Date: 2020-04-30 10:29:36
 * @LastEditTime: 2020-05-25 18:16:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_project/src/view/main/App.js
 */ 
import React from 'react';
import './pictab.css';

class PicTab extends  React.Component {
    constructor(props){
      super(props);
      this.state={
        rotate:[],
        left:[],
        top:[],
        zIndex:[],
        index:0,
        rotateY:[],
      }
    };
    css(){
        return `
        *{
          list-style:none;
        }
        `
    }
   componentDidMount(){
       this.random()
   }
   random(needid){
       let newRotate = [],newLeft = [],newTop = [],newzIndex = [],newRotateY = [];
       this.props.PicJson.picUrl.forEach((v,i)=>{
           newRotateY.push('0')
           if(i === needid){
                newRotate.push('0');
                newLeft.push(window.innerWidth/2-170);
                newTop.push(window.innerHeight/2-208);
                newzIndex.push(30);
           }else{
                newRotate.push(Math.random()*(-720)+360);
                newLeft.push(Math.random()*window.innerWidth-170);
                newTop.push(Math.random()*(window.innerHeight-416));
                newzIndex.push(i);
           } 
       })
       this.setState({
           rotate:newRotate,
           left:newLeft,
           top:newTop,
           zIndex:newzIndex,
           rotateY:newRotateY
       })
   }
   click(i,e){
       if(e.target.classList.contains('active')){
           if(e.target.classList.contains('bgActive')){
                e.target.classList.remove('bgActive');
                this.state.rotateY.splice(i,1,0)
           }else{
                e.target.classList.add('bgActive');
                this.state.rotateY.splice(i,1,180)
           }
           this.setState({
            rotateY:this.state.rotateY,
           })
       }else{
            this.random(i);
            this.setState({
                index:i,
            })
       }
   }
    render() {
        let PicJson = this.props.PicJson;
        let {rotate,left,top,zIndex,index,rotateY} = this.state;
        let ali=[],bli=[];
        PicJson.picUrl.forEach((v,i) => {
            ali.push(<li key={i} style={{transform:'rotateY('+rotateY[i]+'deg) rotate('+rotate[i]+'deg)',
                                         left:left[i]+'px',
                                         top:top[i]+'px',
                                         transition:Math.random()*0.4+0.3+'s',
                                         zIndex:zIndex[i],
                                         }}>
                        <div className='zm'>
                            <img src={v} />
                            <span className='textNode'>{PicJson.text[i]}</span>
                        </div>
                        <div className='bm'>
                            <div className='textNode'>{PicJson.bText[i]}</div>
                        </div>
                    </li>);
            bli.push(<li key={i} className={index===i?'active':''} onClick={this.click.bind(this,i)}></li>)
        });
        return (
            <div className="pictab">
                <style dangerouslySetInnerHTML={{__html:this.css()}}></style>
                <ul className='myul'>
                    {ali}
                </ul>
                <ol className='myol'>
                    {bli}
                </ol>
            </div>
        );
    }
}
export default PicTab;
