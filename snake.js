class Snake{

constructor(){

this.body = createSprite(100, 100, 50, 50)
//this.image = loadImage("Assets/snakeRight.png")
this.body.addImage(snakeDown)
this.body.scale=0.3
this.body.x = 100
this.body.y = 100
//image (snakeUp, this.x, this.y, 30, 100)
console.log(this.body.x)
}

update(){

  this.body.x = this.body.x + this.body.velocityX*scl
  this.body.y = this.body.y + this.body.velocityY*scl
}

movement(){

    if(keyIsDown(RIGHT_ARROW)){

        this.body.velocityX = 1
        this.body.velocityY = 0
        this.body.addImage(snakeRight)
        this.body.scale=0.3
       // image (snakeRight, this.x, this.y, 30, 100)
    }
    if(keyIsDown(LEFT_ARROW)){

        this.body.velocityX = -1
        this.body.velocityY = 0
        this.body.addImage(snakeLeft)
        this.body.scale=0.3
      //  image (snakeLeft, this.x, this.y, 30, 100)
    }
    if(keyIsDown(UP_ARROW)){

        this.body.velocityY = -1
        this.body.velocityX = 0
        this.body.addImage(snakeUp)
        this.body.scale=0.3
      //  image (snakeUp, this.x, this.y, 30, 100)
    }
    if(keyIsDown(DOWN_ARROW)){

        this.body.velocityY = +1
        this.body.velocityX = 0
        this.body.addImage(snakeDown)
        this.body.scale=0.3
      //  image (snakeDown, this.x, this.y, 30, 100)

    }
}


}