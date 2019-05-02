<template>
    <div id="links">
        <div class="item">
            <div class="item-left">
            </div>
            <div class="item-right">                    
                <a id="github-link" title="github" href="https://github.com/Cole-yu" target="_blank"></a>
                <div id="qq-link" title="QQ"></div>
                <a id="weibo-link" title="微博" href="https://weibo.com/coleyu19932" target="_blank"></a>
                <div id="weixin-link" title="微信"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#links{
    position: relative;
    margin-bottom: 15px;
}
.item{
    position: relative;
    width: 100%;
    overflow: hidden;      
}

.item-left{
    width: 300px;
    float: left;
    margin-bottom: -2000px;
    padding-bottom: 2000px;

}

.item-right{    
    padding: 0 30px;
    box-sizing: border-box;
    float: right;
    width: calc( 100% - 300px);
}

#github-link{
    float: left;
    width: 28px;
    height: 32px;
    background-image: url(../assets/images/icon.png);
    background-position:0px -6px; 
    cursor: pointer;
}
#github-link:hover{    
    background-position:0px -36px; 
}

#qq-link{
    margin-left: 10px;
    float: left;
    width: 28px;
    height: 32px;
    background-image: url(../assets/images/icon.png);
    background-position:-30px -6px;
    cursor: pointer;
}
#qq-link:hover{    
    background-position:-30px -36px; 
}

#weibo-link{
    margin-left: 10px;
    float: left;
    width: 28px;
    height: 32px;
    background-image: url(../assets/images/icon.png);
    background-position:0px -6px;
    cursor: pointer; 
}
#weibo-link:hover{    
    background-position:0px -36px; 
}

#weixin-link{
    margin-left: 10px;
    float: left;
    width: 28px;
    height: 32px;
    background-image: url(../assets/images/icon.png);
    background-position:0px -121px;
    cursor: pointer; 
}
#weixin-link:hover{    
    background-position:-30px -121px; 
}

</style>


