class Ball{
    constructor(){
        this.r = 10
        this.distancia;
        this.reset()
    }
    draw(){
        ellipse(this.x,this.y,this.r * 2);
    }

    move(){
        this.x += this.stepX;
        this.y += this.stepY;
    }

    collide(player = new Paddle){
        this.distancia = sqrt((this.x - player.x) * (this.x - player.x) + (this.y - player.y) * (this.y - player.y));
        if(this.distancia < this.r){
            this.stepX = -this.stepX;
        }
    }

    edge() {
        if (this.y - this.r <= 0 || this.y + this.r >= height) {
          this.stepY = -this.stepY;
        }
      
        if (this.x - this.r <= 0) {
          p2Score++;    
          this.reset();
        } else if (this.x + this.r >= width) {
          p1Score++;
          this.reset();
        }
    }
      
      

    reset() {
        const SPEED = 3;
        this.stepX = SPEED * random([-1, 1]);
        this.stepY = SPEED * random([-1, 1]);
        this.x = width / 2 - this.r / 2;
        this.y = height / 2 - this.r / 2;
        
        if (this.x + this.r <= 0) {
            p2Score++;
        } else if (this.x - this.r >= width) {
            p1Score++;
        }
    }      
}