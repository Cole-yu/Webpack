<template>
    <div id="life">
        <ul class="navi">		
            <li @click="showChange">Resume</li>
            <li @click="showChange">Nav</li>
            <li @click="showChange">Life</li>
            <li @click="toChange">archive</li>
            <li @click="toDrinkWater">Sleep</li>
        </ul>

        <div id="steps">
            <div class="step-year">
                <h1 class="item-year">2019</h1>
            </div>
            <div class="step-month">
                <h1 class="item-month">8月</h1>
            </div>
            <a href="javascript:void(0);">
                <div class="content">
                    {{note}}
                </div>	
            </a>		
            <div class="step-month">
                <h1 class="item-month">7月</h1>
            </div>
            <div class="month-value">
                <a href="javascript:void(0);" class="month-summary">
                    <div class="content">
                        一个常见需求的nginx配置踩雷
                    </div>	
                </a>
                <a href="javascript:void(0);" class="month-summary">
                    <div class="content">
                        一个常见需求的nginx配置踩雷
                    </div>	
                </a>
                <a href="javascript:void(0);" class="month-summary">
                    <div class="content">
                        一个常见需求的nginx配置踩雷
                    </div>	
                </a>
                <a href="javascript:void(0);" class="month-summary">
                    <div class="content">
                        一个常见需求的nginx配置踩雷
                    </div>	
                </a>
                <!-- 清除浮动 方法二 -->
                <!-- <br clear="all"> -->	
            </div>		
            <div class="step-month">
                <h1 class="item-month">6月</h1>
            </div>
            <a href="javascript:void(0);">
                <div class="content">
                    一个常见需求的nginx配置踩雷
                </div>	
            </a>
            <div class="step-year">
                <h1 class="item-year">2018</h1>
            </div>		
            <div class="step-month">
                <h1 class="item-month">12月</h1>
            </div>
            <a href="javascript:void(0);">
                <div class="content">
                    一个常见需求的nginx配置踩雷
                </div>	
            </a>
            <div class="step-month">
                <h1 class="item-month">11月</h1>
            </div>
            <a href="javascript:void(0);">
                <div class="content">
                    一个常见需求的nginx配置踩雷
                </div>	
            </a>
            <div class="step-month">
                <h1 class="item-month">10月</h1>
            </div>
            <a href="javascript:void(0);">
                <div class="content">
                    一个常见需求的nginx配置踩雷
                </div>	
            </a>
        </div>
    </div>  
</template>

<script>
export default {    
    data(){
        return {
           
        }
    },
    computed:{        
        note(){
            // this.$store.state 获取值
            // this.$store.getters 通过get方法获取值
            console.log(this.$store.state.b.note);          // 获取 moduleB 的状态
            console.log(this.$store.getters.getNotes);      // 获取 moduleB 的 getter 中的方法，不需要添加 模块信息，但是方法不能一样
            return this.$store.state.a.note;                // 获取 moduleA 的状态
        }
    },
    methods:{
        toChange(){
            this.$store.dispatch('changeGirlFriend');
        },
        async toDrinkWater(){
            // 使用 mutation ，必须是同步函数
            // this.$store.commit("toSleep",{
            //     time:1000
            // });

            // 使用 action 的分发，可以是异步函数
            // this.$store.dispatch("eatLunch" , {
            //     time:1000
            // });

            // 异步函数，会先执行 actions 中 run 返回的结果，在处理 run 方法中的dispatch
            // this.$store.dispatch("run").then( val => console.log(val) );   
            
            await this.$store.dispatch("drinkWater").then( val => console.log(val) );            
        },
        showChange($event){
            switch($event.target.innerText){
                case "Resume":{
                    this.$emit('showChange',"App");
                    break;
                };
                case "Nav":{
                    this.$emit('showChange',"Nav");
                    break;
                };
                case "Life":{
                    console.log("You are already in Life");
                    break;
                }
                default:{
                    console.log("Not found,you will goto Life");
                    this.$emit('showChange',"Life");                    
                }                    
            }                

            // 方法一
            // this.$emit('showChange',"App");            

            // 方法二
            // this.$parent.currentTabComponent='App';
        }       
    }
}
</script>

<style lang="scss" scoped>
a{
	color:#66ffff;
	text-decoration:none;
}

/*未被访问*/
a:link{
	color:#66ffff;
} 
/*已经被访问*/
a:visited,a:active,a:focus{
	color:#66ffff;
} 
/*悬停,激活选中,获取焦点*/
a:hover{
	color:#33ccff;
	text-decoration:none;
}
#life{
    background-image: url(./assets/images/bg.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	font-size:12px;
	color:#333;	
	padding-top:30px;
	font-family: "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
}


ul.navi{
	position: fixed;
	top: 0;
	left:0;
}

.navi li{	
	width: 130px;
	height: 130px;
	border-radius:50%;
	box-shadow: inset 0px 0px 50px 10px rgba(255,255,255,0.67);
	-webkit-box-shadow: inset 0px 0px 50px 10px rgba(255,255,255,0.67);
	font-size:24px;
	line-height: 130px;
	text-align: center;
	color: white;
	cursor: pointer;
	margin-left: 30px;
	margin-top: 30px;	
}

.navi li:hover{
	color:#ff9900;
}

.navi li:nth-child(0){
	background-color: rgba(34, 34, 34, 0.89);	
}
.navi li:nth-child(1){
	background-color: rgba(102, 255, 255, 0.79);
}
.navi li:nth-child(2){
	background-color: rgba(102, 204, 102, 0.8);
}
.navi li:nth-child(3){
	background-color: rgba(204, 204, 255, 0.87);
}

#steps{
	position: relative;
	// margin:30px 30px 30px 300px;
    margin-left: 300px;
	padding-left: 30px;
    border-left: #FF9900 solid 2px;
    padding-bottom:30px;
    // padding-top: 30px;
    padding-right: 30px;
}

.step-year{
	color: white;
	font-size: 18px;
	position: relative;
	left: -65px;
}

.step-year:before{
	float: left;
	display: inline-block;
    content: "";
    background-color: #006600;
    background-image: url(./assets/images/title.png);
    background-size: 80% 80%;
    background-position: 35px 35px;
    width: 431px;
    height: 431px;
    position: relative;
    zoom: 0.15;
    border-radius: 50%;
    background-repeat: no-repeat;
    border: 30px solid #009900;
    box-shadow: 0px 0px 20px 20px #009900;
    box-sizing: border-box;
}
.item-year{
	line-height: 65px;
	margin-left:90px;
}

.step-month{	
	color: white;
	font-size: 14px;
	position: relative;
	left: -65px;
}

.step-month:before{
	float: left;
    display: inline-block;
    content: "";
    background-color: #006600;
    background-image: url(./assets/images/title.png);
    background-size: 80% 80%;
    background-position: 35px 35px;
    width: 431px;
    height: 431px;
    position: relative;
    zoom: 0.1;
    border-radius: 50%;
    background-repeat: no-repeat;
    border: 30px solid #009900;
    box-shadow: 0px 0px 20px 20px #009900;
    box-sizing: border-box;
    transform: translate(50%,50%);
    margin-left: -100px;
    margin-top: -130px;
}
.item-month{
	line-height: 65px;
	margin-left:70px;
}

.content{
	font-size: 20px;
    word-break: break-word;	
	width: 237px;
	padding: 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.33);
    margin-bottom: 20px;
    -webkit-box-shadow: 0px 0px 70px 10px #CCFFCC;
    -moz-box-shadow: 0px 0px 70px 10px #CCFFCC;
    box-shadow: 3px 10px 10px 0px #CCFFCC;
}

.month-summary{
	float: left;
	margin-right: 30px;	
}

/*清除浮动 方法一*/
/*.month-value{
	overflow: hidden;	
}*/

/*清除浮动 方法三 推荐*/
.month-value::after{	
	content: "";
	display: block;
	clear: both;
	visibility: hidden;
}

@media screen and (max-width: 415px) {
    ul.navi{
        display: none;
    }

    #steps{
        margin-left: 45px;
    }

}
</style>

