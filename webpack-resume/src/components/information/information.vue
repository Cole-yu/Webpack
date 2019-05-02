<template>
    <div class="chunk">
       <InformationItems v-for="value in infors" v-bind:key="value.index" v-bind:informationItems="value"></InformationItems>
    </div>
</template>

<script>
import InformationItems from './informationItem.vue';

export default{
    components:{
        InformationItems
    },
    data(){
        return {
            infors:[
                {
                    index:0,
                    title:"毕业院校",
                    value:"上海立信会计金融学院"
                },
                {
                    index:1,
                    title:"专业",
                    value:"计算机科学与技术"
                },
                {
                    index:2,
                    title:"学历/学位",
                    value:"本科"
                },
                {
                    index:3,
                    title:"出生日期",
                    value:"1993.11.28"
                },
                {
                    index:4,
                    title:"电话",
                    value:"18817934440"
                },
                {
                    index:5,
                    title:"邮箱",
                    value:"18817934440@163.com"
                }
            ]            
        }
    }
}
</script>

<style lang="scss" scoped>
    .chunk{
        position: relative;
    }        
</style>
