import "../assets/styles/experience.scss";
import ExperienceItem from "./experienceItem.jsx";

export default{
    data(){
        return {
            projectItems:[
                {
                    projectDate:"2017/10 - 2017/11",
                    projectName:"重庆医药信息云门户",
                    projectContent:"该企业ERP项目的主要功能模块分为流程管理，审批管理，知识中心，管理中心，个人中心等内容；与3名同事共同努力下完成了知识中心的的知识收藏，上传，我的分享，分享给我，回收站，荣誉墙，知识管理，权限查看及高级搜索等功能。"
                },
                {
                    projectDate:"2017/03 - 2017/04",
                    projectName:"黄山旅游管理云平台",
                    projectContent:"该企业ERP项目的主要功能模块分为流程管理，审批管理，知识中心，管理中心，个人中心等内容；与3名同事共同努力下完成了知识中心的的知识收藏，上传，我的分享，分享给我，回收站，荣誉墙，知识管理，权限查看及高级搜索等功能。/S模式实现的网站项目，前端负责收集用户提交的数据，在后端处理业务逻辑，实现数据的查询，新增，修改，删除，并将结果返回给前端。"
                },
                {
                    projectDate:"2015/12 - 2016/06",
                    projectName:"银行基建档案管理系统",
                    projectContent:"该项目分为普通用户和管理员两个角色。普通用户可以根据档案的编号及名称、制作人、制作日期范围搜索文档，用户可以登陆及注册账号。管理员可以管理文档和用户，查看普通用户的借阅信息。该项目是一个B/S模式实现的网站项目，前端负责收集用户提交的数据，在后端处理业务逻辑，实现数据的查询，新增，修改，删除，并将结果返回给前端。"
                }
            ]
        }
    },
    render(){        
        return (
            <div id="experience">
                <div class="experience-item">
                    <div class="item-left">
                    </div>
                    <div class="item-right">                    
                        <h1 class="title-center" id="experience-title">项目经验</h1>
                    </div>
                </div>

                {/* 遍历<对象>数组迭代生成组件 */}
                {
                    this.projectItems.map( value => {
                        return <ExperienceItem  projectDate = {value.projectDate}
                                                projectName = {value.projectName}
                                                projectContent = {value.projectContent}  
                                />;
                    })
                }
            </div>
        )
    }
}