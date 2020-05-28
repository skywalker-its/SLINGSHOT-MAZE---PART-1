class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.Chain);
    }
      Fly(){
          this.chain.bodyA = null;
      }
    display(){
        if (this.Chain.bodyA)
       { var pointA = this.Chain.bodyA.position;
        var pointB = this.pointB; 
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
    
}