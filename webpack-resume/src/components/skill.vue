<template>
    <div class="chunk">
        <h3 class="title">我擅长的</h3>
        <SkillListItem v-for="skillItem in skillLists" :key="skillItem.id" v-bind:skillName="skillItem.name"></SkillListItem>
    </div>
</template>

<script>
import SkillListItem from "./skillListItem/skillListItem.vue";
export default {
    data(){
        return {
            skillLists:[
                {
                    index:0,
                    name:"Webpack前端项目自动化构建"
                },
                {
                    index:1,
                    name:"AngularJs + SeaJs + Jquery + Echarts"
                },
                {
                    index:2,
                    name:"Vue + VueX + Vue-Router + Webpack"
                },
                {
                    index:3,
                    name:"Angular + Typescript + RxJS + BootStrap"
                },
                {
                    index:4,
                    name:"Gulp,Grunt"
                },
                {
                    index:5,
                    name:"AMD,CMD,UMD,ESM,RuquireJs,CommonJs"
                },
                {
                    index:6,
                    name:"ES6,ES7,ES8"
                },
                {
                    index:7,
                    name:"Node.js,Express"
                },
                {
                    index:8,
                    name:"JavaSE,JavaEE,Spring,SpringMVC,Struts2"
                },
                {
                    index:9,
                    name:"大数据可视化方案：Echarts,NVD3,d3.js,SVG,Canvas,WebGL,Three.js"
                },
            ]
        }
    },
    components:{
        SkillListItem
    }
}
</script>

<style lang="scss" scoped>
    .chunk{
        padding-left: 30px;
        text-align: left;
        padding-top:15px;
    }
    .title{
        color:#ff9f20;
        font-size: 16px;
        padding:5px;
    }    
</style>
