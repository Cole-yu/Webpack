<template>
    <div id="main">
        <!-- 通过动态组件的方式切换内容 -->
        <!-- <component v-bind:is="currentTabComponent" @showChange="showChange"></component> -->        

        <!-- 通过路由的方式切换内容 -->
        <router-link to="/app">Go to App</router-link>
        <router-link to="/life">Go to Life</router-link>
        <router-link to="/nav">Go to Nav</router-link>        
        <router-view></router-view>
    </div>
</template>

<script>
// import App from "./app.vue";
// import Life from "./life.vue";
// import Nav from "./nav.vue";
import store from './store/store.js';           //引入store
import router from './router/router.js';

export default {
    data(){
        return {
            currentTabComponent:"Life"
        }
    },
    router,
    store,
    components:{
        // App,
        // Life,
        // Nav
    },
    methods:{
        showChange(data){
            this.currentTabComponent=data;
        }        
    }    
}
</script>

<style lang="scss" scoped>
    #main{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>


