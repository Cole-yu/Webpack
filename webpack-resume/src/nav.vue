<template>    
    <div class="radmenu">        
        <a href="#" class="show" >START</a>
        <ul>
            <li>
            <a href="#" class="">Menu 1</a>
            <ul>
                <li><a href="#">Sub Menu 1</a></li>
                <li><a href="#">Sub Menu 2</a></li>
                <li><a href="#">Sub Menu 3</a></li>
                <li><a href="#">Sub Menu 4</a></li>
                <li><a href="#">Sub Menu 5</a></li>
            </ul>
            </li>
            <li>
            <a href="#">Menu 2</a>
            <ul>
                <li><a href="#">Sub Menu 1</a></li>
                <li><a href="#">Sub Menu 2</a></li>
                <li><a href="#">Sub Menu 3</a></li>
                <li><a href="#">Sub Menu 4</a></li>
                <li><a href="#">Sub Menu 5</a></li>
            </ul>
            </li>
            <li>
            <a href="#">Menu 3</a>
            <ul>
                <li><a href="#">Sub Menu 1</a></li>
                <li><a href="#">Sub Menu 2</a></li>
                <li><a href="#">Sub Menu 3</a></li>
                <li><a href="#">Sub Menu 4</a></li>
                <li><a href="#">Sub Menu 5</a></li>
            </ul>
            </li>
            <li>
            <a href="#">Menu 4</a>
            <ul>
                <li><a href="#">Sub Menu 1</a></li>
                <li><a href="#">Sub Menu 2</a></li>
                <li><a href="#">Sub Menu 3</a></li>
                <li><a href="#">Sub Menu 4</a></li>
                <li><a href="#">Sub Menu 5</a></li>
            </ul>
            </li>
            <li>
            <a href="#">Menu 5</a>
            <ul>
                <li><a href="#">Sub Menu 1</a></li>
                <li><a href="#">Sub Menu 2</a></li>
                <li><a href="#">Sub Menu 3</a></li>
                <li><a href="#">Sub Menu 4</a></li>
                <li><a href="#">Sub Menu 5</a></li>
            </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import "./assets/styles/nav/reset.css";
import "./assets/styles/nav/style.css";

export default {
    methods:{
        init(){
            NaviInit();
        }
    },
    beforeCreate(){
        console.log("beforeCreate");    
    },
    created(){
        console.log("created");        
    },
    beforeMount(){
        console.log("beforeMount");        
    },
    mounted(){
        console.log("在组件被安装好后初始化js脚本");
        console.log("mounted");
        this.init();
    },
    beforeUpdate(){
        console.log("beforeUpdate");        
    },
    updated(){
        console.log("updated");        
    },
    beforeDestroy(){
        console.log("beforeDestroy");        
    },
    destroyed(){
        console.log("destroyed");        
    },
}

function NaviInit(){
  var buttons = document.querySelectorAll(".radmenu a");

  for (var i=0, l=buttons.length; i<l; i++) {
    var button = buttons[i];
    button.onclick = setSelected;
  }
  
  function setSelected(e) {
      if (this.classList.contains("selected")) {
        this.classList.remove("selected");
        if (!this.parentNode.classList.contains("radmenu")) {
          this.parentNode.parentNode.parentNode.querySelector("a").classList.add("selected")
        } else {
          this.classList.add("show");
        }
      } else {
        this.classList.add("selected");
        if (!this.parentNode.classList.contains("radmenu")) {
          this.parentNode.parentNode.parentNode.querySelector("a").classList.remove("selected")
        } else {
          this.classList.remove("show");
        }
      }
      return false;
  }
}
</script>

<style lang="scss" scoped>

</style>


