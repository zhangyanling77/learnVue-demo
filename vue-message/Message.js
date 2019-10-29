import MessageComponent from './Message.vue';
import Vue from 'vue';

// 单例
let instance;
let getVueInstance = () => {
    instance = new Vue({ 
        render: h => h(MessageComponent)
    }).$mount();
    document.body.appendChild(instance.$el);
}
const Message = {
    success(options) {
        // 点击弹出层 需要将.vue文件挂载到 内存中
        !instance && getVueInstance();
        instance.$children[0].add({
            ...options,
            type:'success'
        });
    },
    info(){

    },
    warn(){}
}

export {
    Message
}

export default {
    // _Vue 是当前的构造函数 ,默认Vue.use 就会使用调用这个方法
    install(){
       let $message = {}
       Object.keys(Message).forEach(key=>{
            $message[key] = Message[key];
       })
       Vue.prototype.$message = $message
    }
}
