class Particle{
    constructor(x, y, r){
        var options = {
            restitution: 0.4
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        var rand1 = random(0, 255);
        var rand2 = random(0, 255);
        var rand3 = random(0, 255);
        this.color = color(rand1, rand2, rand3)
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

       // push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        noStroke();
        fill(this.color);
        ellipse(pos.x, pos.y, this.r,this.r);
        //pop();
    }
}