class Animation {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.vpx = this.canvas.width / 2;
        this.vpy = this.canvas.height / 2;
        this.Radius = 150; // 整体大球的坐标
        this.LayerBallNum = 360 / 15; // 横向
        this.LayerIntervalUp = 360 / 15;
        this.balls = [];
        this.angleX = Math.PI/100;
        this.angleY = Math.PI/100;
        this.isrunning = false;
        this.init();
    }

    init() {
        let num = this.LayerIntervalUp / 2; // Layer 的数目，假定每一层间隔30画上半球        
        for (let i = 0; i <= num; i++) {
            let l = new Layer(i, 1, this);
            l.draw();
            let j = new Layer(i, -1, this);
            j.draw();
        }
    }

    start() {
        this.isrunning = true;
        this.animate();
    }

    stop() {
        this.isrunning = false;
    }

    animate() {
        if(!this.ctx || !this.ctx.clearRect){
            return;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.rotateX();
        this.rotateY();
        this.rotateZ();

        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].paint();
        }

        if (this.isrunning) {
            if ("requestAnimationFrame" in window) {
                requestAnimationFrame(this.animate.bind(this));
            }
            else if ("webkitRequestAnimationFrame" in window) {
                webkitRequestAnimationFrame(this.animate.bind(this));
            }
            else if ("msRequestAnimationFrame" in window) {
                msRequestAnimationFrame(this.animate.bind(this));
            }
            else if ("mozRequestAnimationFrame" in window) {
                mozRequestAnimationFrame(this.animate.bind(this));
            }
        }
    }

    rotateX() {
        let cos = Math.cos(this.angleX);
        let sin = Math.sin(this.angleX);
        for (let i = 0; i < this.balls.length; i++) {
            let y1 = this.balls[i].y * cos - this.balls[i].z * sin;
            let z1 = this.balls[i].z * cos + this.balls[i].y * sin;
            this.balls[i].y = y1;
            this.balls[i].z = z1;
        }
    }

    rotateY() {
        let cos = Math.cos(this.angleY);
        let sin = Math.sin(this.angleY);
        for (let i = 0; i < this.balls.length; i++) {
            let x1 = this.balls[i].x * cos - this.balls[i].z * sin;
            let z1 = this.balls[i].z * cos + this.balls[i].x * sin;
            this.balls[i].x = x1;
            this.balls[i].z = z1;
        }
    }

    rotateZ() {
        let cos = Math.cos(this.angleY);
        let sin = Math.sin(this.angleY);
        for (let i = 0; i < this.balls.length; i++) {
            let x1 = this.balls[i].x * cos - this.balls[i].y * sin;
            let y1 = this.balls[i].y * cos + this.balls[i].x * sin;
            this.balls[i].x = x1;
            this.balls[i].y = y1;
        }
    }
}

class Layer{
    constructor(num, up, animate) {
        this.animate = animate;
        this.ctx = this.animate.ctx;
        this.Radius = this.animate.Radius;
        this.LayerBallNum = this.animate.LayerBallNum;
        this.balls = this.animate.balls;
        this.vpx = this.animate.vpx;
        this.vpy = this.animate.vpy;

        this.radius = Math.sqrt(Math.pow(this.Radius, 2) - Math.pow(this.Radius * Math.cos(num * Math.PI * 2 / this.LayerBallNum), 2))
        this.x = 0;
        this.y = 0;
        this.up = up;
    }

    setBalls(radius) {
        for (let i = 0; i < this.LayerBallNum; i++) {
            let angle = 2 * Math.PI / this.LayerBallNum * i;
            let b = new Ball(radius * Math.cos(angle), radius * Math.sin(angle), this.up * Math.sqrt(Math.pow(this.Radius, 2) - Math.pow(radius, 2)), 1.5, this.animate);
            b.paint();
            this.balls.push(b);
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.vpx, this.vpy, this.radius, 0, 2 * Math.PI, true);
        this.ctx.strokeStyle = "#FFF";
        this.ctx.stroke();
        this.setBalls(this.radius);
    }
}

class Ball{
    constructor(x, y, z, r, animate) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
        this.width = 2 * r;

        this.animate = animate;
        this.ctx = this.animate.ctx;
        this.Radius = this.animate.Radius;
        this.vpx = this.animate.vpx;
        this.vpy = this.animate.vpy;
    }

    paint() {
        let fl = 450 //焦距
        this.ctx.save();
        this.ctx.beginPath();
        let scale = fl / (fl - this.z);
        let alpha = (this.z + this.Radius) / (2 * this.Radius);
        this.ctx.arc(this.vpx + this.x, this.vpy + this.y, this.r * scale, 0, 2 * Math.PI, true);
        this.ctx.fillStyle = "rgba(255,255,255," + (alpha + 0.5) + ")";
        this.ctx.fill();
        this.ctx.restore();
    }
}

export{
    Animation,
    Layer,
    Ball, 
}