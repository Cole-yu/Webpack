<template>
    <div class="mode-wrap">
        <ul class="list-wrap">
            <li class="mode" v-for="mode in list" :key="mode.key" @click="goViewHandle(mode)">{{mode.title}}</li>
        </ul>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    data(){
        return {
            list: [
                {
                    key: 'singleton',
                    title: '单例模式',
                },
                {
                    key: 'factory',
                    title: '工厂模式',
                },
                {
                    key: 'prototype',
                    title: '原型链模式',
                },
            ]
        }
    },
    methods: {
        goViewHandle(mode){
            this.$router.push({
                name: mode.key,
            })
        }
    }
}
</script>

<style lang="less">
.mode-wrap{
    font-size: 0.32rem;
    padding: 0.2rem;    
    .list-wrap{
        color: #ef5050;
        .mode{
            height: 0.4rem;
            line-height: 0.4rem;
        }
    }
}

</style>