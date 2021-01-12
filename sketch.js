//Create variables here
var dog, happyDog, foodS, foodStock;
var database;
function preload()
{
  //load images here
  happyDogIMG=loadImage("happydog.png")
  dogIMG=loadImage("dog.png")
}

function setup() {
  createCanvas(500, 500);
  dogSprite=createSprite(width/2, 80, 10,10);
  dogSprite.addImage(dogIMG);
  database = firebase.database()
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock (foodS);
    dog.addImage(dogHappy);
    readStock();
    writeStock();
  }


  drawSprites();
  //add styles here


}
//Fuction to read values from Database
function readStock (data){
  foodS=data.val();
}
//Function to write values in database
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
  }





