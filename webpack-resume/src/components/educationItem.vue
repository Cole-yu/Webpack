<template>
    <div class="item">
        <div class="item-left">
            <div class="work-events">
                <div class="work-time">{{educationItem.educationDate}}</div>
                <div class="work-project">{{educationItem.educationUniversity}}</div>
            </div>
        </div>
        <div class="item-right">
            <p class="content">{{educationItem.educationContent}}</p>                                              
        </div>
    </div>
</template>

<script>
export default {
    props:{
        educationItem:{
            type:Object,
            required:true
        }        
    },
    data(){
        return {
                        
        }
    }
}
</script>

<style lang="scss" scoped>
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

