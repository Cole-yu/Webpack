<template>
    <div class="app-wrap">
        <Resume />
        
        <!-- <el-carousel :interval="4000" type="card" height="2.36rem" id="carousel" arrow="never">
            <el-carousel-item v-for="(url, index) in list" :key="index">
                <div class="v-wrap" @click="clickImgHandle(url)">
                    <img :src="url">
                </div>
            </el-carousel-item>
        </el-carousel>
        
        <div class="view-container" v-if="viewImgUrl" @click="viewImgUrl=null">
            <div class="view-wrap">
                <img :src="viewImgUrl" alt="">
            </div>
        </div> -->
    </div>
</template>

<script>
import Resume from '@/components/resume';
import a1 from '@/image/animal/a_01.jpg';
import a2 from '@/image/animal/a_02.jpg';
import a3 from '@/image/animal/a_03.jpg';
import a4 from '@/image/animal/a_04.jpg';
import a5 from '@/image/animal/a_05.jpg';
import { getName } from '@/js/foo';
export default{
    components:{
        Resume
    },
    data(){
        return {
            list:[
                a1,
                a2,
                a3,
                a4,
                a5
            ],
            viewImgUrl: null,
        }
    },
    methods:{
        clickImgHandle: function(url){
            this.viewImgUrl = url;
        },
        async get(){
            let result = await getName();
            console.log('result', result);
        }
    },
    created(){
        this.get();
    }
}
</script>

<style lang="less">
.title{
    color: blue  ;
    font-size: 0.48rem;
}
#carousel{
    margin-top: 0.4rem;
}
.view-container{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
    .view-wrap{
        position: relative;
        top: 16%;
        width: 100%;
        height: 6rem;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
.el-carousel__button{
    width: 0.4rem!important;
    height: 0.04rem!important;
}
</style>