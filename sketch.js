


var cat,mouse;
//var catimg1,catimg2,catimg3,catimg4;
//var mouseimg1,mouseimg2,mouseimg3,mouseimg4;




function preload() {
    //load the images here
catimg = loadImage("cat1.png","cat2.png","cat3.png","cat4.png");
mouseimg = loadImage("mouse1.png","mouse2.png","mouse3.png","mouse4.png");







}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(400,200,80,50);




mouse = createSprite(600,400,50,50);





}

function draw() {

    background("garden.png");

    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x<(cat.width - mouse.width)/2)
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(KeyCode === RIGHT_ARROW){
mouse.AddAnimation("mouse3.png",mouseimg2);
mouse.changeAnimation("mouse3.png");
mouse.frameDelay = 20;





}


}
