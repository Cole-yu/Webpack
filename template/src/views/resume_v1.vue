<template>
    <div class="container">
        <div class="content">
            <div class="top" id="top">
                <div class="photo">
                    <img src="@/images/resumev1/photo.png">
                </div>
                <div class="resume">
                    <h2>Cole-Yu</h2>
                    <div>Front-End Engineer</div>
                </div>
            </div>
            <div class="row" id="aboutme">
                <h2>关于我</h2>
                <p>本人拥有二年的企业开发项目经验,对SPA开发方式及Restful设计模式有独立的见解。熟练运用HTML5/CSS3/Javascript/jQuery,尤其在JS方面,有自己深刻的认识。掌握Ajax与服务器端的数据交互,了解计算机网络相关知识(HTTP、TCP、UDP等网络通讯),熟悉angular、Bootstrap、easyUI等前端框架,能独立处理常见浏览器及移动设备的兼容性相关问题,也研究过Node.js等后端相关内容;熟悉W3C和ES6标准,学习过函数式及响应式编程思想。对工作认真负责,肯钻研,有良好的沟通和团队协作能力。
                </p>
            </div>
            <div class="row" id="information">
                <h2>基本信息</h2>
                <div class="items">
                    <h3>毕业院校</h3>
                    <p>上海立信会计金融学院</p>
                </div>
                <div class="items">
                    <h3>专业</h3>
                    <p>计算机科学与技术</p>
                </div>
                <div class="items">
                    <h3>学历/学位</h3>
                    <p>本科</p>
                </div>
                <div class="items">
                    <h3>出生日期</h3>
                    <p>1993.11.28</p>
                </div>
                <div class="items">
                    <h3>电话</h3>
                    <p>18817934440</p>
                </div>
                <div class="items">
                    <h3>邮箱</h3>
                    <p>1032577646@qq.com</p>
                </div>
            </div>
            <div class="row" id="experience">
                <h2>项目经验</h2>
                <div class="item-exp">
                    <div class="befo_Line">
                        <h3>2017/10-2017/11</h3>
                        <span>重庆医药信息云门户</span>
                    </div>
                    <p class="description">
                        该企业ERP项目的主要功能模块分为流程管理，审批管理，知识中心，管理中心，个人中心等内容；与3名同事共同努力下完成了知识中心的的知识收藏，上传，我的分享，分享给我，回收站，荣誉墙，知识管理，权限查看及高级搜索等功能。
                    </p>
                    <p class="duty">
                        根据接口文档向后端发起get,post,put,delete请求，获取前端需要的数据，并对数据进行处理，使其呈现在相应的内容上。同时负责“我的分享”的业务模块功能，实现删除，更新，收藏，评论，打印，下载，附件查看等功能。
                    </p>
                </div>
                <div class="item-exp">
                    <div class="befo_Line">
                        <h3>2017/03-2017/04</h3>
                        <span>黄山旅游管理云平台</span>
                    </div>
                    <p class="description">
                        该项目主要模块分为首页，个人中心，新闻中心，维度中心，流程中心，知识中心等内容；与3名同事共同努力下完成维度中心的功能模块，实现根据维度展示列表，供用户选择组织和人员。</p>
                    <p class="duty">首页功能实现，当路由导航到首页时，向后端发起请求，将内容展示在首页上，内容包括个人信息，应用中心，热点新闻，便携操作，日程，流程中心，通知公告等几块内容。</p>
                </div>
                <div class="item-exp">
                    <div class="befo_Line">
                        <h3>2015/12-2016/06</h3>
                        <span>银行基建档案管理系统</span>
                    </div>
                    <p class="description">
                        该项目分为普通用户和管理员两个角色。普通用户可以根据档案的编号及名称、制作人、制作日期范围搜索文档，用户可以登陆及注册账号。管理员可以管理文档和用户，查看普通用户的借阅信息。该项目是一个B/S模式实现的网站项目，前端负责收集用户提交的数据，在后端处理业务逻辑，实现数据的查询，新增，修改，删除，并将结果返回给前端。
                    </p>
                    <p class="duty">负责整理前期的需求，用户的登陆及注册功能，页面新建时的表单数据验证，如有错误，通过Ajax进行局部刷新，在后台从数据库上获取数据，处理用户请求，数据库表（SQL
                        Server)的设计。</p>
                </div>
            </div>
            <div class="row" id="skill">
                <h2>我擅长的</h2>
                <div class="skill_items">
                    <p>Adobe Photoshop</p>
                    <div class="skill_items_bg">
                        <div class="skill_items_value">熟练</div>
                    </div>
                </div>
                <div class="skill_items">
                    <p>Adobe Illstrator</p>
                    <div class="skill_items_bg">
                        <div class="skill_items_value">熟练</div>
                    </div>
                </div>
                <div class="skill_items">
                    <p>Js/Jquery</p>
                    <div class="skill_items_bg">
                        <div class="skill_items_value">熟练</div>
                    </div>
                </div>
                <div class="skill_items">
                    <p>Html/Css</p>
                    <div class="skill_items_bg">
                        <div class="skill_items_value">熟练</div>
                    </div>
                </div>
                <div class="skill_items">
                    <p>Node.js</p>
                    <div class="skill_items_bg">
                        <div class="skill_items_value">熟练</div>
                    </div>
                </div>
                <div class="skill_items">
                    <p>Axure</p>
                    <div class="skill_items_bg">
                        <div class="skill_items_value">熟练</div>
                    </div>
                </div>
                <div class="skill_items">
                    <p>C#</p>
                    <div class="skill_items_bg">
                        <div class="skill_items_value">熟练</div>
                    </div>
                </div>
            </div>
            <div class="row" id="education">
                <h2>教育状况</h2>
                <div class="befo_Line">
                    <h3>2012/9-2016/6</h3>
                    <span>上海立信会计金融学院</span>
                </div>
                <p>专业描述：在大学期间所学的课程有《计算机组成原理与系统结构》、《数据结构》、《微型计算机技术》、《软件测试》、《计算机操作系统》、《c++程序设计》、《软件工程》、《设计模式》等</p>
            </div>        
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
h2{
    color:#ff9f20;
    font-size: 0.38rem;
}
h3{
    color:#ff9f20;
    font-size: 0.3rem;
}
p{
    line-height: 1.4;
}
.content{
	margin: 0 0.2rem;
	width: 7.1rem;
}
.home{
	float: right;	
	margin-right: 0.5rem;
	width: 0.5rem; 
	height: 0.72rem;	
	position: relative;
	cursor: pointer;
}
.home img{
	width: 100%;
	height: auto;	
	margin: auto;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	position: absolute;
}
.menu_list{	
	clear: both;
}
.hide{
	display: none;
}
.menu_list ul{

}
.menu_list ul li{
	border: 1px solid #ddd;	
}
.menu_list ul li a{
	text-decoration: none;
}
.menu_list ul li a span{
	display: block;
	height: 0.6rem;
	line-height: 0.6rem;	
	text-align: center;
	font-family:'Georgia', Helvetica;
	font-weight: 700;	
	color: #7f74d5;
}
.row{
 	overflow: hidden;  	
 	width: 100%;
	padding-bottom: 0.15rem;
}
.top{
	display: flex;
	align-items:center;
	width: 100%;
	padding-top: 0.1rem;	
}
.photo{
	width: 2rem;	
	text-align: center;
	float: left
}
.photo img{
	width: 50%;
	height: auto;	
}
.resume{	
	width: 5.1rem;	
	float: left;
}
.row>h2{
	text-align: center;
}
.row p{	
	word-break: break-all;	
}
.items{
	padding-bottom: 0.1rem;
}
.items p{
	font-weight: 500;
	padding: 2px;
}
h2~p{
	text-indent: 2em;
}

.befo_Line{
	border-left: 5px solid #ff9f20;
	padding-left: 6px;
	margin-top: 0.05rem;
}
.befo_Line h3{
	display: inline-block;
	padding: 2px;
}
.befo_Line span{
	display: inline-block;
	margin-left: 0.3rem;
	font-weight: 600;
	padding: 2px;	
}
.skill_items p{
	padding: 2px 0;
}
.skill_items{
	padding-bottom: 3px;
}
.skill_items_bg{	
	width: 7.1rem;
	height: 0.4rem;
	background-color: #ddd;
	border-radius: 0.2rem;
	display: block;
}
.skill_items_value{
	width: 3rem;
	height: 0.4rem;
	line-height: 0.4rem;
	background-color:#ff9f20;
	border-radius: 0.2rem;
	display: block;
	text-align: center;
	color: white;
}

.item-exp{
	padding: 0.1rem 0;
}

.item-exp p{
	text-indent: 2em;
}
.description::before{
	content: "项目描述:";
    color: #ff9f20;
    font-size: 0.16rem;
    font-weight: 550;
}
.duty::before{
	content:"责任描述:";
	color: #ff9f20;
    font-size: 0.16rem;
    font-weight: 550;
}
</style>