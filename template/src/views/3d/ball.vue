<template>
    <div class="ball-wrap">
        <canvas 
            id='canvas'
            ref="canvas"
            width="1000"
            height="500"
        >
            浏览器不支持canvas，请更新浏览器后再浏览
        </canvas>
        <div class="btn-wrap">
            <button @click="stopHandle">{{stopFlag ? "开始" : "停止"}}</button>
        </div>
        <a href="https://www.w3cplus.com/canvas/create-3d-ball-with-canvas.html">参考链接</a>
    </div>
</template>

<script>
import { Animation } from '@/js/ball';
export default{
    data(){
        return {
            animation: null,
            stopFlag: false,
        }
    },
    methods:{
        stopHandle(){
            this.stopFlag ? this.animation.start() : this.animation.stop();
            this.stopFlag = !this.stopFlag;
        },
        // 移动鼠标事件
        mouseEventListener(event){
            if(!this.$refs.canvas || !this.animation){
                return;
            }
            let x = event.clientX - this.$refs.canvas.offsetLeft - this.animation.vpx;
            let y = event.clientY - this.$refs.canvas.offsetTop - this.animation.vpy;

            this.animation.angleY = -x * 0.0001;
            this.animation.angleX = -y * 0.0001;
        },
        initEventListener(){
            window.addEventListener("mousemove" , event => {
                this.mouseEventListener(event);
            });
        },
        removeEventListener(){
            window.removeEventListener("mousemove" , event => {
                this.mouseEventListener(event);
            });
        }
    },
    mounted(){
        this.animation = new Animation(this.$refs.canvas);
        this.animation.start();

        this.initEventListener();
    },
    beforeDestroy(){
        this.removeEventListener();
    }
}

</script>

<style lang="less">
.ball-wrap{
    height: 100%;
    canvas{
        // width: 100%;
        // height: 10rem;
    }
    .btn-wrap{
        text-align: center;
    }
}
</style>