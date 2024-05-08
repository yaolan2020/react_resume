import React from 'react';
import './works.css';


class Works extends  React.Component {
    constructor(props){
      super(props);
      this.state={
      }
    };
    render() {
        return (
            <div className='works'>
                <div className='works_left'>
                    <div className='works_left_content'>
                        <span className='works_title'>git地址</span>
                        <span className='works_content'>
                            <label>1. https://gitlab.com/yaolan2020/react_project.git（当前项目前端代码）</label> 
                        </span>
                        <span className='works_content'>
                            <label>2. https://gitlab.com/yaolan2020/admin_reactproject.git（当前项目后端代码）</label> 
                        </span>
                        <span className='works_content'>
                            <label>3. https://gitlab.com/yaolan2020/bigscreen.git（echars，高德地图，rtmp视频直播流，集成页面）</label> 
                        </span>
                        <span className='works_title'>博客地址</span>
                        <span className='works_content'>
                            <label>https://www.cnblogs.com/susu2020/</label> 
                        </span>
                        <span className='works_title'>历史开发项目url</span>
                        <span className='works_content'>
                            <label>1.m端一成购车  https://m.58.com/bj/ycgouche/</label> 
                        </span>
                        <span className='works_content'>
                            <label>2.pc端一成购车  https://bj.58.com/ycgouche/</label> 
                        </span>
                        <span className='works_content'>
                            <label>3.m端平行进口车  https://m.58.com/bj/jinkouche/</label> 
                        </span>
                        
                    </div>
                </div>
                <div className='works_right'>
                    <div className='works_right_content'>
                        <span className='works_title'>历史项目UI</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Works;