var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  display(){
    var x=80,y=100;

    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.foodstock!=0){
    for(var i=0;i<this.foodStock;1++){
      if(i%10==0){
        x=80;
        y=y+50;
      }
      image(this.image,x,y,50,50);
      x=x+30;
    }
   }
  }
}


food=createButton("Feed the Dog")
food.position(700,95);
food.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);

//function to update food stack
function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStack()<= 0){
    foodObj.updateFoodStack(foodObj.getFoodStack()*0);
  }else{
    foodObj,updateFoodStack(foodObj).getFoodStack()-1),
  }
}




  }
}


function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
