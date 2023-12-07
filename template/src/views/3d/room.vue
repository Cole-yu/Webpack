<template>
    <div class="room-wrap" ref="container"></div>
</template>

<script>
import Room3D from '@/js/room';
import roomIMG from '@/images/3d/room.jpg';
export default{
    data(){
        return {
            room3d: null,
        }
    },
    methods:{
        
    },
    mounted(){
        this.room3d = new Room3D(this.$refs.container, roomIMG);
        this.room3d.animate();

        document.addEventListener('mousedown', this.room3d.onDocumentMouseDown.bind(this.room3d), false);
        document.addEventListener('mousemove', this.room3d.onDocumentMouseMove.bind(this.room3d), false);
        document.addEventListener('mouseup', this.room3d.onDocumentMouseUp.bind(this.room3d), false);
        document.addEventListener('wheel', this.room3d.onDocumentMouseWheel.bind(this.room3d), false);

        // document.addEventListener('dragover', function(event) {
        //     event.preventDefault();
        //     event.dataTransfer.dropEffect = 'copy';
        // }, false);

        // document.addEventListener('dragenter', function(event) {
        //     document.body.style.opacity = 0.5;
        // }, false);

        // document.addEventListener('dragleave', function(event) {
        //     document.body.style.opacity = 1;
        // }, false);

        document.addEventListener('drop', function(event) {
            event.preventDefault();
            var reader = new FileReader();
            reader.addEventListener('load', function(event) {
                this.room3d.material.map.image.src = event.target.result;     //设置图片源
                this.room3d.material.map.needsUpdate = true;
            }, false);
            reader.readAsDataURL(event.dataTransfer.files[0]);
            document.body.style.opacity = 1;
        }, false);

        window.addEventListener('resize', this.room3d.onWindowResize.bind(this.room3d), false);
    },
    beforeDestroy(){

    }
}
</script>

<style lang="less">
.room-wrap{
    width: 100%;
    height: 100%;
}
</style>