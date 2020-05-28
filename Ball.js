class Ball {
    constructor(x,y,radius) {
      var options ={
        frictionAir: 0.4,
        friction: 0,
        restitution: 1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          fill("blue");
         ellipseMode(RADIUS);
         ellipse(0, 0, this.radius);
         pop();
      }
    }