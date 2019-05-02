<template>
    <div class="insformations-item">
        <h3 class="item-title">{{informationItems.title}}</h3>
        <p class="item-value">{{informationItems.value}}</p>        
    </div>
</template>

<script>
export default {
    props:{
        informationItems:{
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
    .insformations-item{
        padding-left:30px;
        text-align: left;        
    }
    .item-title{
        color:#ff9f20;
        font-size: 16px;
        padding:5px;
    }
    .item-value{
        color:white;
        padding-left:10px;
    }
</style>