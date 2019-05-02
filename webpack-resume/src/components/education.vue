<template>
    <div id="education">
        <div class="item">
            <div class="item-left">
            </div>
            <div class="item-right">                    
                <h2 class="title-center" id="education-title">教育经历</h2>
            </div>
        </div>         
        <EducationItem v-for="item in educations" v-bind:key="item.index" v-bind:educationItem="item"></EducationItem>
    </div>
</template>

<script>
import EducationItem from './educationItem.vue';
export default {
    data(){
        return {
            educations:[
                {   
                    index:0,
                    educationContent:"专业描述：在大学期间所学的课程有《计算机组成原理与系统结构》、《数据结构》、《微型计算机技术》、《软件测试》、《计算机操作系统》、《c++程序设计》、《软件工程》、《设计模式》等",
                    educationDate:"2012/9 - 2016/6",
                    educationUniversity:"上海立信会计金融学院"
                }
            ]                    
        }
    },
    components:{
        EducationItem
    }
}
</script>

<style lang="scss" scoped>
#education{
    position: relative;
}
.item{
    position: relative;
    width: 100%;           
    
    // 方法一 实现成功
    // font-size: 0;

    // 方法二 失败，文字头部会有空白
    // overflow: hidden;

    // 方法三 实现成功
    overflow: hidden;      
}

.item-left{
    width: 300px;    
    
    // 方法一
    // display:inline-block;       
    
    // 方法二
    // float: left;

    // 方法三
    float: left;
    margin-bottom: -2000px;
    padding-bottom: 2000px;

}

.item-right{    
    padding: 0 30px;
    box-sizing: border-box;
    
    // 方法一
    // font-size: 14px;    
    // display: inline-block;    
    // width: calc(100% - 300px);

    // 方法二
    // margin-right: 300px;

    // 方法三
    float: right;
    width: calc( 100% - 300px);
}

.title-center{
    text-align: center;
}

#education-title:hover{
    cursor:wait;
    animation:they-axis-rotate 2s 3;
    -webkit-animation:they-axis-rotate 2s 3;
}

.content{
    text-align: left;
    text-indent: 2em;
    word-break: break-all;
}

.work-events{
    border-left: 5px solid #ff9f20;
    padding-left: 10px;
    margin-left: 30px;
}

.work-time{
    color: #ff9f20;
    padding-bottom: 5px;
}

.work-company{
    color: #333;
}
</style>