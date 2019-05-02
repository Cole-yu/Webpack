<template>
    <div id="photo">
        <div id="header-photo"></div>
        <p id="chinese-name">{{chineseName}}</p>
        <div id="profession">{{profession}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            chineseName:"喻飞翔", 
            profession:"Font-End Engineer"
        }
    }
}
</script>

<style lang="scss" scoped>
    #photo{
        width: 100%;             
        padding:20px;
        box-sizing: border-box;        
    }

    #header-photo{
        width: 120px;
        height: 160px;
        margin: 0 auto;
        background-image: url(../assets/images/photo.png);
        background-size: 100% 100%;
        border-radius: 10px;
    }
    #chinese-name{
        color:#ff9f20;
        text-align: center;
        padding:5px;
        font-size: 16px;
    }

    #profession{
        color: white;
        text-align: center;
    }
</style>


