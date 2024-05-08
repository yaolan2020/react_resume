//获取可视窗口的宽高
function getViewportOffset(){
    if(window.innerWidth){
        return{
            w:window.innerWidth,
            h:window.innerHeight
        }
    }else{ //ie9以下兼容
        if(document.compatMode==='BackCompat'){    //怪异模式
            return{
                w:document.body.clientWidth,
                h:document.body.clientHeight
            }
        }else{     //标准模式
            return{
                w:document.documentElement.clientWidth,
                h:document.documentElement.clientHeight
            }
        }
    }
}
//获取节点样式
function getStyle(elem,prop){
    if(window.getComputedStyle){
        return window.getComputedStyle(elem,null)[prop];
    }else{  //ie9以下浏览器
        return elem.currentStyle[prop]
    }
}
//dom元素添加事件
function addEvent(elem,type,handle){
    if(elem.addEventListener){  //ie9以下不兼容
        elem.addEventListener(type,handle,false)
    }else if(elem.attachEvent){  //ie独有，且this指向windows的改变
        elem.attachEvent('on'+type,function(){
            handle.call(elem)
        })
    }else{
        elem['on'+type]=handle;
    }
}
//dom元素取消事件
function removeEvent(elem,type,handle){
    if(elem.removeEventListener){  //ie9以下不兼容
        elem.removeEventListener(type,handle,false)
    }else if(elem.detachEvent){  //ie独有，且this指向windows的改变
        elem.detachEvent('on'+type,function(){
            handle.call(elem)
        })
    }else{
        elem['on'+type] = null;
    }
}
//取消事件冒泡
function stopBubble(event){
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.canceBubble=true;
    }
}
//阻止默认事件
function cancelHandler(event){
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue=false;
    }
}
//拖拽事件
function drag(elem){
    let disX,disY;
    addEvent(elem,'mousedown',function(e){
        let event = e || window.event;
        disX = event.pageX - parseInt(getStyle(elem,'left'));
        disY = event.pageY - parseInt(getStyle(elem,'top'));
        addEvent(document,'mousemove',mouseMove);
        addEvent(document,'mouseup',mouseUp);
        stopBubble(event);
        cancelHandler(event);
    })
    function mouseMove(e){
        let event = e || window.event;
        elem.style.left = event.pageX - disX + 'px';
        elem.style.top = event.pageY - disY + 'px';
    }
    function mouseUp(){
        removeEvent(document,'mousemove',mouseMove);
        removeEvent(document,'mouseup',mouseUp);
    }
}
//异步加载js文件,并且有回调函数
function loadScript(url,callback){
   let script = document.createElement('script');
   script.type = 'text/jsvascript';
   if(script.readyState){  //ie
       script.onreadyststechange = function(){
           if(script.readyState === 'complete'||script.readyState === 'loaded'){
               eval(callback)
           }
       }
   }else{  //chrome
        script.onload = function(){
            eval(callback)
        }
   }
   script.src = url;
   document.head.appendChild(script);
}
//cookie中存储数据
function setCookie(key, value, iDay) {
    let oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = key + '=' + value + ';expires=' + oDate;
}
//cookie中删除数据
function removeCookie(key) {
    setCookie(key, '', -1);
    let cookieArr = document.cookie.split('; ');
    for (let i = 0; i < cookieArr.length; i++) {
        let arr = cookieArr[i].split('=');
        if (arr[0] === key) {
            return arr[1];
        }
    }
    return false;
}
//深拷贝
function deepClone(origin,targetold){
    let target = targetold || {},
        tostr=Object.prototype.toString,
        arrstr='[object Array]';
    for(let prop in origin){
        if(origin.hasOwnProperty(prop)){
            if(origin[prop] !== 'null' && typeof (origin[prop]) == "object"){
                target[prop] = (tostr.call(origin[prop]) === arrstr)?[]:{};
                deepClone(origin[prop],target[prop])
            }else{
                /*拷贝原始值*/
                target[prop]=origin[prop];
            }
        }
    }
    return target;
}
//判断数据类型
function type(target){
    let ret=typeof (target);
    let template={
        '[object Array]':'array',
        '[object Object]':'object',
        '[object Number]':'number-object',
        '[object Boolean]':'boolean-object',
        '[object String]':'string-object',
    };
    if(target === null){
        return 'null';
    }
    if(ret === 'object'){
        let str=Object.prototype.toString.call(target);
        return template[str];
    }else {
        return ret
    }
}
//上传附件
function uploadFile(e,callback){
    //获取文件
    let AllowImgFileSize = 26214400; //上传图片最大值(单位字节)50m
    let files = e.target.files;
    let file = files[0];
    if(!files){
        alert('上传文件不成功，请重新上传')
    }else{
        if(file.size > AllowImgFileSize){
            alert("当前选择的附件大于50M，无法上传。");
            return false;
        }
        let imgbase='';    //base64位数据
        let reader = new FileReader();
        reader.readAsDataURL(file,"UTF-8");   //Base64
        let name=file.name;     //文件名
        reader.onload = function() {
            imgbase = this.result.split(",")[1];
            return callback(name,imgbase,this.result.split(",")[0]);
        };
    }
}
//获取当前日期及时间
function datatimeYMRHMS(){
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    month=month<10?'0'+month:month;
    day=day<10?'0'+day:day;
    hour=hour<10?'0'+hour:hour;
    minute=minute<10?'0'+minute:minute;
    second=second<10?'0'+second:second;
    return year+'-'+month+'-'+day+' '+hour+':'+minute+":"+second;
}
//对象转化为字符串--对象转化为地址栏参数
function jsonToString(json){
    let arr=[];
    for(let item in json){
        arr.push(item+'='+json[item]);
    }
    return arr.join('&');
}
//字符串转化为对象--地址栏参数转化为对象
function stringToJson(string){
    let arr=string.split('&');
    let json={};
    for(let i=0;i<arr.length;i++){
        json[arr[i].split('=')[0]] = arr[i].split('=')[1]
    }
    return json;
}
