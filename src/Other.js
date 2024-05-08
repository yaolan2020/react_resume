/*
*
* 项目公用方法
*
*/
export default {
    methods: {
        ajaxNew(option){
            let xhr = new XMLHttpRequest();
            if(option.type.toLowerCase() === 'get'){
                xhr.open('get',option.url+'?'+this.jsonToString(option.data),true);
                xhr.send();
            }else if(option.type.toLowerCase() === 'post'){
                xhr.open('post',option.url,true);
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')    
                xhr.send(this.jsonToString(option.data));
            }
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                        option.success(xhr.responseText)
                    }else{
                        option.error()
                    }
                }
            }
        },
        jsonToString(json){
            let arr=[];
            for(let item in json){
                arr.push(item+'='+json[item]);
            }
            return arr.join('&');
        },
        getViewportOffset(){
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
    }
}