var dog,sadDog,happyDog;



function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database()
  var addFood
  
  foodObj =new Food()

  foodStock=database.ref('food');
  foodStock.on("value",readstock)

  feed=createButton("feed the dog")
  feed.position(700,200)
  feed.mousePressed(feedDog)

  addFood=createButton("Add Food")
  addFood.position(300,300)
  addFood.mousePressed(addFood)

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  foodObj.display()
  drawSprites();
}

//function to read food Stock
function readstock(data){
  foodS=data.val()
  foodObj.updateFoodStock(foodS)
}


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog)

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock() - 1)
  }

  database.ref('/').update({
    Food: foodObj.getFoodStock()
  })
}

//function to add food in stock
function addFoods(){
  foodS=foodS+1
  database.ref('/').update({
    Food:foodS
  })
}