// import * as THREE from 'three';
// import * as THREE from '@/../public/static/js/three/0.158.0/three.module.min.js';
class Room3D{
  constructor(container, roomIMG){
    this.container = container;
    this.isUserInteracting = false;
    this.lon = 0;
    this.lat = 0;
    this.phi = 0;
    this.theta = 0;
    this.onMouseDownMouseX = 0;
    this.onMouseDownMouseY = 0;
    this.onMouseDownLon = 0;
    this.onMouseDownLat = 0;

    this.camera = new THREE.PerspectiveCamera(75, this.container.offsetWidth / this.container.offsetHeight, 1, 1100);
    this.camera.target = new THREE.Vector3(0, 0, 0);

    this.scene = new THREE.Scene();

    this.geometry = new THREE.SphereGeometry(500, 60, 40);
    // invert the geometry on the x-axis so that all of the faces point inward
    this.geometry.scale(-1, 1, 1);

    this.material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(roomIMG)
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    this.container.appendChild(this.renderer.domElement);
  }

  animate(){
    requestAnimationFrame(this.animate.bind(this));
    this.update();
  }

  update(){
    if (this.isUserInteracting === false) {
        this.lon += 0.1;
    }

    this.lat = Math.max(-85, Math.min(85, this.lat));
    this.phi = THREE.MathUtils.degToRad(90 - this.lat);
    this.theta = THREE.MathUtils.degToRad(this.lon);

    this.camera.target.x = 500 * Math.sin(this.phi) * Math.cos(this.theta);
    this.camera.target.y = 500 * Math.cos(this.phi);
    this.camera.target.z = 500 * Math.sin(this.phi) * Math.sin(this.theta);

    this.camera.lookAt(this.camera.target);
    // distortion
    // camera.position.copy( camera.target ).negate();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize(){
    this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
  }

  onDocumentMouseDown(event){
    event.preventDefault();
    this.isUserInteracting = true;
    this.onMouseDownMouseX = event.clientX;
    this.onMouseDownMouseY = event.clientY;
    this.onMouseDownLon = this.lon;
    this.onMouseDownLat = this.lat;  
  }
  
  onDocumentMouseMove(event){
    if (this.isUserInteracting === true) {
      this.lon = (this.onMouseDownMouseX - event.clientX) * 0.1 + this.onMouseDownLon;
      this.lat = (event.clientY - this.onMouseDownMouseY) * 0.1 + this.onMouseDownLat;
    }
  }
  
  onDocumentMouseUp(event){
    this.isUserInteracting = false;
  }
  
  onDocumentMouseWheel(event){
    let fov = this.camera.fov + event.deltaY * 0.05;
    this.camera.fov = THREE.MathUtils.clamp(fov, 10, 75);
    this.camera.updateProjectionMatrix();
  }
}

export default Room3D;