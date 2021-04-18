class Dustbin {

    constructor(x,y,width,height){

        var options = {
            isStatic : true

        }

        this.body1 = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body1);

    }

    display(){

        push();
        fill("red");

        imageMode(CENTER);
        translate(this.body1.position.x, this.body1.position.y);
        image(this.image, 0, 0, this.width, this.height);
        
        pop();
        
    }

}