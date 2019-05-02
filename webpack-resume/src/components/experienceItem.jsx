export default{
    props: ['projectDate', 'projectName','projectContent'],         // vue + jsx 从外部传入参数
    data(){
        return {
            
        }
    },    
    render(){        
        return (
            <div class="experience-item">
                <div class="item-left">
                    <div class="work-events">
                        <div class="work-time">{this.projectDate}</div>
                        <div class="work-project">{this.projectName}</div>
                    </div>
                </div>
                <div class="item-right">
                    <p class="content">{this.projectContent}</p>                                              
                </div>
            </div> 
        )
    }
}