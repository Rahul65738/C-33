class Slingshot{
   constructor(bodyA,pointB){
       var options = {
       bodyA: bodyA,
       pointB: pointB,
       stiffness: 0.04,
       length: 10
       }
this.sling1 = loadImage("sprites/sling1.png")   
this.sling2 = loadImage("sprites/sling2.png")
this.sling3 = loadImage("sprites/sling3.png")    
this.sling = Constraint.create(options);
this.pointB = pointB;
World.add(world, this.sling);
   }

   fly() {
        this.sling.bodyA = null;
}

   attach(body) {
        this.sling.bodyA = body;
   }


   display(){
      image(this.sling1, 200, 130, 30, 90);
      image(this.sling2, 179, 133, 30, 50);
      
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        push();
        if(pointA.x < 220){
         strokeWeight(7);
         stroke(52, 35, 15);
         line(pointA.x-10, pointA.y, pointB.x-10, pointB.y-10);
         line(pointA.x-10, pointA.y, pointB.x+20, pointB.y-10);
         image(this.sling3, pointA.x-20, pointA.y-10, 10, 20);   
        }
        else{

        
        strokeWeight(3);
        stroke(52, 35, 15);
        line(pointA.x-10, pointA.y, pointB.x-10, pointB.y-10);
        line(pointA.x-10, pointA.y, pointB.x+20, pointB.y-10);
        image(this.sling3, pointA.x+15, pointA.y-10, 10, 20);
        }
        pop();

       }   
   }


}