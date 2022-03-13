class SlingShot{
  constructor(bodyA,pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 1
      }
      this.sling = Constraint.create(options);
      this.pointB = pointB;
      World.add(world, this.sling);
    }

    fly(){
    this.sling.bodyA = null;
    }
  
  display(){
    if(this.sling.bodyA){
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(3);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
  }
}
}

  /*polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  

  imageMode(CENTER)
  image(polygon_img, polygon.position.x,polygon.position.y,40,40);*/