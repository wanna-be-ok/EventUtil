/**
 * Created by Administrator on 2017/8/2.
 * 兼容DOM和IE的事件绑定、event、事件目标、阻止冒泡、阻止默认行为
 */


var EventUtil ={
    //事件绑定    element 事件对象 type 事件  handler 执行函数
        addHandler : function (element,type,handler) {
            if(element.addEventListener){
                element.addEventListener(type,handler,false);
            }else if(element.attachEvent){
                element.attachEvent('on'+type, handler);
            }else{
                element['on'+type]=handler;
            }
        },
    //事件移除
        removeHandler : function (element, type, handler) {
            if(element.removeEventListener){
                element.removeEventListener(type,handler,false);
            }else if(element.detachEvent){
                element.detachEvent('on'+type,handler);
            }else{
                element['on'+type]=null;
            }
        },

    //下面的事件都是在获得event的基础之上
    //event
    getEvent : function(event){
        return event ?event :window.event;
    },
    //target
    getTarget : function(event){
        return event.target || event.srcElement;
    },
    //preventDefault 阻止默认事件
    preventDefault : function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    //stopPropagation 组织进一步的补货或者冒泡
    stopPropagation : function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble= true;
        }
    }
};

