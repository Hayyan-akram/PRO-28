class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.01,
            length: 10
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }
    fly(){
        this.slingShot.bodyA=null;
    }

    display(){
        if(this.slingShot.bodyA){
            var pointA = this.slingShot.bodyA.position;
        var pointB = this.slingShot.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
        
    }
    
}