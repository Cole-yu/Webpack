import "../assets/styles/aboutMe.scss";

export default{
    data(){
        return {
            content:"本人拥有二年的企业开发项目经验,对SPA开发方式及Restful设计模式有独立的见解。熟练运用HTML5/CSS3/Javascript/jQuery,尤其在JS方面,有自己深刻的认识。掌握Ajax与服务器端的数据交互,了解计算机网络相关知识(HTTP、TCP、UDP等网络通讯),熟悉angular、Bootstrap、easyUI等前端框架,能独立处理常见浏览器及移动设备的兼容性相关问题,也研究过Node.js等后端相关内容;熟悉W3C和ES6标准,学习过函数式及响应式编程思想。对工作认真负责,肯钻研,有良好的沟通和团队协作能力。"
        }
    },
    render(){
        return (
            <div id="aboutMe">            
                <div class="aboutMe-left">
                </div>
                <div class="aboutMe-right">                    
                    <h1 class="title-center" id="aboutMe-title">关于我</h1>
                    <p class="content">{this.content}</p>                                              
                </div>
            </div>
        )
    }
}